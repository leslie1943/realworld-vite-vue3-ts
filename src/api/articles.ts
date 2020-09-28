import { request } from '../utils/request'

interface IArtcileParam {
  tag?: string
  author?: string
  favorited?: string
  limit?: number
  offset?: number
}

// get public articles
export const getArticles = (params: IArtcileParam) => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params,
  })
}

// get feed articles
export const getYourFeedArticles = (params: IArtcileParam) => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params,
  })
}
