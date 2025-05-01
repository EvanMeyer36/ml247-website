import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AdminLogin from '../views/AdminLogin.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import AdminPost from '../views/AdminPost.vue';
import PhotoUpload from '../views/PhotoUpload.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/admin', name: 'AdminLogin', component: AdminLogin },
  { path: '/admin-dashboard', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/admin-post', name: 'AdminPost', component: AdminPost },
  { path: '/photo-upload', name: 'PhotoUpload', component: PhotoUpload },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
