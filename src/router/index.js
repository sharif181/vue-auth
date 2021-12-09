import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/auth/Login";
import Registrations from "../views/auth/Registrations";
import Todo from "../views/todos/Todo";
import store from '../store/index'
import Home from "../views/Home";
import ApiService from "../services/api.services";

Vue.use(VueRouter)

const routes = [
    {
        path     : '/',
        name     : 'Home',
        component: Home,
    },
    {
        path     : '/login',
        name     : 'Login',
        component: Login,
        meta     : {guest: true},
    },
    {
        path     : '/register',
        name     : 'Signup',
        component: Registrations,
        meta     : {guest: true},
    },
    {
        path     : '/todos',
        name     : 'Todo',
        component: Todo,
        meta     : {requiresAuth: true},
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (localStorage.getItem('accessToken')) {
            ApiService.get('accounts/profile').then(res => {
                next();
            }).catch(e => {
                next("/login");
            })
        } else {
            next('/login')
        }
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
        if (store.getters.isAuthenticated) {
            next("/todos");
            return;
        }
        next();
    } else {
        next();
    }
});

export default router
