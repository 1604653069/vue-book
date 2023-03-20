import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Login from "../components/Login";
import Home from "../components/Home";
import AppIndex from "../components/home/AppIndex";
import LibraryIndex from "../components/library/LibraryIndex";
import Register from "../components/Register";
const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'AppIndex',
                component: AppIndex,
                meta:{
                    requireAuth: true
                }
            },
            {
                path: "/library",
                name: 'Library',
                component: LibraryIndex,
                meta: {
                    requireAuth: true
                }
            }
        ]  
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
