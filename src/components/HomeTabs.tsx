import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
const Tabs = defineComponent({
  props: {
    tag: String,
    tab: String,
  },
  setup(props) {
    return () => (
      <div class="feed-toggle">
        <ul class="nav nav-pills outline-active">
          {/* Your Feed Tab */}
          <li class="nav-item">
            <RouterLink
              class={props.tab === 'your_feed' ? 'active nav-link' : 'nav-link'}
              to={{ path: '/', query: { tab: 'your_feed' } }}
            >
              Your Feed
            </RouterLink>
          </li>
          {/* Global Feed Tab */}
          <li class="nav-item">
            <RouterLink
              class={
                props.tab === 'global_feed' ? 'active nav-link' : 'nav-link'
              }
              to={{ path: '/', query: { tab: 'global_feed' } }}
            >
              Global Feed
            </RouterLink>
          </li>
          {/* Tag Feed Tab */}
          {props.tag && (
            <li class="nav-item">
              <RouterLink
                class={props.tab === 'tag' ? 'active nav-link' : 'nav-link'}
                to={{
                  path: '/',
                  query: {
                    tab: 'tag',
                    tag: props.tag,
                  },
                }}
              >
                # {props.tag}
              </RouterLink>
            </li>
          )}
        </ul>
      </div>
    )
  },
})

export default Tabs
