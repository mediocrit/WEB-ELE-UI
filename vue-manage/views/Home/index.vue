<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="useImg" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
          <div class="login-info">
            <p>上次登陆时间:<span>11</span></p>
            <p>上次登陆地点:<span>22</span></p>
          </div>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="name" label="品牌" width="auto">
          </el-table-column>
          <el-table-column prop="todayBuy" label="今日购买" width="auto">
          </el-table-column>
          <el-table-column prop="monthBuy" label="本月购买" width="auto">
          </el-table-column>
          <el-table-column prop="totalBuy" label="总购买" width="auto">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 200px">
        <!-- <div style="height: 200px" ref="echarts"></div> -->
        <e-chart :chartData="echartData.order" style="height: 200px"> </e-chart>
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <!-- <div style="height: 240px" ref="userEcharts"></div> -->
          <e-chart :chartData="echartData.user" style="height: 260px"> </e-chart>
        </el-card>
        <el-card style="height: 260px">
          <!-- <div style="height: 240px" ref="videoEcharts"></div> -->
          <e-chart
            :isAxisChart="false"
            :chartData="echartData.video"
            style="height: 240px"
          >
          </e-chart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// import {getMenu} from '../../api/data.js'
import { getDate } from "../../api/data.js";
// import * as echarts from "echarts";


// import Echart from "../../src/components/eChart.vue";\
import eChart from "../../src/components/ECharts.vue"
export default {
  name: "vueHome",
  components: {
    eChart,
  },
  data() {
    return {
      useImg: require("@/assets/images/user.png"),
      tableData: [
        {
          name: "oppo",
          todayBuy: 100,
          monthBuy: 100,
          totalBuy: 1000,
        },
        {
          name: "vivo",
          todayBuy: 100,
          monthBuy: 200,
          totalBuy: 2000,
        },
        {
          name: "苹果",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 3000,
        },
        {
          name: "小米",
          todayBuy: 100,
          monthBuy: 400,
          totalBuy: 4000,
        },
        {
          name: "三星",
          todayBuy: 100,
          monthBuy: 500,
          totalBuy: 5000,
        },
        {
          name: "魅族",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 6000,
        },
      ],
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "coin",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    };
  },
  mounted() {
    // this.$http
    //   .get("/user?ID=12345")
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //
    getDate().then((res) => {
      const { code, data } = res.data;
      if (code === 20000) {
        this.tableData = data.tableData;
        const order = data.orderData;
        const xData = order.date;
        const keyArray = Object.keys(order.data[0]);
        const series = [];
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });
        //折线图
        // const option = {
        //   title: { text: "折线图" },
        //   tooltip: {},
        //   xAxis: {
        //     data: xDate,
        //   },
        //   yAxis: {},
        //   legend: {
        //     data: keyArray,
        //   },
        //   series,
        // };
        // const E = echarts.init(this.$refs.echarts);
        // E.setOption(option);
        this.echartData.order.xData = xData;
        this.echartData.order.series = series;
        //柱状图
        // const userOption = {
        //   tooltip: {
        //     trigger: "axis",
        //   },
        //   xAxis: {
        //     type: "category",
        //     data: data.userData.map((item) => item.date),
        //   },
        //   yAxis: {},
        //   legend: {
        //     textStyle: {
        //       color: "#333",
        //     },
        //   },
        //   series: [
        //     {
        //       name: "新增用户",
        //       data: data.userData.map((item) => item.new),
        //       type: "bar",
        //     },
        //     {
        //       name: "活跃用户",
        //       data: data.userData.map((item) => item.active),
        //       type: "bar",
        //     },
        //   ],
        // };
        // const U = echarts.init(this.$refs.userEcharts);
        // U.setOption(userOption);
        this.echartData.user.xData = data.userData.map((item) => item.date);
        this.echartData.user.series = [
          {
            name: "新增用户",
            data: data.userData.map((item) => item.new),
            type: "bar",
          },
          {
            name: "活跃用户",
            data: data.userData.map((item) => item.active),
            type: "bar",
          },
        ];
        //饼图
        // const videoOption = {
        //   tooltip: {
        //     trigger: "item",
        //   },
        //   series: [
        //     {
        //       type: "pie",
        //       data: data.videoData,
        //     },
        //   ],
        // };
        // const V = echarts.init(this.$refs.videoEcharts);
        // V.setOption(videoOption);
        this.echartData.video.series = [
          {
            type: "pie",
            data: data.videoData,
          },
        ];
      }
      console.log(res);
    });
  },
};
</script>

// .home { // display: flex; // background: green; // .el-card { //
border-radius: 5%; // display: flex; // // flex-direction: row; // flex-flow:
row wrap; // // align-self: flex-start; // justify-content: flex-start; // //
align-self: flex-start; // img { // width: 100px; // height: 100px; //
border-radius: 50%; // } // .userinfo { // flex: 1; // display: flex; // .name {
// display: inline-block; // text-align: center; // } // .access { // display:
inline-block; // text-align: center; // } // } // .login-info { // display:
flex; // align-self: flex-end; // flex-direction: column; // } // } // }
