import { reactive } from 'vue'
import { setStore } from '../utils/localStore'
import { login, register } from '../api/user'
import { Router } from 'vue-router'
import { Store } from 'vuex'

// 表单元素约束
export interface UserState {
  email: string
  password: string
  username?: string
}

// 返回错误信息约束
export interface ErrorState {
  [propName: string]: string[]
}

// 🚖🚖 All State
export interface LoginState {
  user: UserState
  errors: ErrorState
}

export const loginState = reactive<LoginState>({
  errors: {},
  user: {
    username: '',
    email: '',
    password: '',
  },
})

// 提交事件
export const onSubmit = async (
  e: Event,
  isLogin: boolean,
  router: Router,
  store: Store<any>
) => {
  e.preventDefault()
  try {
    const { data } = isLogin
      ? await login({ user: loginState.user })
      : await register({ user: loginState.user })
    // 将登录用户信息设置到本地
    setStore('user', data.user)
    // 将登录用户信息设置到Vuex中
    store.commit('user/setUser', data.user)
    // 登录成功跳转到首页
    router.push('/')
  } catch (err) {
    loginState.errors = err.response.data.errors
  }
}
