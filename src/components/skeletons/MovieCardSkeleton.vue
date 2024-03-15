<template>
  <div class="animate-pulse mt-4 grid grid-cols-8 gap-6">
    <div
      v-for="(_, index) in 8"
      :key="index"
      class="lg:col-span-2 sm:col-span-4 col-span-8 aspect-[2/2.9] p-2 bg-white text-sm cursor-pointer shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-2xl"
    >
      <div className="w-full h-full relative">
        <div
          class="flex items-center justify-center h-full mb-4 bg-gray-200 rounded-[10px] dark:bg-gray-700"
        >
          <svg
            class="w-10 h-10 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path
              d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
            />
            <path
              d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
            />
          </svg>
        </div>
        <div class="absolute -bottom-8 right-4">
          <div
            class="h-[4.2rem] bg-gray-200 rounded-full dark:bg-gray-700 w-[4.2rem] mb-2.5 border-4 border-white"
          ></div>
        </div>
      </div>
      <div class="px-4 mt-6 w-full">
        <h1
          class="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-2.5"
        ></h1>
        <p
          class="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-[10rem] mb-2.5"
        ></p>
      </div>
    </div>
  </div>
</template>
