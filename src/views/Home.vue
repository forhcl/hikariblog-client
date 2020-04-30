<template>
  <!-- <el-tabs v-model="activeName" @tab-click="handleClick"> -->
  <el-tabs type="border-card" value="first">
    <el-tab-pane label="最新" name="first">
      <PostThumbnail v-for="post in newArticles" :key="post.id" :post="post" />
    </el-tab-pane>
    <el-tab-pane label="热门" name="second">
      <PostThumbnail v-for="post in hotArticles" :key="post.id" :post="post" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
//引入网络模块
import { instance3 } from "../network/index";
import PostThumbnail from "@/components/thumbnail/Post.vue";
export default {
  name: "Home",
  data() {
    return {
      hotArticles: [],
      newArticles: []
    };
  },
  components: {
    PostThumbnail
  },
  //钩子函数
  created() {
    instance3({
      url: "/post/hot/top10",
      method: "GET"
    })
      .then(res => {
        console.log(res);
        this.hotArticles = res.data;
      })
      .catch(err => {
        console.log("1111111111111");
      });
    instance3({
      url: "/post/new/top10",
      method: "GET"
    })
      .then(res => {
        console.log(res);
        this.newArticles = res.data;
      })
      .catch(err => {
        console.log("2222222222");
      });
  }
};
</script>
