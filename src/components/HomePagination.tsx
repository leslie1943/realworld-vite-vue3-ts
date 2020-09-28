import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { totalPage } from '../models/article'

const HomePagination = defineComponent({
  props: {
    page: Number,
    tab: String,
    tag: String,
  },
  setup(props) {
    return () => (
      <nav class="container page">
        <ul class="pagination">
          {totalPage.value.map((item) => (
            <li
              class={props.page == item.id ? 'active page-item' : 'page-item'}
            >
              <RouterLink
                class="page-link"
                to={{
                  path: '/',
                  query: {
                    tab: props.tab,
                    tag: props.tag,
                    page: item.id as number,
                  },
                }}
              >
                {item.id}
              </RouterLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  },
})

export default HomePagination
