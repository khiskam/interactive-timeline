import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { Carousel } from "@/components/carousel/carousel";
import { Header } from "@/components/header/header";
import { Navigation } from "@/components/navigation/navigation";
import { TimelineWheel } from "@/components/timeline-wheel/timeline-wheel";

import { TOPICS } from "./constant";
import { useMatchMedia } from "./hook";

import styles from "./app.module.css";

gsap.registerPlugin(useGSAP);

export const App = () => {
  const [ activeIdx, setActiveIdx ] = useState(0);

  const titles = TOPICS.map(({ discipline }) => discipline);

  const isTablet = useMatchMedia("(max-width: 767px)");

  const activeTopicItems = TOPICS[activeIdx].items;

  const targetStartDate = activeTopicItems[0].time;
  const targetEndDate = activeTopicItems[activeTopicItems.length - 1].time;

  const handleClick = (idx: number) => {
    if (idx === activeIdx) {
      return;
    }

    gsap.to(".splide", { opacity: 0, duration: 0.3 });

    setActiveIdx(idx);

    gsap.to(".splide", { opacity: 1, duration: 0.3, delay: 1 });
  };

  const handlePrev = () => {
    if (activeIdx === 0) {
      handleClick(TOPICS.length - 1);

      return;
    }

    handleClick(activeIdx - 1);
  };

  const handleNext = () => {
    if (activeIdx === TOPICS.length - 1) {
      handleClick(0);

      return;
    }

    handleClick(activeIdx + 1);
  };

  return (
    <div className={ styles.app }>
      <div className={ styles.app__wrapper }>
        <div className={ styles.app__container }>
          <Header />
          <TimelineWheel
            activeIdx={ activeIdx }
            data={ titles }
            onClick={ handleClick }
            isTablet={ isTablet }
            targetStartDate={ targetStartDate }
            targetEndDate={ targetEndDate }
          />
          { isTablet
            ? null
            : (
              <Navigation
                activeIdx={ activeIdx }
                totalItems={ TOPICS.length }
                onPrev={ handlePrev }
                onNext={ handleNext }
              />
            ) }
        </div>
        <div className={ styles.app__container }>
          <Carousel data={ TOPICS[activeIdx].items } />
          { isTablet
            ? (
              <Navigation
                activeIdx={ activeIdx }
                totalItems={ TOPICS.length }
                onPrev={ handlePrev }
                onNext={ handleNext }
              />
            )
            : null }
        </div>
      </div>
    </div>
  );
};
