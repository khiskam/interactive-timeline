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

    expect(screen.getByLabelText("start date")).toHaveTextContent("2015");
    expect(screen.getByLabelText("end date")).toHaveTextContent("2020");
  });
});
