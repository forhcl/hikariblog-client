<!-- 文章缩略卡片 -->
<template>
  <div>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <!-- 第一行 -->
    <el-row :gutter="20">
        作者：{{author}}&nbsp;发表于{{time}}{{post}}
    </el-row>
    <!-- 第二行 -->
    <el-row :gutter="10">
      <el-col>
        <div>
          <router-link :to="'/post/'+id" tag="a" style="color:black"><h4>{{title}}</h4></router-link>
        </div>
      </el-col>
    </el-row>
    <!-- 第三行 -->
    <el-row>
      <p>
        <!-- 阅读数 -->
        <i class="el-icon-view"></i>
        &nbsp;{{readCounr}}
        <!-- 评论数 -->
        <el-divider direction="vertical"></el-divider>
        <i class="el-icon-chat-dot-square"></i>
        &nbsp;{{commentCount}}
        <!-- 点赞数 -->
        <el-divider direction="vertical"></el-divider>
        <i class="el-icon-thumb"></i>
        &nbsp;{{starCount}}
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
    return {
      id: 1,
      title: "数据结构",
      htmlContent: "<h1>fsdfsdfsdshu</h1>",
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