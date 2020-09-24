import {
  createRouter,
  createWebHashHistory,
  RouteLocationRaw,
} from 'vue-router'

export const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'root',
      // layout component
      component: () => import('./layout/index'),
      redirect: { name: 'home' },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('./views/index'),
        },
      ],
    },
  ],
})

export const __HREF__ = (to: RouteLocationRaw) => router.resolve(to).href
