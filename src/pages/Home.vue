<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import useMovie from "../store/movies";
import ScrollCard from "../components/Cards/ScrollCard.vue";
import ScrollCardSkeleton from "../components/skeletons/ScrollCardSkeleton.vue";

const choice = ref(false);
const movieChoice = ref(false);
const movieChoiceTopRated = ref(false);
const movieType = ref("movie");
const query = ref("");
const movie = useMovie();

onMounted(() => {
  movie.getTrendingMovies();
  movie.getPopularMovies();
  movie.getTopRatedMovies();
});
const router = useRouter();

watch(choice, () => {
  if (choice.value) {
    movie.getTrendingMovies("week");
  } else {
    movie.getTrendingMovies("day");
  }
});

const movieChoiceHandler = () => {
  if (movieChoice.value) {
    movie.getPopularMovies("tv");
    movieType.value = "tv";
  } else {
    movie.getPopularMovies("movie");
    movieType.value = "movie";
  }
};

const movieChoiceTopRatedHandler = () => {
  if (movieChoiceTopRated.value) {
    movie.getTopRatedMovies("tv");
     movieType.value = "tv";
  } else {
    movie.getTopRatedMovies("movie");
     movieType.value = "movie";
  }
};

const findMovie = () => {
  if (query.value.length > 0) {
    router.push(`/search?q=${query.value.toLowerCase()}`);
    console.log(choice);
  }
};
</script>

<template>
  <div>
    <div
      class="h-screen inset-0 w-full bg-gray-50 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1,transparent_1px)] bg-[size:40px_40px] lg:mb-14 mb-12"
    >
      <div
        class="relative top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] lg:p-8 p-4"
      >
        <h1 class="lg:text-7xl text-4xl font-bold text-center">Welcome</h1>
        <p class="mt-3 lg:text-2xl text-xl text-center">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div class="relative mt-6">
          <input
            type="text"
            id="Search"
            name="search"
            class="block mx-auto lg:w-4/5 w-full mt-1 mb-3 outline-none border-[1px] bg-white border-gray-200 focus:border-[#53777a] lg:pt-6 lg:pl-6 lg:pb-6 pt-4 pl-4 pb-4 lg:pr-[9rem] pr-16 rounded-xl placeholder:text-[#C4C4C4] placeholder:font-normal lg:placeholder:text-base placeholder:text-sm lg:text-base text-sm"
            placeholder="Search for a movie, TV show..."
            v-model="query"
            @keydown.enter="findMovie"
          />
          <button
            class="absolute lg:right-[8rem] lg:top-[1rem] lg:bottom-[1rem] right-[0.5rem] top-[0.5rem] bottom-[0.5rem] cursor-pointer text-sm bg-[#53777a] text-[#959595] rounded-lg lg:px-4 px-2 py-2 border-[1px] border-[#DBDBDB] flex flex-row items-center justify-start gap-2"
            @click="findMovie"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-tv fill-white lg:block hidden"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
              />
            </svg>
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              class="lg:hidden block stroke-white"
            >
              <path d="m19 19-3.5-3.5"></path>
              <circle cx="11" cy="11" r="6"></circle>
            </svg>
            <span class="text-white lg:block hidden">Search</span>
          </button>
        </div>
      </div>
    </div>

    <div class="lg:px-8 px-4">
      <div class="mt-6 flex flex-row items-center justify-between">
        <h3 class="lg:text-2xl text-xl">Trending</h3>
        <div class="flex items-center">
          <label class="relative cursor-pointer">
            <input type="checkbox" class="sr-only peer" v-model="choice" />
            <div
              class="w-[6rem] h-[2rem] flex items-center bg-gray-200 rounded-full text-[9px] peer-checked:text-[#53777a] text-gray-500 font-extrabold after:flex after:items-center after:justify-center peer after:content-['Day'] after:text-xs peer-checked:after:content-['Week'] peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-200 after:rounded-full after:h-[1.8rem] after:w-[2.9rem] after:transition-all peer-checked:bg-[#53777a]"
            ></div>
          </label>
        </div>
      </div>

      <Suspense>
        <template #default>
          <ScrollCard :data="movie.trendingMovieList" :movieType="movieType" />
        </template>

        <template #fallback>
          <ScrollCardSkeleton />
        </template>
      </Suspense>
    </div>

    <div class="lg:px-8 px-4 my-20">
      <div class="mt-6 flex flex-row items-center justify-between">
        <h3 class="lg:text-2xl text-xl">What's Popular</h3>
        <div class="flex items-center">
          <label class="relative cursor-pointer">
            <input
              type="checkbox"
              class="sr-only peer"
              v-model="movieChoice"
              @change="movieChoiceHandler"
            />
            <div
              class="w-[9rem] h-[2rem] flex items-center bg-gray-200 rounded-full text-[9px] peer-checked:text-[#53777a] text-gray-500 font-extrabold after:flex after:items-center after:justify-center peer after:content-['Movies'] after:text-xs peer-checked:after:content-['TV-Shows'] peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-200 after:rounded-full after:h-[1.8rem] after:w-[4.4rem] after:transition-all peer-checked:bg-[#53777a]"
            ></div>
          </label>
        </div>
      </div>

      <Suspense>
        <template #default>
          <ScrollCard :data="movie.popularMovieList" :movieType="movieType" />
        </template>

        <template #fallback>
          <ScrollCardSkeleton />
        </template>
      </Suspense>
    </div>

    <div class="lg:px-8 px-4 my-20">
      <div class="mt-6 flex flex-row items-center justify-between">
        <h3 class="lg:text-2xl text-xl">Top Rated</h3>
        <div class="flex items-center">
          <label class="relative cursor-pointer">
            <input
              type="checkbox"
              class="sr-only peer"
              v-model="movieChoiceTopRated"
              @change="movieChoiceTopRatedHandler"
            />
            <div
              class="w-[9rem] h-[2rem] flex items-center bg-gray-200 rounded-full text-[9px] peer-checked:text-[#53777a] text-gray-500 font-extrabold after:flex after:items-center after:justify-center peer after:content-['Movies'] after:text-xs peer-checked:after:content-['TV-Shows'] peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-200 after:rounded-full after:h-[1.8rem] after:w-[4.4rem] after:transition-all peer-checked:bg-[#53777a]"
            ></div>
          </label>
        </div>
      </div>

      <Suspense>
        <template #default>
          <ScrollCard :data="movie.topRatedMovieList" :movieType="movieType" />
        </template>

        <template #fallback>
          <ScrollCardSkeleton />
        </template>
      </Suspense>
    </div>
  </div>
</template>
