<!-- 登录注册功能封装 -->
<!-- 其实可以把登录表单、注册表单各封装一个组件，然后成为这个组件的子组件，嵌入到模态框里面
这样子就可以公用一个模态框 这时候就不会出现现在登录注册切换的时候的闪屏，导致用户体验不好 -->
<template>
  <span>
    <!-- 一、登录状态 -->
    <!-- 1、新建文章按钮 -->
    <!-- <router-link to="/edit" tag="el-button">新建文章</router-link> -->
    <!-- 2、个人中心按钮，用户登录之后再把src改成动态的用户avatar -->
    <!-- <el-avatar shape="square" size="small" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-avatar> -->

    <!-- 二、未登录状态 -->
    <!-- 1、登录按钮 -->
    <el-link type="primary" @click="loginDialogVisible = true">登录</el-link>
    <el-divider direction="vertical"></el-divider>
    <!-- 2、注册按钮 -->
    <el-link type="primary" @click="registerDialogVisible=true">注册</el-link>


    <!-- 难点：怎么控制登录注册对话框要不要弹出来？
    根据用户是否登录？不，这个是在全局导航守卫里面判断后才弹出登录弹窗的
    不能在这里进行判断，在这里进行判断就变成所有的页面都要在没登录的时候进行弹出来，但是我有一些页面是没有登录也可以看的
    还有一个问题，就是我这个弹窗到时候是在页面上面，而不是单独一个页面！！所以感觉不能单独配一个路由
    还有一个就是，我这个登录对话框在很多个页面中复用！！！所以不能单独做某一个页面的子组件  -->
    <!-- 登录对话框 -->
    <el-dialog
      title="账号密码登录"
      :visible.sync="loginDialogVisible"
      width="30%"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form :model="login">
        <el-form-item
          prop="username"
          :rules="[
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { max: 15, message: '最多为 15 个字符', trigger: 'blur' }
    ]"
        >
          <el-input v-model.trim="login.username" placeholder="用户名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="password"
          :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' },
      { max: 20, message: '最多为 20 个字符', trigger: 'blur' }
    ]"
        >
          <el-input v-model.trim="login.password" placeholder="密码" show-password autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="switchoverLoginAndRegister()">账号注册</el-button>
        <el-button type="primary" @click="loginoperation()">登录</el-button>
      </div>
    </el-dialog>

    <!-- 注册对话框 -->
    <el-dialog
      title="账号注册"
      :visible.sync="registerDialogVisible"
      width="30%"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form :model="register">
        <el-form-item
          prop="username"
          :rules="[
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { max: 15, message: '最多为 15 个字符', trigger: 'blur' }
    ]"
        >
          <el-input v-model.trim="register.username" placeholder="输入用户名"></el-input>
        </el-form-item>
        <el-form-item
          prop="password"
          :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' },
      { max: 20, message: '最多为 20 个字符', trigger: 'blur' }
    ]"
        >
          <el-input v-model.trim="register.password" placeholder="输入密码" show-password></el-input>
        </el-form-item>
        <!-- 电话号码后台也没有要求，加上去也不会有错 -->
        <el-form-item
          prop="phone"
          :rules="[
      { required: true, message: '请输入电话号码', trigger: ['blur', 'change'] },
      { max: 20, message: '最多为 20 个字符', trigger: ['blur', 'change'] }
    ]"
        >
          <el-input v-model.trim="register.phone" placeholder="输入电话号码"></el-input>
        </el-form-item>
        <!-- 邮箱后台没有要求必须，但是加上去总不会有错 -->
        <el-form-item
          prop="email"
          :rules="[
      { required: true, message: '请输入邮箱地址', trigger: ['blur', 'change'] },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
        >
          <el-input v-model.lazy="register.email" placeholder="输入邮箱"></el-input>
        </el-form-item>
        <!-- 地址后台也没有要求，但是加上去不会有错，这里希望能找个选的给用户选，而不是直接全部让用户写 -->
        <el-form-item
          prop="address"
          :rules="[
      { required: true, message: '请输入当前住址', trigger: ['blur', 'change'] }
    ]"
        >
          <el-input v-model.lazy="register.address" placeholder="输入住址"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="switchoverLoginAndRegister()">用户名密码登录</el-button>
        <el-button type="primary" @click="registeroperation()">注册</el-button>
      </div>
    </el-dialog>
  </span>
</template>

<script>
//引入网络模块
import { instance1, instance3 } from "../../../network/index";
import Qs from "qs";

export default {
  name: "Login",
  data() {
    return {
      //登录对话框是否打开
      loginDialogVisible: false,
      //注册对话框是否打开
      registerDialogVisible: false,
      login: {
        username: "",
        password: ""
      },
      register: {
        username: "",
        password: "",
        phone: "",
        address: "",
        email: ""
      }
    };
  },
  methods: {
    switchoverLoginAndRegister() {
      (this.loginDialogVisible = !this.loginDialogVisible),
        (this.registerDialogVisible = !this.registerDialogVisible);
    },
    //登录网络请求
    loginoperation() {
      instance1({
        url: "/login",
        method: "POST",
        data: {
          username: this.login.username,
          password: this.login.password
        },
        transformRequest: [
          function(data) {
            // 对 data 进行任意转换处理
            return Qs.stringify(data);
          }
        ]
      })
        .then(res => {
          //登录成功消息提示
          this.$message({
            message: res.data.message,
            type: "success"
          });
          //登录成功之后把登录用户的信息保存到Vuex！！
          this.$store.commit('login',res.data.currentUser)
          //关闭登录对话框
          this.loginDialogVisible = false;
        })
        .catch(err => {
          //登录失败消息提示
          this.$message.error(err.response.data.message);
        });
    },
    // 注册网络请求
    registeroperation() {
      instance3({
        url: "/user",
        method: "POST",
        data: {
          username: this.register.username,
          password: this.register.password,
          phone: this.register.phone,
          address: this.register.address,
          email: this.register.email
        }
      })
        .then(res => {
          //注册成功消息提示
          this.$message({
            message: "注册成功",
            type: "success"
          });
          //切换到登录界面
          this.loginDialogVisible = !this.loginDialogVisible,
          this.registerDialogVisible = !this.registerDialogVisible;
        })
        .catch(err => {
          //注册失败消息提示
          this.$message.error(err.response.data.message);
        });
    }
  }
};
</script>