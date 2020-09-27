/**
 * declare and expose RootState
 * all modules' states should be in here.
 */

import { UserState } from './user/types'

export interface RootState {
  user: UserState
}
