import React, { useEffect, useState } from "react";
import Navigator from "./components/navigator.jsx";
import PowUGotchi from "./components/powugotchi.jsx";
import { useCreatureState } from "./components/use-creature-states.js";
import "./App.css";

const App = ({ socket }) => {
  const [ andreasData, setAndreasData ] = useState();
  const [ ketilData, setKetilData ] = useState();
  const [ irisOgArneData, setIrisOgArneData ] = useState();
  
  // display states:
  const [ ketilState, setKetilState ] = useCreatureState();
  const [ andreasState, setAndreasState ] = useCreatureState();
  const [ irisState, setIrisState ] = useCreatureState();

  const navigationCreatures = {
    ketil: [ ketilState, setKetilState ],
    andreas: [ andreasState, setAndreasState ],
    iris: [ irisState, setIrisState ]
  }

  useEffect(() => {
    socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);

      console.log('GOT MESSAGE', message)

      if (message.data) { 
        switch (message.name) {
          case "AndreasCats": 
            console.log('Found AndreasCats', message.data.P);
            setAndreasData(message);
            break;
          
          case "KetilCats": 
            console.log('Found KetilCats', message.data.P);
            setKetilData(message);
            break;
          
          case "IrisOgArneCats": 
            console.log('Found IrisOgArneCats', message.data.P);
            setIrisOgArneData(message);
            break;
          
        }
      }
    });
  }, []);

  return (
    <div>
      <Navigator creatures={navigationCreatures} />
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
        {ketilState && <PowUGotchi data={ketilData} type="KetilCats" />}
        {andreasState && <PowUGotchi data={andreasData} type="AndreasCats" />}
        {irisState && <PowUGotchi data={irisOgArneData} type="IrisOgArneCats" />}
      </div>
    </div>
  );
};

export default App;
