import { Splide, SplideTrack } from '@splidejs/react-splide';

import type { TopicItem } from '../../shared/type/topic';
import { CAROUSEL_OPTIONS } from './constant';
import { CarouselPagination } from './carousel-pagination';
import { CarouselSlide } from './carousel-slide';

import '@splidejs/react-splide/css/default';

import './carousel.css';

interface CarouselProps {
  data: TopicItem[];
}

export const Carousel = ({data}: CarouselProps) => {
  return (
    <Splide 
      hasTrack={false}
      options={CAROUSEL_OPTIONS}
      aria-label="My Favorite Images"
    >
      <CarouselPagination/>
      <SplideTrack>
        {data.map(({time, description}, idx) => (
          <CarouselSlide key={idx} time={time} description={description} idx={idx}/>
        ))}
      </SplideTrack>
    </Splide>
  )
}

