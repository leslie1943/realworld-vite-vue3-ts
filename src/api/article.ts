import { request } from '../utils/request'

interface IArtcilesParam {
  tag?: string
  author?: string
  favorited?: string
  limit?: number
  offset?: number
}

// get public articles
export const getArticles = (params: IArtcilesParam) => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params,
  })
}

// get feed articles
export const getYourFeedArticles = (params: IArtcilesParam) => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params,
  })
}
// add favorite
export const addFavorite = (slug: string) => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`,
  })
}

// delete favorite
export const deleteFavorite = (slug: string) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`,
  })
}

// get article details
export const getArticle = (slug: string) => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`,
  })
}
