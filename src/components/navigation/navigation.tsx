import { ArrowSvg } from '../../shared/asset/svg/arrow';
import styles from './navigation.module.css';

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
  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);

  return (
    <div className={styles.navigation}>
      <p className={styles.navigation__text}>
        {formatNumber(activeIdx + 1)} / {formatNumber(totalItems)}
      </p>
      <div className={styles.navigation__buttons}>
        <button className={styles.navigation__button} onClick={onPrev}>
          <ArrowSvg />
        </button>
        <button className={styles.navigation__button} onClick={onNext}>
          <ArrowSvg />
        </button>
      </div>
    </div>
  );
};
