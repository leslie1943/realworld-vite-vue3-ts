import { computed, defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  loadArticleDetail,
  articleState,
  loadComments,
} from '../models/article'
import ArticleMeta from '../components/ArticleMeta'
import ArticleComments from '../components/ArticleComments'

// Main component
const ArticleDetail = defineComponent({
  setup() {
    const route = useRoute()
    const slug = computed(() => {
      return route.params.slug as string
    })
    onMounted(() => {
      loadArticleDetail(slug.value)
      loadComments(slug.value)
    })
    return () => (
      <div class="article-page">
        <div class="banner">
          <div class="container">
            <h1>{articleState.articleDetail.title}</h1>
            {/* render once loaded */}
            {articleState.isLoaded && (
              <ArticleMeta article={articleState.articleDetail} />
            )}
          </div>
        </div>
        {/* article body */}
        <div class="container page">
          <div class="row article-content">
            <div class="col-md-12">
              <p>{articleState.articleDetail.body}</p>
            </div>
          </div>

          <hr />

          {articleState.isLoaded && (
            <div class="article-actions">
              <ArticleMeta article={articleState.articleDetail} />
            </div>
          )}

          {articleState.isLoaded && (
            <div class="row">
              <div class="col-xs-12 col-md-8 offset-md-2">
                <ArticleComments article={articleState.articleDetail} />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  },
})

export default ArticleDetail
