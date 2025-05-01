<template>
  <div class="max-w-3xl mx-auto p-8">
    <div v-if="post">
      <span class="uppercase text-sm text-green-600 font-semibold">{{ post.type }}</span>
      <h1 class="text-3xl font-bold mb-2">{{ post.title }}</h1>
      <p class="text-sm text-gray-500 mb-6">{{ formatDate(post.createdAt) }}</p>

      <div v-html="post.content" class="prose max-w-none text-gray-700"></div>

      <div v-if="post.type === 'video' && post.videoUrl" class="mt-8">
        <iframe
          :src="formatVideoUrl(post.videoUrl)"
          class="w-full aspect-video rounded"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const post = ref(null);

onMounted(async () => {
  const res = await axios.get(`http://localhost:5000/api/posts/${route.params.id}`);
  post.value = res.data;
});

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

const formatVideoUrl = (url) => {
  if (url.includes('youtube.com')) {
    return url.replace('watch?v=', 'embed/');
  }
  return url;
};
</script>