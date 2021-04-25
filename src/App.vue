<template>
  <div id="app">
    <maintabbar></maintabbar>
    <router-view></router-view>
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
</style>
