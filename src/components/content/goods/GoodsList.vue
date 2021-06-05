<template>
  <div class="goods">
    <goodsitem v-for="item in goods" :goodsitem="item"></goodsitem>
  </div>
</template>

<script>
import goodsitem from './GoodListItem'
export default {
  name: "GoodsList",
  components:{
    goodsitem
},
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /*position: absolute;*/
  z-index: -1;
  padding: 2px;
}

</style>