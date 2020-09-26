// 声明并暴露UserState类型
export interface UserInfoState {
  bio?: string
  createdAt: string
  email: string
  id: number
  image?: string
  token: string
  updatedAt: string
  username: string
}

export interface UserState {
  user: UserInfoState
}
