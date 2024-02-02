import { config } from 'dotenv';
import { Client } from '@notionhq/client';
import { writeFile, readdir, unlink } from 'fs/promises';
import { NotionToMarkdown } from 'notion-to-md';
import path from 'path';
import * as fs from "fs";
import * as https from "https";
import { v4 as uuidv4 } from 'uuid';

// .env 파일에서 환경변수 불러오기
config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

/**
 * 단순하게 하자
 * 일단 markdown에서 사용할수 있는것만 사용하자
 */
/*function createHtmlString(annotations, text) {
  let html = text;
  // 순서 중요
  // <b><font color="red"> : O
  // <font color="red"><b> : X

  // color 처리
  if (annotations.color && annotations.color !== 'default') {
    html = `<font color="${annotations.color}">${html}</font>`;
  }

  // italic 처리
  if (annotations.italic) {
    html = `<i>${html}</i>`;
  }

  // bold 처리
  if (annotations.bold) {
    html = `<b>${html}</b>`;
  }

  // code 처리
  if (annotations.code) {
    html = `\`${html}\``;
  }

  return html;

}
n2m.setCustomTransformer("bulleted_list_item", async(block) => {
  const { bulleted_list_item } = block;
  let plain_text = '- ';
  bulleted_list_item.rich_text.forEach(text => {
    plain_text += createHtmlString(text.annotations, text.plain_text);
  })
  return plain_text;
})

n2m.setCustomTransformer("quote", async (block) => {
  const { quote } = block;
  let plain_text = '> ';
  quote.rich_text.forEach(text => {
    plain_text += createHtmlString(text.annotations, text.plain_text);
  })
  return plain_text;
})*/

n2m.setCustomTransformer("callout",  async (block) => {
  const { callout } = block;
  const icon = callout.icon.emoji;
  let plain_text = '';
  callout.rich_text.forEach(text => {
    plain_text += text.plain_text;
  })
  return `<aside emogi="${icon}" color="purple">${plain_text}</aside>`;
});

n2m.setCustomTransformer("paragraph",  async (block) => {
  const { paragraph } = block;
  // 줄바꿈
  if (paragraph.rich_text.length === 0) {
    return "\\n"
  }
  return paragraph;
})
n2m.setCustomTransformer("image",  async (block) => {
  const { image } = block;
  const src = image.file.url;
  const dirPath = `./public/images/`
  fs.mkdirSync(dirPath, { recursive: true });

  const fileName = `${uuidv4()}.png`
  const filePath = dirPath + fileName;
  const file = fs.createWriteStream(filePath);

  https.get(src, (res) => {
    res.pipe(file);

    file.on('finish', function() {
      file.close();
    });
  }).on('error', function(err) {
    fs.unlink(filePath); // 파일 다운로드 실패시 파일 삭제
    console.error('Error: ' + err.message);
  });
  return `<img src="/images/${fileName}" />`;
});

async function clearPostsDirectory() {
    const directoryPath = path.join('./content/posts');
    const files = await readdir(directoryPath);
    for (const file of files) {
        await unlink(path.join(directoryPath, file));
    }
}

async function clearPostImagesDirectory() {
  const directoryPath = path.join('./public/images/');
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
  await clearPostImagesDirectory();

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