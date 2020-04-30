<!-- 查看某一篇具体的文章页面,因为后端中具体文章接口还没有完善，所以暂时搁置 -->
<template>
  <el-card style="width:60%,margin:0 auto">
    <template v-if="success">
      <div class="blog-info">
        <ul class="meta">
          <li>
            <a href="#" title class="post-category">{{post.category.name}}</a>
          </li>
          <li>{{post.updateTime}}</li>
          <li>
            <i class="la la-eye"></i>
            {{post.readCount}}
          </li>
          <li>
            <a href="#" title>
              <i class="la la-comment-o"></i>
              {{post.commentCount}}
            </a>
          </li>
        </ul>
        <!-- 文章标题,变成动态的从服务器获取 -->
        <h1>{{post.title}}</h1>
      </div>
      <!-- 把找到的文章内容显示出来 -->
      <p v-html="post.htmlContent"></p>
    </template>
    <p>{{error.message}}</p>
    <el-divider></el-divider>
    <Star :post-id="post.id" />
    <Comment :postId="post.id"/>
  </el-card>
</template>

<script>
//引入网络模块
import { instance1 } from "../network/index";
//引入点赞模块
import Star from "@/components/star/Star.vue";
//引入评论模块
import Comment from "@/components/comment/Comment.vue"

export default {
  name: "Post",
  components: {
    Star,
    Comment
  },
  data() {
    return {
      success: false,
      post: {
        id: 0,
        title: "",
        htmlContent: "",
        author: "",
        updateTime: "",
        readCount: 0,
        starCount: 0,
        commentCount: 0,
        category: {
          id: 0,
          name: "",
          owner: ""
        }
      },
      error: {
        timestamp: "",
        status: 0,
        error: "",
        message: ""
      }
    };
  },
  created() {
    instance1({
      //查找哪篇文章的id根据前端路由的路径参数决定
      url: "/post/" + this.$route.params.id,
      method: "GET"
    })
      .then(res => {
        this.success = true;
        //查询文章成功,将返回的数据赋值给data
        this.post = res.data;
      })
      .catch(err => {
        //查询文章失败,将失败信息赋值给error
        this.error = err.response.data;
      });
  }
};
</script>