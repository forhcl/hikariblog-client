<!-- 登录表单封装 -->
<template>
    <!-- 登录表单页面 -->
    <el-form :model="login">
      <!-- 用户名 -->
      <el-form-item
        prop="username"
        :rules="[
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { max: 15, message: '最多为 15 个字符', trigger: 'blur' }
    ]"
      >
        <el-input v-model.trim="login.username" placeholder="用户名" autocomplete="off"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item
        prop="password"
        :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' },
      { max: 20, message: '最多为 20 个字符', trigger: 'blur' }
    ]"
      >
        <el-input v-model.trim="login.password" placeholder="密码" show-password autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <router-link to="/loginOrRegister/register" tag="a">账号注册</router-link>
        <el-button type="primary" @click="loginoperation()">登录</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
//引入网络模块
import { instance1 } from "../../../network/index";
import Qs from "qs";
export default {
  name: "LoginForm",
  data() {
    return {
      login: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
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
          this.$store.commit("login", res.data.currentUser);
          //成功之后跳转到首页
          this.$router.push("/")
        })
        .catch(err => {
          //登录失败消息提示
          this.$message.error(err.response.data.message);
        });
    }
  }
};
</script>