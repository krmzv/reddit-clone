let baseUrl = 'https://www.reddit.com/r'

let after = []
let s = ''
let sr = ''
let t = 'all'


export const searchReddit = (search, subreddit, time = 'all', lazyLoad = false) => {

  s = search
  sr = subreddit
  t = time

  let url = `${baseUrl}/${subreddit}/search.json?sort=top&restrict_sr=on&limit=10&q=${search}&t=${time}`

  lazyLoad && after.length > 0 ? url += `&after=${after[after.length - 1]}`: url

  return fetch(url)
    .then(res => res.json())
    .then(x => x.data.children)
    .then(posts => posts.filter(post => post.data.thumbnail.startsWith('http'))
}

export const lazyLoad = () => after && after.length > 0 ? searchReddit(s, sr, t, true) : null