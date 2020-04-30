<!-- 某个标签下的文章列表 -->
<template>
  <div>
    <el-container>
      <el-aside>
        <el-image
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        ></el-image>
        <el-image
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        ></el-image>
        <el-image
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        ></el-image>
      </el-aside>
      <el-main>
        <PostThumbnail v-for="post in postList" :key="post.id" :post="post"/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
//引入网络模块
import { instance3 } from "@/network/index";
import PostThumbnail from "@/components/thumbnail/Post.vue";
export default {
  data() {
    return {
      postList: []
    };
  },
  components: {
    PostThumbnail
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    //去请求一下标签对应的文章列表
    instance3({
      //查找哪篇文章的id根据前端路由的路径参数决定
      url: "/tag/" + this.$route.params.id + "/postList",
      method: "GET"
    }).then(res => {
      this.postList = res.data;
    });
  }
};
</script>