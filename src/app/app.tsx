import { useGSAP } from "@gsap/react";
import { TimelineWheel } from "../components/timeline-wheel/timeline-wheel";
import { Header } from "../components/header/header";

import { Carousel } from "../components/carousel/carousel";
import { useState } from "react";
import { TOPICS } from "./constant";
import { gsap } from 'gsap';

import styles from './app.module.css'
import { useMatchMedia } from "./hook";
import { Navigation } from "../components/navigation/navigation";

gsap.registerPlugin(useGSAP);

export const App = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const titles = TOPICS.map(({discipline}) => discipline);

  const isTablet = useMatchMedia('(max-width: 767px)');

  const activeTopicItems = TOPICS[activeIdx].items;
  
  const targetStartDate = activeTopicItems[0].time;
  const targetEndDate = activeTopicItems[activeTopicItems.length - 1].time;

  const handleClick = (idx: number) => {
    if (idx === activeIdx) {
      return;
    }

    gsap.to('.splide', { opacity: 0, duration: 0.3 });

    setActiveIdx(idx);

    gsap.to('.splide', { opacity: 1, duration: 0.3, delay: 1 });
  };

  const handlePrev = () => {
    if (activeIdx === 0) {
      handleClick(TOPICS.length - 1);

      return;
    }

    handleClick(activeIdx - 1);
  }

  const handleNext = () => {
    if (activeIdx === TOPICS.length - 1) {
      handleClick(0);

      return;
    }

    handleClick(activeIdx + 1);
  }

  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <div style={{position: 'relative'}}>
          <Header/>
          <TimelineWheel
            activeIdx={activeIdx}
            data={titles}
            onClick={handleClick}
            isTablet={isTablet}
            targetStartDate={targetStartDate}
            targetEndDate={targetEndDate}
          />
          {isTablet ? null : (
            <Navigation
              activeIdx={activeIdx}
              totalItems={TOPICS.length}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}
        </div>
        <div style={{position: 'relative'}}>
          <Carousel data={TOPICS[activeIdx].items}/>
          {isTablet ? (
            <Navigation
              activeIdx={activeIdx}
              totalItems={TOPICS.length}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

