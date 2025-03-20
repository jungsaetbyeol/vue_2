import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
import About from "@/view/About.vue";
import Check from "@/view/Check.vue";
import Login from "@/view/Login.vue";
import Singup from "@/view/Singup.vue";
import Review from "@/view/Review.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/check", component: Check },
  { path: "/login", component: Login },
  { path: "/singup", component: Singup },
  { path: "/review", component: Review },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
