<template>
  <div id="detail">
    <detailNavBar @titleClick="setTop" ref="nav"></detailNavBar>
    <scroll class="content"
            :pullupload="true"
            ref="scroll"
            :probe-type="3"
            @showScrollBackTop="contentScroll"
    >
      <detailSwiper :swiper-img="swiperImg"></detailSwiper>
      <detailBaseInfo :goods="goods"></detailBaseInfo>
      <detailShopInfo :shop="shop"></detailShopInfo>
      <detailGoodsInfo :detail-info="detailInfo" @goodsInfoImgLoad="imgLoaded"></detailGoodsInfo>
      <detailParamInfo :paramInfo="detailParam" ref="param"></detailParamInfo>
      <detailCommentInfo :commentInfo="detailComment" ref="comment"></detailCommentInfo>
      <goodsList :goods="recommends" ref="goods"></goodsList>
    </scroll>
    <backTop @click.native="backToTop" v-show="isShowBackTop"></backTop>
    <detailBottomBar @addToCart="addToCart"></detailBottomBar>
    <toast :message="message" :is-show="show"></toast>
  </div>
</template>

<script>
import detailNavBar from "@/views/detail/childDetail/DetailNavBar"
import detailSwiper from '@/views/detail/childDetail/DetailSwiper'
import detailBaseInfo from '@/views/detail/childDetail/DetailBaseInfo'
import detailShopInfo from '@/views/detail/childDetail/DetailShopInfo'
import scroll from '@/components/common/scroll/scroll'
import detailGoodsInfo from '@/views/detail/childDetail/DetailGoodsInfo'
import detailParamInfo from '@/views/detail/childDetail/DetailParamInfo'
import detailCommentInfo from '@/views/detail/childDetail/DetailCommentInfo'
import goodsList from '@/components/content/goods/GoodsList'
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "@/network/detail";
import backTop from "@/components/content/backTop/backTop";
import detailBottomBar from "@/views/detail/childDetail/DetailBottomBar"
import toast from '@/components/common/toast/Toast'
import {itemListener} from "@/common/mixin";
import {mapActions} from 'vuex'


export default {
  name: "detail",

  components:{
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    scroll,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,
    goodsList,
    backTop,
    detailBottomBar,
    toast
  },

  data(){
    return{
      iid:null,
      swiperImg:[] ,
      goods:{},
      shop:{},
      detailInfo:{},
      detailParam:{},
      detailComment:{},
      productPrice:{},
      recommends: [],
      isShowBackTop:false,
      titleSetTop:[],
      currentHeight:0,//记录高度
      currentIndex:-1,//记录navbar序号
      message:'',
      show:false,
    }
  },

  //混入
  mixins:[itemListener],

  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
      this.swiperImg = res.result.itemInfo.topImages
      this.shop = new Shop(res.result.shopInfo)
      this.detailInfo = res.result.detailInfo
      this.productPrice = res.result.itemInfo.highNowPrice
      //console.log(res);
      this.detailParam = new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
      if (res.result.rate.cRate !== 0) {
        this.detailComment = res.result.rate.list[0]
      }
    })
    getRecommend()
        .then(res => {
          this.recommends = res.data.list
          //console.log(res);
        }).catch(err => {
      console.log(err)
    })
  },


  destroyed() {
    this.$bus.$off('goodsload')
  },

  methods:{
    ...mapActions(['addCart']),
    imgLoaded(){
      this.$refs.scroll.scroll.refresh();
      this.titleSetTop =[]
      this.titleSetTop.push(0);
      this.titleSetTop.push(this.$refs.param.$el.offsetTop)
      this.titleSetTop.push(this.$refs.comment.$el.offsetTop)
      this.titleSetTop.push(this.$refs.goods.$el.offsetTop)
    },
    contentScroll(postion){
      this.isShowBackTop = -(postion.y) >800

      this.currentHeight = -postion.y
      let length = this.titleSetTop.length
      for(let i =0;i < length;i++){
        if(this.currentIndex != i &&( i <length - 1 && this.currentHeight >= this.titleSetTop[i] && this.currentHeight < this.titleSetTop[i+1])
            || (i === length - 1 && this.currentHeight >= this.titleSetTop[i])){
          this.currentIndex = i;
          this.$refs.nav.titleIndex = this.currentIndex;
        }
      }
    },
    backToTop(){
      this.$refs.scroll.scroll && this.$refs.scroll.scroll.scrollTo(0,0,300);
    },
    setTop(index){
      this.$refs.scroll.scroll.scrollTo(0,-this.titleSetTop[index],200);
    },
    //加入购物车
    addToCart(){
      const product ={}
      product.img = this.swiperImg[0]
      product.title = this.detailInfo.title;
      product.desc = this.detailInfo.desc;
      product.price = this.productPrice;
      product.iid = this.iid;
      product.checked = true;

      this.$store.dispatch('addCart',product).then(res => {
        this.$toast.show(res,2000)
        // this.message = res;
        // this.show = true;
        // setTimeout(()=>{
        //   this.message = '',
        //       this.show = false
        // },2000)
      })
      //this.$store.commit('addCart',product)
    }
  }

}

</script>

<style scoped>
#detail{
  position: relative;
  z-index: 10;
  background-color: #ffffff;
  height: 100vh;
}

.content{
  position: absolute;
  top: 44px;
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>