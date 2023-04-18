function initCustomButton(){

    class Button extends HTMLElement {
        constructor() {    
          super();
          this.render();
        }
        
        render(){
            const shadow = this.attachShadow({mode: 'open'});
            const button = document.createElement("button");
            const style = document.createElement("style");
            button.textContent= this.textContent;
            button.className = "boton";

            shadow.appendChild(button);

        }
    }
    customElements.define("custom-button", Button);

}