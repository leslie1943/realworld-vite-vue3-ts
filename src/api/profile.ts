import { request } from '../utils/request'

// get user profile
export const getProfile = (username: string) => {
  return request({
    method: 'GET',
    url: `/api/profiles/${username}`,
  })
}

// add favorite
export const followingUser = (username: string) => {
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`,
  })
}

// delete favorite
export const unfollowingUser = (username: string) => {
  return request({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`,
  })
}
