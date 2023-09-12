import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: '/',
        redirect: 'home',
    },{
        path: '/home',
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
            },{
                path: 'table',
                name: 'table',
                component: () => import('../components/units/Typegraphy/Table.vue')
            },
            {
                path: 'icons',
                name: 'icons',
                component: () => import('../components/units/Icons.vue')
            }, {
                path: 'space',
                name: 'space',
                component: () => import('../components/units/Space.vue')
            }, {
                path: 'crumb',
                name: 'crumb',
                component: () => import('../components/units/Crumb.vue')
            }, {
                path: 'message',
                name: 'message',
                component: () => import('../components/units/Message.vue')
            }, {
                path: 'theme',
                name: 'theme',
                component: () => import('../components/units/Theme.vue')
            },{
                path: 'input',
                name: 'input',
                component: () => import('../components/units/Input.vue')
            }, {
                path: 'dropdown',
                name: 'dropdown',
                component: () => import('../components/units/Dropdown.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(""),
    routes,
    //每次切换路由页面滚动到顶部
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router