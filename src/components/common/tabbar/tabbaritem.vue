<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="tabbaricon"></slot></div>
    <div v-else><slot name="tabbaricon-active"></slot></div>
    <div :style="activeStyle"><slot name="tabbername"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'blue'
    }
  },
  data(){
    return{
      // isActive:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tabbar-item{
  flex:1;
  text-align: center;
  height: 45px;
  font-size: 12px;
}
.tabbar-item img{
  weight:24px;
  height:24px;
  margin-top: 2px;
  vertical-align: middle;
}

</style>
