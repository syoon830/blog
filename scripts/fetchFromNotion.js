import { config } from 'dotenv';
import { Client } from '@notionhq/client';
import { writeFile, readdir, unlink } from 'fs/promises';
import { NotionToMarkdown } from 'notion-to-md';
import path from 'path';

// .env 파일에서 환경변수 불러오기
config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

n2m.setCustomTransformer("callout",  async (block) => {
  const { callout } = block;
  const icon = callout.icon.emoji;
  let plain_text = '';
  callout.rich_text.forEach(text => {
    plain_text += text.plain_text;
  })
  return `<aside emogi="${icon}" color="purple">${plain_text}</aside>`;
});

n2m.setCustomTransformer("image",  async (block) => {
  const { image } = block;
  const src = image.file.url;
  return `<img src="${src}" />`;
});

async function clearPostsDirectory() {
    const directoryPath = path.join('./content/posts');
    const files = await readdir(directoryPath);
    for (const file of files) {
        await unlink(path.join(directoryPath, file));
    }
}

async function getPageContent(pageId) {
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString['parent'];
}

async function fetchNotionData() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
        property: "Status",
        status: {
            equals: "Publish"
        }
    }
  });

  await clearPostsDirectory();

  for (const page of response.results) {
      const title = page.properties.Name.title[0].plain_text;
      let tags = "[";
      const date = page.properties.Date.date.start;
      page.properties.Tags.multi_select.forEach((item, idx, arr) => {
        tags += "'";
        tags += item.name;
        tags += "'";
        if (idx !== arr.length - 1 ) {
          tags += ",";
        }
      })
      tags += "]";
      let frontmatter = `---\n`;
      frontmatter += `title: ${title}\n`;
      frontmatter += `tags: ${tags}\n`;
      frontmatter += `date: ${date}\n`;
      frontmatter += `---`;
      const contentMd = await getPageContent(page.id);
      await writeFile(`./content/posts/${page.id}.md`, frontmatter + contentMd);
  }
}

fetchNotionData().then(() => console.log('Notion data fetched successfully'));