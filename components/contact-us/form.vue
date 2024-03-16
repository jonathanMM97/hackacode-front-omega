<template>
</template>

<script setup lang="ts">
import { object, string, number, date, type InferType } from "yup";

const schema = object({
  name: string().min(2, 'Must be at least 2 characters'),
  email: string().email('Invalid email').required('Required'),
  message: string().min(10, 'Must be at least 10 characters')
})

type Schema = InferType<typeof schema>

const state = reactive({
  name: undefined,
  email: undefined,
  message: undefined
})
</script>


<style lang="scss">
</style>