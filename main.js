import { searchReddit, lazyLoad } from './utils/apiCaller.js'

const searchForm = document.querySelector('form-filters')
const postGrid = document.querySelector('post-grid')

let posts = []

searchForm.addEventListener('search', (e) => {
  postGrid.loading = true
  postGrid.posts = []
  getPosts(e.detail.searchTerm, e.detail.subreddit, e.detail.time)
})

async function getPosts(search, sub, time) {
  posts = await searchReddit(search, sub, time)
  postGrid.posts = JSON.stringify(posts)
  postGrid.loading = false;
}

// let scrollOptions = {
//   distance: 50,
//   callback: (done) => {
//     lazyLoad()
//     done()
//   }
// }

// infiniteScroll(scrollOptions)
