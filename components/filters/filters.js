const filtersTemplate = document.currentScript.ownerDocument.querySelector('#filters').content;

class SearchForm extends HTMLElement {
  static get observedAttributes() { return []; }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode:'open' });
    const clone = document.currentScript.ownerDocument.importNode(filtersTemplate, true);

    this.shadowRoot.appendChild(clone);
    this.update();

    const srInput = this.shadowRoot.querySelectorAll('input')[0];
    const searchInput = this.shadowRoot.querySelectorAll('input')[1];
    const selectInput = this.shadowRoot.querySelector('select');

    this.shadowRoot.querySelector('form').addEventListener('submit', (ev) => {
      ev.preventDefault();
      const srvalue = srInput.value.split(', ');
      if (srvalue[srvalue.length - 1] === '') {
        srvalue.pop();
      }
      this.dispatchEvent(new CustomEvent('search', {
        detail: {
          subreddit: srvalue,
          searchTerm: searchInput.value,
          timeRange: selectInput.value
        }
      }));
      return false;
    });
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    this.update();
  }

  update() {
  }

}

window.customElements.define('search-form', SearchForm);