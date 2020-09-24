import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import Header from './header'
import Footer from './footer'

export default defineComponent(() => {
  return () => (
    <>
      <Header />
      <RouterView />
      <Footer />
    </>
  )
})
