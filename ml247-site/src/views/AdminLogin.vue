<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-6 rounded shadow max-w-sm w-full">
      <h2 class="text-2xl font-bold mb-4 text-center">Admin Login</h2>
      <input
        v-model="password"
        type="password"
        placeholder="Enter admin password"
        class="w-full p-3 border rounded mb-4"
      />
      <button @click="login" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Log In
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const password = ref('');

const login = () => {
  if (password.value === 'mindful247') {
    router.push('/admin-dashboard');
  } else {
    alert('Incorrect password!');
  }
};
</script>
