import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TimelineWheel } from "../components/timeline-wheel/timeline-wheel";
import { Header } from "../components/header/header";

import { Carousel } from "../components/carousel/carousel";
import { useState } from "react";
import { TOPICS } from "./constant";

import styles from './app.module.css'

gsap.registerPlugin(useGSAP);

export const App = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleIdxChange = (idx: number) => {
    setActiveIdx(idx);
  }

  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <Header/>
        <TimelineWheel activeIdx={activeIdx} onIdxChange={handleIdxChange}/>
        <Carousel data={TOPICS[activeIdx].items}/>
      </div>
    </div>
  );
};

