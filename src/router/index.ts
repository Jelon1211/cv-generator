import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import ExperienceForm from "../views/ExperienceForm.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/experience", component: ExperienceForm },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
``