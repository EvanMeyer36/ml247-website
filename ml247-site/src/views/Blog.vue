<template>
    <div class=" mx-auto p-8 space-y-10 justify-center">
      <h1 class="text-3xl font-bold text-center mb-8">Blog Posts</h1>
  
      <div
        v-for="post in posts"
        :key="post._id"
        class="bg-white shadow rounded p-6 hover:bg-gray-50 transition"
      >
        <router-link :to="`/blog/${post._id}`" class="block">
          <span class="inline-block mb-2 text-xs font-semibold uppercase text-green-600">
            {{ post.type }}
          </span>
          <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
          <p class="text-sm text-gray-500 mb-4">{{ formatDate(post.createdAt) }}</p>
          <div
            v-html="post.content.slice(0, 200) + '...'"
            class="prose max-w-none text-gray-700"
          ></div>
          <p class="text-green-600 mt-2 underline text-sm">Read more →</p>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  
  const posts = ref([]);
  
  onMounted(async () => {
    const res = await axios.get('https://ml247-website.onrender.com:5000/api/posts');
    posts.value = res.data;
  });
  
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  
  const formatVideoUrl = (url) => {
    if (url.includes('youtube.com')) {
      return url.replace('watch?v=', 'embed/');
    }
    return url; // fallback
  };
  </script>
  
  <style scoped>
  .prose :deep(img) {
    max-width: 100%;
    height: auto;
  }
  </style>