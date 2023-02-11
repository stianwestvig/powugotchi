import React, { useEffect, useState } from "react";
import ProgressBar from "./progress-bar.jsx";
import Statistics from "./statistics.jsx";
import egg1 from "../assets/images/egg-1.png";
import egg2 from "../assets/images/egg-2.png";
import egg3 from "../assets/images/egg-3.png";
import child from "../assets/images/child.png";
import teen from "../assets/images/teen.png";
import adult from "../assets/images/adult.png";
import rip from "../assets/images/rip.png";

const imageScale = 4;

const lifeStages = [
  { image: egg1, limit: 5000 },
  { image: egg2, limit: 10000 },
  { image: egg3, limit: 15000 },
  { image: child, limit: 20000 },
  { image: teen, limit: 25000 },
  { image: adult, limit: 30000 },
  { image: rip, limit: 35000 },
];

const PowUGotchi = ({ data, type }) => {
  const [age, setAge] = useState(0);
  const name = type?.split("Cats")[0];

  useEffect(() => {
    // console.log('age', age);
    const power = data?.data?.P;

    if (!data) {
      return;
    }

    setAge((age) => age + power);
  }, [data]);

  const percent = 80;

  const getLifeImage = () => {
    const currentLife = lifeStages.filter((stage) => {
      return age < stage.limit;
    });

    if (!currentLife.length) {
      return lifeStages[lifeStages.length - 1].image;
    }

    return currentLife[0].image;
  };

  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <h1>{name}</h1>
      <ProgressBar percent={percent} />
      <img
        src={getLifeImage()}
        style={{ width: imageScale * 64, height: imageScale * 64 }}
      />
      <Statistics data={data} />
    </div>
  );
};

export default PowUGotchi;
