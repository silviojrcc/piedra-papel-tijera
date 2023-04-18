function initWelcomePage() {
    const div = document.createElement("div");
    
    div.innerHTML = `
      <section class="welcome__section">
        <div class="title-container">
          <h1 class="title">Piedra, Papel o Tijera</h1>
        </div>
        <div class="button-container">
          <custom-button class="button">Comenzar</custom-button>
        </div>
        <div class="hands-container">
          <play-choice>tijeras</play-choice>
          <play-choice>papel</play-choice>
          <play-choice>piedra</play-choice>
        </div>
      </section>
    `;
  
    return div;
  }