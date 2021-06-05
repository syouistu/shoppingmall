export const itemListener = {
  data() {
    return {
      itemListener: null
    }
  },
  mounted() {
    this.$bus.$on('goodsload', () => {
      this.$refs.scroll && this.$refs.scroll.scroll.refresh()
    })
  }
}