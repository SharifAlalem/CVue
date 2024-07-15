import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import Templates from "../views/Templates.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/template_1",
      name: "template_1",
      component: Templates,
    },
    {
      path: "/template_2",
      name: "template_2",
      component: Templates,
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
  ]
})

export default router
