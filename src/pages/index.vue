<script setup lang="ts">
const router = useRouter()

function handleOnStart() {
  router.push('/math')
}
</script>

<template>
  <div class="banner">
    <img :src="getAssetsImageFile('banner.png')" alt="logo">
  </div>
  <div class="start-button" @click="handleOnStart">
    start
  </div>
</template>

<style scoped>
.banner {
  img {
    width: 100%;
    display: block;
  }
}

.start-button {
  width: 80%;
  height: 100px;
  margin: 40px auto;
  border-radius: 40px;
  background-color: #ffe2a6;
  display: flex;
  color: orange;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
}
</style>
