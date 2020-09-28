import { request } from '../utils/request'

// get user profile
export const getProfile = (username: string) => {
  return request({
    method: 'GET',
    url: `/api/profiles/${username}`,
  })
}
