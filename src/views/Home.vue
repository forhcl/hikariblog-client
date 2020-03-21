<template>
  <div class="home">
    <NavBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/navbar/NavBar.vue'
import License from '@/components/license/License.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    //这个声明到时候要让它在最下面！！
    License
  }
}
</script>
