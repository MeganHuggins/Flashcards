const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
  if(this.turns >= this.deck.length){
      this.endRound();
    } else {
      return this.deck.cards[this.turns];
    };
  };

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard()
    const newTurn = new Turn(guess, currentCard);
    this.turns++;
    if(newTurn.guess !== newTurn.card.correctAnswer){
      this.incorrectGuesses.push(newTurn.card.id)
    };
    return newTurn.giveFeedback();
  };

  calculatePercentCorrect(){
    const correctGuesses = this.turns - this.incorrectGuesses.length;
    const correctPercent = (correctGuesses / this.turns)*100;
    return Math.round(correctPercent);
  };

  endRound(){
    return 'BOOM';
  }
};

module.exports = Round;
