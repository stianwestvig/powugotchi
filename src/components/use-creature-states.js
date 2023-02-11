import { useState } from 'react';

export const useCreatureStates = () => {
  const [ketilState, setKetilState] = useState(true);
  const [andreasState, setAndreasState] = useState(true);

  return {
    ketil: [ketilState, setKetilState],
    andreas: [andreasState, setAndreasState]
  }
}

