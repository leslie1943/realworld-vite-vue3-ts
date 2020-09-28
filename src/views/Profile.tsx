import { computed, defineComponent, onMounted, ref, watchEffect } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { profileState } from '../models/profile'
import { getProfile } from '../api/profile'

// Main component
export default defineComponent({
  setup() {
    const route = useRoute()
    onMounted(async () => {
      const username = route.params.username as string
      const { data } = await getProfile(username)
      profileState.profile = data.profile
    })
    return () => (
      <div class="profile-page">
        <div class="user-info">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-10 offset-md-1">
                <div>
                  <img
                    style={{ maxHeight: '200px' }}
                    src={profileState.profile.image}
                  />
                </div>
                <h4>{profileState.profile.username}</h4>
                <p>{profileState.profile.bio || 'No bio yet :('}</p>
                <button
                  class={
                    profileState.profile.following
                      ? 'active btn btn-sm btn-outline-secondary action-btn'
                      : 'btn btn-sm btn-outline-secondary action-btn'
                  }
                >
                  <i class="ion-plus-round"></i>
                  &nbsp;
                  {profileState.profile.following ? 'Unfollow' : 'Follow'}{' '}
                  {profileState.profile.username}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
})
