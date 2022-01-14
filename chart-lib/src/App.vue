<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from '../src/components/BarChart.vue';
import LineChart from '../src/components/LineChart.vue';

export default {
  components: {
    BarChart,
    LineChart
  }
}
</script>

<style>

</style>