import { defineStore } from "pinia";

export const useHackacodeStore = defineStore("hackacode", {
  state: () => ({
    theme: ref("light"),
    option: ref("main"),
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
  },
  actions: {
    setTheme(theme) {
      window.localStorage.setItem("currentTheme", JSON.stringify(theme))
      this.theme = theme
    },
    setOption(op) {
      console.log(this.option, op)
      if (this.option !== op) {
        console.log('entra')
        window.localStorage.setItem("currentOption", JSON.stringify(op))
        this.option = op;
      } else {
        console.log('eoooooo')
        window.localStorage.setItem("currentOption", JSON.stringify('main'))
        this.option = "main";
      }
    },
  },
});
