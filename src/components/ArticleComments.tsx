import { defineComponent, PropType } from 'vue'
import { RouterLink } from 'vue-router'
import {
  SingleArticleState,
  articleState,
  insertComment,
  removeComment,
} from '../models/article'

const ArticleComments = defineComponent({
  props: {
    article: {
      type: Object as PropType<SingleArticleState>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <>
        <form class="card comment-form">
          <div class="card-block">
            <textarea
              class="form-control"
              placeholder="Write a comment..."
              rows={3}
              value={articleState.commentParam.body}
              onInput={(e: any) =>
                (articleState.commentParam.body = e.target.value)
              }
            ></textarea>
          </div>
          <div class="card-footer">
            {props.article.author.image && (
              <img
                src={props.article.author.image}
                class="comment-author-img"
              />
            )}
            <button
              class="btn btn-sm btn-primary"
              onClick={(e) => insertComment(e)}
            >
              Post Comment
            </button>
          </div>
        </form>
        {/* comment list */}
        {articleState.commentList &&
          articleState.commentList.map((comment) => (
            <div class="card" key={comment.id}>
              <div class="card-block">
                <p class="card-text">{comment.body}</p>
              </div>
              <div class="card-footer">
                <RouterLink
                  to={{ path: `/profile/${comment.author.username}` }}
                  class="comment-author"
                >
                  <img src={comment.author.image} class="comment-author-img" />
                </RouterLink>
                <RouterLink
                  to={{ path: `/profile/${comment.author.username}` }}
                  class="comment-author"
                >
                  {comment.author.username}
                </RouterLink>
                <span class="date-posted">
                  {comment.createdAt.substring(0, 10)}
                </span>
                {articleState.currentUserName === comment.author.username && (
                  <span
                    onClick={() =>
                      removeComment(articleState.articleDetail.slug, comment.id)
                    }
                    class="mod-options"
                  >
                    <i class="ion-trash-a"></i>
                  </span>
                )}
              </div>
            </div>
          ))}
      </>
    )
  },
})

export default ArticleComments
