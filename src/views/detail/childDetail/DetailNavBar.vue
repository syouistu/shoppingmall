<template>
  <div class="detail-nav-bar">
    <navBar>
      <div slot="left" @click="backClick">
        <img src="../../../assets/img/home/返回.png" alt="">
      </div>
        <div slot="center" class="title">
          <div v-for="(item,index) in title" class="title-item"
               :class="{titleClick:titleIndex === index}"
               @click="titleClick(index)">
            <span>{{item}}</span>
          </div>
        </div>
      <div slot="right" >
        <div class="more-func">
          <ul>
            <ul>
              <li><img src="../../../assets/img/home/更多.png" alt="" class="img"
                       @click="ulShow"
                       @mouseleave="ulNotShow"></li>
            </ul>
            <ul class="li-style" v-show="this.isUlShow">
              <li>更多</li>
            </ul>
          </ul>
        </div>
      </div>
    </navBar>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/NavBar"
export default {
  name: "DetailNavBar",
  components:{
    navBar
  },
  data(){
    return{
      title:['商品','参数','评论','推荐'],
      titleIndex:0 , //记录点击title的序号
      isUlShow:false

    }
  },
  methods:{
    ulNotShow(){
      this.isUlShow = false
    },
    ulShow(){
      this.isUlShow = true
    },
    titleClick(index){
      this.titleIndex = index
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
  font-size:10px;
}
.title-item{
  flex: 1;
}
.titleClick{
  color:var(--color-high-text)
}
.titleClick span{
  border-bottom: 2px solid var(--color-high-text);
}
.img{
  height: 28px;
  margin-top: 8px;
  margin-right: 8px;
}

.more-func ul li{
  list-style-type: none;
}
.more-func li{
  background: white;
  line-height: 30px;
  height: 24px;
  width: 50px;
}
.li-style{
  border: solid 1px black;
  position: absolute;
  top: 38px;
  right:12px;
  text-align: center;
  letter-spacing: initial;
  z-index: 10;
}

</style>