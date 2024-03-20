import { defineStore } from "pinia";

export const useHackacodeStore = defineStore("hackacode", {
  state: () => ({
    theme: ref("light"),
    option: ref("all"),
  }),
  persist: true,
  getters: {
    getTheme() {
      return this.theme;
    },
    getOption() {
      return this.option;
    },
  },
  actions: {
    setTheme(theme) {
      this.theme = theme;
    },
    setOption(op) {
      if (this.option !== op) {
        this.option = op;
      } else {
        this.option = "main";
      }
    },
  },
});
