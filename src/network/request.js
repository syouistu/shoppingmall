import axios from "axios";

export function request(config){
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/w6',
    timeout:5000
  })

  //拦截器
  instance.interceptors.request.use(config => {
    return config
  },err =>{

  })

  instance.interceptors.response.use(res => {
    return res.data
  },error => {
    console.log(error);
  })
  return instance(config)
}