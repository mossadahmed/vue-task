import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "Productpag",
    component: () => import("../components/ProductPag/ProductPage.vue"),
  },
  {
    path: "/product/:id",
    name: "productDetals",
    component: () => import("@/components/productDetals/ProductDetels.vue"),
    props: true,
  },
  {
    path: "/productcard",
    name: "productCard",
    component: () => import("@/components/productCard.vue"),
  },
  {
    path: "/Apout",
    name: "Apout",
    component: () => import("@/components/MyApout.vue"),
  },
  {
    path: "/Contect",
    name: "Contect",
    component: () => import("@/components/MyConuct.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
