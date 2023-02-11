import React from 'react';
import normalImg0 from '../assets/normal-img-0.png';

const PowUGotchi = ({ data }) => {
  // todo: filter out messages based on topic
  // todo: function takes data => outputs a creature "behaviour"
  // todo: select image based on behaviour

  console.log(data);

  return (
    <img src={normalImg0} />
  );
};

export default PowUGotchi;
