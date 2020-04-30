<!-- 评论模块，作为文章模块的子组件，接收文章模块传进来的id -->
<template>
  <!-- 自己兼容之后的评论组件 -->
  <el-card class="box-card" style="width:100%">
    <!-- 评论卡片的头部 -->
    <div slot="header" class="clearfix">
      <span>欢迎您发表评论</span>
    </div>
    <!-- 评论卡片的主体内容 -->
    <div>
      <label style="color:gray">请勿发表违法言语</label>
      <el-input
        style="resize:none;"
        type="textarea"
        rows="5"
        placeholder="说点什么吧..."
        maxlength="255"
        v-model="connent"
      ></el-input>
      <span class="pull-right">
        还能输入
        <b style="color:red">{{surplus}}</b>
        /{{total}}
      </span>
      <br />
      <!-- 发表评论按钮 -->
      <el-button
        type="primary"
        :disabled="connent.length<=10"
        @click="addComment"
        v-show="$store.state.user!=null"
      >发表</el-button>
      <div v-for="item in comment_data" :key="item.id">
        <table class="tb_comment table table-condensed">
          <tbody>
            <tr>
              <td class="tb_user">
                <el-avatar
                  size="large"
                  src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                ></el-avatar>
              </td>
              <td>
                <p>
                  {{item.user}} &nbsp;&nbsp;
                  <i class="glyphicon glyphicon-time"></i>
                  &nbsp;{{item.createTime}}
                </p>
                <div class="div_comment_content">{{item.content}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <table class="tb_comment table table-condensed" v-if="comment_data.length==0">
        <tbody>
          <tr>
            <td class="text-muted" style="width:100%">
              <h4>暂无评论...</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </el-card>
</template>

<script>
//引入网络模块
import { instance3 } from "../../network/index";
export default {
  props: {
    postId: Number
  },
  data() {
    return {
      //评论的最长字数
      total: 255,
      //评论内容
      connent: "",
      // 测试数据
      comment_data: []
    };
  },
  //创建的时候
  watch: {
    postId(o, n) {
      instance3({
        url: "/comment/" + this.postId,
        method: "GET"
      })
        .then(res => {
          this.comment_data = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log("fail");
        });
    }
  },
  methods: {
    //添加评论请求
    addComment() {
      instance3({
        //查找哪篇文章的id根据前端路由的路径参数决定
        url: "/comment/" + this.postId,
        method: "POST",
        data: {
          content: this.connent
        }
      })
        .then(res => {
          instance3({
            url: "/comment/" + this.postId,
            method: "GET"
          })
            .then(res => {
              this.comment_data = res.data;
              console.log(res);
            })
            .catch(err => {
              console.log("fail");
            });
        })
        .catch(err => {
          console.log("fail");
        });
    }
  },
  computed: {
    //还能输入的评论长度
    surplus() {
      return this.total - this.connent.length;
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
[v-cloak] {
  display: none;
}
.tb_comment {
  width: 100%;
  /* border: 1px solid; */
}
.tb_comment img {
  width: 64px;
  height: 64px;
}
.tb_user {
  width: 80px;
}

/* 用户评论内容展示 */
.div_comment_content {
  padding: 6px 12px;
  border: 1px solid #d2d6de;
  background-color: #f0f8ff;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>