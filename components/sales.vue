<template>
  <div class="hk-sales" :data-color="store.getTheme">
    <h4>{{ $t("sales") }} per {{ type_ }}</h4>
    <p>{{ response }}</p>
    <ButtonBlue class="hk-sales__button" v-on:click="getResponse(type_ === 'month' ? 'day' : 'month')">Show {{ type_ === 'month' ? 'daily' : 'monthly' }} sales</ButtonBlue>
  </div>

  <Loading v-if="isLoading" />
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";
import axios from 'axios'

const store = useHackacodeStore();
const response = ref(null)
const type_ = ref('month')
const isLoading = ref(false)

const getResponse = async (type: string) => {
  isLoading.value = true;
  if (type === 'month') {
    type_.value = 'month'
    const res = await axios.get(
      "http://vps-3991861-x.dattaweb.com:8080/api/owner/getMonthlySales",
      {
        headers: {
          Authorization: "Bearer " + store.getToken,
        },
      },
    );
  
    response.value = res.data
  } else {
    type_.value = 'day'
    const res = await axios.get(
      "http://vps-3991861-x.dattaweb.com:8080/api/owner/dailyEarnings/2024-03-25",
      {
        headers: {
          Authorization: "Bearer " + store.getToken,
        },
      },
    );
  
    response.value = res.data
  }
  isLoading.value = false;
}

onMounted(() => {
  getResponse('month')
})
</script>

<style lang="scss">
.hk-sales {
  width: 450px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  font-size: $font-size--small;
  padding-left: 2rem;
  padding-bottom: 2rem;
  margin-right: 6rem;
  margin-top: 4rem;
  border-radius: 20px;
  gap: 20px;
  transform: translateX(-150px);

  &[data-color="light"] {
    color: $font-color--dark;
    box-shadow: -10px 10px 10px rgba($font-color--dark, 0.2);
  }
  &[data-color="dark"] {
    color: $font-color--light;
    box-shadow: -10px 10px 10px rgba($font-color--light, 0.2);
  }

  h4 {
    font-size: 26px;
    font-weight: $font-weight--bold;
    margin-bottom: rem(10px);
  }

  p {
    padding: 1rem;
    font-size: 20px;
    font-weight: $font-weight--medium;
  }

  &__button {
    cursor: pointer;
  }
}
</style>
