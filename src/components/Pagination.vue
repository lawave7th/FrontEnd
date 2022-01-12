<template>
  <el-pagination
    :page-count=totalPage
    layout="prev, pager, next"
    :current-page=currentPage
    @current-change="handleCurrentChange"
    background
    hide-on-single-page
  >
  </el-pagination>
</template>

<script>
export default {
  props: ['totalPage', 'currentPage'],
  methods: {
    handleCurrentChange (val) {
      this.$emit('update', val)
    }
  }
}
</script>
