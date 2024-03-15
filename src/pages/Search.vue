<script setup lang="ts">
import { onMounted, ref } from "vue";
import useMovie from "../store/movies";
import MovieCard from "../components/Cards/MovieCard.vue";
import MovieCardSkeleton from "../components/skeletons/MovieCardSkeleton.vue";
import Search from "../components/Modal/Search.vue";

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop: string) => searchParams.get(prop),
});

const value = (params as any)?.q;

const showSearchModal = ref(false);
const movie = useMovie();

onMounted(() => {
  movie.searchMovie(value);
});

const searchToggle = () => {
  showSearchModal.value = !showSearchModal.value;
};
</script>

<template>
  <div>
    <div v-if="showSearchModal">
      <Search @close="searchToggle" />
    </div>
    <div
      class="lg:px-8 px-4 sticky top-0 lg:h-16 h-20 bg-white mb-6 flex sm:flex-row flex-col sm:items-center items-end sm:justify-between justify-start z-10"
    >
      <h3 class="lg:text-2xl text-xl lg:mb-0 mb-1 lowercase">
        Search results of '{{ value }}'
      </h3>
      <div class="flex flex-row items-center gap-6">
        <div
          class="bg-gray-200/45 rounded-full px-4 py-2 cursor-default relative [&>ul]:hover:block [&>div>svg]:hover:rotate-180"
        >
          <RouterLink to="/" class="text-sm">Go Home</RouterLink>
        </div>
        <svg
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          class="stroke-black"
          @click="searchToggle"
        >
          <path d="m19 19-3.5-3.5"></path>
          <circle cx="11" cy="11" r="6"></circle>
        </svg>
      </div>
    </div>
    <div class="w-full lg:px-8 py-5 p-4">
      <Suspense>
        <template #default>
          <div>
            <div v-if="movie.searchedMovieList?.length === 0">
              No movie found
            </div>
            <MovieCard :data="movie.searchedMovieList" />
          </div>
        </template>

        <template #fallback>
          <MovieCardSkeleton />
        </template>
      </Suspense>
    </div>
  </div>
</template>
