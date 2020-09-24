import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent(() => {
  const r = useRoute()
  return () => <div>Login Page</div>
})
