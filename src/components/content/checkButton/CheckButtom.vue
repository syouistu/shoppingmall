<template>
  <div class="check-button" :class="{checked:isActive}">
    <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
name: "CheckButtom",
  props:{
    isActive:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.check-button{
  border: 2px solid #666666;
  border-radius: 50%;
}

.checked{
  background-color: #ff6699;
  border-radius: 50%;
  border:2px solid #ff6699;
}
</style>