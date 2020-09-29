import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent(() => {
  return () => (
    <footer>
      <div class="container" style={{ textAlign: 'center' }}>
        <RouterLink to={{ path: '/' }} class="logo-font">
          Home
        </RouterLink>
        <span class="attribution">
          An interactive learning project from{' '}
          <a style={{ color: '#2E5885' }} href="https://thinkster.io">
            Thinkster
          </a>
          . Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  )
})
