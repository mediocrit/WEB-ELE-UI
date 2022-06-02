<template>
  <el-menu
    default-active="1-4-1"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>
    <!-- 包含首页、商品、用户界面 -->
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in noChildren"
      :index="item.path"
      :key="item.path"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span :slot="title">{{ item.label }}</span>
    </el-menu-item>

    <!-- 其他界面：page1和page2 -->
    <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :key="subItem.path"
      >
        <el-menu-item @click="clickMenu(subItem)" :index="subIndex">
          {{ subItem.label }}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  // background: #000;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    white-space: nowrap;
  }
}
</style>

<script>
export default {
  data() {
    return {
      menu: [],
      // menu: [
      //   {
      //     path: "/",
      //     name: "vueHome",
      //     label: "首页",
      //     icon: "s-home",
      //     url: "Home/Home",
      //   },
      //   {
      //     path: "/mall",
      //     name: "vueMall",
      //     label: "商品管理",
      //     icon: "video-play",
      //     url: "MallManage/MallManage",
      //   },
      //   {
      //     path: "/user",
      //     name: "vueUser",
      //     label: "用户管理",
      //     icon: "user",
      //     url: "UserManage/UserManage",
      //   },
      //   {
      //     path: "/other",
      //     label: "其他",
      //     icon: "location",
      //     children: [
      //       {
      //         path: "/page1",
      //         name: "vuePageOne",
      //         label: "页面1",
      //         icon: "setting",
      //         url: "Other/PageOne",
      //       },
      //       {
      //         path: "/page2",
      //         name: "vuePageTwo",
      //         label: "页面2",
      //         icon: "setting",
      //         url: "Other/PageTwo",
      //       },
      //     ],
      //   },
      // ],
    };
  },
  methods: {
    clickMenu(item) {
      this.$router.push({
        name: item.name,
      });
      this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    noChildren() {
      // return this.menu.filter((item) => !item.children);
      // console.log(this.asyncMenu.filter((item) => !item.children))
      return this.asyncMenu.filter((item) => !item.children);
    },
    hasChildren() {
      // return this.menu.filter((item) => item.children);
      // console.log(this.asyncMenu.filter((item) => item.children))
      return this.asyncMenu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
    asyncMenu() {
      return this.$store.state.tab.menu;
    },
  },
};
</script>
