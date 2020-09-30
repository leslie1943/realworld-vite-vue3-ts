import { reactive } from 'vue'
import { getArticle, createArticle, updateArticle } from '../api/article'
import { SingleArticleState } from './article'
import { __PUSH__ } from '../router/index'

export const enum ACTIONS {
  PUBLISH = 'Publish',
  UPDATE = 'Update',
}
//
export interface EditorApiState {
  title: string
  description: string
  body: string
  tagList: string[]
  tagListString?: string
}

// all state
export interface EditorState {
  article: SingleArticleState
  tagListString: string
  articleForm: EditorApiState
}

export const editorState = reactive<EditorState>({
  article: new Object() as SingleArticleState,
  articleForm: new Object() as EditorApiState,
  tagListString: '',
})

// submit update / publish article
export const onSubmit = async (isNew: boolean) => {
  const params: EditorApiState = {
    title: editorState.articleForm.title,
    description: editorState.articleForm.description,
    body: editorState.articleForm.body,
    tagList: editorState.articleForm.tagListString
      ? editorState.articleForm.tagListString.split(' ')
      : [],
  }
  if (isNew) {
    const { data } = await createArticle(params)
    __PUSH__(`/article/${data.article.slug}`)
  } else {
    await updateArticle(editorState.article.slug, params)
    __PUSH__(`/article/${editorState.article.slug}`)
  }
}

// load article detail
export const loadArticle = async (slug: string) => {
  const { data } = await getArticle(slug)
  // set article form
  editorState.articleForm = {
    title: data.article.title,
    description: data.article.description,
    body: data.article.body,
    tagList: data.article.tagList,
    tagListString: data.article.tagList.join(' '),
  }
  //
  editorState.article = data.article
}

export const initArticle = () => {
  editorState.articleForm = {
    title: '',
    description: '',
    body: '',
    tagList: [],
    tagListString: '',
  }
}
