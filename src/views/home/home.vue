<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    <homeSwiper :banners="banners"></homeSwiper>
    <recommendView :recommends="recommends"></recommendView>
    <featureView></featureView>
    <tabControl v-bind:titles="['流行','新款','精选']" class="tab-control"></tabControl>
    <ul>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    </ul>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar/NavBar'
import {getHomeMultidata} from "@/network/home";
import homeSwiper from '@/views/home/homeComponents/HomeSwiper'
import recommendView from '@/views/home/homeComponents/HomeRecommendView'
import featureView from  '@/views/home/homeComponents/HomeFeatureView'
import tabControl from '@/components/content/tabControl/TabControl'
export default {
name: "home",
  components:{
    navbar,
    homeSwiper,
    recommendView,
    featureView,
    tabControl
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
#home{
  padding-top: 40px;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index:8;
}
.tab-control{
  position: sticky;
  top: 46px;
}
</style>
