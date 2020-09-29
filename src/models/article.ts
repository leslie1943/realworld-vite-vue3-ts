import { reactive, computed } from 'vue'
import { getTags } from '../api/tag'
import {
  addFavorite,
  deleteFavorite,
  getYourFeedArticles,
  getArticles,
} from '../api/article'

// Article author state
export interface AuthorState {
  username: string
  bio?: any
  image?: string
  following?: boolean
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
// 🚖🚖 All State
export interface ArticleState {
  articles: SingleArticleState[] // articles: Array<SingleArticleState> // also works ✅
  articleTags: string[] // articleTags: Array<string> // also works ✅
  articlesCount: number
}

// the properties what home page needs.
export const articleState = reactive<ArticleState>({
  articles: [],
  articleTags: [],
  articlesCount: 0,
})

export const totalPage = computed(() => {
  let temp = []
  const total = Math.ceil(articleState.articlesCount / 20)
  for (let i = 1; i <= total; i++) {
    temp.push({ id: i })
  }
  return temp
})

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

interface SearchParam {
  limit: number
  offset: number
  tag: string
}

// 加载列表
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
