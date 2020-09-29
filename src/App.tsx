import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { localToStore } from './utils/persist'
import { useStore } from 'vuex'

// this file is router exit
// export default defineComponent(() => {
//   return () => <RouterView />
// })

// this file is router exit
export default defineComponent({
  setup() {
    // record login user infomation in case close browser tempratory
    const store = useStore()
    localToStore(store)
    return () => <RouterView />
  },
})
