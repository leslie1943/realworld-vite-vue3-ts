import { reactive } from 'vue'
import { getArticles } from '../api/article'
import { followingUser, unfollowingUser, getProfile } from '../api/profile'
import { AuthorState, SingleArticleState } from './article'

export interface ProfileState {
  profile: AuthorState
  articles: SingleArticleState[]
}

export const profileState = reactive<ProfileState>({
  profile: new Object() as AuthorState,
  articles: [],
})

// Like / Dislike: user
export const onFollow = async (profile: AuthorState) => {
  // 关注用户
  profile.followDisable = true
  if (profile.following) {
    // 取注
    await unfollowingUser(profile.username)
    profile.following = false
  } else {
    // 关注
    await followingUser(profile.username)
    profile.following = true
  }
  profile.followDisable = false
}
// get profile from url
export const loadProfile = async (username: string) => {
  const { data } = await getProfile(username)
  profileState.profile = data.profile
  profileState.profile.followDisable = false
}

// get articles
export const loadArticles = async (tab: string, username: string) => {
  let params =
    tab === 'favorited' ? { favorited: username } : { author: username }
  const res = await getArticles(params)
  profileState.articles = res.data.articles
  profileState.articles.forEach((article) => (article.favoriteDisable = false))
}
