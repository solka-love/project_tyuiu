import { createRouter, createWebHistory } from 'vue-router'

import Main from "@/views/Main"
import Courses from "@/views/Courses"
import Course from "@/views/Course"
import User from "@/views/User"
import CourseEditing from "@/views/CourseEditing"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/courses',
        component: Courses
    },
    {
        path: '/courses/:id',
        component: Course
    },
    {
        path: '/courses/:id/editing',
        component: CourseEditing
    },
    {
        path: '/user',
        component: User
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
