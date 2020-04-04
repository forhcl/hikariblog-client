<!-- 对话框：登录或者注册 -->
<template>
  <!-- 其次就是title是动态的，当用户使用请求注册的时候title是账号注册，当用户请求登录的时候是账号密码登录 -->
  <div>
    <el-dialog
      :modal="true"
      :modal-append-to-body="true"
      title="账号注册"
      :visible="$store.state.user==null"
      width="30%"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <!-- 嵌套路由占位符 -->
      <router-view />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "LoginOrRegisterDialog",
  data() {
    return {
    };
  }
};
</script>