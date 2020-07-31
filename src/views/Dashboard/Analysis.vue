<template>
    <div>
        <Chart :option="chartOption" style="height: 400px;"></Chart>
    </div>
</template>

<script>
  import Chart from "../../components/chart";
  import request from "../../utils/request";

  export default {
    name: "Analysis.vue",
    data() {
      return {
        chartOption: {}
      };
    },
    components: {
      Chart
    },
    mounted() {
      this.getChartData();
      this.Interval = setInterval(() => {
        this.getChartData();
      }, 3000);
    },
    beforeDestroy() {
      clearInterval(this.Interval);
    },
    methods: {
      getChartData() {
        request({
          url: "http://localhost:8081/api/dashboard/chart",
          method: "get",
          params: { ID: 23123 }
        }).then(response => {
          this.chartOption = {
            title: {
              text: "ECharts 入门示例"
            },
            tooltip: {},
            xAxis: {
              data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
              name: "销量",
              type: "bar",
              data: response.data
            }]
          };
        });
      }
    }
  };
</script>

<style scoped>

</style>