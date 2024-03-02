import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import EN from './locale/en.json'
import ES from './locale/es.json'

import App from './App.vue'

const app = createApp(App)

const i18n = createI18n({
  locale: 'ES',
  messages: {
    EN,
    ES
  }
})

app.use(i18n)
app.mount('#app')
