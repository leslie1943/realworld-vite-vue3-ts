import { computed, defineComponent, onMounted, watchEffect } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { articleState, loadData } from '../models/article'
import Article from '../components/Article'
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
    const tag = computed<string>(() => {
      return route.query.tag?.toString() || ''
    })
    // tab页
    const tab = computed<string>(() => {
      return route.query.tab?.toString() || 'global_feed'
    })

    const page = computed(() => {
      return route.query.page || 1
    })

    const params = computed(() => {
      return {
        limit: limit,
        offset: ((page.value as number) - 1) * limit,
        tag: tag.value,
      }
    })

    // detect for query
    watchEffect(() => {
      loadData(params.value, tab.value)
    })

    // init query
    onMounted(() => {
      loadData(params.value, tab.value as string)
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
