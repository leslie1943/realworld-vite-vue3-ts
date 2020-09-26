/**
 * 使用MutationTree定义mutations的类型，并将UserState作为泛型传入MutationTree
 * MutationTree不需要传入RootState
 */

import { MutationTree } from 'vuex'
import { UserState } from './types'

export const mutations: MutationTree<UserState> = {
  setUser(state, user) {
    state.user = user
  },
}
