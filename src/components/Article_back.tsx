import { defineComponent } from 'vue'
// import { IAuthorProp } from '../models/article'
// import { __HREF__ } from '../router'
import { RouterLink } from 'vue-router'

const Article = defineComponent({
  props: {
    slug: String,
    image: String,
    title: String,
    body: String,
    username: String,
    favoritesCount: Number,
    createdAt: String,
  },
  setup(props) {
    return () => (
      <div class="article-preview">
        <div class="article-meta">
          <RouterLink
            to={{
              path: '/profile/' + props.username,
            }}
          >
            <img src={props.image} />
          </RouterLink>
          <div class="info">
            <RouterLink
              to={{
                path: '/profile/' + props.username,
              }}
            >
              {props.username}
            </RouterLink>
            <span class="date">{props.createdAt?.substring(0, 10)}</span>
          </div>
          <button class="btn btn-outline-primary btn-sm pull-xs-right">
            <i class="ion-heart"></i> {props.favoritesCount}
          </button>
        </div>
        <RouterLink
          to={{ path: '/article/' + props.slug }}
          class="preview-link"
        >
          <h1>{props.title}</h1>
          <p>{props.body}</p>
          <span>Read more...</span>
        </RouterLink>
      </div>
    )
  },
})

export default Article
