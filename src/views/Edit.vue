<!-- 文章编辑页面：再如果一个前端的MarkDowm编辑器 -->
<template>
  <!-- Markdown编辑器 -->
  <mavon-editor ref="md" @imgAdd="$imgAdd" v-model="post.markdownContent" placeholder="输入正文…"></mavon-editor>
</template>

<script>
//引入网络模块
import { instance1, instance2 } from "../network/index";

export default {
  name: "Edit",
  data() {
    return {
      post: {
        markdownContent: ""
      },
      token: ""
    };
  },
  methods: {
    // 绑定@imgAdd event，编辑器中图片上传事件
    async $imgAdd(pos, $file) {
      //第一步：到业务服务器中请求一个token
      await instance1({
        url: "/upToken/postImage",
        method: "GET"
      })
        .then(res => {
          //将token存起来，下一个请求要使用
          this.token = res.data;
        })
        .catch(err => {
          //获取上传凭证失败消息提示
          this.$message.error("获取失败");
        });
      //第二步：手持上传凭证将图片上传到七牛云图床
      let formdata = new FormData();
      formdata.append("file", $file);
      formdata.append("token", this.token);
      await instance2({
        //华南存储区域：客户端上传
        url: "http://upload-z2.qiniup.com",
        method: "POST",
        data: formdata
      })
        .then(res => {
          // 将返回的url替换到文本原位置![...](0) -> ![...](url)
          /**
           * $vm 指为mavonEditor实例，可以通过如下两种方式获取
           * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
           * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
           */
          this.$refs.md.$img2Url(
            pos,
            "http://cdn.hikariblog.cn/" + res.data.hash
          );
          console.log(res);
        })
        .catch(err => {
          //上传失败消息提示
          this.$message.error("上传失败");
        });
    }
    //
  },
  components: {}
};
</script>