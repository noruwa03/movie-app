import { defineStore } from "pinia";
import { axiosClient } from "../../lib/axios";

const useMovie = defineStore("movie", {
  state: () => ({
    trendingMovieList: [] as any,
    popularMovieList: [] as any,
    topRatedMovieList: [] as any,
    genre: [] as any,
    genreOption: "",
    sortByOption: "",
    movieList: [] as any,
    searchedMovieList: [] as any,
    movieDetailExternalId: {} as any,
    movieDetail: [] as any,
    movieVideo: [] as any,
    similarMovieList: [] as any,
    recommendationMovieList: [] as any,
    season: 1,
    episode: 1,
    loading: true,
    loadingGenre: true,
  }),
  actions: {
    async getTrendingMovies(time_window?: string) {
      const time = time_window || "day";
      try {
        const response = await axiosClient.get(
          `/trending/all/${time}?api_key=${import.meta.env.VITE_API_KEY}`
        );
        this.trendingMovieList = response.data.results;
        this.loading = false;
      } catch (error: string | any) {
        console.log(error.message);
      }
    },
    async getPopularMovies(movie?: string) {
      const movieChoice = movie || "movie";
      try {
        const response = await axiosClient.get(
          `/${movieChoice}/popular?api_key=${import.meta.env.VITE_API_KEY}`
        );
        this.popularMovieList = response.data.results;
        this.loading = false;
      } catch (error: string | any) {
        console.log(error.message);
      }
    },
    async getTopRatedMovies(movie?: string) {
      const movieChoice = movie || "movie";
      try {
        const response = await axiosClient.get(
          `/${movieChoice}/top_rated?api_key=${import.meta.env.VITE_API_KEY}`
        );
        this.topRatedMovieList = response.data.results;
        this.loading = false;
      } catch (error: string | any) {
        console.log(error.message);
      }
    },
    async resetGenreAndSortBy() {
      this.genreOption = "";
      this.sortByOption = "";
    },
    async setGenre(payload: string) {
      this.genreOption = payload;
    },
    async setSortBy(payload: string) {
      this.sortByOption = payload;
    },
    async getGenre(payload?: string) {
      const payloadType = payload || "movie";
      try {
        const response = await axiosClient.get(
          `/genre/${payloadType}/list?api_key=${import.meta.env.VITE_API_KEY}`
        );
        this.genre = response.data.genres;
        this.loadingGenre = false;
      } catch (error: string | any) {
        console.log(error.message);
      }
    },
    async getMovies(movie?: string) {
      const movieType = movie || "movie";
      try {
        const response = await axiosClient.get(
          `/discover/${movieType}?with_genres=${this.genreOption}&sort_by=${
            this.sortByOption
          }&api_key=${import.meta.env.VITE_API_KEY}`
        );
        this.movieList = response.data.results;
        this.loading = false;
      } catch (error: string | any) {
        console.log(error.message);
      }
    },
    async getTVShows() {
      try {
        const response = await axiosClient.get(
          `/discover/tv?with_genres=${this.genreOption}&sort_by=${
            this.sortByOption
          }&api_key=${import.meta.env.VITE_API_KEY}`
        );
        this.movieList = response.data.results;
        this.loading = false;
      } catch (error: string | any) {
        console.log(error.message);
      }
    },
    async searchMovie(payload: string | any) {
      try {
        const response = await axiosClient.get(
          `/search/multi?query=${payload}&page=1&api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        this.searchedMovieList = response.data.results;
        this.loading = false;
      } catch (error: string | any) {
        console.log(error.message);
      }
    },
    async getMovieDetails(payload: string | any) {
      try {
        const externalId = await axiosClient.get(
          `${payload}/external_ids?api_key=${import.meta.env.VITE_API_KEY}`
        );
        const response = await axiosClient.get(
          `${payload}?api_key=${import.meta.env.VITE_API_KEY}`
        );
        const videos = await axiosClient.get(
          `${payload}/videos?api_key=${import.meta.env.VITE_API_KEY}`
        );
        const similarMovies = await axiosClient.get(
          `${payload}/similar?api_key=${import.meta.env.VITE_API_KEY}`
        );
        const recommendedMovies = await axiosClient.get(
          `${payload}/recommendations?api_key=${import.meta.env.VITE_API_KEY}`
        );
        this.movieDetailExternalId = externalId.data;
        this.movieDetail = response.data;
        this.movieVideo = videos.data.results;
        this.similarMovieList = similarMovies.data.results;
        this.recommendationMovieList = recommendedMovies.data.results;
        this.loading = false;
      } catch (error: string | any) {
        console.log(error.message);
      }
    },
    async resetMovieDetail() {
      this.movieDetail = "";
      this.movieVideo = "";
      this.similarMovieList = "";
      this.recommendationMovieList = "";
    },
    async setMovieSeasonAndEpisode(payload: any) {
      this.season = payload.season;
      this.episode = payload.episode;
    },
  },
});

export default useMovie;
