<template>
  <el-form :model="form" ref="form" label-width="100px" :inline="inline">
    <el-form-item
      v-for="item in formLabel"
      :key="item.label"
      :label="item.label"
    >
      <!-- 若type为input -->
      <el-input
        v-if="item.type === 'input'"
        :placeholder="'请输入' + item.label"
        v-model="localForm[item.model]"
      ></el-input>
      <!-- 若type为switch -->
      <el-switch
        v-if="item.type === 'switch'"
        v-model="localForm[item.mode]"
      ></el-switch>
      <!-- 若type为date-picker -->
      <el-date-picker
        v-if="item.type === 'date'"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期"
        v-model="localForm[item.model]"
      ></el-date-picker>
      <!-- 若type为select -->
      <el-select
        v-if="item.type === 'select'"
        placeholder="'请选择'"
        v-model="localForm[item.model]"
      >
        <el-option
          v-for="item in item.opts"
          :key="item.val"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item> <slot></slot></el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "CommonForm",
  props: {
      
    formLabel: Array,
    form: Object,
    inline: Boolean,
  },
  data() {
      return{
          localForm:this.form
      }
  },
};
</script>
