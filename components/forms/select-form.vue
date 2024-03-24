<template>
  <div class="hk-field-form">
    <LabelForm id="">{{ messageLabel }}</LabelForm>
    <select name="pets" id="pet-select" @change="handleChange($event)">
  <option value="">--Please choose an option--</option>
  <option value="true">Active</option>
  <option value="false">Desactive</option>
</select>
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
    console.log(selectedDate)
    emits('onChange', selectedDate);
}
</script>