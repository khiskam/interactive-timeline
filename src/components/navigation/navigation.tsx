import { ArrowSvg } from "@/shared/asset/svg/arrow";

import { formatNumber } from "./util";

import styles from "./navigation.module.css";

interface NavigationProps {
  activeIdx: number;
  totalItems: number;
  onPrev: () => void;
  onNext: () => void;
}

export const Navigation = ({
  activeIdx,
  totalItems,
  onPrev,
  onNext,
}: NavigationProps) => {
  return (
    <div className={ styles.navigation }>
      <p className={ styles.navigation__text }>
        { formatNumber(activeIdx + 1) }
        { " " }
        /
        { " " }
        { formatNumber(totalItems) }
      </p>
      <div className={ styles.navigation__buttons }>
        <button
          className={ styles.navigation__button }
          onClick={ onPrev }
          role="button"
          aria-label="prev"
        >
          <ArrowSvg />
        </button>
        <button
          className={ styles.navigation__button }
          onClick={ onNext }
          role="button"
          aria-label="next"
        >
          <ArrowSvg />
        </button>
      </div>
    </div>
  );
};
