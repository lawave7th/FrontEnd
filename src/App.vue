<template>
  <Loading v-model:active="isLoading"></Loading>
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
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  methods: {
    showErrorToast (response) {
      this.$toast.add({
        severity: 'error',
        detail: response,
        life: 2000
      })
    },
    showSuccessToast (response) {
      this.$toast.add({
        severity: 'success',
        detail: response,
        life: 2000
      })
    }
  },
  watch: {
    $route (to, from) {
      this.nowPage = to.name
      this.$store.commit('updatePage', {
        nowPage: this.nowPage
      })
    }
  }
}
</script>
