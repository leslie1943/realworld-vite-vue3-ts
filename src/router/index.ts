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
      component: () => import('../layout/Index'),
      redirect: { name: 'home' },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/Index'),
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/Login'),
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../views/Login'),
        },
        {
          path: '/profile/:username',
          name: 'profile',
          component: () => import('../views/Profile'),
        },
        {
          path: '/article/:slug',
          name: 'article',
          component: () => import('../views/Article'),
        },
        {
          path: '/editor',
          name: 'editor-new',
          component: () => import('../views/Editor'),
        },
        {
          path: '/editor/:slug',
          name: 'editor-edit',
          component: () => import('../views/Editor'),
        },
        {
          path: '/settings', // 设置
          name: 'settings',
          component: () => import('../views/Setting'),
        },
      ],
    },
  ],
})

export const __HREF__ = (to: RouteLocationRaw) => router.resolve(to).href
export const __PUSH__ = (path: string) => router.push(path)
