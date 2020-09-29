import { computed, defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { loadArticleDetail, articleState } from '../models/article'
import ArticleMeta from '../components/ArticleMeta'
const ArticleDetail = defineComponent({
  setup() {
    const route = useRoute()
    const slug = computed(() => {
      return route.params.slug as string
    })
    onMounted(() => {
      loadArticleDetail(slug.value)
    })
    return () => (
      <div class="article-page">
        <div class="banner">
          <div class="container">
            <h1>{articleState.articleDetail.title}</h1>
            {/* 有返回值再加载 */}
            {articleState.isLoaded && (
              <ArticleMeta article={articleState.articleDetail} />
            )}
          </div>
        </div>
      </div>
    )
  },
})

export default ArticleDetail
