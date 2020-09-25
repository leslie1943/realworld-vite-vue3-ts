import { reactive } from 'vue'

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
