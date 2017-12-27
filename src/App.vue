<template>
  <div id="app">
    <heard-tab></heard-tab>
    <el-row>
      <el-col :span="3">
        <left-tab></left-tab>
      </el-col>
      <el-col :span="21">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import heardTab from '@/components/heard/heard'
  import leftTab from '@/components/left/left'
export default {
  name: 'app',
  data (){
    return{
      
    }
  },
  components:{
    heardTab,
    leftTab,
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
