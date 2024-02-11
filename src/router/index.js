import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "landing-page",
            component: () => import ("../views/LandingPageView.vue")
        },
        {
            path: "/projects",
            name: "project-page",
            component: () => import ("../views/ProjectView.vue")
        },
        {
            path: "/stack",
            name: "services",
            component: () => import ("../views/StackView.vue")
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import ("../views/ContactView.vue")
        }
        
    ]
})

export default router