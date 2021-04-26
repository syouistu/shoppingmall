<template>
  <div>
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    <homeSwiper :banners="banners"></homeSwiper>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar/NavBar'
import {getHomeMultidata} from "@/network/home";
import homeSwiper from '@/views/home/homeComponents/HomeSwiper'
export default {
name: "home",
  components:{
    navbar,
    homeSwiper
  },
  data(){
  //保存请求数据
    return{
      banners:[],
      recommends:[]
    }
  },
  created() {
  //请求多个数据
  getHomeMultidata().then(res =>{
    this.banners = res.data.banner.list;
    this.recommends = res.data.recommend.list;
  })
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
