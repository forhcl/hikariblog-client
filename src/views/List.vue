<!-- 文章列表页面 -->
<template>
  <div>
    <NavBar />
    <p>查看文章列表</p>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/navbar/NavBar.vue";
import License from "@/components/license/License.vue";

export default {
  name: "List",
  components: {
    NavBar,
    //这个声明到时候要让它在最下面！！
    License
  }
}
</script>