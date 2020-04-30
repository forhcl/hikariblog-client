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
        <!-- 这里直接监听enter按钮  这里出现一个问题，就是连续访问同一个页面数据不会刷新 -->
        <el-input v-model="message" placeholder="请输入内容" @change="search"></el-input>
      </el-col>
      <!-- 登录、注册按钮/新建文章、退出登录 -->
      <el-col :push="3" :span="3" style="padding: 27px 11px 29px;">
        <!-- 一、登录状态 -->
        <span v-show="$store.state.user!=null">
          <router-link to="/edit" tag="el-link">编写文章</router-link>
          <el-divider direction="vertical"></el-divider>

          <!-- 注销现在只是在前台注销，没有发送网络请求到后台，以后再加 -->
          <el-link @click="logout()">注销</el-link>
        </span>
        <!-- 二、未登录状态 -->
        <span v-show="$store.state.user==null">
          <router-link to="/loginOrRegister/login" tag="el-link">登录</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link to="/loginOrRegister/register" tag="el-link">注册</router-link>
        </span>
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    logout() {
      this.$store.commit("logout"),
        //注销之后跳到首页
        this.$router.replace("/");
    },
    search(){
      this.$router.push({path:'/search',query:{
      keyWord:this.message
    }})
    }
  }
};
</script>
<style>
.navigation-item {
  font-size: 10pt;
}
</style>