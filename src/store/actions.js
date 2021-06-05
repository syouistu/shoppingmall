import {ADD_TO_CART,ADD_COUTNER} from "@/store/mutation-types";

export default {
  addCart(context,payload){
    return new Promise(((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      if(oldProduct){
        //oldProduct.count += 1;
        context.commit(ADD_COUTNER,oldProduct)
        resolve('当前商品数量加一')
      }else{
        payload.count = 1;
        //context.state.cartList.push(payload)
        context.commit(ADD_TO_CART,payload)
        resolve('商品添加到购物车')
      }
    }))
  }
}