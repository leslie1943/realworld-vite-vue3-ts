import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

const Banner = () => (
  <div class="banner" style={{ background: '#2e5881' }}>
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>
)

const Sidebar = () => (
  <div class="col-md-3">
    <div class="sidebar">
      <p>Popular Tags</p>

      <div class="tag-list">
        <a href="" class="tag-pill tag-default">
          programming
        </a>
        <a href="" class="tag-pill tag-default">
          javascript
        </a>
        <a href="" class="tag-pill tag-default">
          emberjs
        </a>
        <a href="" class="tag-pill tag-default">
          angularjs
        </a>
        <a href="" class="tag-pill tag-default">
          react
        </a>
        <a href="" class="tag-pill tag-default">
          mean
        </a>
        <a href="" class="tag-pill tag-default">
          node
        </a>
        <a href="" class="tag-pill tag-default">
          rails
        </a>
      </div>
    </div>
  </div>
)

export default defineComponent(() => {
  const r = useRoute() // this.$route
  return () => (
    <div class="home-page">
      {/* Banner */}
      <Banner />
      <div class="container page">
        <div class="row">
          <div class="col-md-9">
            <div class="feed-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <a class="nav-link disabled" href="">
                    Your Feed
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            <div class="article-preview">
              <div class="article-meta">
                <a href="">
                  <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2944431657,2985501309&fm=11&gp=0.jpg" />
                </a>
                <div class="info">
                  <a href="" class="author">
                    Eric Simons
                  </a>
                  <span class="date">January 20th</span>
                </div>
                <button class="btn btn-outline-primary btn-sm pull-xs-right">
                  <i class="ion-heart"></i> 29
                </button>
              </div>
              <a href="" class="preview-link">
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </a>
            </div>

            <div class="article-preview">
              <div class="article-meta">
                <a href="">
                  <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2944431657,2985501309&fm=11&gp=0.jpg" />
                </a>
                <div class="info">
                  <a href="" class="author">
                    Albert Pai
                  </a>
                  <span class="date">January 20th</span>
                </div>
                <button class="btn btn-outline-primary btn-sm pull-xs-right">
                  <i class="ion-heart"></i> 32
                </button>
              </div>
              <a href="" class="preview-link">
                <h1>
                  The song you won't ever stop singing. No matter how hard you
                  try.
                </h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </a>
            </div>
          </div>
          {/* Popular Tags */}
          <Sidebar />
        </div>
      </div>
    </div>
  )
})
