import { defineStore } from "pinia";

export const useHackacodeStore = defineStore("hackacode", {
  state: () => ({
    theme: ref("light"),
  }),
  persist: true,
  getters: {
    getTheme() {
      return this.theme;
    },
  },
  actions: {
    setTheme(theme) {
      this.theme = theme;
    },
  },
});
