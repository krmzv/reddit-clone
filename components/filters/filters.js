const filtersTemplate = document.currentScript.ownerDocument.querySelector('#filters').content;

class Form extends HTMLElement {

  static get observedAttributes() { return [] }
  
  connectedCallback() {

    const shadow = this.attachShadow({ mode:'open' })
    shadow.appendChild(filtersTemplate.cloneNode(true))

    this.update()

    const subreddit = shadow.querySelector('#subreddit')
    const search = shadow.querySelector('#search')
    const time = shadow.querySelector('#time')

    shadow.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
      this.dispatchEvent(new CustomEvent('search', {
        detail: {
          subreddit: subreddit.value,
          searchTerm: search.value,
          time: time.value
        }
      }))
    })
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    this.update()
  }

  update() {
  }

}

window.customElements.define('form-filters', Form)