(function () {
    const container = document.querySelector(".root");
    state.init();
    initCustomButton();
    initChoice();
    initGameScore();
    initCounter();
    initRouter(container);
})();