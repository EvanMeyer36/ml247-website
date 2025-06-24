<template>
  <div class="p-8 min-h-screen flex flex-col gap-20 bg-neutral-400">
    <section class="bg-white rounded-lg shadow p-8 text-center mb-16">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-700">Client Reviews</h2>
      <p class="text-gray-500">What clients have shared on Google</p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="review in reviews" :key="review.author_name + review.time" class="bg-white rounded-lg shadow p-6">
        <h3 class="font-bold text-gray-700">{{ review.author_name }}</h3>
        <p class="text-sm text-gray-400">
  {{ new Date(review.time * 1000).toLocaleDateString() }}
</p>
        <p class="text-yellow-500">
          <span v-for="star in review.rating" :key="star">★</span>
        </p>
        <p class="text-gray-500 mt-2">"{{ review.text }}"</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Review',
  data() {
    return {
      reviews: []
    }
  },
  created() {
    axios.get('http://localhost:5000/api/reviews')
      .then(res => {
        this.reviews = res.data;
      })
      .catch(err => {
        console.error('Failed to load reviews:', err);
      });
  }
}
</script>