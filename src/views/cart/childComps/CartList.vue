<template>
  <div class="cart-list">
    <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import cartListItem from './CartListItem'
export default {
  name: "CartList",
  components:{
    cartListItem,
  },
  computed:{
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>

</style>