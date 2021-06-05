import {ADD_COUTNER,ADD_TO_CART} from "@/store/mutation-types";

export default {
  [ADD_COUTNER](state,payload){
    payload.count++
  },
  [ADD_TO_CART](state,payload){
    state.cartList.push(payload)
  }
}