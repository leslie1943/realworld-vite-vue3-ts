/**
 * Use MutationTree define muation's type, then UserState as Generic for MuationTree
 * MutationTree need RootState no longer
 */

import { MutationTree } from 'vuex'
import { UserState } from './types'

export const mutations: MutationTree<UserState> = {
  setUser(state, user) {
    state.user = user
  },
}
