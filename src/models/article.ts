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

// 被 reactive修饰的不需要类型约束，其内部的属性需要
export const articleState = reactive({
  artciles: Array<IArticlesProps>(),
  articleTags: Array<string>(),
})
