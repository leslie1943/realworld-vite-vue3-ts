import { defineComponent, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
import { UserInfoState } from '../store/user/types'

export default defineComponent({
  setup() {
    const store = useStore()
    const user = computed<UserInfoState>(() => {
      return store.state.user.user
    })
    return () => (
      <nav class="navbar navbar-light">
        <div class="container">
          <RouterLink class="navbar-brand" to={{ path: '/' }}>
            <span style={{ color: '#2e5881' }}>conduit</span>
          </RouterLink>

          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <RouterLink class="nav-link active" to={{ path: '/' }}>
                Home
              </RouterLink>
            </li>

            {user.value && (
              <li class="nav-item">
                <RouterLink class="nav-link" to={{ path: '/' }}>
                  <i class="ion-compose"></i>&nbsp;New Post
                </RouterLink>
              </li>
            )}
            {user.value && (
              <li class="nav-item">
                <RouterLink class="nav-link" to={{ path: '/' }}>
                  <i class="ion-gear-a"></i>&nbsp;Settings
                </RouterLink>
              </li>
            )}
            {!user.value && (
              <li class="nav-item">
                <RouterLink class="nav-link" to={{ path: '/register' }}>
                  Sign up
                </RouterLink>
              </li>
            )}
            {!user.value && (
              <li class="nav-item">
                <RouterLink class="nav-link" to={{ path: '/login' }}>
                  Sign in
                </RouterLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    )
  },
})
