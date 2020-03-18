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
    console.log('new turn', newTurn);
    this.turns++;
    if(newTurn.guess !== newTurn.card.correctAnswer){
      this.incorrectGuesses.push(newTurn.card.id)
    }
    return newTurn.giveFeedback();
  }
};

module.exports = Round;
