import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

// 此文件仅为挂载路由出口
export default defineComponent(() => {
  return () => <RouterView />
})
