import { computed, defineComponent, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { getArticles } from '../api/articles'
import { getTags } from '../api/tag'
import { useStore } from 'vuex'
import { articleState } from '../models/article'
import Article from '../components/Article'

const Banner = () => (
  <div class="banner" style={{ background: '#2e5881' }}>
    <div class="container">
      <h1 class="logo-font">Beyond</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>
)

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

const Tabs = () => (
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <li class="nav-item">
        <RouterLink
          class="nav-link disabled"
          to={{ path: '/', query: { tab: 'your_feed' } }}
        >
          Your Feed
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink
          class="nav-link active"
          to={{ path: '/', query: { tab: 'global_feed' } }}
        >
          Global Feed
        </RouterLink>
      </li>
    </ul>
  </div>
)
export default defineComponent({
  setup() {
    const store = useStore()
    onMounted(async () => {
      // 并行执行接口调用
      const loadArticles = getArticles
      const [articles, tagsResult] = await Promise.all([
        loadArticles({}),
        getTags(),
      ])
      articleState.artciles = articles.data.articles
      articleState.articleTags = tagsResult.data.tags
    })

    return () => (
      <div class="home-page">
        <Banner />
        <div class="container page">
          <div class="row">
            <div class="col-md-9">
              <Tabs />
              {/* Article list */}
              {articleState.artciles.map((article) => (
                <Article
                  image={article.author?.image}
                  createdAt={article.createdAt}
                  username={article.author?.username}
                  title={article.title}
                  body={article.body}
                  favoritesCount={article.favoritesCount}
                  slug={article.slug}
                />
              ))}
            </div>
            <TagSidebar />
          </div>
        </div>
      </div>
    )
  },
})
