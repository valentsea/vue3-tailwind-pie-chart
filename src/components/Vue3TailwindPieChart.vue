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
        v-if="typeof progress === 'number'"
        :class="chartClass"
        :style="{ pointerEvents: 'auto' }"
        :d="getPath(progress)"
      ></path>
      <template v-if="Array.isArray(props.progress)">
        <path
          v-for="value in arrayValues"
          :key="value.rotationDeg"
          :d="value.path"
          :class="value.elementClass"
          :style="{ transform: `rotate(${value.rotationDeg}deg)` }"
        ></path>
      </template>
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
  chartClass: String,
})

const progress = computed(() => props.progress)

const element = ref(null)

const slots = useSlots()

const viewBox = computed(() => {
  const diameter = element.value ? element.value.offsetWidth * 2 : 24

  return `-${diameter / 2} -${diameter / 2} ${diameter} ${diameter}`
})

const arrayValues = computed(() => {
  if (!Array.isArray(props.progress)) return []
  const values = []
  const arraySum = props.progress.reduce((partialSum, a) => partialSum + a, 0)
  props.progress.forEach((value, index) => {
    if (typeof value === 'number') {
      const percentage = (value * 100) / arraySum
      let elementClass = getRandomTailwindTextColorClass()
      let rotationDeg = getRotationDeg(values)

      if (index !== 0) {
        elementClass =
          elementClass === values[index - 1].elementClass
            ? getRandomTailwindTextColorClass()
            : elementClass
      }
      value = (percentage * 360) / 100
      values.push({
        percentage,
        path: getPath(percentage),
        rotationDeg,
        elementClass,
      })
    }
  })

  return values
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

const getRotationDeg = (prevValuesArray) => {
  return (
    (prevValuesArray.reduce((partialSum, a) => partialSum + a.percentage, 0) *
      360) /
    100
  )
}

const getRandomTailwindTextColorClass = () => {
  const tailwindColors = [
    'text-rose-500',
    'text-pink-500',
    'text-fuchsia-500',
    'text-purple-500',
    'text-violet-500',
    'text-indigo-500',
    'text-blue-500',
    'text-cyan-500',
    'text-teal-500',
    'text-emerald-500',
    'text-green-500',
    'text-lime-500',
    'text-yellow-500',
    'text-amber-500',
    'text-red-500',
    'text-gray-500',
  ]

  const randomElement =
    tailwindColors[Math.floor(Math.random() * tailwindColors.length)]

  return randomElement
}
</script>
