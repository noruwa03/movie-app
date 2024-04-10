<script setup lang="ts">
defineProps<{
  data: any;
  movieType?: string;
}>();

await new Promise((res) => setTimeout(res, 2000));
</script>

<template>
  <div>
    
    <div class="mt-4 grid grid-cols-8 gap-6">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="lg:col-span-2 sm:col-span-4 col-span-8 p-2 bg-white text-sm cursor-pointer shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-2xl"
      >
        <RouterLink
          :to="`/${item.media_type ? item.media_type : movieType}/${item.id}`"
          class="break-words flex flex-col items-start justify-start gap-3"
        >
          <div className="w-full aspect-[2/2.9] relative">
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
                  item.vote_average?.toFixed(1) * 10 > 50
                    ? `over50 p${item.vote_average?.toFixed(1) * 10}`
                    : `p${item.vote_average?.toFixed(1) * 10}`,
                ]"
              >
                <span
                  >{{
                    item.vote_average
                      ? (item.vote_average?.toFixed(2) * 10).toFixed(0)
                      : 0
                  }}%</span
                >
                <div class="left-half-clipper">
                  <div
                    class="first50-bar"
                    :class="[
                      item.vote_average?.toFixed(1) * 10 < 50
                        ? `red-bar`
                        : item.vote_average?.toFixed(1) * 10 < 70
                        ? `yellow-bar`
                        : '',
                    ]"
                  ></div>
                  <div
                    class="value-bar"
                    :class="[
                      item.vote_average?.toFixed(1) * 10 < 50
                        ? `red-bar`
                        : item.vote_average?.toFixed(1) * 10 < 70
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
              {{ item.title ? item.title : item.original_name }}
            </h1>
            <p class="text-base text-gray-400 my-2">
              {{ item.release_date ? item.release_date : item.first_air_date }}
            </p>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
