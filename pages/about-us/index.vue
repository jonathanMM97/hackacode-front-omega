<template>
 <Header @input="changeTheme" :theme="currentTheme" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// Función para obtener el tema guardado en sessionStorage
const getSavedTheme = () => {
 const savedTheme = sessionStorage.getItem('theme');
 return savedTheme ? savedTheme : 'light';
};

// Variable reactiva para almacenar el tema actual
const currentTheme = ref(getSavedTheme());

// Función para cambiar el tema y guardarlo en sessionStorage
const changeTheme = (theme) => {
 currentTheme.value = theme;
 sessionStorage.setItem('theme', theme);
};

// Vigila el cambio en currentTheme y actualiza sessionStorage
watch(currentTheme, (newTheme) => {
 sessionStorage.setItem('theme', newTheme);
});
</script>
