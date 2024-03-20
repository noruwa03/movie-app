<script setup lang="ts">
import { useRoute } from "vue-router";
const emit = defineEmits<{
  (e: "close"): void;
}>();
const currentRoute = useRoute();
</script>

<template>
  <div class="bg-white h-full">
    <nav class="h-full flex flex-col justify-between w-4/5 mx-auto">
      <div>
        <h1 class="mt-6 text-2xl font-bold text-center text-slate-500">Norw</h1>
        <div class="mt-4 grid place-content-center">
          <svg
            id="play"
            viewBox="0 0 163 163"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
          >
            <g fill="none">
              <g transform="translate(2.000000, 2.000000)" stroke-width="4">
                <path
                  d="M10,80 C10,118.107648 40.8923523,149 79,149 L79,149 C117.107648,149 148,118.107648 148,80 C148,41.8923523 117.107648,11 79,11"
                  id="lineOne"
                  stroke="#64748b"
                ></path>
                <path
                  d="M105.9,74.4158594 L67.2,44.2158594 C63.5,41.3158594 58,43.9158594 58,48.7158594 L58,109.015859 C58,113.715859 63.4,116.415859 67.2,113.515859 L105.9,83.3158594 C108.8,81.1158594 108.8,76.6158594 105.9,74.4158594 L105.9,74.4158594 Z"
                  id="triangle"
                  stroke="#64748b"
                ></path>
                <path
                  d="M159,79.5 C159,35.5933624 123.406638,0 79.5,0 C35.5933624,0 0,35.5933624 0,79.5 C0,123.406638 35.5933624,159 79.5,159 L79.5,159"
                  id="lineTwo"
                  stroke="#64748b"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <ul class="-translate-y-8">
        <li @click="emit('close')" class="mt-0 px-2">
          <RouterLink
            class="py-2 [&>*>svg]:hover:fill-black [&>*]:hover:text-black [&>*]:hover:font-semibold flex flex-row items-center justify-start space-x-2"
            to="/"
          >
            <div class="flex flex-row items-center justify-start space-x-1">
              <div
                :class="[
                  currentRoute.path === `/`
                    ? 'w-1 h-1 bg-black rounded-full block'
                    : 'w-1 h-1 bg-transparent',
                ]"
              ></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                :class="[
                  currentRoute.path === `/`
                    ? 'bi bi-house-door-fill fill-black'
                    : 'bi bi-house-door-fill fill-[#959595]',
                ]"
              >
                <path
                  d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"
                />
              </svg>
            </div>

            <span
              :class="[
                currentRoute.path === `/`
                  ? 'text-black font-semibold text-sm'
                  : 'text-gray-700 text-sm',
              ]"
            >
              Home
            </span>
          </RouterLink>
        </li>

        <li @click="emit('close')" class="my-1 px-2">
          <RouterLink
            class="py-2 [&>*>svg]:hover:stroke-black [&>*]:hover:text-black [&>*]:hover:font-semibold flex flex-row items-center justify-start space-x-2"
            to="/movies"
          >
            <div class="flex flex-row items-center justify-start space-x-1">
              <div
                :class="[
                  currentRoute.path === `/movies`
                    ? 'w-1 h-1 bg-black rounded-full block'
                    : 'w-1 h-1 bg-transparent',
                ]"
              ></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                :class="[
                  currentRoute.path === `/movies`
                    ? 'bi bi-tv stroke-black'
                    : 'bi bi-tv stroke-[#959595]',
                ]"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"
                />
              </svg>
            </div>

            <span
              :class="[
                currentRoute.path === `/movies`
                  ? 'text-black font-semibold text-sm'
                  : 'text-gray-700 text-sm',
              ]"
            >
              Movies
            </span>
          </RouterLink>
        </li>

        <li @click="emit('close')" class="my-1 px-2">
          <RouterLink
            class="py-2 [&>*>svg]:hover:fill-black [&>*]:hover:text-black [&>*]:hover:font-semibold flex flex-row items-center justify-start space-x-2"
            to="/tv"
          >
            <div class="flex flex-row items-center justify-start space-x-1">
              <div
                :class="[
                  currentRoute.path === `/tv`
                    ? 'w-1 h-1 bg-black rounded-full block'
                    : 'w-1 h-1 bg-transparent',
                ]"
              ></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                :class="[
                  currentRoute.path === `/tv`
                    ? 'bi bi-play-circle fill-black'
                    : 'bi bi-play-circle fill-[#959595]',
                ]"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
                />
              </svg>
            </div>

            <span
              :class="[
                currentRoute.path === `/tv`
                  ? 'text-black font-semibold text-sm'
                  : 'text-gray-700 text-sm',
              ]"
            >
              TV Shows
            </span>
          </RouterLink>
        </li>
      </ul>
      <button
        class="py-2 px-2 [&>*>svg]:hover:fill-red-400 [&>*]:hover:text-red-400 [&>*]:hover:font-semibold flex flex-row items-center justify-start space-x-2"
      >
        <div class="flex flex-row items-center justify-start space-x-1">
          <div></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-play-circle fill-[#959595]"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
            />
          </svg>
        </div>

        <span class="text-[#848484] text-[0.8em]">Logout</span>
      </button>
    </nav>
  </div>
</template>
