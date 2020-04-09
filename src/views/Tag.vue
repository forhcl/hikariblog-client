<!-- 标签页面 -->
<template>
  <div>
    <ul>
      <li v-for="tag in tagList" :key="tag.id">{{ tag.name }}</li>
    </ul>
  </div>
</template>

<script>
//引入网络模块
import { instance3 } from "../network/index";
export default {
  name: "Tag",
  data(){
    return {
      tagList:[]
    }
  },
    //生命周期方法，在创建的时候就请求用户的所有分类
  created() {
    instance3({
      url: "/tag",
      method: "GET"
    })
      .then(res => {
        this.tagList = res.data;
      })
      .catch(err => {
        this.$message.error("失败");
      });
  }
}


</script>