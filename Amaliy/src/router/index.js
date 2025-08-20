import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Products from "../pages/Products.vue";
import Login from "../pages/Login.vue";
import Cart from "../pages/Cart.vue";


const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/products",
        component: Products
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/cart',
        component: Cart
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router