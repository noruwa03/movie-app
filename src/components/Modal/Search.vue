<script setup lang="ts">
import useMovie from "../../store/movies";
import { ref } from "vue";

const movieStore = useMovie();
const movie = ref("");
const emit = defineEmits<{
  (e: "close"): void;
}>();

const submit = () => {
  window.history.replaceState(
    null,
    "",
    `?q=${movie.value.toLowerCase().replace(/ /g, "+")}`
  );
  movieStore.searchMovie(movie.value.toLowerCase());
  emit("close");
  window.location.reload();
};
</script>

<template>
  <div class="fixed top-0 left-0 h-screen w-full bg-[#000000cc] z-20">
    <div
      class="lg:w-2/5 w-[94%] sm:w-4/5 fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] lg:p-8 sm:p-6 p-3 bg-white shadow-sm rounded-lg"
    >
      <div
        @click="emit('close')"
        class="text-red-400 text-lg text-end mb-2 cursor-default"
      >
        Close
      </div>
      <h1 class="font-medium lg:text-xl text-lg text-center mb-4">
        Enter a movie ...
      </h1>
      <input
        type="text"
        id="movie"
        name="movie"
        class="block w-full mt-1 mb-2 outline-none border-[1px] border-gray-300 focus:border-gray-600 px-4 xl:py-3 py-3 rounded-lg placeholder:text-[#C4C4C4] placeholder:font-normal lg:placeholder:text-base placeholder:text-sm lg:text-base text-sm"
        placeholder="e.g Avenger"
        v-model="movie"
        @keydown.enter="submit"
      />
      <button
        @click="submit"
        class="w-full bg-[#437f85] py-3 outline-none text-white text-base font-medium mt-2 mb-2 rounded-lg"
      >
        Submit
      </button>
    </div>
  </div>
</template>
