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
        <label style="color:gray">请勿发表与本片无关的主题，评论需要审核</label>
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
        <el-button type="primary" disabled>发表</el-button>
        <div v-for="item in comment_data" :key="item.Id">
          <table class="tb_comment table table-condensed">
            <tbody>
              <tr>
                <td class="tb_user">
                  <el-avatar size="large" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                </td>
                <td>
                  <p>
                    {{item.NickName}} &nbsp;&nbsp;
                    <i class="glyphicon glyphicon-time"></i>
                    &nbsp;{{item.CreateTime|date}}
                  </p>
                  <div class="div_comment_content">{{item.CommentContent}}</div>
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
export default {
  data() {
    return {
      //评论的最长字数
      total: 255,
      //评论内容
      connent: "",
      // 测试数据
      comment_data: [
        {
          Id: 1,
          PortraitUrl: "../images/user2-160x160.jpg",
          NickName: "那年初夏",
          CommentContent: "劝君更敬一杯酒",
          CreateTime: new Date()
        },
        {
          Id: 2,
          PortraitUrl: "../images/user2-160x160.jpg",
          NickName: "列夫托尔斯泰",
          CommentContent: "这个部电影指的我们去好好看看。",
          CreateTime: new Date()
        }
      ]
    };
  },
  computed: {
    //还能输入的评论长度
    surplus() {
      return this.total - this.connent.length;
    }
  },
  // 自定义过滤器
  filters: {
    //时间过滤器
    date: function(d) {
      var newdate = new Date(d);
      let y = newdate.getFullYear();
      let m = (newdate.getMonth() + 1).toString().padStart(2, "0");
      d = newdate
        .getDay()
        .toString()
        .padStart(2, "0");
      let hh = newdate
        .getHours()
        .toString()
        .padStart(2, "0");
      let mm = newdate
        .getMinutes()
        .toString()
        .padStart(2, "0");
      let ss = newdate
        .getSeconds()
        .toString()
        .padStart(2, "0");
      return y + "-" + m + "-" + d + " " + hh + ":" + mm + ":" + ss;
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