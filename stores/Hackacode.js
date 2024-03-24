import { defineStore } from "pinia";

export const useHackacodeStore = defineStore("hackacode", {
  state: () => ({
    theme: ref("light"),
    option: ref("main"),
    user: ref('none'),
    token: ref("none"),
    name_user: ref('none'),
    last_name: ref('none'),
    showUserLogin: ref(false),
    showSidebar: ref(false),
    currentPage: ref('main'),
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
    getNameUser() {
      this.name_user = JSON.parse(window.localStorage.getItem("currentNameUser"))
      return this.name_user === null ? 'none' : this.name_user
    },
    getLastName() {
      this.last_name = JSON.parse(window.localStorage.getItem("currentLastName"))
      return this.last_name === null ? 'none' : this.last_name
    },
    getShowUserLogin() {
      this.showUserLogin = JSON.parse(window.localStorage.getItem("currentShowUserLogin"))
      return this.showUserLogin === null ? 'none' : this.showUserLogin
    },
    getShowSidebar() {
      this.showUserLogin = JSON.parse(window.localStorage.getItem("currentShowSidebar"))
      return this.showSidebar === null ? 'none' : this.showSidebar
    },
    getCurrentPage() {
      this.currentPage = JSON.parse(window.localStorage.getItem("currentPage"))
      return this.currentPage === null ? 'main' : this.currentPage
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
    setNameUser(name) {
      window.localStorage.setItem("currentNameUser", JSON.stringify(name))
      this.name_user = name
    },
    setLastName(last_name) {
      window.localStorage.setItem("currentLastName", JSON.stringify(last_name))
      this.last_name = last_name
    },
    setShowUserLogin(showUserLogin) {
      window.localStorage.setItem("currentShowUserLogin", JSON.stringify(showUserLogin))
      this.showUserLogin = showUserLogin
    },
    setShowSidebar(showSidebar) {
      window.localStorage.setItem("currentShowSidebar", JSON.stringify(showSidebar))
      this.showSidebar = showSidebar
    },
    setCurrentPage(currentPage) {
      window.localStorage.setItem("currentPage", JSON.stringify(currentPage))
      this.currentPage = currentPage
    },
  },
});
