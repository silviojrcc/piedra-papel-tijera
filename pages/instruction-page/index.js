function initInstructionsPage(params) {
    const div = document.createElement("div");
    
    div.innerHTML = `
      <section class="instructions__section">
        <div class="instructions__title">
          <h2 class="instruction"> Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h2>
        </div>
        <div class="instructions__button-container">
          <custom-button class="instructions__button">Jugar!</custom-button>
        </div>
        <div class="hands-container">
          <play-choice>tijeras</play-choice>
          <play-choice>papel</play-choice>
          <play-choice>piedra</play-choice>
        </div>
      </section>
    `;
  
    div.querySelector(".instructions__button")?.addEventListener("click", () => {
      params.goTo("/piedra-papel-tijera/game");
    });
    
    return div;
  }