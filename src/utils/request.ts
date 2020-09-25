import axios from 'axios'
import { AxiosRequestConfig } from 'axios'

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io',
})

/**
 * 🚀🚀 请求拦截器:
 * 任何请求都要经过请求拦截器
 * 我们可以在请求拦截器中做一些公共的业务处理,例如统一设置 Token
 * 请求正确的情况经过这里
 */
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 返回请求配置对象
    return config
  },
  (error) => {
    // 如果请求失败(此时请求还没有发出来)就会进入这里
    return Promise.reject(error)
  }
)
