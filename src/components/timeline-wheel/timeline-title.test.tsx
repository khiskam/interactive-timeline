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

import { TimelineTitle } from "./timeline-title";

describe("TimelineTitle", () => {
  afterEach(() => {
    cleanup();
  });

  test("should render target start and end dates", () => {
    render(<TimelineTitle targetStartDate={ 2015 } targetEndDate={ 2020 } />);

    expect(screen.getByText("2015")).toBeInTheDocument();
    expect(screen.getByText("2020")).toBeInTheDocument();
  });
});
