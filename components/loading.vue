<template>
  <div class="load">
      <img class="rim-image" src="@/public/media/rim.png">
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

.load {
  position: fixed;
  width: 150px;
  height: 150px;
  top: 40%;
  left: 45%;
}

.rim-image {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  0% {
      transform: rotate(0deg);
  }

  100% {
      transform: rotate(360deg);
  }
}
</style>