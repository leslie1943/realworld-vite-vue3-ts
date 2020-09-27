// define user information state
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

// declare and expose UserState
export interface UserState {
  user: UserInfoState
}
