<template>
  <div>
    <!-- 许可证 把ICP写上去 -->
    <section class="bottom-strip">
      <div class="container">
        <p>{{license}}</p>
      </div>
    </section>
    <!--bottom-strip end-->
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data(){
    return {
      license:"©2018 Heeney. All Rights Reserved."
    }
  }
};
</script>
