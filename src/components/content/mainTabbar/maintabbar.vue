<template>
  <tabbar>
    <tabbaritem path="/home" activeColor="red">
      <img src="@/assets/img/tabbar/首页.png" alt="" slot="tabbaricon">
      <img src="@/assets/img/tabbar/首页点击.png" alt="" slot="tabbaricon-active">
      <div slot="tabbername">首页</div>
    </tabbaritem>
    <tabbaritem path="/category" >
      <img src="@/assets/img/tabbar/分类.png" alt="" slot="tabbaricon">
      <img src="@/assets/img/tabbar/分类点击.png" alt="" slot="tabbaricon-active">
      <div slot="tabbername">分类</div>
    </tabbaritem>
    <tabbaritem path="/cart" >
      <img src="@/assets/img/tabbar/购物车.png" alt="" slot="tabbaricon">
      <img src="@/assets/img/tabbar/购物车点击.png" alt="" slot="tabbaricon-active">
      <div slot="tabbername">购物车</div>
    </tabbaritem>
    <tabbaritem path="/profile" >
      <img src="@/assets/img/tabbar/个人中心.png" alt="" slot="tabbaricon">
      <img src="@/assets/img/tabbar/个人中心点击.png" alt="" slot="tabbaricon-active">
      <div slot="tabbername">个人中心</div>
    </tabbaritem>
  </tabbar>

</template>

<script>
import tabbar from '@/components/common/tabbar/tabbar'
import tabbaritem from "@/components/common/tabbar/tabbaritem";
export default {
name: "maintabbar",
  components:{
    tabbar,
    tabbaritem
  }
}
</script>

<style scoped>

</style>
