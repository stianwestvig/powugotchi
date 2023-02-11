import { useState } from 'react';

export const useCreatureState = () => {
  const [show, setShow] = useState(true);

  return [
    show,
    setShow,
  ]
}

