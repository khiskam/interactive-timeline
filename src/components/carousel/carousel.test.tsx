import {
  afterEach,
  describe,
  expect,
  rs,
  test
} from "@rstest/core";
import {
  cleanup,
  render,
  screen
} from "@testing-library/react";

import { Carousel } from "./carousel";

rs.mock("@splidejs/react-splide", () => ({
  Splide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="splide-mock">
      { children }
    </div>
  ),
  SplideTrack: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="splide-track-mock">
      { children }
    </div>
  ),
  SplideSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="splide-slide-mock">
      { children }
    </div>
  ),
}));

describe("Carousel", () => {
  afterEach(() => {
    cleanup();
  });

  const mockData = [
    { title: "Title 1", time: 2010, description: "Event 1" },
    { title: "Title 2", time: 2015, description: "Event 2" },
  ];

  test("should render correct number of slides based on data", () => {
    render(<Carousel data={ mockData } />);

    expect(screen.getByText("2010")).toBeInTheDocument();
    expect(screen.getByText("Event 1")).toBeInTheDocument();

    expect(screen.getByText("2015")).toBeInTheDocument();
    expect(screen.getByText("Event 2")).toBeInTheDocument();
  });

  test("should render navigation pagination", () => {
    const { container } = render(<Carousel data={ mockData } />);

    expect(container.querySelector(".splide__arrows")).toBeInTheDocument();
  });
});
