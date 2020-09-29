# RealWorld-Vite-Vue3-TypeScript

#### Vue3

- `vue`: `^3.0.0-rc.7`,

#### Vite

- -`vite`: `^1.0.0-rc.4`,

#### TypeScript

#### TSX

#### Vuex

- `vuex`: `^4.0.0-beta.4`

#### 本地化数据

- 暴力式的方式，如何更优雅一些

#### 定义的两种方式

```js
// 方式1
export default defineComponent({
  props: {},
  setup() {
    return () => (
      <div>
        <span></span>
      </div>
    )
  },
})

// 方式2
export default defineComponent(() => {
  return () => (
    <div>
      <span></span>
    </div>
  )
})
```
