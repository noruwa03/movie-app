<template>
  <div class="animate-pulse">
    <div class="lg:h-full bg-gray-50">
      <div class="lg:px-8 py-5 p-4">
        <div class="flex flex-row items-center justify-end mb-6">
          <div
            class="lg:h-[2.2rem] h-[3rem] rounded-md lg:w-2/5 w-full bg-gray-200"
          ></div>
        </div>

        <h1 class="h-[4rem] bg-gray-200 rounded-md lg:w-4/5 w-5/5 mb-2.5"></h1>
        <p class="h-[8rem] lg:w-3/5 w-5/5 my-4 bg-gray-200 rounded-md"></p>
        <h2 class="h-[2.6rem] w-[7.8rem] bg-gray-200 rounded-md"></h2>
        <div class="my-2 text-base">
          <span
            class="h-8 flex flex-row flex-wrap items-start justify-start gap-x-2 [&>*:last-child]:after:hidden"
          >
            <span
              v-for="(_, index) in 5"
              :key="index"
              class="h-[2.2rem] bg-gray-200 rounded-md dark:bg-gray-700 w-[4.2rem] mb-2.5"
            >
            </span>
          </span>
        </div>

        <div class="flex flex-row items-center gap-12 my-8">
          <div class="h-[3rem] w-[10rem] bg-gray-200 rounded-md my-8"></div>
          <div
            class="h-[4.2rem] bg-gray-200 rounded-full w-[4.2rem] mb-2.5 border-4 border-white"
          ></div>
        </div>

        <div
          class="mt-4 flex snap-x snap-mandatory w-full mx:auto overflow-x-scroll lg:py-4 py-4 lg:space-x-6 space-x-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          <div
            v-for="(index, _) in 4"
            :key="index"
            class="p-2 bg-gray-200 rounded-2xl"
          >
            <div
              class="snap-center w-[17.5rem] aspect-[4/2.2] flex flex-col items-start justify-start"
            >
              <div class="w-full h-full bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
