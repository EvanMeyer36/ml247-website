<template>
  <div class="min-h-screen bg-gray-100 p-10 flex flex-col items-center space-y-6">
    <h1 class="text-3xl font-bold text-center">Admin Dashboard</h1>
    <router-link to="/admin-post" class="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">
      Create Blog Post
    </router-link>
    <router-link to="/photo-upload" class="bg-purple-600 text-white px-6 py-3 rounded shadow hover:bg-purple-700">
      Upload Photos
    </router-link>
  </div>
</template>

<script setup>
</script>
