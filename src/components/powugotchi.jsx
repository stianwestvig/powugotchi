import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import ProgressBar from "./progress-bar.jsx";
import Statistics from "./statistics.jsx";
import egg1 from "../assets/images/egg-1.png";
import egg2 from "../assets/images/egg-2.png";
import egg3 from "../assets/images/egg-3.png";
import child from "../assets/images/child.png";
import teen from "../assets/images/teen.png";
import adult from "../assets/images/adult.png";
import rip from "../assets/images/rip.png";

import deathSound from "../assets/sounds/deathSound.mp3";
import evolveSound from "../assets/sounds/evolveSound.mp3";

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

const PowUGotchi = ({ onDeath, data, type }) => {
  const [age, setAge] = useState(0);
  const [lifeStage, setLifeStage] = useState(lifeStages[0]);
  const [isDead, setIsDead] = useState(false);
  const [progressbar, setProgressbar] = useState(0);
  const name = type?.split("Cats")[0];

  const [playDeathSound] = useSound(deathSound);
  const [playEvolveSound] = useSound(evolveSound);

  useEffect(() => {
    const power = data?.data?.P;

    if (!data) {
      return;
    }

    if (!isDead) {
      setProgressbar((age / lifeStages[lifeStages.length - 1].limit) * 100)
    }
    
    setAge((age) => age + power);
    checkIfNewLifeEvent(age, lifeStage);
  }, [data]);

  const checkIfNewLifeEvent = (age, current) => {
    const currentIndex = lifeStages.findIndex(element => element === current);
    if (isDead) {
      return;
    }

    if (age > current.limit) {
      if (currentIndex === lifeStages.length -1) {
        // U ded
        setIsDead(true);
        playDeathSound();
        setProgressbar(100);
        onDeath(name)
      } else {
        playEvolveSound();
        setLifeStage(lifeStages[currentIndex + 1]);
      }
    }
  };

  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <h2>{name}</h2>
      <ProgressBar percent={progressbar <= 100 ? progressbar : 100} />
      <img
        src={lifeStage.image}
        style={{ width: imageScale * 64, height: imageScale * 64 }}
      />
      {/* <Statistics data={data} /> */}
    </div>
  );
};

export default PowUGotchi;
