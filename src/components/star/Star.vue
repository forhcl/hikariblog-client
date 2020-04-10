<!-- 点赞组件 -->
<template>
  <div>
    <i class="el-icon-magic-stick" :class="{active:stared}" @click="starOrUnStar()"></i>
    {{starCount}}
  </div>
</template>

<script>
//引入网络模块
import { instance1 } from "@/network/index";
export default {
  name: "Star",

  props: {
    //传进来文章的Id，通过文章的Id判断用户是否给这个文章点赞
    postId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      //点赞数量
      starCount: 0,
      //是否点赞
      stared: false
    };
  },
  //如果用created的情况，创建的时候props的值老是取到默认值
  async beforeUpdate() {
    await instance1({
      //查找哪篇文章的id根据前端路由的路径参数决定
      url: "/star/post/" + this.postId,
      method: "GET"
    }).then(res => {
      this.stared = res.data;
    });
    await instance1({
      url: "/star/",
      params: {
        postId: this.postId
      },
      method: "GET"
    }).then(res => {
      this.starCount = res.data;
    });
  },
  methods: {
    async starOrUnStar() {
      if (this.stared == false) {
        //点赞
        await instance1({
          url: "/star/post/" + this.postId,
          method: "POST"
        }).then(res => {
          this.stared = true;
        });
        await instance1({
          url: "/star/",
          params: {
            postId: this.postId
          },
          method: "GET"
        }).then(res => {
          this.starCount = res.data;
        });
      } else {
        // 取消点赞
        await instance1({
          url: "/star/post/" + this.postId,
          method: "DELETE"
        }).then(res => {
          this.stared = false;
        });
        await instance1({
          url: "/star/",
          params: {
            postId: this.postId
          },
          method: "GET"
        }).then(res => {
          this.starCount = res.data;
        });
      }
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
/* 点赞状态的样式 */
.active {
  color: blue;
}
</style>