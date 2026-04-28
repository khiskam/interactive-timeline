import { useRef, useState } from 'react';

import styles from './timeline-dot.module.css';

interface TimelineDotProps {
  idx: number;
  isActive: boolean;
  rotationOffset: number;
  onClick: (idx: number) => void;
}

export const TimelineDot = ({ isActive, idx, rotationOffset, onClick }: TimelineDotProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const deg = 60 * idx + rotationOffset;

  const isExpanded = isActive || isHovered;

  return (
    <div 
      className={styles['timeline-circle__dot-wrapper']}
      style={{ transform: `rotate(${deg}deg) translate(265px) rotate(${-deg}deg)` }}
    >
      <div 
        className={styles['timeline-circle__dot-hitbox']}
        onClick={() => onClick(idx)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          ref={dotRef}
          className={styles[isExpanded ? 'timeline-circle__dot_big' : 'timeline-circle__dot_small']}
        >
          {isExpanded ? (
            <span className={styles['timeline-circle__text']}>
              {idx + 1}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};