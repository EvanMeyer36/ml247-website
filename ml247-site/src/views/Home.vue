<template>
  <div class="p-8 min-h-screen flex flex-col gap-20 bg-neutral-400">
    <!-- Hero Section -->
    <section class="bg-white rounded-lg shadow p-8 flex flex-col md:flex-row items-center justify-between mb-16">
      <div class="space-y-4 max-w">
        <h2 class="text-2xl md:text-4xl font-bold text-gray-700">Hi, I'm Jennifer</h2>
        <p class="text-gray-500">
          I’m here to help individuals over the age of 40 who are struggling with various health concerns but have been unable to find the answers they need.
          Through innovative techniques such as Clinical Nutritional Therapy, Muscle Response Testing using BioField Testing, Body Therapies, Holistic Urine/Blood/Saliva tests, and True Rife Machine Ionic Foot baths & Bulb Sessions, I aim to provide my clients with integrative therapies and nutritional supplements they need to achieve better health and wellness.
          My passion lies in helping middle-aged individuals over 40 who may feel frustrated and overwhelmed by their health issues, such as a sluggish digestive system, compromised liver diagnosis, inability to lose weight, brain fog, inability to get quality sleep, unwanted aches and pains, and stiff neck and shoulders.
          By identifying the missing pieces of their health puzzle, I strive to help my clients feel their best and live their lives to the fullest.
          If you’re ready to take control of your health and transform your life, I’m here to guide and support you!
        </p>
        <button class="bg-primary bg-green-400 hover:bg-green-600 text-white px-6 py-3 rounded-md">4 Month Roadmap to Health</button>
      </div>
      <div class="mt-8 md:mt-0">
        <img src="../assets/AB2A7708-Edit-2.jpeg" alt="image" class="w-64 h-64 object-contain rounded-lg">
      </div>
    </section>

    <!-- Pictures Section -->
    <section class="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 mb-16">
      <div class="bg-white hover:opacity-20 rounded-lg shadow p-8 flex items-center justify-center min-h-[200px] w-full max-w-[250px] mx-auto">Bowen Therapy</div>
      <div class="bg-white hover:opacity-20 rounded-lg shadow p-8 flex items-center justify-center min-h-[200px] w-full max-w-[250px] mx-auto">Picture</div>
      <div class="bg-white rounded-lg shadow p-8 flex items-center justify-center min-h-[200px] w-full max-w-[250px] mx-auto">Picture</div>
      <div class="bg-white rounded-lg shadow p-8 flex items-center justify-center min-h-[200px] w-full max-w-[250px] mx-auto">Picture</div>
    </section>
        <section class="bg-white rounded-lg shadow p-8 text-center mb-16">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-700">Learn More About Our Services</h2>
        </section>
    
        <section class="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 mb-16">
          <router-link 
            to="/MFT" 
            class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow text-center inline-block"
          >
            MFT
          </router-link>

          <router-link 
            to="/cranio" 
            class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow text-center inline-block"
          >
            Craniosacral Therapy
          </router-link>

          <router-link 
            to="/reflexology" 
            class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow text-center inline-block"
          >
            Reflexology
          </router-link>

          <router-link 
            to="/bowen" 
            class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow text-center inline-block"
          >
            Bowen Therapy
          </router-link>
        </section>

    <!-- Mission Statement -->
    <section class="bg-white rounded-lg shadow p-8 text-center mb-16">
      <h2 class="text-2xl md:text-4xl font-bold uppercase text-gray-700">Book a Free 20 min. Discovery Consult</h2>
      <p class="text-gray-500">Learn more about what I do in my practice using an Integrative Approach to Healthcare</p><br />
      <h1 class="text-2xl md:text-4xl font-bold text-gray-700">Office Hours</h1>
      <p class="text-gray-500">
        Monday: 10 am – 8 pm<br />
        Wednesday: 10 am – 8 pm<br />
        Friday: 10 am – 8 pm<br />
      </p>
    </section>

    <!-- Reviews Section -->
    <section class="bg-white rounded-lg shadow p-8 text-center mb-16">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-700">Client Reviews</h2>
      <p class="text-gray-500">What clients have shared on Google</p>
    </section>

    <section class="overflow-x-auto flex snap-x snap-mandatory gap-4">
      <div v-for="review in reviews" :key="review.author_name + review.time" class="min-w-full bg-white rounded-lg shadow p-6 snap-center">
        <h3 class="font-bold text-gray-700">{{ review.author_name }}</h3>
        <p class="text-sm text-gray-400">{{ new Date(review.time * 1000).toLocaleDateString() }}</p>
        <p class="text-yellow-500">
          <span v-for="star in review.rating" :key="star">★</span>
        </p>
        <p class="text-gray-500 mt-2">{{ review.text }}</p>
      </div>
    </section>

    <!-- Action Buttons -->
    <section class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <button class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow">Schedule Discovery Call</button>
      <button class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow">Testing</button>
      <button class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow">Body Therapies</button>
      <button class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow">Rife Frequencies</button>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      reviews: []
    }
  },
  created() {
    axios.get('https://ml247-website-frontend.onrender.com:5000/api/reviews')
      .then(res => {
        this.reviews = res.data;
      })
      .catch(err => {
        console.error('Failed to load reviews:', err);
      });
  }
}
</script>
