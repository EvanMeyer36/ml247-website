import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AdminPost from '../views/AdminPost.vue'; // ⬅️ import your view

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin-post',
    name: 'AdminPost',
    component: AdminPost // ⬅️ register the route
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
