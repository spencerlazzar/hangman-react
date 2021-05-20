import React, { useState, useEffect } from 'react';
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])

  useEffect(() => {
    const hanldeKeydown = event => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter])
          } else {
            // showNotification();
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter])
  
          } else {
            // showNotification();
          }
        }
      }
    }

      window.addEventListener('keydown', hanldeKeydown)
    
      return () => window.removeEventListener('keydown', hanldeKeydown)


  }, [correctLetters, wrongLetters, playable])



  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </>
  );
}

export default App;
