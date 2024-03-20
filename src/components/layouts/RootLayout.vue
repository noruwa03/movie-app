<script setup lang="ts">
import { ref } from "vue";

import NavBar from "../NavBar/NavBar.vue";

const toggleMenu = ref<HTMLDivElement>();
const navMenu = ref<HTMLDivElement>();

const menuHandler = () => {
  toggleMenu.value?.classList.toggle("hamburger-toggle");
  navMenu.value?.classList.toggle("hidden");
};
</script>

<template>
  <main class="flex flex-row items-start justify-start">
    <div
    ref="navMenu"
      class="lg:sticky lg:top-0 lg:block hidden lg:w-[15%] fixed w-full z-30 h-screen"
    >
      <NavBar @close="menuHandler" />
    </div>
   <div class="lg:hidden block" ref="toggleMenu">
      <div
        class="fixed top-7 right-6 w-8 h-[2px] bg-black rounded-full before:w-8 before:h-[2px] before:bg-black before:rounded-full before:content-[''] before:absolute before:-translate-y-2 before:transition-all before:duration-150 after:w-8 after:h-[2px] after:bg-black after:rounded-full after:content-[''] after:absolute after:translate-y-2 after:transition-all after:duration-150 z-40"
        @click="menuHandler"
      ></div>
    </div>
    <div class="lg:w-[85%] w-full">
      <RouterView />
    </div>
  </main>
</template>
../Aside/NavBar.vue
