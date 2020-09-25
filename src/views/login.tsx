import { defineComponent, onMounted, ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { loginState } from '../models/login'
import { login, register } from '../api/user'

export default defineComponent({
  setup() {
    const route = useRoute()
    // 是否是登录
    const isLogin = computed(() => {
      return route.path === '/login'
    })
    // 文字显示
    const title = computed(() => {
      return isLogin.value ? 'Sign in' : 'Sign up'
    })

    // 提交事件
    const onSubmit = async (e: Event) => {
      e.preventDefault()
      try {
        const { data } = isLogin.value
          ? await login({ user: loginState.user })
          : await register({ user: loginState.user })
        console.info('data', data)
      } catch (err) {
        console.dir(err)
        loginState.errors = err.response.data.errors

        console.info(loginState.errors)
      }
    }

    return () => (
      <>
        <div class="auth-page">
          <div class="container page">
            <div class="row">
              <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">{title.value}</h1>
                <p class="text-xs-center">
                  {isLogin.value && (
                    <RouterLink to={{ path: '/register' }}>
                      Need an account?
                    </RouterLink>
                  )}
                  {!isLogin.value && (
                    <RouterLink to={{ path: '/login' }}>
                      Have an account?
                    </RouterLink>
                  )}
                </p>

                <ul class="error-messages">
                  {Object.keys(loginState.errors).map((key) => (
                    <li>
                      {key}:{loginState.errors[key].join(',')}
                    </li>
                  ))}
                </ul>

                <form onSubmit={onSubmit}>
                  {/* 登录无需名称 */}
                  {!isLogin.value && (
                    <fieldset class="form-group">
                      <input
                        value={loginState.user.username}
                        onInput={(e: any) =>
                          (loginState.user.username = e.target.value)
                        }
                        class="form-control form-control-lg"
                        type="text"
                        placeholder="Your Name"
                      />
                    </fieldset>
                  )}
                  {/* User Info: Email */}
                  <fieldset class="form-group">
                    <input
                      class="form-control form-control-lg"
                      value={loginState.user.email}
                      onInput={(e: any) =>
                        (loginState.user.email = e.target.value)
                      }
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </fieldset>
                  {/* User Info: Password */}
                  <fieldset class="form-group">
                    <input
                      class="form-control form-control-lg"
                      value={loginState.user.password}
                      onInput={(e: any) =>
                        (loginState.user.password = e.target.value)
                      }
                      type="password"
                      placeholder="Password"
                    />
                  </fieldset>
                  {/* Submit button */}
                  <button
                    onClick={onSubmit}
                    class="btn btn-lg btn-primary pull-xs-right"
                  >
                    {title.value}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  },
})
