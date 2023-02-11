import React, { useEffect, useState } from 'react';
import PowUGotchi from './components/powugotchi.jsx';
import './App.css';

const App = ({ socket }) => {
  const [ data, setData ] = useState();

  useEffect(() => {  
    // console.log('-----> Add event listener :)');
    socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      setData(message);
    });
  }, []);

  return (
    <div>
      <h1>App</h1>
      <PowUGotchi data={data} />
    </div>
  );
}

export default App
