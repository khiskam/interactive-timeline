import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { calculateShortestRotation } from './util';

import { TimelineDot } from './timeline-dot';

import styles from './timeline-circle.module.css';

interface TimelineCircleProps {
  activeIdx: number;
  onIdxChange: (idx: number) => void;
}

export const TimelineCircle = ({onIdxChange, activeIdx}: TimelineCircleProps) => {
  const offsetRef = useRef({ value: -60 });
  const [rotationOffset, setRotationOffset] = useState(-60);

  const handleClick = (idx: number) => {
    onIdxChange(idx);
    
    const currentDotAngle = 60 * idx + offsetRef.current.value;
    const diff = calculateShortestRotation(currentDotAngle, -60);
    
    const targetOffset = offsetRef.current.value + diff;
    
    gsap.to(offsetRef.current, {
      value: targetOffset,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => {
        setRotationOffset(offsetRef.current.value);
      }
    });
  };

  return (
    <div className={styles['timeline-circle']}>
      {Array.from({length: 6}).map((_, idx) => (
        <TimelineDot
          key={idx}
          idx={idx}
          isActive={idx === activeIdx}
          rotationOffset={rotationOffset}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}