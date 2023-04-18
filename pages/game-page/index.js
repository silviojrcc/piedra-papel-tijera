function initGamePage(params) {
    const div = document.createElement("div");
  
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
    
    div.appendChild(style);
    return div;
  }
  