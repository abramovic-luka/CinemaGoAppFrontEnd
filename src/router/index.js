import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/main",
    name: "Main",
    component: Main
  }
];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes
});

export default router;
