<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl mb-8 font-medium text-center">
      Vue 3 Tailwind Progress Pie Chart
    </h1>
    <div class="flex gap-8 w-full">
      <div
        class="border mx-auto pt-6 pb-12 px-12 flex flex-col items-center justify-center rounded-lg shadow-sm bg-white"
      >
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
        </div>

        <progress-pie-chart
          class="w-96 h-96 bg-slate-50 border shadow-sm"
          :progress="progress"
          progress-class="text-blue-500 hover:text-blue-700  transition-colors"
        >
          <template #center>
            <span class="text-6xl text-yellow-400">{{ progress }}% </span>
          </template>
        </progress-pie-chart>
      </div>
      <div
        class="border mx-auto pt-6 pb-12 px-12 flex flex-col items-center justify-center rounded-lg shadow-sm bg-white"
      >
        <div class="mb-8 flex items-center gap-4">
          Progress
          <input
            v-model.number="progressTwo"
            step="1"
            min="0"
            max="100"
            type="range"
            class="w-24 border"
          />
        </div>

        <progress-pie-chart
          class="w-96 h-96 bg-slate-50 border shadow-sm"
          :progress="progressTwo"
          progress-class="text-blue-500 hover:text-blue-700  transition-colors"
        >
          <template #center>
            <div
              class="h-52 w-52 bg-white rounded-full shadow-inner border"
            ></div>
          </template>
        </progress-pie-chart>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressPieChart from './index'

const progress = ref(70)
const progressTwo = ref(30)
</script>
