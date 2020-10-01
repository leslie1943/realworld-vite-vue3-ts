import { request } from '../utils/request'
import { RegisterUserState } from '../models/login'

interface UserApiState {
  user: RegisterUserState
}

export interface UpateUserInfoState {
  email: string
  bio: string
  image: string
  username: string
  password: string
}
export interface UpateUserApiState {
  user: UpateUserInfoState
}

// 用户登录
export const login = (data: UserApiState) => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data,
  })
}

// 用户登录
export const register = (data: UserApiState) => {
  return request({
    method: 'POST',
    url: '/api/users',
    data,
  })
}

// 获取用户信息
export const getUser = () => {
  return request({
    method: 'GET',
    url: '/api/user',
  })
}
// 更新用户信息
export const updateUser = (data: UpateUserApiState) => {
  return request({
    method: 'PUT',
    url: '/api/user',
    data,
  })
}
