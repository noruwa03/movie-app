<script setup lang="ts">
import { ref } from "vue";
import useMovie from "../../store/movies";
const emit = defineEmits<{
  (e: "close"): void;
}>();

const movie = useMovie();
const season = ref(movie.season);
const episode = ref(movie.episode);
const submit = () => {
  emit("close");
  const userInput = {
    season,
    episode,
  };
  movie.setMovieSeasonAndEpisode(userInput);
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
      <h1 class="font-semibold lg:text-lg text-base text-center my-4">
        Enter season and episode number ...
      </h1>
      <label for="Episode">Season</label>
      <input
        type="text"
        v-model="season"
        name="Season"
        class="block w-full mt-1 mb-4 outline-none border-[1px] border-gray-300 focus:border-black px-4 xl:py-3 py-3 rounded-lg placeholder:text-[#C4C4C4] placeholder:font-normal lg:placeholder:text-base placeholder:text-sm lg:text-base text-sm"
        placeholder="eg 1"
      />
      <label for="Episode">Episode</label>
      <input
        type="text"
        v-model="episode"
        name="Episode"
        class="block w-full mt-1 mb-2 outline-none border-[1px] border-gray-300 focus:border-black px-4 xl:py-3 py-3 rounded-lg placeholder:text-[#C4C4C4] placeholder:font-normal lg:placeholder:text-base placeholder:text-sm lg:text-base text-sm"
        placeholder="eg 1"
      />
      <button
        @click="submit"
        class="w-full bg-black py-3 outline-none text-white text-base font-medium mt-2 mb-2 rounded-lg"
      >
        Submit
      </button>
    </div>
  </div>
</template>
