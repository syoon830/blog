<script setup lang="ts">
const { query } = defineProps(['query']);
</script>

<template>
  <ContentList :query="query" v-slot="{ list }">
    <div class="grid gap-4">
      <div class="bg-white p-4 rounded-lg shadow-md" v-for="post in list" :key="post._path">
        <h2 class="text-xl font-semibold text-gray-800"><NuxtLink :to="post._path">{{ post.title }}</NuxtLink></h2>
        <p class="text-gray-500 text-sm mt-2">게시일: 2024-01-05 | 작성자: 사용자</p>
        <p class="text-gray-700 mt-4">
          이곳에 블로그 포스트 요약 내용을 추가하세요. 이곳에 블로그 포스트 요약 내용을 추가하세요.
        </p>
        <a href="#" class="text-blue-600 font-semibold mt-4 inline-block">더 보기</a>
      </div>
    </div>
  </ContentList>
  <!-- 현재는 안쓰고 나중에 데이터 많이지면 고민
    <pagination />
   -->
</template>

<style scoped>

</style>