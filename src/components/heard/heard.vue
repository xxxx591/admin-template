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
                    <a href="javascript:;"><img src="../../assets/logo.png" alt="logo" srcset="" height="60" class="logo"></a>
                    <el-submenu index="1" class="state-user">
                        <template slot="title">{{username}}</template>
                        <el-menu-item index="1-1">个人资料</el-menu-item>
                        <el-menu-item index="1-2">退出</el-menu-item>
                    </el-submenu>
                    </el-menu>
              </div>
          </el-col>
      </el-row>
  </div>
</template>
<style  scoped>
.logo{
  vertical-align: middle;
  float: left;
}
.state-user{
  float: right;
}
.el-submenu .el-menu-item{
  min-width: auto;
}
</style>
<script>
export default {
  name: "heard",
  data() {
    return {
      activeIndex: "1",
      istrue: true,
      color: "#222",
      username:'超级管理员'
    };
  },
  methods: {
    handleSelect(key, path) {
      console.log("key值：" + key + "path值：" + path);
    }
  }
};
</script>