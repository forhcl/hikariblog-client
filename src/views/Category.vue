<!-- 分类页面 -->
<template>
    <ul>
      <router-link v-for="category in categoryList" :key="category.id" tag="li" :to="'/category/'+category.id">{{ category.name }}</router-link>
    </ul>
</template>

<script>
// @ is an alias to /src
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
        console.log(res.data)
        this.categoryList = res.data;
      })
      .catch(err => {
        this.$message.error("失败");
      });
  }
};
</script>