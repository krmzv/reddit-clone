const doc = document.currentScript.ownerDocument
const gridTemplate = doc.querySelector('#grid').content

class PostGrid extends HTMLElement {

  static get observedAttributes() {
    return ['posts', 'loading']
  }
  
  constructor(){
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(gridTemplate.cloneNode(true))

    this.update = function(p = this.posts){
      try{
        const postsData = JSON.parse(p)
        const postsContainer = shadow.querySelector('#posts')
        const postCard = document.createElement('one-post')

        console.log(postsData)

        postsData.map(post => {
          postsContainer.appendChild(postCard)
          postCard.image = post.image
          postCard.headline = post.headline
        })
      } catch(e) { console.log(e) }
  
    }

    this.isLoading = function(prop, newValue){

      const loadingComponent = shadow.querySelector('#loading')

      if(prop === 'loading' && (!newValue || newValue === null || newValue === 'undefined')){
        loadingComponent.style.display = 'none'
      } else {
        loadingComponent.style.display = 'grid'
        this.update()
      }
    }

  }

  set posts(posts) {
    this.setAttribute('posts', posts)
  }
  set loading(loading){
    if(loading){
      return this.setAttribute('loading', '')
    } else return this.removeAttribute('loading')
  }

  get posts() {
    return this.getAttribute('posts')
  }
  get loading(){
    return this.hasAttribute('loading')
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    this.isLoading(prop, newValue)  
  }

  }
    
window.customElements.define('post-grid', PostGrid)