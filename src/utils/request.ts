import axios from 'axios'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { store } from '../store/index'
import { __PUSH__ } from '../router/index'

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
    // 加载store中的user
    const { user } = store.modules?.user.state
    if (user && user.token) {
      // 请求token
      config.headers.Authorization = `Token ${user.token}`
    }
    // 返回请求配置对象
    return config
  },
  (error) => {
    // 如果请求失败(此时请求还没有发出来)就会进入这里
    return Promise.reject(error)
  }
)

/**
 * 🚀🚀 response :
 */
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error) => {
    //  redirect to login page if error code is 401
    if (error.response.status == 401) {
      __PUSH__('/login')
    }
  }
)
