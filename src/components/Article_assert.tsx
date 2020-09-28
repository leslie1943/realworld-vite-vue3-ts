// import { ComponentOptions, defineComponent } from 'vue'
// import { RouterLink } from 'vue-router'
// import { ArticleState, SingleArticleState } from '../models/article'

// const Article = defineComponent({
//   props: {
//     article: {
//       type: Object as () => SingleArticleState,
//       required: true,
//     },
//   },
//   setup(props) {
//     return () => (
//       <div class="article-preview">
//         <div class="article-meta">
//           <RouterLink
//             to={{
//               path: '/profile/' + props.article.author.username,
//             }}
//           >
//             <img src={props.article.author.image} />
//           </RouterLink>
//           <div class="info">
//             <RouterLink
//               to={{
//                 path: '/profile/' + props.article.author.username,
//               }}
//             >
//               {props.article.author.username}
//             </RouterLink>
//             <span class="date">{props.article.createdAt.substring(0, 10)}</span>
//           </div>
//           <button class="btn btn-outline-primary btn-sm pull-xs-right">
//             <i class="ion-heart"></i> {props.article.favoritesCount}
//           </button>
//         </div>
//         <RouterLink
//           to={{ path: '/article/' + props.article.slug }}
//           class="preview-link"
//         >
//           <h1>{props.article.title}</h1>
//           <p>{props.article.body}</p>
//           <span>Read more...</span>
//         </RouterLink>
//       </div>
//     )
//   },
// })

// export default Article
