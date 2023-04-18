function initChoice() {

    class Choice extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            const shadow = this.attachShadow({ mode: 'open' });
            const div = document.createElement('div');
            const style = document.createElement('style');
            const size = this.getAttribute("data-size" || "sm")
            div.className = "choice";

            div.innerHTML = `
              <img class="choice-img ${size}" src="${this.textContent === 'piedra' ? rockImg : (this.textContent === 'tijeras' ? scissorsImg : paperImg)}">
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('play-choice', Choice);
};