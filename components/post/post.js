const d = document.currentScript.ownerDocument || document.currentScript._ownerDocument
const postTemplate = d.querySelector('#post').content

class Post extends HTMLElement {

	static get observedAttributes() {
		return ['image', 'headline', 'id']
	}

	constructor(){
		super()
		const shadow = this.attachShadow({mode: 'open'})
		shadow.appendChild(gridTemplate.cloneNode(true))

		this.update = function() {
			shadow && this.headline ? shadow.querySelector('#headline').innerHTML = this.headline : null
			shadow && this.image && shadow.querySelector('#thumbnail').setAttribute('src', this.image)
		}
	}
	
	set image(url) {
		this.setAttribute('image', url)
	}
	set headline(title) {
		this.setAttribute('headline', title)
	}
	set id(id){
		this.setAttribute('id', id)
	}

	get image() {
		return this.getAttribute('image')
	}
	get headline(){
		return this.getAttribute('headline')
	}
	get id(){
		return this.getAttribute('id')
	}

	connectedCallback() {
		this.update()
	}

	attributeChangedCallback(prop, oldValue, newValue) {
			this.update()
	}
}

window.customElements.define('one-post', Post)