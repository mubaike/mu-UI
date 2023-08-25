import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
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
        redirect: '/module/button',
        component: () => import('../views/Modules.vue'),
        children: [
            {
                path: 'button',
                name: 'button',
                component: () => import('../components/units/Buttons.vue')
            },
            {
                path: 'title',
                name: 'title',
                component: () => import('../components/units/Typegraphy/Title.vue')
            },
            {
                path: 'text',
                name: 'text',
                component: () => import('../components/units/Typegraphy/Text.vue')
            },
            {
                path: 'paragraph',
                name: 'paragraph',
                component: () => import('../components/units/Typegraphy/Paragraph.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    //每次切换路由页面滚动到顶部
    scrollBehavior(){
        return {top: 0}
    }
})

export default router