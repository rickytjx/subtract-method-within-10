<script setup>
const router = useRouter()
const successAudio = new Audio(getAssetsVideoFile('success.mp3'))

function restart() {
  router.push('/')
}

onMounted(() => {
  successAudio.play()
})
</script>

<template>
  <div class="container">
    <img :src="getAssetsImageFile('success.png')" alt="right">
  </div>
  <div class="restart" @click="restart">
    再来一次
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.container img {
  width: 100%;
  display: block;
}

.restart {
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
