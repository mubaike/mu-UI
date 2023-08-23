import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {   
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('../views/TestView.vue')
        },
        {
            path: '/module',
            name: 'module',
            component: () => import('../views/Modules.vue')
        }
    ]
})

export default router