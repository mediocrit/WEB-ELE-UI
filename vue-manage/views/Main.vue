<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <!-- //Tags预留位 -->
      <common-tags></common-tags>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../src/components/CommonAside.vue";
import CommonHeader from "../src/components/CommonHeader.vue";
import CommonTags from "../src/components/CommonTags.vue";

export default {
  name: "vueMain",
  components: {
    CommonAside,
    CommonHeader,
    CommonTags,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less">
.el-header {
  background: #333;
}
.el-main {
  padding-top: 0;
}
</style>
