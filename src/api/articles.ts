import { request } from '../utils/request'

interface IArtcileParam {
  tag?: string
  author?: string
  favorited?: string
  limit?: number
  offset?: number
}
export const getArticles = (params: IArtcileParam) => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params,
  })
}
