import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RootLayout from "../components/layouts/RootLayout.vue";
import Home from "../pages/Home.vue";
import Movies from "../pages/Movies.vue";
import TVShow from "../pages/TVShow.vue";
import Search from "../pages/Search.vue";
import MovieDetail from "../pages/MovieDetail.vue";
import TVShowDetail from "../pages/TVShowDetail.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "RootLayout",
    path: "/",
    component: RootLayout,
    children: [
      {
        name: "HomePage",
        path: "",
        component: Home,
      },
      {
        name: "MoviesPage",
        path: "/movies",
        component: Movies,
      },
      {
        name: "TVShowsPage",
        path: "/tv",
        component: TVShow,
      },
      {
        name: "MovieDetailPage",
        path: "/movie/:id",
        component: MovieDetail,
        props: true,
      },
      {
        name: "TVShowPage",
        path: "/tv/:id",
        component: TVShowDetail,
        props: true,
      },
    ],
  },

  {
    name: "SearchPage",
    path: "/search",
    component: Search,
  },
  {
    name: "NotFound",
    path: "/:catchAll(.*)",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
