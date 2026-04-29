import { useMatchMedia } from './hook';
import { TimelineCircle } from './timeline-circle';
import { TimelineTitle } from './timeline-title';

import styles from './timeline-wheel.module.css';

interface TimelineWheelProps {
  activeIdx: number;
  onIdxChange: (idx: number) => void;
}

export const TimelineWheel = ({activeIdx, onIdxChange}: TimelineWheelProps) => {
  const isTablet = useMatchMedia('(max-width: 767px)');

  return (
    <div className={styles['timeline-wheel']}>
      {isTablet ? null : (
        <TimelineCircle onIdxChange={onIdxChange} activeIdx={activeIdx}/>
      )}
      <TimelineTitle />
    </div>
  )
}