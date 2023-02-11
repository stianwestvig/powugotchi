import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const socket = new WebSocket('ws://164.92.190.132:1880/ws');

const element = document.getElementById('root');
ReactDOM.createRoot(element).render(<App socket={socket} />);
