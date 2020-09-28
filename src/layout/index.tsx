import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import Header from './Header'
import Footer from './Footer'

export default defineComponent(() => {
  return () => (
    <>
      <Header />
      <RouterView />
      <Footer />
    </>
  )
})
