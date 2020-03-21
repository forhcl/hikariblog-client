<!-- 文章编辑页面：再如果一个前端的MarkDowm编辑器 -->
<template>
    <mavon-editor v-model="value"/>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/navbar/NavBar.vue";
import License from "@/components/license/License.vue";

export default {
  name: "Edit",
  components: {
    NavBar,
    //这个声明到时候要让它在最下面！！
    License
  }
}
</script>