<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
name: "Toast",
  props:{
  //   message:{
  //   type:String,
  //   default:''
  // },
  //   isShow:{
  //     type:Boolean,
  //     default: false
  //   }
  },
  data(){
    return{
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message,duration=1000){
      this.message = message;
      this.isShow = true;

      setTimeout(()=>{
        this.isShow = false;
        this.message = ''
      },duration)
  }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;

  padding: 8px 10px;
  border-radius: 8%;
  color: #ffff;
  background-color: rgba(0,0,0,.75);
}
</style>