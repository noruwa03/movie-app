<script setup lang="ts">
import { ref } from "vue";
defineProps<{
  data: any;
  movieType?: string;
}>();

await new Promise((res) => setTimeout(res, 2000));
const galleryRef = ref<HTMLDivElement>();

const prev = () => {
  galleryRef.value?.scrollBy(-galleryRef.value?.clientWidth!, 0);
};

const next = () => {
  galleryRef.value?.scrollBy(galleryRef.value?.clientWidth!, 0);
};
</script>

<template>
  <div>
    <div
      ref="galleryRef"
      class="mt-4 flex snap-x snap-mandatory w-full mx:auto overflow-x-scroll lg:py-4 py-4 lg:space-x-6 space-x-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
    >
      <div
        v-for="(item, index) in data"
        :key="index"
        class="p-2 bg-white text-sm cursor-pointer shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-2xl"
      >
        <a
          :href="`/${item.media_type ? item.media_type : movieType}/${item.id}`"
          class="snap-center w-[17.5rem] aspect-[2/2.8] break-words flex flex-col items-start justify-start gap-3"
        >
          <div className="w-full h-full relative">
            <img
              v-if="item.poster_path"
              v-lazy="`https://image.tmdb.org/t/p/original/${item.poster_path}`"
              alt="Cover Photo"
              className="w-full h-full object-fill rounded-[10px] bg-gray-200"
            />

            <img
              v-else
              :src="`/loading.svg`"
              alt="Cover Photo"
              className="w-full h-full object-fill rounded-[10px] bg-gray-100"
            />
            <div class="absolute -bottom-7 right-4">
              <div
                class="progress-circle"
                :class="[
                  item.vote_average.toFixed(1) * 10 > 50
                    ? `over50 p${item.vote_average.toFixed(1) * 10}`
                    : `p${item.vote_average.toFixed(1) * 10}`,
                ]"
              >
                <span
                  >{{ (item.vote_average.toFixed(2) * 10).toFixed(0) }}%</span
                >
                <div class="left-half-clipper">
                  <div
                    class="first50-bar"
                    :class="[
                      item.vote_average.toFixed(1) * 10 < 50
                        ? `red-bar`
                        : item.vote_average.toFixed(1) * 10 < 70
                        ? `yellow-bar`
                        : '',
                    ]"
                  ></div>
                  <div
                    class="value-bar"
                    :class="[
                      item.vote_average.toFixed(1) * 10 < 50
                        ? `red-bar`
                        : item.vote_average.toFixed(1) * 10 < 70
                        ? `yellow-bar`
                        : '',
                    ]"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 mt-3">
            <h1 class="font-semibold text-base">
              {{ item.title ? item.title : item.first_air_date }}
            </h1>
            <p class="text-base text-gray-400 my-2">
              {{ item.release_date ? item.release_date : item.name }}
            </p>
          </div>
        </a>
      </div>
    </div>
    <div
      v-if="data.length > 0"
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
