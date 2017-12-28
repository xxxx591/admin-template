<template>
  <div>
        <el-row>
          <el-col :span="24">
            <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#222"
                text-color="#fff"
                active-text-color="#93e0ff"
                :unique-opened="onlyOpen"
                :router="true">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>Basic</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/Basic/layoutt">layout布局</el-menu-item>
                        <el-menu-item index="/Basic/containerr">container布局容器</el-menu-item>
                        <el-menu-item index="/Basic/colorr">color色彩</el-menu-item>
                        <el-menu-item index="/Basic/typographyy">typography字体</el-menu-item>
                        <el-menu-item index="/Basic/iconn">icon图标</el-menu-item>
                        <el-menu-item index="/Basic/buttonn">button按钮</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>Form</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="(item,key) in formList" :key="key" :index="item.path">{{item.title}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
  </div>
</template>
<style>
.el-submenu .el-menu-item {
  min-width: auto;
  text-align: left;
}
.el-submenu__title,.el-menu-item-group,.el-menu-item-group__title{
  min-width: 180px;
}
.el-menu-item-group__title{
  padding: 0;
}
</style>
<script>
export default {
  name: "left",
  data() {
    return {
      msg: "大家好",
      onlyOpen: true,
      formList: [
        { path:'/Form/radioo',title:'Radio 单选框'},
        { path:'/Form/checkboxx',title:'Checkbox 多选框'},
        { path:'/Form/inputt',title:'Input 输入框'},
        { path:'/Form/inputnumber',title:'InputNumber 计数器'},
        { path:'/Form/selectt',title:'Select 选择器'},
        { path:'/Form/cascaderr',title:'Cascader 级联选择器'},
        { path:'/Form/switchh',title:'Switch 开关'},
        { path:'/Form/sliderr',title:'Slider 滑块'},
        { path:'/Form/timepickerr',title:'TimePicker 时间选择器'},
        { path:'/Form/datepickerr',title:'DatePicker 日期选择器'},
        { path:'/Form/datetmepickerr',title:'DateTimePicker 日期时间选择器'},
        { path:'/Form/uploadd',title:'Upload 上传'},
        { path:'/Form/ratee',title:'Rate 评分'},
        { path:'/Form/colorpickerr',title:'ColorPicker 颜色选择器'},
        { path:'/Form/transferr',title:'Transfer 穿梭框'},
        { path:'/Form/formm',title:'Form 表单'},
      ]
    };
  },
  methods: {
    handleClose() {
      console.log("关闭了");
    },
    handleOpen() {
      console.log("打开了");
    }
  }
};
</script>
