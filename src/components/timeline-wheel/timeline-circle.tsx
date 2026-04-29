import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { TimelineDot } from './timeline-dot';
import { calculateShortestRotation } from '../../app/util';

import styles from './timeline-circle.module.css';

interface TimelineCircleProps {
  activeIdx: number;
  data: string[];
  onClick: (idx: number) => void;
}

export const TimelineCircle = ({
  activeIdx,
  data,
  onClick,
}: TimelineCircleProps) => {
  const stepAngle = 360 / data.length;
  const startAngle = -stepAngle;
  const initialOffset = startAngle - (stepAngle * activeIdx);

  const [rotationOffset, setRotationOffset] = useState(initialOffset);

  const offsetRef = useRef({ value: initialOffset });
  const titlesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const prevIdxRef = useRef(activeIdx);

  useGSAP(() => {
    if (prevIdxRef.current === activeIdx) {
      return;
    }
    
    prevIdxRef.current = activeIdx;
    
    if (titlesRef.current[activeIdx]) {
      gsap.killTweensOf(titlesRef.current[activeIdx]);
      gsap.set(titlesRef.current[activeIdx], { opacity: 0 });
    }

    const currentDotAngle = stepAngle * activeIdx + offsetRef.current.value;
    const diff = calculateShortestRotation(currentDotAngle, startAngle);
    
    const targetOffset = offsetRef.current.value + diff;
    
    gsap.killTweensOf(offsetRef.current);
    gsap.to(offsetRef.current, {
      value: targetOffset,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => {
        setRotationOffset(offsetRef.current.value);
      },
      onComplete: () => {
        if (titlesRef.current[activeIdx]) {
          gsap.to(titlesRef.current[activeIdx], { opacity: 1, duration: 0.3 });
        }
      }
    });
  }, [activeIdx]);

  return (
    <div className={styles['timeline-circle']}>
      {data.map((title, idx) => (
        <TimelineDot
          key={idx}
          idx={idx}
          isActive={idx === activeIdx}
          rotationOffset={rotationOffset}
          stepAngle={stepAngle}
          title={title}
          titleRef={(el) => { titlesRef.current[idx] = el; }}
          onClick={onClick}
        />
      ))}
    </div>
  );
}