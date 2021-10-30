<template>
  <router-view />
</template>

<style lang="scss">

@import '@/assets/scss/all';
</style>
<script>

export default {
  data () {
    return {
      nowPage: ''
    }
  },
  watch: {
    $route (to, from) {
      this.nowPage = to.path
      // console.log(this.nowPage)
      this.$store.commit('updatePage', {
        nowPage: this.nowPage
      })
    }
  }
}
</script>
