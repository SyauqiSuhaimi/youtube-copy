<template>
  <headerComp></headerComp>
  <div class="flex">
    <div>
      <sidebarComp></sidebarComp>
    </div>
    <div class="flex-grow">
      <RouterView />
    </div>
  </div>
</template>
<script setup>
import headerComp from "./components/headerComp.vue";
import sidebarComp from "./components/sidebarComp.vue";
import { RouterView } from "vue-router";
</script>
<style scoped></style>
