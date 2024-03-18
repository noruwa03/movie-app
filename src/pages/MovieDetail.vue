<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MovieDetailComponent from "../components/Cards/MovieDetailComponent.vue";
import ScrollCard from "../components/Cards/ScrollCard.vue";
import ScrollCardSkeleton from "../components/skeletons/ScrollCardSkeleton.vue";
import useMovie from "../store/movies";
import MovieDetailSkeleton from "../components/skeletons/MovieDetailSkeleton.vue";

const movie = useMovie();
const { path } = useRoute();
const movieType = ref("movie");
onMounted(() => {
  movie.resetMovieDetail();
  movie.getMovieDetails(path);
});
</script>
<template>
  <div>
    <Suspense>
      <template #default>
        <MovieDetailComponent :data="movie.movieDetail" />
      </template>

      <template #fallback>
        <MovieDetailSkeleton />
      </template>
    </Suspense>

    <div class="lg:px-8 py-5 p-4">
      <Suspense>
        <template #default>
          <div class="lg:mt-20 mt-12">
            <h3 class="lg:text-2xl text-xl">Similar Movies</h3>
            <ScrollCard :data="movie.similarMovieList" :movieType="movieType" />
          </div>
        </template>

        <template #fallback>
          <div>
            <h3 class="lg:text-2xl text-xl mt-8">Similar Movies</h3>
            <ScrollCardSkeleton />
          </div>
        </template>
      </Suspense>

      <Suspense>
        <template #default>
          <div class="lg:mt-20 mt-12">
            <h3 class="lg:text-2xl text-xl mt-8">Recommendations</h3>
            <ScrollCard
              :data="movie.recommendationMovieList"
              :movieType="movieType"
            />
          </div>
        </template>

        <template #fallback>
          <div>
            <h3 class="lg:text-2xl text-xl mt-8">Recommendations</h3>
            <ScrollCardSkeleton />
          </div>
        </template>
      </Suspense>
    </div>
  </div>
</template>
