import React, { useEffect, useState } from 'react';
import PowUGotchi from './components/powugotchi.jsx';
import './App.css';

const App = () => {
  const [ data, setData ] = useState();

  useEffect(() => {
    const socket = new WebSocket('ws://164.92.190.132:1880/ws');

    socket.addEventListener('open', (event) => {
      socket.send('Hello Server!');
    });

    socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      setData(message);
    }, []);
  });

  return (
    <div>
      <h1>App</h1>
      <PowUGotchi data={data} />
    </div>
  );
}

export default App
