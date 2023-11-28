import React, { useEffect, useState } from "react";
import FimDeJogo from "./FimDeJogo";
import Mesa from "./Mesa";
import jogo from "./jogo";

function JogoDaMemoria() {
  
  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(jogo.startCards());
  }, []);
 

  function restart() {
    jogo.restartPairCont();
    jogo.restartCards();
    jogo.endGame=false;
    setCards(jogo.startCards());
    setGameOver(false);
  }
  function handleFlip(card) {
  
    if (jogo.setCard(card.currentTarget.id)) {
     if (jogo.matchCheck()) {
         jogo.clearCards()
         if (jogo.endGameStatus()) {
            setGameOver(true);
         }
     } else if(jogo.secondCard!=null){
         setTimeout(() => {       
          jogo.resetFlip();
          jogo.clearCards()
          setCards([...jogo.cards]);
         }, 1000);
     }
  }
  setCards([...jogo.cards]);
  }

  return (
    <>
      <Mesa handleFlip={handleFlip} cards={cards}></Mesa>
      <FimDeJogo show={gameOver} handleRestart={restart}></FimDeJogo>
    </>
  );
}

export default JogoDaMemoria;