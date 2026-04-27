import { createRouter,createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Projects from "../pages/Projects.vue";
import Skill from "../pages/Skill.vue";
import Contact from "../pages/Contact.vue";
const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    {
        path:'/projects',
        name:'Projects',
        component:Projects
    },
    {
        path:'/skill',
        name:'Skill',
        component:Skill
    },
    {
        path:'/contact',
        name:'Contact',
        component:Contact
    },
]
const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;