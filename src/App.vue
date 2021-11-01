<template>
  <router-view/>
  <Toast/>
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
  mounted () {
    window.showToast = this
  },
  methods: {
    showToast (response) {
      this.$toast.add({
        severity: 'error',
        detail: response,
        life: 2000
      })
    }
  },
  watch: {
    $route (to, from) {
      this.nowPage = to.path
      this.$store.commit('updatePage', {
        nowPage: this.nowPage
      })
    }
  }
}
</script>
