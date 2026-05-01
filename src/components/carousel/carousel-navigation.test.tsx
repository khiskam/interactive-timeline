import {
  afterEach,
  describe,
  expect,
  test
} from "@rstest/core";
import { cleanup, render } from "@testing-library/react";

import { CarouselPagination } from "./carousel-navigation";

describe("CarouselPagination", () => {
  afterEach(() => {
    cleanup();
  });

  test("should render previous and next buttons", () => {
    const { container } = render(<CarouselPagination />);

    const prevButton = container.querySelector(".splide__arrow--prev");
    const nextButton = container.querySelector(".splide__arrow--next");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});
