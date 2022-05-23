<template>
  <div class="tabs">
    <el-tag
      :key="item.name"
      v-for="(item, index) in tags"
      :closable="item.name !== 'vueHome'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @close="handleClose(item, index)"
      @click="changeMenu(item)"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTags",
  data() {
    return {};
  },
  //记录state的值
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabList,
    }),
  },
  methods: {
    ...mapMutations({
      close: "deleteTabList",
    }),
    //删除tags标签
    handleClose(item, index) {
      // this.tags.splice(this.tags.name.indexOf(item.name), 1);
      // this.$store.commit('deleteTabList',index)
      // this.$router.push({name:item.name})
      const length = this.tags.length - 1;
      this.close(item);
      if (item.name !== this.$route.name) {
        return;
      }
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },
  },
  // };
  // },
};
</script>
<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
