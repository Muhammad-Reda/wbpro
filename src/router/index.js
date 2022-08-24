import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/About",
            name: "About",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AboutView.vue"),
        },
        {
            path: "/Contact",
            name: "Contact",
            component: () => import("../views/Contact.vue"),
        },
        {
            path: "/Quran",
            name: "Quran",
            component: () => import("../views/Quran.vue"),
        },
    ],
});

export default router;
