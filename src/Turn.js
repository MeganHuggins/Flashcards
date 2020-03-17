class Turn {
  constructor(guess, card){
    this.guess = guess;
    this.card = card;
  };

  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.card;
  };

  evaluateGuess() {
    return this.card.correctAnswer === this.guess;
    // the equality check always resolves to a boolean, so if the correctAnswer on the card stricly eqauls the guess it will resolve to true and if it does not it will return a false boolean. So all we have to do is return the resolve from the equality check
  };

  giveFeedback() {
    return (this.card.correctAnswer === this.guess ? 'correct!' : 'incorrect!')
  };
};

module.exports = Turn;
