import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import Navigator from "./components/navigator.jsx";
import PowUGotchi from "./components/powugotchi.jsx";
import { useCreatureState } from "./components/use-creature-states.js";
import tamagotchiGif from "./assets/images/tamagotchi.gif";
import backgroundMusicSound from "./assets/sounds/background-music.mp3";
import "./App.css";

const App = ({ socket }) => {
  const [ andreasData, setAndreasData ] = useState();
  const [ ketilData, setKetilData ] = useState();
  const [ irisOgArneData, setIrisOgArneData ] = useState();

  const [playBackgroundMusicSound] = useSound(backgroundMusicSound, { volume: 0.4 });
  
  // display states:
  const [ ketilState, setKetilState ] = useCreatureState();
  const [ andreasState, setAndreasState ] = useCreatureState();
  const [ irisState, setIrisState ] = useCreatureState();

  const [gameState, setGameState] = useState(false)
  const [deathCount, setDeathCount] = useState(0)

  const navigationCreatures = {
    ketil: [ ketilState, setKetilState ],
    andreas: [ andreasState, setAndreasState ],
    iris: [ irisState, setIrisState ]
  }
  
  const startGame = () => {
    setGameState(true);
    playBackgroundMusicSound();

    socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);

      if (message.data) { 
        switch (message.name) {
          case "AndreasCats": 
            setAndreasData(message);
            break;
          
          case "KetilCats": 
            setKetilData(message);
            break;
          
          case "IrisOgArneCats": 
            setIrisOgArneData(message);
            break;
          
        }
      }
    });
  }

  const onDeath = (name) => {
    console.log(name + "died. Xoxo")
    setDeathCount((count) => count + 1)
  }

  const renderGame = (        
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}>
      {ketilState && <PowUGotchi onDeath={onDeath} data={ketilData} type="KetilCats" />}
      {andreasState && <PowUGotchi  onDeath={onDeath} data={andreasData} type="AndreasCats" />}
      {irisState && <PowUGotchi onDeath={onDeath} data={irisOgArneData} type="IrisOgArneCats" />}
    </div>
    )

    const gameOver = (        
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <h2>GAME OVER</h2>
        <button onClick={() => window.location.reload(false)}>RESTART</button>
      </div>
      )
  

  return (
    <div>
      <h1 style={{
        color: "hotpink",
        marginBottom: '60px',

      }}>POW-U-GOTCHI</h1>
      {!gameState ? <img style={{width: 200, height: 200}} src={tamagotchiGif}/> : null}
      {/* <Navigator creatures={navigationCreatures} /> */}
      <div>
        {deathCount === 3 ? gameOver : null}
        {!gameState ? <button onClick={() => startGame()}>START</button> : renderGame}
      </div>
    </div>
  );
};

export default App;
