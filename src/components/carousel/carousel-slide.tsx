import { SplideSlide } from '@splidejs/react-splide';

import styles from './carousel-pagination.module.css';

interface CarouselSlideProps {
  idx: number;
  time: number;
  description: string;
}

export const CarouselSlide = ({
  idx,
  time,
  description
}: CarouselSlideProps) => {
  return (
    <SplideSlide key={idx}>
      <div>
        <span className={styles.carousel__time}>
          {time}
        </span>
        <p className={styles.carousel__description}>
          {description}
        </p>
      </div>
    </SplideSlide>
  )
}