import { computed, defineComponent, onMounted, PropType } from 'vue'
import { SingleArticleState } from '../models/article'
import { RouterLink } from 'vue-router'
import { store } from '../store/index'

const ArticleMeta = defineComponent({
  props: {
    article: {
      type: Object as PropType<SingleArticleState>,
      required: true,
    },
  },
  setup(props) {
    const { user } = store.modules?.user.state
    const isSelf = computed(() => {
      return user.username === props.article.author.username
    })
    return () => (
      <div class="article-meta">
        <RouterLink to={{ path: `/profile/${props.article.author.username}` }}>
          <img src={props.article.author.image} />
        </RouterLink>
        <div class="info">
          <RouterLink
            class="author"
            to={{ path: `/profile/${props.article.author.username}` }}
          >
            {props.article.author.username}
          </RouterLink>
          <span class="date">{props.article.createdAt.substring(0, 10)}</span>
        </div>

        {/* self article */}
        {isSelf.value && (
          <>
            <RouterLink
              class="btn btn-outline-secondary btn-sm"
              to={{ path: `/editor${props.article.slug}` }}
            >
              <i class="ion-edit"></i> Edit Article
            </RouterLink>

            <button class="btn btn-outline-danger btn-sm">
              <i class="ion-trash-a"></i> Delete Article
            </button>
          </>
        )}

        {/* else article */}
        {!isSelf.value && (
          <>
            <button
              class="btn btn-sm btn-outline-primary"
              style={{
                backgroundColor: '#2E5885',
                borderColor: '#2E5885',
                color: 'springgreen',
              }}
            >
              <i class="ion-plus-round"></i>
              {props.article.author.following
                ? `unfollowing ${props.article.author.username}`
                : `following ${props.article.author.username}`}
            </button>
            <button
              style={{
                backgroundColor: '#2E5885',
                borderColor: '#2E5885',
                color: 'springgreen',
                marginLeft: '10px',
              }}
              class="btn btn-sm btn-outline-primary"
            >
              <i class="ion-heart"></i>
              {props.article.favorited ? 'unfavorite Post' : 'Favorite Post'}
              <span class="counter">({props.article.favoritesCount})</span>
            </button>
          </>
        )}
      </div>
    )
  },
})

export default ArticleMeta
