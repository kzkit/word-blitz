import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Game from "../views/Game.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/game/:word",
      name: "Game",
      component: Game,
      props: true,
    },
  ],
});

export default router;
