<template>
  <div class="cart">
    <navBar class="cart-nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </navBar>
    <scroll class="content" :pullupload="true" ref="scroll">
      <div>
        <cartList></cartList>
      </div>
    </scroll>
    <cartBottomBar></cartBottomBar>
  </div>
</template>

<script>

import navBar from '@/components/common/navbar/NavBar'
import cartList from './childComps/CartList'
import scroll from "@/components/common/scroll/scroll";
import cartBottomBar from './childComps/CartBottomBar'
import {mapGetters} from 'vuex'
export default {
  name: "cart",
  components:{
    navBar,
    cartList,
    scroll,
    cartBottomBar
  },
  computed:{
    ...mapGetters(['cartLength','cartList'])
  },

  activated() {
    this.$refs.scroll.scroll.refresh()
  }
}
</script>

<style scoped>
 .cart{
   height: 100vh;
   overflow: hidden;
 }

 .cart-nav-bar{
   background-color: var(--color-tint);
   color: #ffffff;
   position: relative;
   z-index: 9;
 }
 .content{
   height: calc(100% - 44px - 49px - 36px);
 }
</style>
