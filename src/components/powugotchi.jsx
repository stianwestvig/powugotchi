import React, { useEffect, useState } from 'react';
import ProgressBar from './progress-bar.jsx';
import egg1 from '../assets/egg-1.png';
import egg2 from '../assets/egg-2.png';
import egg3 from '../assets/egg-3.png';

const imageScale = 4;

const lifeStages = [
  { image: egg1, limit: 5000 },
  { image: egg2, limit: 10000 },
  { image: egg3, limit: 15000 },
];

const PowUGotchi = ({ data, type }) => {
  const [age, setAge] = useState(0);
  const name = type?.split('Cats')[0]

  useEffect(() => {
    console.log('age', age);
    const power = data?.data?.P;

    if (!data) {
      return;
    }

    setAge((age) => age + power);
  }, [data]);

  const percent = (80);

  const getLifeImage = () => {
    const currentLife = lifeStages.filter(stage => {
      console.log(stage)
      return age < stage.limit;
    })

    
    console.log(currentLife);
    if (!currentLife.length) {
      return null;
    }
    
    return currentLife[0].image;
  }


  return (
    <div style={{
      margin: '20px'
    }}>
      <h1>{name}</h1>
      <ProgressBar percent={percent} />
      <img src={getLifeImage()} style={
        { width: imageScale * 64, height: imageScale * 64 }
      } />
    </div>
  );
};

export default PowUGotchi;
