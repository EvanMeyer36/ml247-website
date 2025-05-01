<template>
    <nav class="bg-green-400 p-4 text-white w-full relative">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <h1 class="text-2xl font-bold">
                <a href="/" class="hover:underline">Mindful Living 24/7</a>
            </h1>

            <!-- Hamburger Button (Mobile Only) -->
            <button @click="toggleMenu" class="block md:hidden text-3xl focus:outline-none">
                ☰
            </button>

            <!-- Desktop Navigation -->
            <ul class="hidden md:flex gap-6 items-center">
                <li><a href="#" class="hover:underline">About</a></li>
                <li><a href="#" class="hover:underline">Services</a></li>
                <li><a href="#" class="hover:underline">Reviews</a></li>
                <li><a href="#" class="hover:underline">Blog</a></li>
            </ul>
        </div>

        <!-- Mobile Dropdown Menu -->
        <div v-if="isMenuOpen"
            class="absolute left-0 top-full w-full bg-lime-500 flex flex-col items-center py-4 gap-4 md:hidden">
            <a href="#" class="hover:underline">About</a>
            <a href="#" class="hover:underline">Services</a>
            <a href="#" class="hover:underline">Reviews</a>
            <a href="#" class="hover:underline">Blog</a>
            <button @click="toggleDarkMode"
                class="px-4 py-2 rounded bg-primary text-white hover:bg-secondary transition-colors duration-300">
                Toggle {{ darkMode ? 'Light' : 'Dark' }} Mode
            </button>
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
