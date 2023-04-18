const state = {
  data: {
    currentGame: {
      computerPlay: "",
      playerPlay: "",
      result: "",
    },
    playHistory: {
      player: 0,
      computer: 0,
    },
  },

  getScore() {
    return this.data.playHistory;
  },

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    localStorage.setItem("saved-state", JSON.stringify(newState));
  },
};
