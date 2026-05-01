import {
  afterEach,
  describe,
  expect,
  test
} from "@rstest/core";
import {
  cleanup,
  render,
  screen
} from "@testing-library/react";

import { CarouselSlide } from "./carousel-slide";

describe("CarouselSlide", () => {
  afterEach(() => {
    cleanup();
  });

  test("should render time and description", () => {
    render(
      <CarouselSlide
        idx={ 0 }
        time={ 2015 }
        description="Some historical event happened."
      />
    );

    expect(screen.getByText("2015")).toBeInTheDocument();
    expect(screen.getByText("Some historical event happened.")).toBeInTheDocument();
  });
});
