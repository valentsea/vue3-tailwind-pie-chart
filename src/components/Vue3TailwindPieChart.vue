<template>
  <div
    ref="element"
    :style="{ position: 'relative', borderRadius: '50%', overflow: 'hidden' }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="viewBox"
      :style="{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: '50%',
        transform: 'rotate(-90deg)',
        pointerEvents: 'none',
      }"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        :class="progressClass"
        :style="{ pointerEvents: 'auto' }"
        :d="getPath(progress)"
      ></path>
    </svg>
    <div
      v-if="slots.center"
      :style="{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }"
    >
      <slot name="center"></slot>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, useSlots } from 'vue'

const props = defineProps({
  progress: {
    type: [Number, Array],
    default: 0,
  },
  progressClass: String,
})

const progress = computed(() => props.progress)

const element = ref(null)

const slots = useSlots()

const viewBox = computed(() => {
  const diameter = element.value ? element.value.offsetWidth : 24

  return `-${diameter / 2} -${diameter / 2} ${diameter} ${diameter}`
})

const getPath = (value) => {
  const angle = value * 3.6
  const diameter = element.value ? element.value.offsetWidth : 24
  const coords = []
  coords[0] = diameter * Math.cos((Math.PI * angle) / 180)
  coords[1] = diameter * Math.sin((Math.PI * angle) / 180)
  const path = `M0,0 L${diameter},0 A${diameter},${diameter}, 0 1,1 ${coords[0]},${coords[1]} Z`

  return path
}
</script>
