let game = {
    lockMode: false,
    firstCard: null,
    secondCard: null,
    endGame: false,
    pairCont: 6,
    cards: null,
    cardTypes: ['Corinthians', 'Flamengo', 'man', 'roxo', 'Tigre', 'woman'],
  
    endGameStatus: function () {
      return this.endGame;
    },
  
    startCards: function () {
      this.cards = this.createCards(this.cardTypes);
      this.shuffleCards(this.cards);
      return this.cards;
    },
  
    restartCards: function () {
      this.cards = null;
    },
  
    createCards: function (cardTypes) {
      let createdCards = [];
  
      for (let index = 0; index < this.cardTypes.length; index++) {
        createdCards.push(this.createCardPairs(this.cardTypes[index]));
      }
      this.shuffleCards(createdCards);
      return createdCards.flatMap(pair => pair);
    },
  
    createCardPairs: function (cardType) {
      return [{
        icon: cardType,
        id: this.generateCardId(cardType),
        flip: false,
      }, {
        icon: cardType,
        id: this.generateCardId(cardType),
        flip: false,
      }];
    },
  
    generateCardId: function (cardType) {
      return cardType + (Math.floor((Math.random() * 1000)));
    },
  
    shuffleCards: function (cards) {
      var m = cards.length,
        t, i;
  
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = cards[m];
        cards[m] = cards[i];
        cards[i] = t;
      }
  
      return cards;
    },
  
    restartPairCont: function () {
      this.pairCont = 6;
    },
  
    setCard: function (id) {
      let card = this.cards.find(card => card.id === id);
  
      if (card.flip === true || this.lockMode === true) {
        return false;
      }
  
      if (!this.firstCard) {
        if (card.flip === false) {
          this.firstCard = card;
          card.flip = true;
          return true;
        }
  
      } else {
        if (card.flip === false) {
          this.secondCard = card;
          card.flip = true;
          this.lockMode = true;
          return true;
        }
      }
    },
  
    matchCheck: function () {
      if (this.firstCard != null && this.secondCard != null) {
        if (this.firstCard.icon === this.secondCard.icon) {
          this.pairCont--;
  
          if (this.pairCont === 0) {
            this.endGame = true;
          }
  
          return true;
        }
      } else {
        return false;
      }
    },
  
    clearCards: function () {
      this.firstCard = null;
      this.secondCard = null;
      this.lockMode = false;
    },
  
    resetFlip: function () {
      this.firstCard.flip = false;
      this.secondCard.flip = false;
    }
  };
  
  export default game;
  