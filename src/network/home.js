import {request} from './request'
//home.vue直接面对home.js文件
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}