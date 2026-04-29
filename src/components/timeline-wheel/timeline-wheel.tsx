import { TimelineCircle } from "./timeline-circle";
import { TimelineTitle } from "./timeline-title";

import styles from "./timeline-wheel.module.css";

interface TimelineWheelProps {
  activeIdx: number;
  data: string[];
  isTablet: boolean;
  targetStartDate: number;
  targetEndDate: number;
  onClick: (idx: number) => void;
}

export const TimelineWheel = ({
  activeIdx,
  data,
  isTablet,
  targetStartDate,
  targetEndDate,
  onClick,
}: TimelineWheelProps) => {
  return (
    <div className={ styles["timeline-wheel"] }>
      { isTablet
        ? null
        : (
          <TimelineCircle
            onClick={ onClick }
            activeIdx={ activeIdx }
            data={ data }
          />
        ) }
      <TimelineTitle
        targetStartDate={ targetStartDate }
        targetEndDate={ targetEndDate }
      />
    </div>
  );
};
