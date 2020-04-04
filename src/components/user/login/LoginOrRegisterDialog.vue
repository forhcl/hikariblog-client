<!-- 对话框：登录或者注册 -->
<template>
  <!-- 现在存在一个问题就是，要把这个对话框里面是登录还是注册表单的选择暴露出去 -->
  <!-- 其次就是title是动态的，当用户使用请求注册的时候title是账号注册，当用户请求登录的时候是账号密码登录 -->
  <el-dialog
    title="账号注册"
    :visible.sync="false"
    width="30%"
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <LoginForm/>
  </el-dialog>
  <!-- <el-dialog
      title="账号密码登录"
      :visible.sync="loginDialogVisible"
      width="30%"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
  </el-dialog>-->
</template>

<script>
//把登录表单或注册表单引进来，然后我们再根据实际情况决定用哪一个
// @ is an alias to /src
import LoginForm from "@/components/user/login/LoginForm.vue";
import RegisterForm from "@/components/user/login/RegisterForm.vue";
export default {
  name:'LoginOrRegisterDialog',
  data() {
    return {};
  },
  components:{
    LoginForm,
    RegisterForm
  }
};
</script>