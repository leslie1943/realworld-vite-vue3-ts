import { reactive, computed } from 'vue'

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
