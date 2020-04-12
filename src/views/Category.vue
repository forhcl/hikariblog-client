<!-- 分类页面 -->
<template>
  <div>
    <!-- <ul>
      <li v-for="category in categoryList" :key="category.id">{{ category.name }}</li>
    </ul>-->
    <el-container>
      <el-aside>
        <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-image>
        <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-image>
        <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-image>
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
// @ is an alias to /src
// 导航栏
import PostThumbnail from "@/components/thumbnail/Post.vue";
//引入网络模块
import { instance3 } from "../network/index";
export default {
  name: "Category",
  data() {
    return {
      //分类数据的数组
      categoryList: []
    };
  },
  //生命周期方法，在创建的时候就请求用户的所有分类
  created() {
    instance3({
      url: "/category",
      method: "GET"
    })
      .then(res => {
        this.categoryList = res.data;
      })
      .catch(err => {
        this.$message.error("失败");
      });
  },
  components: {
    PostThumbnail
  }
};
</script>