<template>
  <div id="app">
    <maintabbar class="tabber"></maintabbar>
    <keep-alive exclude="detail">
<!-- 保证路由活跃不被摧毁，在跳转到其他路由再回去时可以记录状态     -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import maintabbar from "@/components/content/mainTabbar/maintabbar";

export default {
  name:'app',
  components:{
    maintabbar
  }
}
</script>
<style>
@import "assets/css/base.css";
.tabber{
  position: fixed;
  z-index: 10;
}
</style>
