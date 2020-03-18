const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.deck.cards[this.turns];
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
    if(this.turns >= this.deck.cards.length ){
      const score = this.calculatePercentCorrect();
      return `** Round over! ** You answered ${score}% of the questions correctly!`
    } else {
      return 'Round isn\'t over yet'
    };
  }
};

module.exports = Round;
