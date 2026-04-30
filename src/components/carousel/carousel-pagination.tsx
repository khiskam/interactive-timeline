import { ArrowSvg } from "../../shared/asset/svg/arrow";

export const CarouselPagination = () => {
  return (
    <div className="splide__arrows">
      <button className="splide__arrow splide__arrow--prev">
        <ArrowSvg />
      </button>
      <button className="splide__arrow splide__arrow--next">
        <ArrowSvg />
      </button>
    </div>
  );
};
