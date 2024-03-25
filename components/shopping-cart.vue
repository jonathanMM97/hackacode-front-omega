<template>
  <div v-if="store.getShowShoppingCart" class="hk-shopping-cart" :data-color="store.getTheme">
    <img class="hk-shopping-cart__img" :data-color="store.getTheme" src="/media/shopping_cart.png" >
    <div class="hk-shopping-cart__id">
      <p>ID: {{ store.getCustomer?.id }}</p>
    </div>
    <div v-if="store.getShop" class="hk-shopping-cart__items" :data-color="store.getTheme" v-for="item in store.getShop">
      <img
        v-if="store.getOption !== 'user'"
        class="hk-shopping-cart__items-img"
        :src="'/media/' + item.typeService?.toLowerCase() + '.png'"
        alt="airport"
      />
      <p>${{ item.cost }}</p>
    </div>
    <ButtonBlue class="hk-shopping-cart__button" v-on:click="hideShoppingCart">Buy</ButtonBlue>
  </div>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();

const hideShoppingCart = () => {
  store.setShowShoppingCart(false);
  store.setShop(null)
}

</script>


<style lang="scss">
.hk-shopping-cart {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 12rem;
  right: 1rem;
  width: 13rem;
  height: 44rem;
  border-radius: 20px;
  
  &[data-color="light"] { 
    color: $font-color--dark;
    background-color: $font-color--light;
    border: 2px solid $font-color--dark;
  }
  &[data-color="dark"] { 
    color: $font-color--light;
    background-color: $font-color--dark;
    border: 2px solid rgba($font-color--light, 0.3);
  }

  &__img {
    
    &[data-color="light"] { 
      border-bottom: 2px solid rgba($font-color--dark, 0.3);
    }
    &[data-color="dark"] { 
      border-bottom: 2px solid rgba($font-color--light, 0.3);
    }
  }

  &__items {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &[data-color="light"] { 
      border-bottom: 2px solid rgba($font-color--dark, 0.3);
    }
    &[data-color="dark"] { 
      border-bottom: 2px solid rgba($font-color--light, 0.3);
    }
  }
  &__items-img {
    width: 50px;
  }

  &__button {
    cursor: pointer;
    margin-top: 3rem;
  }
}
</style>