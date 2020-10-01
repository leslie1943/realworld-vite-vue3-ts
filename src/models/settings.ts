import { reactive } from 'vue'
import { UpateUserApiState, UpateUserInfoState } from '../api/user'
import { getUser, updateUser } from '../api/user'
import { __PUSH__ } from '../router/index'
import { setStore, removeStore } from '../utils/localStore'

export const settingState = reactive<UpateUserApiState>({
  user: new Object() as UpateUserInfoState,
})
export const getCurrentUser = async () => {
  const { data } = await getUser()
  console.info('user data', data.user)
  settingState.user = data.user
}

export const updateCurrentUser = async (data: UpateUserApiState) => {
  await updateCurrentUser(data)
}

export const onSubmit = async (e: Event, store: any) => {
  e.preventDefault()
  const { data } = await updateUser({ user: settingState.user })
  // 将登录用户信息设置到本地
  setStore('user', data.user)
  // 将登录用户信息设置到Vuex中
  store.commit('user/setUser', data.user)
  __PUSH__(`/profile/${data.user.username}`)
}

export const logout = async (store: any) => {
  removeStore('user')
  store.commit('user/setUser', null)
  __PUSH__(`/login`)
}
