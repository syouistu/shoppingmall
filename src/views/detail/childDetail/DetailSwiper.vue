<template>
    <Swiper class="swiper-img">
      <SwiperItem v-for="item in SwiperImg">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index'

  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      SwiperImg:{
        type:Array,
        default(){
          return []
        }
      }
    }
}

</script>

<style scoped>
.swiper-img{
  height: 250px;
  overflow: hidden;
}
</style>