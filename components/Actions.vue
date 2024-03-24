<template>
  <div class="hk-actions">
    <div class="hk-actions-language">
      <Select />
    </div>

    <div
      class="hk-actions-themes"
      :data-color="store.getTheme"
      v-on:click="store.setTheme(store.getTheme === 'light' ? 'dark' : 'light')"
    >
      <Sun v-if="store.getTheme === 'light'" class="hk-sun-icon"></Sun>
      <Moon v-else class="hk-moon-icon"></Moon>
    </div>

    <NuxtLink
      v-if="!allow"
      class="hk-actions__login"
      :to="
        (i18n.locale.value === 'es' ? '/' + i18n.locale.value : '') + '/login'
      "
      :data-color="store.getTheme"
      >
      
      <p>{{ $t("log-in") }}</p>
      
    </NuxtLink>

    <div v-else class="hk-actions__login-in" v-on:click="logOut">
      <img class="hk-actions__profile" src="@/public/media/foto-perfil.png" />
    </div>

    <NuxtLink
      class="hk-message-icon"
      :to="
        (i18n.locale.value === 'es' ? '/' + i18n.locale.value : '') +
        '/contact-us'
      "
      :data-color="store.getTheme"
    >
      <Message class="hk-message-icon__svg" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import Sun from "@/public/media/sun-svgrepo-com.svg";
import Moon from "@/public/media/moon.svg";
import Message from "@/public/media/message-icon.svg";
import { useHackacodeStore } from "~/stores/Hackacode";
import axios from 'axios'

const router = useRouter()
const store = useHackacodeStore();
const i18n = useI18n();
const allow = ref(false)

watch(store, () => {
  if(store.getShowUserLogin) {
    getDataUser()
  }
})

const logOut = () => {
  allow.value = false
  store.setToken('none');
  store.setUser('none');
  store.setShowUserLogin(false);
  store.setShowSidebar(false);
  store.setNameUser('none')
  store.setLastName('none')
  router.push('/')
}

const redirectPage = i18n.locale.value === 'es' ? '/es/manage' : '/manage';

const getDataUser = async () =>{
    await axios.get('http://vps-3991861-x.dattaweb.com:8080/api/employee/getByUsername/' + store.getUser, {
      headers: {
        Authorization: 'Bearer ' + store.getToken
      }
    })
        .then(
          res => {
              allow.value = true
              store.setNameUser(res.data.name)
              store.setLastName(res.data.lastname)
              router.push(i18n.locale.value === 'es' ? '/es/manage' : '/manage')
          }
        ).catch(
          err => {
              allow.value = false
              store.setNameUser('none')
              store.setLastName('none')
              store.setToken('none')
              store.setUser('none')
              store.setShowUserLogin(false)
              router.push('/')
          }
        )
  
}

onMounted(() => {
  getDataUser()
})

</script>

<style lang="scss">
.hk-actions,
.hk-actions-language {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(20px);
}

.hk-actions {
  width: rem(400px);
  font-family: $font-main;
  gap: rem(20px);

  &__login-in {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__login {
    text-decoration: none;
    font-weight: $font-weight--bold;
    &[data-color="light"] {
      color: $font-color--dark;
    }
    &[data-color="dark"] {
      color: $font-color--light;
    }
  }
}

.hk-actions-language {
  display: flex;
  flex-direction: column;
  width: rem(70px);
  align-items: center;
}

.hk-actions-themes {
  overflow: hidden;
  width: rem(60px);
  height: rem(30px);
  border-radius: rem(20px);
  cursor: pointer;

  &[data-color="light"] {
    background-color: $font-color--light-theme;
  }
  &[data-color="dark"] {
    background-color: $font-color--dark-theme;
  }
}

.hk-sun-icon {
  width: rem(50px);
  height: rem(50px);
  scale: 0.9;
  transform: translateX(rem(-25px)) translateY(rem(4px));
}

.hk-moon-icon {
  width: rem(50px);
  height: rem(50px);
  scale: 0.7;
  transform: scaleX(-1) translateX(rem(-30px)) translateY(rem(-10px));
}

.hk-message-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: rem(30px);
  height: rem(30px);
  padding-right: rem(20px);
  margin-bottom: rem(-2px);
  scale: 1.9;

  &[data-color="light"] {
    color: $font-color--dark;
  }
  &[data-color="dark"] {
    color: $font-color--light;
  }
}

.hk-actions__profile {
  border-radius: rem(20px);
  width: rem(60px);
  cursor: pointer;
}
</style>