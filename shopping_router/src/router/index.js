import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Event from "@/views/Event.vue";
import FQ from "@/views/F&Q.vue";
import Reservation from "@/views/Reservation.vue";
import Review from "@/views/Review.vue";
import ProductDetail from "@/views/ProductDetail.vue";

const routes = [
    {path: "/" , component: Home},
    {path: "/about" , component: About},
    {path: "/event" , component: Event},
    {path: "/fq" , component: FQ},
    {path: "/reservation" , component: Reservation},
    {path: "/review" , component: Review},
    {path: "/product/:id" , component: ProductDetail },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
