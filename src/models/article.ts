import { reactive, ref } from 'vue'

// Article author props
export interface IAuthorProp {
  username: string
  bio?: any
  image?: string
  following?: boolean
}

// Articles props
export interface IArticlesProps {
  slug?: string
  title: string
  description?: string
  body: string
  tagList?: Array<string>
  createdAt?: string
  updatedAt?: string
  favorited: boolean
  favoritesCount: number
  author: IAuthorProp
}

interface TagList {
  [index: number]: string
}
export const articleState = reactive({
  artciles: Array<IArticlesProps>(),
  articleTags: Array<string>(),
})
