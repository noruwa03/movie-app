<script setup lang="ts">
import { ref } from "vue";
defineProps<{
  videos: any;
}>();

// await new Promise((res) => setTimeout(res, 2000));
const galleryRef = ref<HTMLDivElement>();
const playing = ref(false);
const key = ref("");
const videoName = ref("");

const prev = () => {
  galleryRef.value?.scrollBy(-galleryRef.value?.clientWidth!, 0);
};

const next = () => {
  galleryRef.value?.scrollBy(galleryRef.value?.clientWidth!, 0);
};

const nowPlaying = (data: string | any) => {
  console.log(key);
  playing.value = true;
  key.value = data.key;
  videoName.value = data.name;
};

const close = () => {
  playing.value = false;
};
</script>

<template>
  <div class="mt-10">
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
                  :title="`${videoName} - Official Trailer`"
                  width="100%"
                  height="100%"
                  :src="`https://www.youtube.com/embed/${key}?autoplay=0&mute=0&controls=1&origin=https%3A%2F%2F&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1`"
                  id="widget4"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 class="lg:text-2xl text-xl text-white">Official Videos</h3>
    <div
      ref="galleryRef"
      class="mt-4 flex snap-x snap-mandatory w-full mx:auto overflow-x-scroll lg:py-4 py-4 lg:space-x-6 space-x-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
    >
      <div
        v-for="(item, _) in videos"
        :key="item.id"
        class="p-2 bg-white text-sm cursor-pointer shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-2xl"
      >
        <div
          class="snap-center w-[17.5rem] aspect-[4/2.2] break-words flex flex-col items-start justify-start"
        >
          <div class="w-full h-full relative">
            <img
              v-lazy="`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`"
              alt="Cover Photo"
              className="w-full h-full object-cover rounded-[10px]"
              @click="nowPlaying({ key: item.key, name: item.name })"
            />
            <div
              class="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
            >
              <svg
                id="play-small"
                class="play"
                viewBox="0 0 163 163"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                @click="nowPlaying({ key: item.key, name: item.name })"
              >
                <g fill="none">
                  <g transform="translate(2.000000, 2.000000)" stroke-width="4">
                    <path
                      d="M10,80 C10,118.107648 40.8923523,149 79,149 L79,149 C117.107648,149 148,118.107648 148,80 C148,41.8923523 117.107648,11 79,11"
                      id="lineOne"
                      stroke="#fff"
                    ></path>
                    <path
                      d="M105.9,74.4158594 L67.2,44.2158594 C63.5,41.3158594 58,43.9158594 58,48.7158594 L58,109.015859 C58,113.715859 63.4,116.415859 67.2,113.515859 L105.9,83.3158594 C108.8,81.1158594 108.8,76.6158594 105.9,74.4158594 L105.9,74.4158594 Z"
                      id="triangle"
                      stroke="#fff"
                    ></path>
                    <path
                      d="M159,79.5 C159,35.5933624 123.406638,0 79.5,0 C35.5933624,0 0,35.5933624 0,79.5 C0,123.406638 35.5933624,159 79.5,159 L79.5,159"
                      id="lineTwo"
                      stroke="#fff"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="px-4 my-2">
            <h1 class="font-semibold text-base">{{ item.name }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="videos.length > 0"
      class="flex flex-row items-center justify-end mb-8"
    >
      <div class="flex flex-row items-center justify-start gap-3">
        <div
          @click="prev"
          class="cursor-pointer grid place-content-center p-[0.3rem] bg-white rounded-lg border-2 border-slate-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-compact-left fill-black stroke-black"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
            />
          </svg>
        </div>

        <div
          @click="next"
          class="cursor-pointer grid place-content-center p-[0.3rem] bg-slate-900 rounded-lg border-2 border-slate-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-compact-right fill-white scale-110 stroke-white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
