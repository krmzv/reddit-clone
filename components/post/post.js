const d = document.currentScript.ownerDocument || document.currentScript._ownerDocument
const postTemplate = document.currentScript.ownerDocument.querySelector('#post').content

class Post extends HTMLElement {

	constructor(){
		super()
		const shadow = this.attachShadow({mode: 'open'});
    shadow.appendChild(postTemplate.cloneNode(true));

		this.update = function() {
			shadow && this.image && shadow.querySelector('#thumbnail').setAttribute('src', this.image)
			shadow && this.headline ? shadow.querySelector('#headline').innerHTML = this.headline : null
		}
	}

	static get observedAttributes() {
		return ['image', 'headline']
	}
	
	set image(url) {
		this.setAttribute('image', url)
	}
	set headline(title) {
		this.setAttribute('headline', title)
	}

	get image() {
		return this.getAttribute('image')
	}
	get headline(){
		return this.getAttribute('headline')
	}

	connectedCallback() {
		this.update();
	}

	attributeChangedCallback(prop, oldValue, newValue) {
			this.update();
	}
}

window.customElements.define('one-post', Post);