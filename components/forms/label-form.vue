<template>
  <label v-if="$slots.default" class="motw-form-label" :for="id">
    <slot />
    <span v-if="required" class="motw-form-label__required-flag">*</span>
  </label>
</template>

<script lang="ts" setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.motw-form-label {
  font-family: $font-main;
  font-weight: $font-weight--bold;
  font-size: $font-size--medium;
}
</style>
