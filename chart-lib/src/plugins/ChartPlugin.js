import Chart from 'chart.js';

export default {
    install(Vue){
        Vue.prototype.$_Chart = Chart;

        // BartChart.vue
        // this.$_Chart

        // LineChart.vue
        // this.$_Chart
    }
}