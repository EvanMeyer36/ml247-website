<template>
  <div class="min-h-screen bg-gray-100 p-10 flex flex-col items-center space-y-4">
    <h1 class="text-2xl font-bold mb-4">Upload New Photos</h1>
    <input type="file" @change="handleFile" accept="image/*" class="mb-4" />
    <button @click="upload" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
      Upload
    </button>
  </div>
</template>

<script setup>
const handleFile = (e) => {
  const file = e.target.files[0];
  console.log('Selected:', file);
};

const upload = () => {
  alert('Image uploading not implemented yet — backend needed.');
};
</script>
