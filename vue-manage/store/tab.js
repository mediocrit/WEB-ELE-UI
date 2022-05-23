export default {
  state: {
    isCollapse: false,
    tabList: [
      {
        path: "/home",
        name: "vueHome",
        label: "首页",
        icon: "s-home",
        // url: "Home/Home",
      },
    ],
    currentMenu: null,
  },
  mutations: {
    //隐藏左侧菜单栏
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    //点击左侧菜单栏，更新面包屑的状态
    selectMenu(state, val) {
      if (val.name !== "vuehome") {
        state.currentMenu = val;
        const result = state.tabList.findIndex(
          (item) => item.name === val.name
        );
        if (result === -1) {
          state.tabList.push(val);
        }
      } else {
        state.currentMenu = null;
      }
    },
    //删除store中state的tabList某一个数组
    deleteTabList(state,val){
      const result=state.tabList.findIndex(item=>item.name===val.name)
      state.tabList.splice(result, 1)
     
    }
  },
};
