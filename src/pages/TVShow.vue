<script setup lang="ts">
import { onMounted, ref } from "vue";
import useMovie from "../store/movies";
import MovieCard from "../components/Cards/MovieCard.vue";
import MovieCardSkeleton from "../components/skeletons/MovieCardSkeleton.vue";
import { sortByOptions } from "../shared";

const genreOption = ref("Select genres");
const sortByOption = ref("Sort by");
const movie = useMovie();
const movieType = ref("tv");

onMounted(() => {
  movie.resetGenreAndSortBy();
  movie.getMovies("tv");
  movie.getGenre("tv");
});

const selectGenre = (data: any) => {
  movie.setGenre(data.id);
  genreOption.value = data.name;
  movie.getMovies("tv");
};

const sortBy = (data: any) => {
  movie.setSortBy(data.key);
  sortByOption.value = data.name;
  movie.getMovies("tv");
};
</script>

<template>
  <div class="lg:px-8 py-5 p-4">
    <div
      class="mb-6 flex sm:flex-row flex-col sm:items-center items-end justify-between"
    >
      <h3 class="lg:text-2xl text-xl lg:mb-0 mb-3">Explore TV shows</h3>
      <div class="flex flex-row items-center gap-6">
        <div
          class="bg-gray-200/45 rounded-full px-4 py-2 cursor-default relative [&>ul]:hover:block [&>div>svg]:hover:rotate-180"
        >
          <div class="flex flex-row items-center justify-between gap-4">
            <span class="text-sm">{{ genreOption }}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="dark:[&>path]:fill-white"
            >
              <path
                d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z"
                fill="#0D062D"
              />
            </svg>
          </div>
          <ul
            class="hidden absolute lg:top-9 lg:right-0 top-9 -right-[50%] bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] w-60 h-96 overflow-y-scroll rounded-xl text-sm flex-col z-10"
          >
            <li
              v-for="(item, _) in movie.genre"
              :key="item.id"
              @click="selectGenre({ id: item.id, name: item.name })"
              class="my-1 px-5 py-1 hover:bg-gray-100"
              :class="[item.name === genreOption ? 'bg-gray-100' : '']"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div
          class="bg-gray-200/45 rounded-full px-4 py-2 cursor-default relative [&>ul]:hover:block [&>div>svg]:hover:rotate-180"
        >
          <div class="flex flex-row items-center justify-between gap-4">
            <span class="text-sm">{{ sortByOption }}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="dark:[&>path]:fill-white"
            >
              <path
                d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z"
                fill="#0D062D"
              />
            </svg>
          </div>
          <ul
            class="hidden absolute lg:top-9 lg:right-0 top-9 right-0 bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] w-60 rounded-xl text-sm flex-col z-10"
          >
            <li
              v-for="(item, _) in sortByOptions"
              :key="item.key"
              class="my-1 px-5 py-1 hover:bg-gray-100 dark:hover:bg-[#34CAA5] dark:[&>a>svg>path]:stroke-white"
              @click="sortBy({ key: item.key, name: item.name })"
              :class="[item.name === sortByOption ? 'bg-gray-100' : '']"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Suspense>
      <template #default>
        <MovieCard :data="movie.movieList" :movieType="movieType" />
      </template>

      <template #fallback>
        <MovieCardSkeleton />
      </template>
    </Suspense>
  </div>
</template>
