import ProgressPieChart from './components/Vue3TailwindPieChart.vue'

export { ProgressPieChart }

ProgressPieChart.install = (app) => {
  app.component('ProgressPieChart', ProgressPieChart)
  return app
}

export default ProgressPieChart
