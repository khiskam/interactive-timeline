import { useMatchMedia } from './hook';
import styles from './timeline-wheel.module.css';
import { TimelineCircle } from './timeline-circle';
import { TimelineTitle } from './timeline-title';

export const TimelineWheel = () => {
  const isTablet = useMatchMedia('(max-width: 759px)');

  return (
    <div className={styles['timeline-wheel']}>
      {!isTablet && <TimelineCircle />}
      <TimelineTitle />
    </div>
  )
}