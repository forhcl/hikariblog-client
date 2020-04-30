<!-- 某个分类下面的所有文章,实现分页（分页现在还没处理好） -->
<template>
  <el-container>
    <el-main>
      <p v-if="postList.length===0">没有与此相关的结果: {{$route.query.keyWord}}</p>
      <PostThumbnail v-else v-for="post in postList" :key="post.id" :post="post" />
      
      <!-- 分页控件 -->
      <!-- <div style="text-align:center"> -->
      <!-- background:背景色
          pageSize:每一页有多少记录
          pageCount:多少页码数目
          @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"-->
      <!-- <el-pagination
            background
            prev-text="Pre"
            next-text="Next"
            :pager-count="pagerCount"
            :hide-on-single-page="pageCount==1?true:false"
            :page-size="pageSize"
            :page-count="6"
            layout="prev, pager, next, jumper"
          ></el-pagination>
      </div>-->
    </el-main>
  </el-container>
</template>

<script>
//引入网络模块
import { instance1 } from "@/network/index";
import PostThumbnail from "@/components/thumbnail/SearchPost.vue";
export default {
  components: {
    PostThumbnail
  },
  data() {
    return {
      postList: []
      //页码按钮的数量，当总页数超过该值时会折叠
      // pagerCount:5,
      //每一页有多少数据
      // pageSize: 5,
      //总共有多少页
      // pageCount: 0
    };
  },
  watch: {
    // 利用watch方法检测路由变化：
    $route: function(to, from) {
      // 拿到目标参数 to.query.id 去再次请求数据接口
      this.loadPageData(to.query.keyWord);
    }
  },
  methods: {
    loadPageData(keyWord) {
      //指定id的分类下的文章列表
      instance1({
        //查找哪篇文章的id根据前端路由的路径参数决定
        url: "/search",
        method: "GET",
        params: {
          keyWord: this.$route.query.keyWord
        }
      }).then(res => {
        console.log(res);
        this.postList = res.data;
      });
    }
  }
};
</script>