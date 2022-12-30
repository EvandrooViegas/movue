import Home from "../view/Home.vue"
import Movie from "../view/Movie.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: "/", component: Home },
    { path: "/movies/:id", component: Movie }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})