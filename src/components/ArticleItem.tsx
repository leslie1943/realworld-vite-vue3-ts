import { defineComponent, PropType } from 'vue'
import { RouterLink } from 'vue-router'
import { SingleArticleState } from '../models/article'
import { onFavorite } from '../models/article'

const Article = defineComponent({
  props: {
    article: {
      type: Object as PropType<SingleArticleState>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div class="article-preview">
        <div class="article-meta">
          <RouterLink
            to={{
              path: `/profile/${props.article.author.username}`,
            }}
          >
            <img src={props.article.author.image} />
          </RouterLink>
          <div class="info">
            <RouterLink
              to={{
                path: `/profile/${props.article.author.username}`,
              }}
            >
              {props.article.author.username}
            </RouterLink>
            <span class="date">{props.article.createdAt.substring(0, 10)}</span>
          </div>
          <button
            class={
              props.article.favorited
                ? 'active btn btn-outline-primary btn-sm pull-xs-right'
                : 'btn btn-outline-primary btn-sm pull-xs-right'
            }
            disabled={props.article.favoriteDisable}
            onClick={() => onFavorite(props.article)}
          >
            <i class="ion-heart"></i> {props.article.favoritesCount}
          </button>
        </div>
        <RouterLink
          to={{ path: '/article/' + props.article.slug }}
          class="preview-link"
        >
          <h1>{props.article.title}</h1>
          <p>{props.article.body}</p>
          <span>Read more...</span>
        </RouterLink>
      </div>
    )
  },
})

export default Article
