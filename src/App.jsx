import React, { useEffect, useState } from 'react';
import Navigator from './components/navigator.jsx';
import PowUGotchi from './components/powugotchi.jsx';
import './App.css';

const App = ({ socket }) => {
  const [ andreasData, setAndreasData ] = useState();
  const [ ketilData, setKetilData ] = useState();
  const [ arneOgIrisData, setArneOgIrisData ] = useState();

  useEffect(() => {  
    socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);

      switch (message.name) {
        case "AndreasCats": setAndreasData(message);
        case "KetilCats": setKetilData(message);
        case "ArneOgIrisCats": setArneOgIrisData(message);
      }
    });
  }, []);

  return (
    <div>
      <Navigator />
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        <PowUGotchi data={andreasData} type="KetilCats" />
        <PowUGotchi data={ketilData} type="AndreasCats" />
        <PowUGotchi data={arneOgIrisData} type="IrisOgArneCats" />
      </div>
    </div>
    
  );
}

export default App
