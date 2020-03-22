<!-- 登录注册功能封装 -->
<!-- 其实可以把登录表单、注册表单各封装一个组件，然后成为这个组件的子组件，嵌入到模态框里面
这样子就可以公用一个模态框 这时候就不会出现现在登录注册切换的时候的闪屏，导致用户体验不好 -->
<template>
  <span>
    <!-- 登录按钮 -->
    <span class="subscribe-btn" @click="loginDialogVisible = true" title>登录</span>

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
        <el-button type="primary" @click="loginDialogVisible = false">登录</el-button>
      </div>
    </el-dialog>

    <!-- 注册按钮 -->
    <span class="subscribe-btn" @click="registerDialogVisible=true" title>注册</span>

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
        <el-button type="primary" @click="registerDialogVisible = false">注册</el-button>
      </div>
    </el-dialog>
  </span>
</template>

<script>
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
  methods:{
    switchoverLoginAndRegister(){
      this.loginDialogVisible=!this.loginDialogVisible,
      this.registerDialogVisible=!this.registerDialogVisible
    }
  }
};
</script>