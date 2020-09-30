import { computed, defineComponent, onMounted, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import {
  editorState,
  onSubmit,
  loadArticle,
  initArticle,
  ACTIONS,
} from '../models/editor'

const Editor = defineComponent({
  setup() {
    const route = useRoute()
    const isNew = computed(() => {
      return route.params && route.params.slug ? false : true
    })
    watchEffect(() => {
      if (isNew.value) {
        initArticle()
      } else {
        loadArticle(route.params.slug as string)
      }
    })
    // onMounted(() => {
    //   // not article
    //   if (isNew.value) {
    //     initArticle()
    //   } else {
    //     loadArticle(route.params.slug as string)
    //   }
    // })
    return () => (
      <div class="editor-page">
        <div class="container page">
          <div class="row">
            <div class="col-md-10 offset-md-1 col-xs-12">
              <form>
                <fieldset>
                  {/* title */}
                  <fieldset class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Article Title"
                      value={editorState.articleForm.title}
                      onInput={(e: any) =>
                        (editorState.articleForm.title = e.target.value)
                      }
                    />
                  </fieldset>
                  {/*  description */}
                  <fieldset class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="What's this article about?"
                      value={editorState.articleForm.description}
                      onInput={(e: any) =>
                        (editorState.articleForm.description = e.target.value)
                      }
                    />
                  </fieldset>
                  {/* body */}
                  <fieldset class="form-group">
                    <textarea
                      class="form-control"
                      rows={8}
                      placeholder="Write your article (in markdown)"
                      value={editorState.articleForm.body}
                      onInput={(e: any) =>
                        (editorState.articleForm.body = e.target.value)
                      }
                    ></textarea>
                  </fieldset>
                  {/* tagList */}
                  <fieldset class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter tags"
                      value={editorState.articleForm.tagListString}
                      onInput={(e: any) =>
                        (editorState.articleForm.tagListString = e.target.value)
                      }
                    />
                    <div class="tag-list"></div>
                  </fieldset>
                  {/* button */}
                  <button
                    class="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    onClick={() => onSubmit(isNew.value)}
                  >
                    {isNew.value ? ACTIONS.PUBLISH : ACTIONS.UPDATE} Article
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  },
})

export default Editor
