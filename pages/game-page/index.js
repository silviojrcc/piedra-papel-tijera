function initGamePage(params) {
    const div = document.createElement("div");
    const bgImg = "../../img/fondo.png";
  
    div.innerHTML = `
      <section class="game__section">
          <div class="game__counter-container">
              <custom-counter class="counter"></custom-counter>
          </div>
          <div class="hands-container">
            <play-choice class="play">tijeras</play-choice>
            <play-choice class="play">papel</play-choice>
            <play-choice class="play">piedra</play-choice>
          </div>
      </section>
    `;

    const style = document.createElement("style");
    style.innerHTML = `
      .game__section{
        background-image:url(${bgImg});
        display:flex;
        width:100%;
        height:100vh;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        padding-top:100px;
        padding-left: 20px;
        padding-right:20px;
      }
      
      .hands-container{
        display:flex;
        gap:40px;
        flex-direction:row;
        overflow:hidden;
        padding: 0 20px;
      }
    `;
  
    
    div.appendChild(style);
    return div;
  }
  