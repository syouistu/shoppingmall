<template>
  <div class="bottom-bar">
    <div class="check-content">
      <div class="content">
        <checkButtom
            class="button"
            :isActive="isSelectedAll"
            @click.native="selectAll"
        ></checkButtom>
        <span class="select-all">全选</span>
      </div>
    </div>

    <div class="total-price">总计: ￥:{{totalPrice}}</div>

    <div class="calc-product">去计算({{calcTotal}})</div>
  </div>
</template>

<script>
import checkButtom from '@/components/content/checkButton/CheckButtom'
export default {
  name: "CartBottomBar",
  components:{
    checkButtom
  },
  computed:{
    totalPrice(){
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue,item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    calcTotal(){
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).length
    },
    isSelectedAll(){
      if(this.$store.state.cartList.length === 0) return false
      return !(this.$store.state.cartList.filter(item => !item.checked).length)
    }
  },
  methods:{
    selectAll(){
      if(this.isSelectedAll){
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else {
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  height: 40px;
  position: relative;
  background-color: #eee;
  display: flex;
}

.button{
  width: 18px;
  height: 18px;

}
.content{
  display: flex;
}
.check-content{
  /*position: relative;*/
  /*top:10px;*/
  /*display: flex;*/
  /*align-items: center;*/
  width: 60px;
  margin-top: 10px;
  margin-left: 8px;
  font-size: 16px;
}
.select-all{
  margin-left: 3px;
}
.total-price{
  padding-top: 11px;
  margin-left: 10px;
  padding-left: 5px;
}
.calc-product{
  width: 80px;
  margin-left: 50px;
  background-color: rgb(255,129,152);
  color: #fff;
  flex: 1;
  text-align: center;
  padding-top: 10px;
}
</style>