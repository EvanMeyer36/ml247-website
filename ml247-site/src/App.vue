<template>
  <div class="h-screen bg-gray-100">
    <Navbar />
    <main class="">
      <Home />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Home,
  },
};
</script>
