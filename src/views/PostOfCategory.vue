<!-- 某个分类下面的所有文章,实现分页（分页现在还没处理好） -->
<template>
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
        <PostThumbnail v-for="category in postList" :key="category.id" :post="category" />
        <!-- 分页控件 -->
        <div style="text-align:center">
          <!-- background:背景色
          pageSize:每一页有多少记录
          pageCount:多少页码数目
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"-->
          <el-pagination
            background
            prev-text="Pre"
            next-text="Next"
            :pager-count="pagerCount"
            :hide-on-single-page="pageCount==1?true:false"
            :page-size="pageSize"
            :page-count="6"
            layout="prev, pager, next, jumper"
          ></el-pagination>
        </div>
      </el-main>
    </el-container>
</template>

<script>
//引入网络模块
import { instance1 } from "@/network/index";
import PostThumbnail from "@/components/thumbnail/Post.vue";
export default {
  components: {
    PostThumbnail
  },
  data() {
    return {
      postList: [],
      //页码按钮的数量，当总页数超过该值时会折叠
      pagerCount:5,
      //每一页有多少数据
      pageSize: 5,
      //总共有多少页
      pageCount: 0
      
    };
  },
  created() {
    //指定id的分类下的文章列表
    instance1({
      //查找哪篇文章的id根据前端路由的路径参数决定
      url: "/category/" + this.$route.params.id + "/posts",
      method: "GET",
      params: {
        pageNum: 1,
        pageSize: 5
      }
    }).then(res => {
      console.log(res);
      this.postList = res.data.list;
      this.pageSize = res.data.pageSize;
      this.pageCount = res.data.pages;
    });
  }
};
</script>