import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const mainStore = defineStore("mainStore", () => {
  const sidebarFlag = ref(false);
  function toggleSidebar() {
    sidebarFlag.value = !sidebarFlag.value;
  }

  return { sidebarFlag, toggleSidebar };
});
