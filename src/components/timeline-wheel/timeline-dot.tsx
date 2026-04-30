import { useRef, useState } from "react";

import styles from "./timeline-dot.module.css";

interface TimelineDotProps {
  idx: number;
  isActive: boolean;
  rotationOffset: number;
  stepAngle: number;
  title: string;
  titleRef: (el: HTMLSpanElement | null) => void;
  onClick: (idx: number) => void;
}

export const TimelineDot = ({
  isActive,
  idx,
  rotationOffset,
  stepAngle,
  title,
  titleRef,
  onClick,
}: TimelineDotProps) => {
  const [ isHovered, setIsHovered ] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const deg = stepAngle * idx + rotationOffset;

  const isExpanded = isActive || isHovered;

  const handleClick = () => {
    onClick(idx);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={ styles["timeline-circle__dot-wrapper"] }
      style={ { transform: `rotate(${deg}deg) translate(265px) rotate(${-deg}deg)` } }
    >
      <div className={ styles["timeline-circle__content"] }>
        <div
          className={ styles["timeline-circle__dot-hitbox"] }
          onClick={ handleClick }
          onMouseEnter={ handleMouseEnter }
          onMouseLeave={ handleMouseLeave }
        >
          <div
            ref={ dotRef }
            className={ styles[isExpanded
              ? "timeline-circle__dot_big"
              : "timeline-circle__dot_small"] }
          >
            { isExpanded
              ? (
                <span className={ styles["timeline-circle__text"] }>
                  { idx + 1 }
                </span>
              )
              : null }
          </div>
        </div>
        <span
          ref={ titleRef }
          className={ `${styles.timeline__title} ${isActive
            ? styles["timeline__title_active"]
            : ""}` }
        >
          { title }
        </span>
      </div>
    </div>
  );
};
