import {createRouter, createWebHistory} from 'vue-router';
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import MainArcs from "./components/mainArcs.vue";

const router = createRouter( {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //routes go here
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/mainArcs',
            name: 'MainArcs',
            component: MainArcs
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})

export default router