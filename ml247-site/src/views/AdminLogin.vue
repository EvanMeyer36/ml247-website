<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <form
      @submit.prevent="login"
      class="bg-white p-6 rounded shadow max-w-sm w-full"
    >
      <h2 class="text-2xl font-bold mb-4 text-center">Admin Login</h2>

      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="w-full p-3 border rounded mb-4 text-gray-500"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full p-3 border rounded mb-4 text-gray-500"
      />

      <button
        type="submit"
        class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Log In
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

const login = () => {
  if (username.value === 'jenmk' && password.value === 'mindful247') {
    localStorage.setItem('isAdmin', 'true');
    router.push('/admin-dashboard');
  } else {
    alert('Incorrect username or password!');
  }
};
</script>
