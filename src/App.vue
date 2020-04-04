<template>
  <!-- 整体垂直布局 -->
  <el-container id="app">
    <!-- 1、导航栏 -->
    <el-header height="80px">
      <NavBar />
    </el-header>
    <!-- 2、主要内容 -->
    <el-main>
      <router-view />
    </el-main>
    <!-- 3、版权声明 -->
    <el-footer style="background-color:#C0C4CC">
      <!-- 许可证 把ICP写上去 -->
      <p>{{license}}</p>
    </el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src
// 导航栏
import NavBar from "@/components/navbar/NavBar.vue";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      license: "©2018 Heeney. All Rights Reserved."
    };
  }
};
</script>
<style>
@import "./assets/css/all.min.css";
@import "./assets/css/animate.css";
@import "./assets/css/color.css";
@import "./assets/css/line-awesome.min.css";
@import "./assets/css/normalize.css";
@import "./assets/css/responsive.css";
@import "./assets/css/style.css";
</style>
