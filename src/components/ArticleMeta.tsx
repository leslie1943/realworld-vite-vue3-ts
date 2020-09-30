import { defineComponent, PropType } from 'vue'
import { RouterLink } from 'vue-router'
import { onFollow } from '../models/profile'
import {
  articleState,
  SingleArticleState,
  removeArticle,
  onFavorite,
  btnStyle,
  btnClass,
} from '../models/article'

const ArticleMeta = defineComponent({
  props: {
    article: {
      type: Object as PropType<SingleArticleState>,
      required: true,
    },
  },
  setup(props) {
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
        {articleState.isSelfArticle && (
          <>
            <RouterLink
              style={btnStyle.value}
              class="btn btn-outline-secondary btn-sm"
              to={{ path: `/editor/${props.article.slug}` }}
            >
              <i class="ion-edit"></i> Edit Article
            </RouterLink>

            <button
              onClick={() => removeArticle(props.article.slug)}
              style={btnStyle.value}
              class="btn btn-outline-secondary btn-sm"
            >
              <i class="ion-trash-a"></i> Delete Article
            </button>
          </>
        )}

        {/* some else article */}
        {!articleState.isSelfArticle && (
          <>
            <button
              onClick={() => onFollow(props.article.author)}
              class={btnClass}
              style={btnStyle.value}
            >
              <i class="ion-plus-round"></i>
              {props.article.author.following
                ? `unfollowing ${props.article.author.username}`
                : `following ${props.article.author.username}`}
            </button>
            <button
              style={btnStyle.value}
              class={btnClass}
              onClick={() => onFavorite(props.article)}
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
