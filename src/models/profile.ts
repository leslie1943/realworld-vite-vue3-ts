import { reactive, computed } from 'vue'

export interface UserProfile {
  username: string
  bio: string
  image: string
  following: boolean
}

export interface ProfileState {
  profile: UserProfile
}

export const profileState = reactive<ProfileState>({
  profile: {
    username: '',
    bio: '',
    image: '',
    following: false,
  },
})
