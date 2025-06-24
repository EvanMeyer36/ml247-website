<template>
  <div class="p-8 min-h-screen flex flex-col gap-20 bg-neutral-400">
    <!-- Hero Section -->
    <section class="bg-white rounded-lg shadow p-8 flex flex-col md:flex-row items-center justify-between mb-16">
      <div class="space-y-4 max-w">
        <h2 class="text-2xl md:text-4xl font-bold text-gray-700">Reflexology Therapy</h2>
        <p class="text-gray-500">
          Reflexology is a deeply relaxing and restorative therapy that uses gentle pressure on specific points of the feet, hands, or ears—called reflex zones—that correspond to organs, glands, and systems throughout the body.
          By stimulating these reflexes, Reflexology encourages the body to return to balance, supports self-healing, and promotes overall wellbeing.
        </p>
        <button class="bg-green-400 hover:bg-green-600 text-white px-6 py-3 rounded-md">Book a Reflexology Session</button>
      </div>
      <div class="mt-8 md:mt-0">
        
      </div>
    </section>

    <!-- How It Helps -->
    <section class="bg-white rounded-lg shadow p-8 text-center mb-16 space-y-4">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-700">How Reflexology Helps</h2>
      <ul class="list-disc list-inside text-gray-500 text-left max-w-3xl mx-auto">
        <li>Release tension</li>
        <li>Improve circulation and lymphatic flow</li>
        <li>Unblock energy pathways</li>
        <li>Rebalance the nervous system</li>
      </ul>
      <p class="text-gray-500 mt-4">The result? A sense of calm, clarity, and renewed vitality.</p>
    </section>

    <!-- Benefits -->
    <section>
      <h2 class="text-2xl md:text-4xl font-bold text-center text-gray-700 mb-8">Benefits of Reflexology</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow p-6">
          <ul class="list-disc list-inside text-gray-500">
            <li>Reduce stress, anxiety, and tension</li>
            <li>Boost circulation and lymphatic drainage</li>
            <li>Relieve headaches, muscle aches, and pain</li>
            <li>Support detoxification</li>
            <li>Improve sleep quality</li>
          </ul>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <ul class="list-disc list-inside text-gray-500">
            <li>Increase energy and vitality</li>
            <li>Relieve carpal tunnel and repetitive strain</li>
            <li>Balance the nervous system</li>
            <li>Enhance natural self-healing</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- What to Expect -->
    <section class="bg-white rounded-lg shadow p-8 mb-16">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-700 mb-4">What to Expect After a Session</h2>
      <p class="text-gray-500">
        After a Reflexology session, most people feel deeply relaxed, grounded, and sometimes sleepy. Some clients notice immediate relief, while for others, benefits emerge gradually over a few days.
      </p>
    </section>

    <!-- Pricing -->
    <section class="bg-white rounded-lg shadow p-8 text-center mb-16">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-700 mb-4">Session Options & Pricing</h2>
      <div class="space-y-2 text-gray-500">
        <p>30-minute session – $35</p>
        <p>60-minute session – $77</p>
        <p>75-minute session – $96</p>
        <p>Three 60 min. Sessions – $220</p>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <button class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow">Schedule Reflexology</button>
      <button class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow">Contact for Discovery Call</button>
    </section>

    <!-- Policy -->
    <section class="bg-white rounded-lg shadow p-8 text-center mt-16">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-700">Appointment Policy</h2>
      <p class="text-gray-500 mt-2">
        Please notify us at least 24 hours in advance by phone or text at 734-323-3881 for cancellations.
        Late cancellations (under 12 hours) and no-shows may be charged in full.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Reflexology'
}
</script>
