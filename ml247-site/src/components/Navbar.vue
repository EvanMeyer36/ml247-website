<template>
  <nav class="bg-green-400 p-4 text-white w-full relative">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <h1 class="text-2xl font-bold">
        <router-link to="/" class="hover:underline">Mindful Living 24/7</router-link>
      </h1>

      <!-- Hamburger Button (Mobile Only) -->
      <button @click="toggleMenu" class="block md:hidden text-3xl focus:outline-none">
        ☰
      </button>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex gap-6 items-center">
        <li><a href="#" class="hover:underline">Schedule Appointment</a></li>
        <li><a href="#" class="hover:underline">About</a></li>
        <li><a href="#" class="hover:underline">Store</a></li>
        <li><a href="#" class="hover:underline">Services</a></li>
        <li><a href="#" class="hover:underline">Reviews</a></li>
        <li><a href="#" class="hover:underline">Blog</a></li>
        <li><a href="#" class="hover:underline">Directions</a></li>
        <li><router-link to="/admin" class="hover:underline">Admin Login</router-link></li>
        <li><router-link to="/admin-dashboard" class="hover:underline">Admin Dashboard</router-link></li>
      </ul>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div
      v-if="isMenuOpen"
      class="absolute left-0 top-full w-full bg-lime-500 flex flex-col items-center py-4 gap-4 md:hidden"
    >
      <a href="#" class="hover:underline">About</a>
      <a href="#" class="hover:underline">Services</a>
      <a href="#" class="hover:underline">Reviews</a>
      <a href="#" class="hover:underline">Blog</a>
      <router-link to="/admin" class="hover:underline">Admin Login</router-link>
      <router-link to="/admin-dashboard" class="hover:underline">Dashboard</router-link>
    </div>
  </nav>
</template>


<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const darkMode = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>
