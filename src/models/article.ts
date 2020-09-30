import { reactive, computed } from 'vue'
import { getTags } from '../api/tag'
import { __PUSH__ } from '../router/index'
import { store } from '../store/index'
const { user } = store.modules?.user.state

import {
  addFavorite,
  deleteFavorite,
  getYourFeedArticles,
  getArticles,
  getArticle,
  deleteComment,
  addComment,
  deleteArticle,
  getComments,
} from '../api/article'

// Article author state
export interface AuthorState {
  username: string
  bio?: any
  image?: string
  following?: boolean
  followDisable?: boolean
}

// Articles state
export interface SingleArticleState {
  slug: string
  title: string
  description: string
  body: string
  tagList: Array<string>
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: AuthorState
  favoriteDisable?: boolean
}

export interface SingleCommentState {
  body: string
  createdAt: string
  id: number
  updatedAt: string
  author: AuthorState
}

export interface CommentBody {
  body: string
}

// 🚖🚖 All State
export interface ArticleState {
  articles: SingleArticleState[] // articles: Array<SingleArticleState> // also works ✅
  articleTags: string[] // articleTags: Array<string> // also works ✅
  articlesCount: number
  articleDetail: SingleArticleState
  isLoaded: boolean
  isSelfArticle: boolean
  commentParam: CommentBody
  commentList: SingleCommentState[]
  currentUserName: string
}

interface SearchParam {
  limit: number
  offset: number
  tag: string
}

export const totalPage = computed(() => {
  let temp = []
  const total = Math.ceil(articleState.articlesCount / 20)
  for (let i = 1; i <= total; i++) {
    temp.push({ id: i })
  }
  return temp
})

// load article list
export const loadData = async (params: SearchParam, tab: string) => {
  const loadArticles =
    tab === 'your_feed' ? getYourFeedArticles(params) : getArticles(params)
  const [articles, tagsResult] = await Promise.all([loadArticles, getTags()])
  // article list
  articleState.articles = articles.data.articles
  // tag list
  articleState.articleTags = tagsResult.data.tags
  // article count
  articleState.articlesCount = articles.data.articlesCount
  // 添加自定义属性,防止一直点击
  articleState.articles.forEach((article) => (article.favoriteDisable = false))
}

// load article information
export const loadArticleDetail = async (slug: string) => {
  // setTimeout(async () => {
  articleState.isLoaded = false
  const { data } = await getArticle(slug)
  articleState.articleDetail = data.article

  // is login user self or not
  articleState.isSelfArticle =
    user.username === articleState.articleDetail.author.username
  articleState.isLoaded = true
  // }, 10000)
}

export const loadComments = async (slug: string) => {
  const { data } = await getComments(slug)
  articleState.commentList = data.comments
}

// 点赞/取消
export const onFavorite = async (article: SingleArticleState) => {
  article.favoriteDisable = true
  if (article.favorited) {
    // 取消点赞
    await deleteFavorite(article.slug)
    article.favorited = false
    article.favoritesCount += -1
  } else {
    // 添加点赞
    await addFavorite(article.slug)
    article.favorited = true
    article.favoritesCount += 1
  }
  article.favoriteDisable = false
}

export const removeArticle = async (slug: string) => {
  await deleteArticle(slug)
  __PUSH__('/profile/' + articleState.articleDetail.author.username)
}

// delete article
export const removeComment = async (slug: string, id: number) => {
  await deleteComment(slug, id)
  articleState.commentList = articleState.commentList.filter(
    (item) => item.id != id
  )
}

// add comment
export const insertComment = async (e: Event) => {
  e.preventDefault()
  if (articleState.commentParam.body) {
    await addComment(articleState.articleDetail.slug, articleState.commentParam)
    articleState.commentParam.body = ''
    loadComments(articleState.articleDetail.slug)
  }
}

// custom style for button
export const btnStyle = computed(() => {
  return {
    backgroundColor: articleState.isSelfArticle ? '#B85C5C' : '#2E5885',
    borderColor: articleState.isSelfArticle ? '#B85C5C' : '#2E5885',
    color: articleState.isSelfArticle ? '#FFF' : 'springgreen',
    marginLeft: '10px',
  }
})

// custom class for button
export const btnClass = computed(() => {
  return articleState.articleDetail.author.following
    ? 'active btn btn-sm btn-outline-primary'
    : 'btn btn-sm btn-outline-primary'
})

// the properties what home page needs.
export const articleState = reactive<ArticleState>({
  articles: [],
  articleTags: [],
  articlesCount: 0,
  articleDetail: new Object() as SingleArticleState,
  isLoaded: false,
  isSelfArticle: true,
  commentParam: new Object() as CommentBody,
  commentList: [],
  currentUserName: user.username,
})
