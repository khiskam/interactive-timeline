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

import { TimelineWheel } from "./timeline-wheel";

rs.mock("@gsap/react", () => ({ useGSAP: rs.fn() }));

rs.mock("gsap", () => ({
  gsap: {
    to: rs.fn(),
    set: rs.fn(),
    killTweensOf: rs.fn(),
  },
}));

describe("TimelineWheel", () => {
  afterEach(() => {
    cleanup();
  });

  const mockData = [ "Item 1", "Item 2" ];

  test("should render TimelineTitle with dates", () => {
    render(
      <TimelineWheel
        activeIdx={ 0 }
        data={ mockData }
        isTablet={ false }
        targetStartDate={ 1990 }
        targetEndDate={ 2000 }
        onClick={ () => {} }
      />
    );

    expect(screen.getByText("1990")).toBeInTheDocument();
    expect(screen.getByText("2000")).toBeInTheDocument();
  });

  test("should render TimelineCircle when isTablet is false", () => {
    render(
      <TimelineWheel
        activeIdx={ 0 }
        data={ mockData }
        isTablet={ false }
        targetStartDate={ 1990 }
        targetEndDate={ 2000 }
        onClick={ () => {} }
      />
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  test("should not render TimelineCircle when isTablet is true", () => {
    render(
      <TimelineWheel
        activeIdx={ 0 }
        data={ mockData }
        isTablet={ true }
        targetStartDate={ 1990 }
        targetEndDate={ 2000 }
        onClick={ () => {} }
      />
    );

    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Item 2")).not.toBeInTheDocument();
  });
});
