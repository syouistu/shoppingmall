<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    <tabControl v-bind:titles="['流行','新款','精选']"
                @tabClick="tabClick"
                ref="tabControl1"
                class="tabControl"
                v-show="isTabControlFixed"
    />

    <scroll class="content" ref="scroll"
            :probeType="3"
            @showScrollBackTop="contentScroll"
            :pullupload="true"
            @pullingUp="loadingMore">
          <homeSwiper :banners="banners" @swiperImgLoad="showHeight"></homeSwiper>
          <recommendView :recommends="recommends"></recommendView>
          <featureView></featureView>
          <tabControl v-bind:titles="['流行','新款','精选']"
                      @tabClick="tabClick"
                      ref="tabControl2"
          ></tabControl>
          <goodsList :goods="goods[currentGoods].list"></goodsList>
    </scroll>
    <backTop @click.native="backTopClick" v-show="ShowBackTop"></backTop>  <!--    原本无法监听组件  .native使监听原生事件-->
  </div>
</template>

<script>
import navbar from '@/components/common/navbar/NavBar'
import {getHomeMultidata,getHomeGoods} from "@/network/home";
import homeSwiper from '@/views/home/homeComponents/HomeSwiper'
import recommendView from '@/views/home/homeComponents/HomeRecommendView'
import featureView from  '@/views/home/homeComponents/HomeFeatureView'
import tabControl from '@/components/content/tabControl/TabControl'
import goodsList from '@/components/content/goods/GoodsList'
import scroll from "@/components/common/scroll/scroll";
import backTop from "@/components/content/backTop/backTop";
import {itemListener} from '@/common/mixin'
export default {
name: "home",
  components:{
    navbar,
    homeSwiper,
    recommendView,
    featureView,
    tabControl,
    goodsList,
    scroll,
    backTop
  },
  data(){
  //保存请求数据
    return{
      ShowBackTop:false,
      banners:[],
      recommends:[],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currentGoods:'pop',
      offsetTop:0,
      isTabControlFixed:false,
      saveY:0//记录滚动到的位置
    }
  },
  mixins:[itemListener],
  created() {
  //请求多个数据
  this.getHomeMultidada()
    //请求商品数据
  this.getHomeGoods('pop')
  this.getHomeGoods('new')
  this.getHomeGoods('sell')

  },
  mounted() {
    //this.offsetTop = this.$refs.tabControl.$el
    //接受总线发送的‘goodsload’时间，执行函数
    const refresh = this.debounce(this.$refs.scroll.scroll.refresh,50)
    // this.$bus.$on('goodsload',()=>{
    //   this.$refs.scroll && this.$refs.scroll.scroll.refresh()
    // })
  },
  deactivated() {
  this.$bus.$off('goodsload')
  this.saveY = this.$refs.scroll.scroll.y
  },
  activated() {
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.scroll.refresh()
  },
  //将create时请求数据方法封装到methods中
  methods:{
  //事件方法
    //$el获取组件中的元素,offsetTop获取元素的高度（图片加载高度问题）,在图片加载后计算
    showHeight(){
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop
      //console.log(this.$refs.tabControl.$el.offsetTop);
    },
    //防抖函数,设计定时器在事件执行时设置定时器，再次执行事件时，重置定时器（防抖函数不起效）
    debounce(func,delay){
      let timer = null;
      return function (...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this,args)
        },delay)
      }
    },
    //点击选择分类
    tabClick(index){
      switch (index){
        case 0:
          this.currentGoods = 'pop';
          break
        case 1:
          this.currentGoods = 'new';
          break
        case 2:
          this.currentGoods = 'sell';
          break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2 .currentIndex= index;
    },
    //点击回到顶部
    backTopClick(){
      this.$refs.scroll.scroll && this.$refs.scroll.scroll.scrollTo(0,0,300);
    },

    //隐藏backTop
    contentScroll(position){
      this.ShowBackTop = (-position.y) > 800
      this.isTabControlFixed = -(position.y) > this.offsetTop
    },
    loadingMore(){
      this.getHomeGoods(this.currentGoods);
    },
  //网络请求相关方法
    getHomeMultidada(){
      getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)    //push（...items）方法将items加到数列中
        this.page += 1

      // this.$refs.scroll.scroll.finishPullUp();
      })
    }

  }
}
</script>

<style scoped>
#home{
  /*padding-top: 40px;*/
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;

  /*position: fixed;*/
  /*z-index:10;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
}


.content{
  height: calc(100% - 45px - 40px);
  position: absolute;
  top:44px;
  bottom: 43px;
  left: 0px;
  right: 0px;
  overflow: hidden;
}

.tab-control{
  position: relative;
  z-index: 9;
}
</style>
