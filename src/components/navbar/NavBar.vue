<template>
  <!-- 横向导航栏 -->
  <header class="style2">
    <!-- 一行包括24栏，自己分配 -->
    <el-row>
      <!-- 网站LOGO -->
      <el-col :push="1" :span="2">
        <div class="logo">
          <h2>
            <router-link to="/" tag="span" title>Hikari</router-link>
          </h2>
        </div>
      </el-col>
      <!-- 导航栏菜单 -->
      <el-col :span="12" :push="5">
        <!-- nav标签用于定义导航链接 -->
        <nav>
          <ul>
            <li>
              <router-link to="/" class="navigation-item">首页</router-link>
            </li>
            <li>
              <router-link to="/category" class="navigation-item">分类</router-link>
            </li>
            <li>
              <router-link to="/tag" class="navigation-item">标签</router-link>
            </li>
            <li>
              <router-link to="/about" class="navigation-item">个人中心</router-link>
            </li>
          </ul>
        </nav>
      </el-col>
      <!-- 搜索控件 -->
      <el-col :span="4" :push="2" style="padding: 22px 11px 29px;">
        <!-- 这里直接监听enter按钮 -->
        <el-input v-model="message" placeholder="请输入内容"></el-input>
      </el-col>
      <!-- 登录组件：包含登录和未登录两种状态 -->
      <el-col :push="3" :span="2" style="padding: 27px 11px 29px;">
        <Login />
      </el-col>
    </el-row>
  </header>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/user/login/Login.vue";

export default {
  name: "NavBar",
  components: {
    Login
  },
  data(){
    return {
      message:""
    }
  }
};
</script>
<style>
.navigation-item {
  font-size: 10pt;
}
</style>