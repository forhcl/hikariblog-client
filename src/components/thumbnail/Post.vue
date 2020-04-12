<!-- 文章缩略卡片 -->
<template>
  <div>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <!-- 第一行 -->
    <el-row :gutter="20">
      <el-col>
        <div></div>
      </el-col>
      <el-col>
        <div></div>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row :gutter="20">
      <el-col>
        <div>
          <router-link :to="'/post/'+id" tag="a"><h3>{{title}}</h3></router-link>
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
      tags: ["dsd", "das"]
    };
  }
};
</script>