import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {path: '', name: "home", component: () => import('../views/Home.vue')},
    {path: '/about', name: "about", component: () => import('../views/About.vue')},
    {path: '/hobbies', name: "hobbies", component: () => import('../views/Hobbies.vue')},
    {path: '/expirience', name: "expirience", component: () => import('../views/Expirience.vue')},
    {path: '/projects', name: "projects", component: () => import('../views/Projects.vue')}
]

const router = createRouter({
    routes, 
    history: createWebHistory(),
})

export default router;