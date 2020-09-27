// define state for user module
import { UserState } from './types'

// init state of user module, and the type of this state should be <UserState>
export const state: UserState = {
  user: {
    bio: '',
    createdAt: '',
    email: '',
    id: 0,
    image: '',
    token: '',
    updatedAt: '',
    username: '',
  },
}
