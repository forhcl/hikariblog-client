<template>
  <div>
    <!-- 横向导航栏 -->
    <header class="style2">
      <div class="container-fluid">
        <div class="logo">
          <h2>
            <router-link to="/" tag="span" title>Hikari</router-link>
          </h2>
        </div>
        <!-- logo end-->
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
        <!--navigation end-->
        <div class="rt-subs">
          <Login/>
          
          <a class="search-btn" @click="negationSearchPageisActive()" href="#" title>
            <i class="la la-search"></i>
          </a>
        </div>

        <!-- 响应式侧边栏打开按钮 -->
        <div class="menu-btn">
          <a href="#" title>
            <span class="bar1"></span>
            <span class="bar2"></span>
            <span class="bar3"></span>
          </a>
        </div>
        <!--menu-btn end-->
        <div class="clearfix"></div>
      </div>
    </header>

    <!--HEADER END-->

    <!-- 响应式的侧边栏菜单 -->
    <div class="side-menu">
      <a href="#" title class="close-sidemenu">
        <i class="la la-close"></i>
      </a>
      <ul class="navigation">
        <li>
          <a href="index.html" title>Home</a>
        </li>
        <li>
          <a href="standard-post.html" title>Standard Post</a>
        </li>
        <li>
          <a href="about.html" title>About</a>
        </li>
        <li>
          <a href="contact.html" title>Contact</a>
        </li>
      </ul>
      <!--navigation end-->
      <div class="logo">
        <h2>
          <a href="#" title>Hikari</a>
        </h2>
      </div>
      <!-- logo end-->
    </div>
    <!--side-menu end-->

    <!-- 搜索页面弹窗 -->
    <div class="search-page" :class="{ active: SearchPageisActive }">
      <form>
        <div class="container">
          <div class="form-field">
            <input type="text" name="search" placeholder="Enter Your Keywords" />
            <button type="submit">
              <i class="la la-search"></i>
            </button>
          </div>
        </div>
      </form>
      <a href="#" title class="close-search" @click="negationSearchPageisActive()">
        <i class="la la-close"></i>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/user/login/Login.vue'

export default {
  name: "NavBar",
  data() {
    return {
      //控制搜索框是否打开
      SearchPageisActive: false,
    };
  },
  components:{
    Login
  },
  methods: {
    negationSearchPageisActive() {
      this.SearchPageisActive = !this.SearchPageisActive;
    }
  }
};
</script>
<style>
.navigation-item {
  font-size: 10pt;
}
</style>