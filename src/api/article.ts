import { request } from '../utils/request'
import { CommentBody } from '../models/article'

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

// delete article
export const deleteArticle = (slug: string) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}`,
  })
}

// get article comments
export const getComments = (slug: string) => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`,
  })
}

// add article comments
export const addComment = (slug: string, data: CommentBody) => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data,
  })
}

// delete article comments
export const deleteComment = (slug: string, id: number) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`,
  })
}
