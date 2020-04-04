<!-- 注册表单封装 -->
<template>
  <!-- 注册表单页面 -->
  <el-form :model="register">
    <!-- 用户名 -->
    <el-form-item
      prop="username"
      :rules="[
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { max: 15, message: '最多为 15 个字符', trigger: 'blur' }
    ]"
    >
      <el-input v-model.trim="register.username" placeholder="输入用户名"></el-input>
    </el-form-item>
    <!-- 密码 -->
    <el-form-item
      prop="password"
      :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' },
      { max: 20, message: '最多为 20 个字符', trigger: 'blur' }
    ]"
    >
      <el-input v-model.trim="register.password" placeholder="输入密码" show-password></el-input>
    </el-form-item>
    <!-- 电话号码 -->
    <el-form-item
      prop="phone"
      :rules="[
      { required: true, message: '请输入电话号码', trigger: ['blur', 'change'] },
      { max: 20, message: '最多为 20 个字符', trigger: ['blur', 'change'] }
    ]"
    >
      <el-input v-model.trim="register.phone" placeholder="输入电话号码"></el-input>
    </el-form-item>
    <!-- 邮箱 -->
    <el-form-item
      prop="email"
      :rules="[
      { required: true, message: '请输入邮箱地址', trigger: ['blur', 'change'] },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
    >
      <el-input v-model.lazy="register.email" placeholder="输入邮箱"></el-input>
    </el-form-item>
    <!-- 地址，后期地址搞个给用户选的！！ -->
    <el-form-item
      prop="address"
      :rules="[
      { required: true, message: '请输入当前住址', trigger: ['blur', 'change'] }
    ]"
    >
      <el-input v-model.lazy="register.address" placeholder="输入住址"></el-input>
    </el-form-item>
    <el-form-item>
      <router-link to="/loginOrRegister/login" tag="a">用户名密码登录</router-link>
      <el-button type="primary" @click="registeroperation()">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
//引入网络模块
import { instance3 } from "../../../network/index";
export default {
  name: "RegisterFrom",
  data() {
    return {
      //注册用户信息
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
          //注册之后跳到登录页面
          this.$router.push('/loginOrRegister/login')
        })
        .catch(err => {
          //注册失败消息提示
          this.$message.error(err.response.data.message);
        });
    }
  }
};
</script>