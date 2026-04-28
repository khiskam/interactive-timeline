import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TimelineWheel } from "../components/timeline-wheel/timeline-wheel";
import { Header } from "../components/header/header";

import styles from './app.module.css'

gsap.registerPlugin(useGSAP);

export const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <Header/>
        <TimelineWheel/>
      </div>
    </div>
  );
};

