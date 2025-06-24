<template>
  <div class="p-8 min-h-screen flex flex-col gap-20 bg-neutral-400">
    <!-- Hero Section -->
    <section class="bg-white rounded-lg shadow p-8 flex flex-col md:flex-row items-center justify-between mb-16">
      <div class="space-y-4 max-w">
        <h2 class="text-2xl md:text-4xl font-bold text-gray-700">Experience the Healing Power of Bowen Therapy</h2>
        <p class="text-gray-500">
          Bowen Therapy is a gentle yet powerful approach that can support a wide range of conditions across the body. Whether you’re dealing with acute or chronic issues, recovering from injury or surgery, or looking for holistic support, Bowen may help improve mobility, reduce pain, and enhance overall well-being.
          This holistic technique taps into your body’s natural ability to heal itself by targeting tension patterns and promoting deep relaxation.
        </p>
        <button class="bg-green-400 hover:bg-green-600 text-white px-6 py-3 rounded-md">Book Your Session</button>
      </div>
      <div class="mt-8 md:mt-0">
        
      </div>
    </section>

    <!-- How it Works -->
    <section class="bg-white rounded-lg shadow p-8 text-center mb-16 space-y-4">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-700">How Does It Work?</h2>
      <p class="text-gray-500">
        Bowen Therapy involves a series of precise, gentle movements applied to the muscles and connective tissue. These subtle movements send powerful signals to your brain, prompting your body to release tension and restore balance—supporting both musculoskeletal and internal systems.
      </p>
    </section>

    <!-- Conditions -->
    <section>
      <h2 class="text-2xl md:text-4xl font-bold text-center text-gray-700 mb-8">Conditions It May Help With</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="font-bold text-gray-700">Musculoskeletal Pain & Injury</h3>
          <ul class="list-disc list-inside text-gray-500">
            <li>Back, neck, and spinal pain</li>
            <li>Muscle spasms, joint stiffness</li>
            <li>Post-surgical pain</li>
            <li>Sciatica</li>
          </ul>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="font-bold text-gray-700">Sports & Repetitive Strain Injuries</h3>
          <ul class="list-disc list-inside text-gray-500">
            <li>Ankle sprains, shin splints</li>
            <li>Hamstring, groin strains</li>
            <li>Rotator cuff injuries</li>
            <li>Carpal tunnel</li>
          </ul>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="font-bold text-gray-700">Head, Jaw & Neck Conditions</h3>
          <ul class="list-disc list-inside text-gray-500">
            <li>Migraines, tension headaches</li>
            <li>TMJ dysfunction</li>
            <li>Whiplash</li>
          </ul>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="font-bold text-gray-700">Women's Health & Pregnancy Support</h3>
          <ul class="list-disc list-inside text-gray-500">
            <li>Menstrual discomfort</li>
            <li>Pregnancy support before, during, after birth</li>
            <li>Pelvic floor dysfunction</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- What to Expect -->
    <section class="bg-white rounded-lg shadow p-8 mb-16">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-700 mb-4">What to Expect</h2>
      <p class="text-gray-500 mb-2">Sessions last 60–90 minutes, starting with a health intake. Gentle moves are applied followed by essential pauses to let your body adjust. Many clients feel deep relaxation or fall asleep during the session.</p>
      <p class="text-gray-500 mb-2">Wear loose, comfortable clothing and expect ongoing benefits over 5–10 days post-session.</p>
    </section>

    <!-- Pricing -->
    <section class="bg-white rounded-lg shadow p-8 text-center mb-16">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-700 mb-4">Session Options & Pricing</h2>
      <div class="space-y-2 text-gray-500">
        <p>60-minute session – $77</p>
        <p>75-minute session – $96</p>
        <p>Three 60 min. Sessions – $220</p>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <button class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow">Schedule Bowen Therapy</button>
      <button class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow">Contact for Discovery Call</button>
    </section>

    <!-- Policy -->
    <section class="bg-white rounded-lg shadow p-8 text-center mt-16">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-700">Appointment Policy</h2>
      <p class="text-gray-500 mt-2">Please provide at least 24 hours’ notice for cancellations. Late cancellations or no-shows may be charged in full.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BowenTherapyPage'
}
</script>
