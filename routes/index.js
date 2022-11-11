import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import Login from '../pages/login.vue'

Vue.use(VueRouter);
const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})
export default router;

