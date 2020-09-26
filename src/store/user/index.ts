/**
 * 使用UserState定义user模块的state的类型
 * 使用Module定义user模块的类型,并将UserState和RootState作为泛型传入Module
 */

import { Module } from 'vuex'
import { UserState } from './types'
import { RootState } from '../types'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { state } from './state'

const namespaced = true

export const user: Module<UserState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}
