<template>
  <div class="flex flex-wrap gap-8">
    <div
      class="rounded-full w-16 h-16 bg-black hover:bg-slate-100 overflow-hidden"
    ></div>

    <div
      class="border mx-auto max-w-2xl h-full px-8 pt-6 pb-12 flex flex-col items-center justify-center rounded-lg shadow-sm bg-white"
    >
      <h1 class="text-3xl mb-12 font-medium">
        Vue 3 Tailwind Simple Pie Chart
      </h1>
      <div class="mb-8 flex items-center gap-4">
        Progress
        <input
          v-model.number="progress"
          step="1"
          min="0"
          max="100"
          type="range"
          class="w-24 border"
        />

        <button @click="progress = 70">Set 70%</button>
        <button @click="progress = 30">Set 30%</button>
      </div>

      <pie-chart
        class="w-96 h-96 bg-slate-50 border shadow-lg"
        :animation="true"
        :progress="progress"
        chart-class="text-blue-500 hover:text-blue-700"
      >
        <template #center>
          <span class="text-6xl text-yellow-400"
            >{{ progress }}%</span
          ></template
        >
      </pie-chart>
    </div>
    <div
      class="border mx-auto max-w-2xl h-full px-8 pt-6 pb-12 flex flex-col items-center justify-center rounded-lg shadow-sm bg-white"
    >
      <h1 class="text-3xl mb-12 font-medium">
        Vue 3 Tailwind Simple Pie Chart
      </h1>
      <div class="mb-8 flex items-center gap-4"></div>
      <pie-chart
        class="w-96 h-96 bg-slate-50 text-blue-500 border shadow-lg"
        :progress="[50, 50, 50]"
      >
      </pie-chart>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PieChart from './components/Vue3TailwindPieChart.vue'

const progress = ref(70)
</script>
