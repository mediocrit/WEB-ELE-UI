<!-- //shouxie -->
<template>
  <div ref="echart"></div>
</template>
<script>
import * as echarts from "echarts";

export default {
  //  return (){
  // 基本属性
  props: {
    isAxisChart: {
      type: Boolean,
      default: true,
    },
    //  }
    chartData: {
      type: Object,
      default() {
        return {
          series: [],
          xData: [],
        };
      },
    },
  },
  watch: {
    chartData: {
      handler: function () {
        // this.initChartData();
        this.initChart();
      },
      deep: true,
    },
  },
  methods: {
    //拿到数据
    initChartData() {
      if (this.isAxisChart) {
        this.axisOptions.xAxis.data = this.chartData.xData;
        this.axisOptions.series = this.chartData.series;
      } else {
        this.normalOptions.series = this.chartData.series;
      }
    },
    //格式化echarts
    initChart() {
      this.initChartData();
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
  },
  //option的模板
  data() {
    return {
      //折线图/柱状图的option的模板
      // axisOptions: {},
      //饼图的option的模板
      // normalOptions: {},

      axisOptions: {
        //图例文字颜色
        textStyle: { color: "#333" },
        grid: { left: "20px" },
        //提示框
        tooltip: {
          trigger: "axis",
        },
        legend: {},
        xAxis: {
          type: "category",
          data: [],
          axisLine: {
            lineStyle: { color: "#17b3a3" },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: [
          "#2ec7c9",
          "#b6a2de",
          "#5ab1ef",
          "#ffb980",
          "#d87a80",
          "#8d98b3",
        ],
        series: [],
      },

      normalOptions: {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [],
      },
      echart: null,
    };
  },
  //判断echart是折线图/柱状图还是饼图
  computed: {
    options() {
      return this.isAxisChart ? this.axisOptions : this.normalOptions;
    },
  },
};
</script>
