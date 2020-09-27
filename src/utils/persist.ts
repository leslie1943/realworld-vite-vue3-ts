import { getStore } from './localStore'

// get local user
const user = getStore('user')

// convert local data to store data
export const localToStore = (store: any) => {
  store.commit('user/setUser', user)
}
