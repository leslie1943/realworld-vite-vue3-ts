import { defineComponent, onMounted } from 'vue'
import {
  getCurrentUser,
  settingState,
  onSubmit,
  logout,
} from '../models/settings'
import { useStore } from 'vuex'
const Setting = defineComponent({
  setup() {
    const store = useStore()
    onMounted(() => {
      getCurrentUser()
    })
    return () => (
      <div class="settings-page">
        <div class="container page">
          <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
              <h1 class="text-xs-center">Your Settings</h1>

              <form>
                <fieldset>
                  <fieldset class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="URL of profile picture"
                      value={settingState.user.image}
                      onInput={(e: any) =>
                        (settingState.user.image = e.target.value)
                      }
                    />
                  </fieldset>
                  <fieldset class="form-group">
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="Your Name"
                      value={settingState.user.username}
                      onInput={(e: any) =>
                        (settingState.user.username = e.target.value)
                      }
                    />
                  </fieldset>
                  <fieldset class="form-group">
                    <textarea
                      class="form-control form-control-lg"
                      rows={8}
                      placeholder="Short bio about you"
                      value={settingState.user.bio}
                      onInput={(e: any) =>
                        (settingState.user.bio = e.target.value)
                      }
                    ></textarea>
                  </fieldset>
                  <fieldset class="form-group">
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="Email"
                      value={settingState.user.email}
                      onInput={(e: any) =>
                        (settingState.user.email = e.target.value)
                      }
                      disabled
                    />
                  </fieldset>
                  <fieldset class="form-group">
                    <input
                      class="form-control form-control-lg"
                      type="password"
                      disabled
                      placeholder="Password"
                      value={settingState.user.password}
                      onInput={(e: any) =>
                        (settingState.user.password = e.target.value)
                      }
                    />
                  </fieldset>
                  <button
                    class="btn btn-lg btn-primary pull-xs-right"
                    onClick={(e) => onSubmit(e, store)}
                  >
                    Update Settings
                  </button>
                </fieldset>
              </form>
              <button
                onClick={() => logout(store)}
                class="btn btn-outline-danger"
              >
                Or click here to logout.
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  },
})

export default Setting
