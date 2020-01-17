import axios from 'axios'

export function request(config){
    // 创建axios实例
    const instance=axios.create({
        // baseURL:'http://106.54.54.237:8000/api/v1',
        // baseURL:'http://123.207.32.32:8000/api/w1',
        // baseURL: 'http://123.207.32.32:8000/api/hy',
        baseURL: 'http://106.54.54.237:8000/api/hy',
        timeout:5000
    })
    // axios拦截器
    // 请求拦截
    instance.interceptors.request.use(config=>{
        return config
    },err=>{
        console.log(err);
    })
    // 响应拦截
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err);
    })
    // 发送请求
    return instance(config)
}