<template>
  <div class="about">
    <NavBar/>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/navbar/NavBar.vue'
import License from '@/components/license/License.vue'

export default {
  name: 'Profile',
  components: {
    NavBar,
    //这个声明到时候要让它在最下面！！
    License
  }
}
</script>