// import { defineComponent } from 'vue'
// import { RouterLink } from 'vue-router'
// import { SingleArticleState, AuthorState } from '../models/article'

// interface ArticleProps {
//   slug?: string
//   title: string
//   description?: string
//   body: string
//   tagList?: Array<string>
//   createdAt: string
//   updatedAt: string
//   favorited: boolean
//   favoritesCount: number
//   author: AuthorState
// }

// const Article = defineComponent<ArticleProps>(() => {
//   return (props: ArticleProps) => (
//     <div class="article-preview">
//       <div class="article-meta">
//         <RouterLink
//           to={{
//             path: '/profile/' + props.article.author.username,
//           }}
//         >
//           <img src={props.article.author.image} />
//         </RouterLink>
//         <div class="info">
//           <RouterLink
//             to={{
//               path: '/profile/' + props.article.author.username,
//             }}
//           >
//             {props.article.author.username}
//           </RouterLink>
//           <span class="date">{props.article.createdAt?.substring(0, 10)}</span>
//         </div>
//         <button class="btn btn-outline-primary btn-sm pull-xs-right">
//           <i class="ion-heart"></i> {props.article.favoritesCount}
//         </button>
//       </div>
//       <RouterLink
//         to={{ path: '/article/' + props.article.slug }}
//         class="preview-link"
//       >
//         <h1>{props.article.title}</h1>
//         <p>{props.article.body}</p>
//         <span>Read more...</span>
//       </RouterLink>
//     </div>
//   )
// })
// // const Article = defineComponent({
// //   setup(props: ArticleProps) {
// //     return () => (
// //       <div class="article-preview">
// //         <div class="article-meta">
// //           <RouterLink
// //             to={{
// //               path: '/profile/' + props.article.author.username,
// //             }}
// //           >
// //             <img src={props.article.author.image} />
// //           </RouterLink>
// //           <div class="info">
// //             <RouterLink
// //               to={{
// //                 path: '/profile/' + props.article.author.username,
// //               }}
// //             >
// //               {props.article.author.username}
// //             </RouterLink>
// //             <span class="date">
// //               {props.article.createdAt?.substring(0, 10)}
// //             </span>
// //           </div>
// //           <button class="btn btn-outline-primary btn-sm pull-xs-right">
// //             <i class="ion-heart"></i> {props.article.favoritesCount}
// //           </button>
// //         </div>
// //         <RouterLink
// //           to={{ path: '/article/' + props.article.slug }}
// //           class="preview-link"
// //         >
// //           <h1>{props.article.title}</h1>
// //           <p>{props.article.body}</p>
// //           <span>Read more...</span>
// //         </RouterLink>
// //       </div>
// //     )
// //   },
// // })

// export default Article
