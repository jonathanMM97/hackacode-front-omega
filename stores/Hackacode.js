import { defineStore } from "pinia";

export const useHackacodeStore = defineStore("hackacode", {
  state: () => ({
    theme: ref("light"),
    option: ref("main"),
    user: ref('none'),
    token: ref("none"),
  }),
  persist: true,
  getters: {
    getTheme() {
      this.theme = JSON.parse(window.localStorage.getItem("currentTheme"))
      return this.theme === null ? 'light' : this.theme
    },
    getOption() {
      this.option = JSON.parse(window.localStorage.getItem("currentOption"))
      return this.option === null ? 'main' : this.option
    },
    getToken() {
      this.token = JSON.parse(window.localStorage.getItem("currentToken"))
      return this.token === null ? 'none' : this.token
    },
    getUser() {
      this.user = JSON.parse(window.localStorage.getItem("currentUser"))
      return this.user === null ? 'none' : this.user
    },
  },
  actions: {
    setTheme(theme) {
      window.localStorage.setItem("currentTheme", JSON.stringify(theme))
      this.theme = theme
    },
    setOption(op) {
      if (this.option !== op) {
        window.localStorage.setItem("currentOption", JSON.stringify(op))
        this.option = op;
      } else {
        window.localStorage.setItem("currentOption", JSON.stringify('main'))
        this.option = "main";
      }
    },
    setToken(token) {
      window.localStorage.setItem("currentToken", JSON.stringify(token))
      this.token = token
    },
    setUser(user) {
      window.localStorage.setItem("currentUser", JSON.stringify(user))
      this.user = user
    },
  },
});
