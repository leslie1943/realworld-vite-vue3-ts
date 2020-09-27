import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { localToStore } from './utils/persist'
import { useStore } from 'vuex'

// 此文件仅为挂载路由出口
// export default defineComponent(() => {
//   return () => <RouterView />
// })

// 此文件仅为挂载路由出口
export default defineComponent({
  setup() {
    // 本地化
    const store = useStore()
    localToStore(store)
    return () => <RouterView />
  },
})
