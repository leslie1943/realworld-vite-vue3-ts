/**
 * 声明并暴露 RootState 类型
 */

import { UserState } from './user/types'

export interface RootState {
  user: UserState
}
