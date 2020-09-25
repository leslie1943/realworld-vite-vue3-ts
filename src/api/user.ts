import { request } from '../utils/request'
import { UserState } from '../models/login'

interface UserApiState {
  user: UserState
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
