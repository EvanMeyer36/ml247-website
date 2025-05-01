<template>
  <div class="min-h-screen bg-gray-100 flex items-start justify-center py-12 px-4">
    <div class="w-full max-w-2xl bg-white p-8 rounded-lg shadow space-y-6">
      <h1 class="text-2xl font-bold text-black">Create a Post</h1>

      <input v-model="title" placeholder="Title" class="w-full p-2 border rounded m-8 text-gray-500" />

      <select v-model="type" class="w-full p-2 border rounded m-8 text-gray-500">
        <option value="blog">Blog</option>
        <option value="video">Video</option>
        <option value="newsletter">Newsletter</option>
        <option value="announcement">Announcement</option>
      </select>

      <TiptapEditor v-model="content" class="text-gray-500" />

      <input
        v-if="type === 'video'"
        v-model="videoUrl"
        placeholder="Video URL"
        class="w-full p-2 border rounded text-gray-500"
      />

      <button @click="submitPost" class="px-4 py-2 bg-green-600 text-white rounded">
        Submit Post
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import TiptapEditor from '@/components/TiptapEditor.vue';

const title = ref('');
const type = ref('blog');
const content = ref('');
const videoUrl = ref('');

const submitPost = async () => {
  await axios.post('http://localhost:5000/api/posts', {
    title: title.value,
    type: type.value,
    content: content.value,
    videoUrl: videoUrl.value || ''
  });
  alert('Post submitted!');
  title.value = content.value = videoUrl.value = '';
  type.value = 'blog';
};
</script>
