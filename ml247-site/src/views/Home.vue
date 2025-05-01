<template>
    <div class="p-8 min-h-screen flex flex-col gap-20 bg-neutral-400">

        <!-- Hero Section -->
        <section class="bg-white rounded-lg shadow p-8 flex flex-col md:flex-row items-center justify-between mb-16">
            <!-- Left Text -->
            <div class="space-y-4  max-w-lg">
                <h2 class="text-2xl md:text-4xl font-bold">Hi, I'm Jennifer</h2>
                <p class="text-gray-700">Looking to Improve Your Health? Let me show you how.</p>
                <button class="bg-primary hover:bg-green-400 text-white px-6 py-3 rounded-md">4 Month Roadmap to
                    Health</button>
            </div>
            <!-- Right Image -->
            <div class="mt-8 md:mt-0">
                <div class="w-64 h-40 bg-gray-300 rounded-lg flex items-center justify-center text-center">
                    PICTURE OF ME OUTDOORS
                </div>
            </div>
        </section>

        <!-- Pictures Section -->
        <section class="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 mb-16">
            <div
                class="bg-white rounded-lg shadow p-8 flex items-center justify-center min-h-[200px] w-full max-w-[250px] mx-auto">
                Picture</div>
            <div
                class="bg-white rounded-lg shadow p-8 flex items-center justify-center min-h-[200px] w-full max-w-[250px] mx-auto">
                Picture</div>
            <div
                class="bg-white rounded-lg shadow p-8 flex items-center justify-center min-h-[200px] w-full max-w-[250px] mx-auto">
                Picture</div>
            <div
                class="bg-white rounded-lg shadow p-8 flex items-center justify-center min-h-[200px] w-full max-w-[250px] mx-auto">
                Picture</div>
        </section>

        <!-- Mission Statement -->
        <section class="bg-white rounded-lg shadow p-8 text-center mb-16">
            <h2 class="text-2xl md:text-4xl font-bold uppercase">
                Mission Statement:<br />
                Helping those 40 years and older regain their health and enjoy living life.
            </h2>
        </section>

        <!-- Action Buttons Section -->
        <section class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <button class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow">Schedule Discovery
                Call</button>
            <button class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow">Testing</button>
            <button class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow">Body Therapies</button>
            <button class="bg-green-400 hover:bg-green-600 text-white py-6 rounded-lg shadow">Rife Frequencies</button>
        </section>

    </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
