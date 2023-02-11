import React, { useState } from 'react';
import { useCreatureStates } from './use-creature-states.js';

const Navigator = () => {
  const { ketil, andreas } = useCreatureStates();
  const [ ketilState, setKetilState ] = ketil;
  console.log('ketil', ketil);
  return (
    <div>
      <button onClick={() => setKetilState(!ketilState)}>Ketil: {ketilState}</button>
      <button>Andreas</button>
      <button>IrisOgArne</button>
    </div>
  );
};

export default Navigator;
