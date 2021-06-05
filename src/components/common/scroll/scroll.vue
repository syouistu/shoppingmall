<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name: "scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullupload:{
      type:Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click:true,
      probeType: this.probeType,
      pullUpLoad:this.pullupload
    })
    this.scroll.on('scroll',(postion) => {
     this.$emit('showScrollBackTop',postion)
    })
    //console.log(this.scroll);
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })

  }
}

</script>

<style scoped>

</style>