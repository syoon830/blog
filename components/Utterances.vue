<template>
  <div ref="utterancesContainer"></div>
</template>

<script setup>
const utterancesContainer = ref(null);

onMounted(() => {
  const script = document.createElement('script');
  script.setAttribute('src', 'https://utteranc.es/client.js');

  script.setAttribute('repo', 'syoon830/blog'); // 여기에 GitHub 저장소 이름을 넣으세요.
  script.setAttribute('issue-term', 'url')
  script.setAttribute('theme', 'github-light');
  script.setAttribute('crossOrigin', 'anonymous')
  script.setAttribute('async', true);

  utterancesContainer.value.appendChild(script);
})
</script>