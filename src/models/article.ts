import { reactive } from 'vue'

// Article author state
export interface AuthorState {
  username: string
  bio?: any
  image?: string
  following?: boolean
}

// Articles state
export interface SingleArticleState {
  slug?: string
  title: string
  description?: string
  body: string
  tagList?: Array<string>
  createdAt?: string
  updatedAt?: string
  favorited: boolean
  favoritesCount: number
  author: AuthorState
}
// 🚖🚖 All State
export interface ArticleState {
  // artciles: Array<SingleArticleState> // also works ✅
  // articleTags: Array<string> // also works ✅
  artciles: SingleArticleState[]
  articleTags: string[]
}

// the properties what home page needs.
export const articleState = reactive<ArticleState>({
  artciles: [],
  articleTags: [],
})
