/**
 * 使用 ActionTree 定义 actions 的类型
 * 并将 StoreUserState 和 RootState 作为泛型传入 ActionTree
 */

import { UserState } from './types'
import { ActionTree } from 'vuex'
import { RootState } from '../types'

export const actions: ActionTree<UserState, RootState> = {
  getUser({ commit }): void {},
}
