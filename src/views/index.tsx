import { computed, defineComponent, onMounted, ref, watchEffect } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getArticles, getYourFeedArticles } from '../api/article'
import { getTags } from '../api/tag'
import { articleState } from '../models/article'
import Article from '../components/HomeArticle'
import HomeTabs from '../components/HomeTabs'
import HomePagination from '../components/HomePagination'

// Main Title
const Banner = () => (
  <div class="banner" style={{ background: '#2e5881' }}>
    <div class="container">
      <h1 class="logo-font"># Test Demo</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>
)
/**
 * Right side tags
 */
const TagSidebar = () => (
  <div class="col-md-3">
    <div class="sidebar">
      <p>Popular Tags</p>

      <div class="tag-list">
        {articleState.articleTags.map((tag) => (
          <RouterLink
            to={{ path: '/', query: { tab: 'tag', tag: tag } }}
            class="tag-pill tag-default"
          >
            {tag}
          </RouterLink>
        ))}
      </div>
    </div>
  </div>
)

// Main component
export default defineComponent({
  setup() {
    const route = useRoute()
    const limit = 20 // page size

    // choose side tag
    const tag = computed(() => {
      return route.query.tag || ''
    })
    // tab页
    const tab = computed(() => {
      return route.query.tab || 'global_feed'
    })
    const page = computed(() => {
      return route.query.page || 1
    })

    const loadData = async () => {
      const params = {
        limit: limit,
        offset: ((page.value as number) - 1) * limit,
        tag: tag.value.toString(),
      }
      const loadArticles =
        tab.value === 'your_feed'
          ? getYourFeedArticles(params)
          : getArticles(params)

      const [articles, tagsResult] = await Promise.all([
        loadArticles,
        getTags(),
      ])
      // article list
      articleState.articles = articles.data.articles
      // tag list
      articleState.articleTags = tagsResult.data.tags
      // article count
      articleState.articlesCount = articles.data.articlesCount
      // 添加自定义属性,防止一直点击
      articleState.articles.forEach(
        (article) => (article.favoriteDisable = false)
      )
    }

    // detective for query
    watchEffect(() => {
      console.info('watch effect')
      loadData()
    })

    onMounted(async () => {
      // 并行执行接口调用
      loadData()
    })

    return () => (
      <div class="home-page">
        <Banner />
        <div class="container page">
          <div class="row">
            <div class="col-md-9">
              <HomeTabs tab={tab.value.toString()} tag={tag.value.toString()} />
              {/* Article list */}
              {articleState.articles.map((item) => {
                return <Article article={item} />
              })}
            </div>
            <TagSidebar />
          </div>
        </div>

        <HomePagination
          page={page.value as number}
          tab={tab.value.toString()}
          tag={tag.value.toString()}
        />
      </div>
    )
  },
})
