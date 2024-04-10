<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import useMovie from "../../store/movies";
import OfficialVideoCard from "./OfficialVideoCard.vue";
import SelectSeasonAndEpisode from "../Modal/SelectSeasonAndEpisode.vue";
defineProps<{
  data: any;
}>();

await new Promise((res) => setTimeout(res, 2000));

const { path } = useRoute();
const movie = useMovie();
const playing = ref(false);
const tvShowMenu = ref(false);

const close = () => {
  playing.value = false;
};

const closeTVShowMenu = () => {
  tvShowMenu.value = false;
  if (movie.season && movie.episode) {
    playing.value = true;
  }
};

const timeConvert = (n: any) => {
  // Store the input number of minutes in a variable num
  const num = n;
  // Calculate the total hours by dividing the number of minutes by 60
  const hours = num / 60;
  // Round down the total hours to get the number of full hours
  const rhours = Math.floor(hours);
  // Calculate the remaining minutes after subtracting the full hours from the total hours
  const minutes = (hours - rhours) * 60;
  // Round the remaining minutes to the nearest whole number
  const rminutes = Math.round(minutes);
  // Construct and return a string representing the conversion result
  return `${rhours || 0}h ${rminutes || 0}m`;
};

const extract = () => {
  const match = path.match(/\/([^/]+)/);
  if (match) {
    return match[1];
  }
  return null;
};

const nowPlaying = () => {
  if (extract() === "tv") {
    tvShowMenu.value = true;
  } else {
    playing.value = true;
  }
};

const URL = `${import.meta.env.VITE_STREAM_PROVIDER}`;
</script>

<template>
  <div
    class="lg:h-full bg-no-repeat lg:bg-cover lg:bg-center bg-cover"
    :style="{
      backgroundImage: `url('https://image.tmdb.org/t/p/original${
        movie.movieDetail.backdrop_path
          ? movie.movieDetail.backdrop_path
          : movie.movieDetail.poster_path
      }')`,
    }"
  >
    <SelectSeasonAndEpisode v-if="tvShowMenu" @close="closeTVShowMenu" />
    <div class="lg:px-8 py-5 p-4 bg-black/50">
      <div class="grid place-content-end mb-6">
        <div
          class="text-white flex flex-row flex-wrap items-center lg:gap-8 gap-2 font-bold"
        >
          <p>
            Status:
            <span class="font-normal">{{ movie.movieDetail.status }}</span>
          </p>

          <div>
            <p v-if="extract() === 'tv'">
              Release Date:
              <span class="font-normal">{{
                movie.movieDetail.first_air_date
              }}</span>
            </p>
            <p v-else>
              Release Date:
              <span class="font-normal">{{
                movie.movieDetail.release_date
              }}</span>
            </p>
          </div>
          <div>
            <p v-if="extract() !== 'tv'">
              Runtime:
              <span class="font-normal">{{
                timeConvert(movie.movieDetail.runtime)
              }}</span>
            </p>
          </div>
        </div>
      </div>
      <h1 class="lg:text-5xl sm:text-4xl text-3xl text-white mt-5 font-black">
        {{
          movie.movieDetail.title
            ? movie.movieDetail.title
            : movie.movieDetail.name
        }}
      </h1>
      <p class="lg:w-[60%] w-5/5 my-4 text-base text-white">
        {{ movie.movieDetail.overview }}
      </p>
      <h2 class="text-xl text-white font-semibold">Genres</h2>
      <div class="my-2 text-base">
        <span
          class="h-8 flex flex-row flex-wrap items-start justify-start gap-x-2 [&>*:last-child]:after:hidden"
        >
          <span
            v-for="(item, _) in movie.movieDetail.genres"
            :key="item.id"
            class="text-white after:content-[','] after:absolute"
          >
            {{ item.name }}
          </span>
        </span>
      </div>

      <!-- <div
        class="flex flex-row lg:flex-nowrap flex-wrap items-center justify-between gap-4 my-2"
      >
        <div
          class="flex flex-row lg:flex-wrap items-center justify-start snap-x snap-mandatory w-full mx:auto overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] gap-4 text-white"
        >
          <div
            v-for="(item, _) in movie.movieDetail.genres"
            :key="item.id"
            class="py-2 px-6 border-[1px] border-white text-sm hover:bg-[#032628] hover:text-white duration-100 ease-in cursor-pointer rounded-md"
          >
            {{ item.name }}
          </div>
        </div>
      </div> -->
      <div class="flex flex-row items-center gap-12 my-8">
        <button
          class="font-semibold text-sm text-black py-3 px-8 flex flex-row items-center justify-start gap-4 shadow-[0px_4px_0px_0px_#64748b] rounded-md bg-gray-50 uppercase hover:shadow-[0px_5px_0px_0px_#64748b] transition-all duration-150"
          @click="nowPlaying"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-tv stroke-black"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
            />
          </svg>
          <span>Watch</span>
        </button>
        <div
          class="progress-circle"
          :class="[
            movie.movieDetail.vote_average?.toFixed(1) * 10 > 50
              ? `over50 p${movie.movieDetail.vote_average?.toFixed(1) * 10}`
              : `p${movie.movieDetail.vote_average?.toFixed(1) * 10}`,
          ]"
        >
          <span
            >{{
              movie.movieDetail.vote_average
                ? (movie.movieDetail.vote_average?.toFixed(2) * 10).toFixed(0)
                : 0
            }}%</span
          >
          <div class="left-half-clipper">
            <div
              class="first50-bar"
              :class="[
                movie.movieDetail.vote_average?.toFixed(1) * 10 < 50
                  ? `red-bar`
                  : movie.movieDetail.vote_average?.toFixed(1) * 10 < 70
                  ? `yellow-bar`
                  : '',
              ]"
            ></div>
            <div
              class="value-bar"
              :class="[
                movie.movieDetail.vote_average?.toFixed(1) * 10 < 50
                  ? `red-bar`
                  : movie.movieDetail.vote_average?.toFixed(1) * 10 < 70
                  ? `yellow-bar`
                  : '',
              ]"
            ></div>
          </div>
        </div>

        <div v-if="playing">
          <div class="fixed top-0 left-0 h-screen w-full bg-[#000000cc] z-20">
            <div
              class="lg:w-2/5 w-4/5 fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-x-circle absolute -top-6 -right-6 fill-white"
                viewBox="0 0 16 16"
                @click="close"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              <div class="class=h-[20rem] aspect-[4/3] mx-auto">
                <div style="width: 100%; height: 100%">
                  <div style="width: 100%; height: 100%">
                    <iframe
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                      :title="`${movie.movieDetail.overview.name} - Video`"
                      width="100%"
                      height="100%"
                      :src="`${
                        extract() === 'movie'
                          ? `${URL}/${extract()}/${
                              movie.movieDetailExternalId.imdb_id
                            }`
                          : `${URL}/${extract()}/${
                              movie.movieDetailExternalId.imdb_id
                            }/${movie.season}/${movie.episode}`
                      }`"
                      id="widget4"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OfficialVideoCard :videos="movie.movieVideo" />
    </div>
  </div>
</template>
