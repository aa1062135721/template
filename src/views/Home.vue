<template>
  <div class="home">
    首页
   <span @click="goPage">关于我们</span>
   <div style="width: 100px; height: 100px">
     <noContent/>
   </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      
    }
  },

  mounted() {
    
  },

  methods: {
    goPage () {
      this.$router.push('/about')
    }
  },
}
</script>
