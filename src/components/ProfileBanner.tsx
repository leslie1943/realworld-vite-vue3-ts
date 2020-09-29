import { defineComponent } from 'vue'
import { profileState } from '../models/profile'
import { onFollow } from '../models/profile'

const ProfileBanner = defineComponent({
  setup() {
    return () => (
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
                onClick={() => onFollow(profileState.profile)}
                class={
                  profileState.profile.following
                    ? 'btn btn-sm btn-outline-secondary action-btn active'
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
    )
  },
})

export default ProfileBanner
