const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js')

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take a guess to a question and a Card', function(){
    const card = new Card(1, 'Best dj ever?', ['alison wonderland', 'zeds dead', 'nickelback'], 'nickelback');

    const turn = new Turn('nickelback', card);

    expect(turn.guess).to.equal('nickelback');
    expect(turn.card).to.equal(card);
  });

  it('should have a method called returnGuess that returns a guess', function(){
    const card = new Card(1, 'Best dj ever?', ['alison wonderland', 'zeds dead', 'nickelback'], 'nickelback');
    const turn = new Turn('nickelback', card);

    expect(turn.returnGuess).to.be.a('function');
    expect(turn.returnGuess()).to.equal('nickelback');
  });

  it('should have a method called returnCard that returns a card', function(){
    const card = new Card(1, 'Best dj ever?', ['alison wonderland', 'zeds dead', 'nickelback'], 'nickelback');
    const turn = new Turn('nickelback', card);

    expect(turn.returnCard).to.be.a('function');
    expect(turn.returnCard()).to.equal(card);
  });

  it('should have a method called evaluateGuess that evaluates if the guess is true or false', function(){
    const card = new Card(1, 'Best dj ever?', ['alison wonderland', 'zeds dead', 'nickelback'], 'nickelback');
    const turn = new Turn('nickelback', card);
    const turn2 = new Turn('zeds dead', card);
    const turn3 = new Turn('diplo', card);

    expect(turn.evaluateGuess).to.be.a('function');
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
    expect(turn3.evaluateGuess()).to.equal(false);
  });

  it('should have a method called giveFeedback that returns feedback based on correctness', function(){
    const card = new Card(1, 'Best dj ever?', ['alison wonderland', 'zeds dead', 'nickelback'], 'nickelback');
    const turn = new Turn('nickelback', card);
    const turn2 = new Turn('zeds dead', card);
    const turn3 = new Turn('diplo', card);

    expect(turn.giveFeedback).to.be.a('function');
    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
    expect(turn3.giveFeedback()).to.equal('incorrect!');
  });

});
