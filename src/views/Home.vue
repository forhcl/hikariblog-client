<template>
  <!-- <el-tabs v-model="activeName" @tab-click="handleClick"> -->
    <el-tabs>
    <el-tab-pane label="最新文章" name="first">最新文章列表</el-tab-pane>
    <el-tab-pane label="最热文章" name="second">最热文章列表</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
