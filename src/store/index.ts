/**
 * 使用StoreOptions类型定义Vuex.Store构造器选项的类型，并将RootState作为泛型传入
 * StoreOptions: 用来定义根状态的类型
 * RootState作为泛型,传入Vuex.Store的构造器
 */

import { createStore, StoreOptions } from 'vuex'
import { RootState } from './types'
import { user } from './user'

const store: StoreOptions<RootState> = {
  modules: {
    user,
  },
}

export default createStore<RootState>(store)
