<template>
  <div class="heard">
      <el-row>
          <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                  <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    :background-color="color"
                    text-color="#fff"
                    active-text-color="#93e0ff">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台11</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3">订单管理</el-menu-item>
                    </el-menu>
              </div>
                <el-radio v-model="radio" label="1">备选项</el-radio>
  <el-radio v-model="radio" label="2">备选项</el-radio>
          </el-col>
      </el-row>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
export default {
  name: "heard",
  data() {
    return {
      activeIndex: "1",
      istrue: true,
      color: "#222",
      radio:"1",
    };
  },
  methods: {
    handleSelect(key, path) {
      console.log("key值：" + key + "path值：" + path);
    }
  }
};
</script>