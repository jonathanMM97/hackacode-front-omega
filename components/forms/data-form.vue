<template>
  <div class="hk-field-form">
    <LabelForm id="">{{ messageLabel }}</LabelForm>
    <input type="date" id="start" name="trip-start" value="2024-03-25" min="2024-03-25" max="2026-03-25" @change="handleChange($event)" />
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  messageLabel: {
    type: String,
    required: true,
  }
});

const emits = defineEmits(["onChange"]);

const handleChange = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
    const selectedDate = inputElement.value;
    emits('onChange', selectedDate);
}
</script>