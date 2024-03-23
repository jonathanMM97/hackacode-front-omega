<template>
  <div class="hk-button-blue">
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.hk-button-blue {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $font-size--small;
  font-weight: $font-weight--bold;
  width: fit-content;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 20px;
  background-color: $font-color--blue;
}
</style>