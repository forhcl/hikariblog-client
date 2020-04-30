<!-- 文章缩略卡片 -->
<template>
  <div>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <!-- 第一行 -->
    <el-row :gutter="20">
        {{post.author}}&nbsp;&nbsp;{{post.updateTime}}
    </el-row>
    <!-- 第二行 -->
    <el-row :gutter="10">
      <el-col>
        <div>
          <router-link :to="'/post/'+post.id" tag="a" style="color:black">
          <h4 v-html="post.title"></h4><br/>
          <p v-html="post.htmlContent"></p></router-link>
        </div>
      </el-col>
    </el-row>
    <!-- 第三行 -->
    <el-row>
      <p>
        <!-- 阅读数 -->
        <i class="el-icon-view"></i>
        &nbsp;{{post.readCount}}
        <!-- 评论数 -->
        <el-divider direction="vertical"></el-divider>
        <i class="el-icon-chat-dot-square"></i>
        &nbsp;{{post.commentCount}}
        <!-- 点赞数 -->
        <el-divider direction="vertical"></el-divider>
        <i class="el-icon-thumb"></i>
        &nbsp;{{post.starCount}}
      </p>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "PostThumbnail",
  props: {
    // 文章对象，包含文章的所有内容
    post: {
      type: Object,
    },
  },
  data() {
    //如何接收数据之后自己在这里面处理
    return {
      id: 1,
      title: "数据结构",
      htmlContent: "",
      author: "sasas",
      time: "2019-10-22",
      starCount: 32,
      readCounr: 32,
      commentCount: 323,
      category: "jdskb",
      tags: ["dsd", "das"],
    };
  }
};
</script>
<style scoped>
/* el-divider 修改高度&虚线效果 */
 el-divider{
     margin: 8px 0;
     background: 0 0;
     border-top: 1px dashed #e8eaec;
 } 
</style>