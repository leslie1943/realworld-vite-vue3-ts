import {
  computed,
  defineComponent,
  onMounted,
  onUpdated,
  watchEffect,
} from 'vue'
import { useRoute } from 'vue-router'
import { loadProfile, loadArticles, profileState } from '../models/profile'
import ProfileBanner from '../components/ProfileBanner'
import ProfileTabs from '../components/ProfileTabs'
import ArticleItem from '../components/ArticleItem'

// Main component
export default defineComponent({
  setup() {
    const route = useRoute()
    // route query => tab
    const tab = computed<string>(() => {
      return route.query.tab?.toString() || 'favorited'
    })
    // route params => username
    const username = computed<string>(() => {
      return route.params.username as string
    })
    onMounted(() => {
      // get profile
      loadProfile(username.value)
      // get articles
      loadArticles(tab.value, username.value)
    })
    // 检测params的变化
    onUpdated(() => {
      loadProfile(username.value)
    })

    // detect for query
    watchEffect(() => {
      loadArticles(tab.value, username.value)
    })

    return () => (
      <div class="profile-page">
        <ProfileBanner />
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1">
              {/* Tabs */}
              <ProfileTabs tab={tab.value} username={username.value} />
              {/* Article list */}
              {profileState.articles.map((article) => (
                <ArticleItem article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
})
