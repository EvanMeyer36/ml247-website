import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AdminLogin from '../views/AdminLogin.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import AdminPost from '../views/AdminPost.vue';
import PhotoUpload from '../views/PhotoUpload.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/admin', name: 'AdminLogin', component: AdminLogin },
  { 
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: { requiresAuth: true }
  },
  { 
    path: '/admin-post',
    name: 'AdminPost',
    component: AdminPost,
    meta: { requiresAuth: true }
  },
  { 
    path: '/photo-upload',
    name: 'PhotoUpload',
    component: PhotoUpload,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 🛡 Navigation Guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isAdmin') === 'true';
  
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/admin');
  } else {
    next();
  }
});

export default router;
