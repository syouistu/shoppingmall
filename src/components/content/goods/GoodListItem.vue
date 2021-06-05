<template>
  <div class="goods-item">
    <img :src="showImg" alt="" @load="goodsLoad" @click="goodsdetail">
    <div class="goods-info">
      <p class="title">{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props:{
    goodsitem:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  computed:{
    showImg(){
      return this.goodsitem.image || this.goodsitem.show.img
    }
  },
  methods:{
    goodsLoad(){
      this.$bus.$emit('goodsload')
    },
    goodsdetail(){
      this.$router.push('/detail/' + this.goodsitem.iid)
    }
  }
}
</script>

<style scoped>
.goods-item{
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  font-size: 12px;
  overflow: hidden;
  text-align: center;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 5px;
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;  /*不换行*/
  margin-bottom: 3px;
}
.goods-info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect{
  position: relative;
}
.goods-info .collect::before{ /* 在元素之前插入内容 */
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.png") 0 0/14px 14px;
}
</style>