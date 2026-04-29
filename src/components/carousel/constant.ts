import type { Options } from "@splidejs/splide";

export const CAROUSEL_OPTIONS: Options = { 
  pagination: false, 
  perPage: 3, 
  gap: '80px',
  breakpoints: {
    1279: {
      perPage: 2,
    },
    767: {
      perPage: 1,
      pagination: true,
    }
  }
};