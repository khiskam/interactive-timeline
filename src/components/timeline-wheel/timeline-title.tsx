import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import styles from './timeline-title.module.css';

interface TimelineTitleProps {
  targetStartDate: number;
  targetEndDate: number;
}

export const TimelineTitle = ({targetStartDate, targetEndDate}: TimelineTitleProps) => {
  const [startDate, setStartDate] = useState(targetStartDate);
  const [endDate, setEndDate] = useState(targetEndDate);
  
  const animatedDatesRef = useRef({ startDate, endDate });

  useGSAP(() => {
    gsap.killTweensOf(animatedDatesRef.current);
    gsap.to(animatedDatesRef.current, {
      startDate: targetStartDate,
      endDate: targetEndDate,
      duration: 1,
      onUpdate: () => {
        setStartDate(Math.round(animatedDatesRef.current.startDate));
        setEndDate(Math.round(animatedDatesRef.current.endDate));
      }
    });
  }, [targetStartDate, targetEndDate]);

  return (
    <p className={styles['timeline-title']} style={{ gridArea: '1 / 1' }}>
      <span className={styles['timeline-title__text_blue']}>
        {startDate}
      </span>
      &nbsp;&nbsp;
      <span className={styles['timeline-title__text_pink']}>
        {endDate}
      </span>
    </p>
  )
}