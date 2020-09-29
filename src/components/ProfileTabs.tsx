import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
const Tabs = defineComponent({
  props: {
    tab: String,
    username: String,
  },
  setup(props) {
    return () => (
      <div class="articles-toggle">
        <ul class="nav nav-pills outline-active">
          <li class="nav-item">
            <RouterLink
              class={props.tab === 'author' ? 'active nav-link' : 'nav-link'}
              to={{ query: { tab: 'author' } }}
            >
              Articles of {props.username}
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class={props.tab === 'favorited' ? 'active nav-link' : 'nav-link'}
              to={{ query: { tab: 'favorited' } }}
            >
              Favorited articles of {props.username}
            </RouterLink>
          </li>
        </ul>
      </div>
    )
  },
})

export default Tabs
