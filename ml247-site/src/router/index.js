import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AdminLogin from '../views/AdminLogin.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import AdminPost from '../views/AdminPost.vue';
import PhotoUpload from '../views/PhotoUpload.vue';
import Blog from '../views/Blog.vue';
import BlogPost from '../views/BlogPost.vue';
import Review from '../views/Review.vue';  // 👈 Import your new Review view
import Bowen from '@/views/Bowen.vue';
import Reflexology from '@/views/Reflexology.vue';
import Cranio from '@/views/Cranio.vue';
import MFT from '@/views/MFT.vue';

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
  },
  { path: '/blog/:id', name: 'BlogPost', component: BlogPost },
  { path: '/blog', name: 'Blog', component: Blog },

  // 👇 New Reviews route
  { path: '/reviews', name: 'Review', component: Review },
  { path: '/bowen', name: 'Bowen', component: Bowen },
  { path: '/reflexology', name: 'Reflexology', component: Reflexology },
  { path: '/cranio', name: 'Cranio', component: Cranio },
  { path: '/MFT', name: 'MFT', component: MFT}
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