<!-- 某个标签下的文章列表 -->
<template>
  <div>
    <h1>{{$route.params.id}}</h1>
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
        <PostThumbnail />
        <PostThumbnail />
        <PostThumbnail />
        <PostThumbnail />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import PostThumbnail from "@/components/thumbnail/Post.vue";
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  components: {
    PostThumbnail
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>