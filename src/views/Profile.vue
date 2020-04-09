<template>
  <!-- 这里用来显示用户的个人信息 -->
  <el-container>
    <el-main>
      <!-- 头像上传、修改用户信息 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>个人资料</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="editUser()">编辑</el-button>
        </div>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <!-- 头像的链接后期得变成数据库里面的 -->
              <el-avatar
                shape="square"
                :size="100"
                src="http://cdn.hikariblog.cn/Fg32ZPhdu5J4WQMwYZKivAUnfVBi"
              ></el-avatar>
            </div>
          </el-col>
          <el-col :span="18" v-show="!isEditUser">
            <div class="grid-content bg-purple">
              <div class="text item">昵称：{{user.username}}</div>
              <div class="text item">现居地：{{user.address}}</div>
              <div class="text item">联系电话：{{user.phone}}</div>
              <div class="text item">邮箱：{{user.email}}</div>
            </div>
          </el-col>
          <el-col :span="18" v-show="isEditUser">
            <div class="grid-content bg-purple">
              <el-form label-position="right" label-width="80px" :model="user">
                <el-form-item label="昵称">
                  <div class="text item">{{user.username}}</div>
                </el-form-item>
                <el-form-item label="现居地">
                  <el-input v-model="user.address"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                  <el-input v-model="user.phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                  <el-input v-model="user.email"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="save()">保存</el-button>
                  <el-button type="primary" @click="editUser()">取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
//引入网络模块
import { instance3 } from "../network/index";
export default {
  name: "Profile",
  data() {
    return {
      isEditUser: false,
      user: {
        username: this.$store.state.user.username,
        address: this.$store.state.user.address,
        phone: this.$store.state.user.phone,
        email: this.$store.state.user.email
      }
    };
  },
  methods: {
    //进入、退出编辑状态
    editUser() {
      this.isEditUser = !this.isEditUser;
    },
    save() {
      instance3({
        url: "/user",
        method: "PUT",
        data: {
          phone: this.user.phone,
          address: this.user.address,
          email: this.user.email
        }
      })
        .then(res => {
          //修改成功消息提示
          this.$message({
            message: "修改成功",
            type: "success"
          });
          //修改成功之后需要对localStore里面的内容进行重置
          this.$store.commit("editUser", this.user);
          //修改成功之后跳回不可编辑状态
          this.isEditUser = !this.isEditUser;
        })
        .catch(err => {
          //修改失败消息提示
          this.$message.error(err.response.data.message);
        });
    }
  }
};
</script>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.box-card {
  width: 700px;
}
</style>