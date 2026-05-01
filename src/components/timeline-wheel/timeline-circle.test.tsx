import {
  afterEach,
  describe,
  expect,
  rs,
  test
} from "@rstest/core";
import {
  cleanup,
  fireEvent,
  render,
  screen
} from "@testing-library/react";

import { TimelineCircle } from "./timeline-circle";

rs.mock("@gsap/react", () => ({ useGSAP: rs.fn() }));

rs.mock("gsap", () => ({
  gsap: {
    to: rs.fn(),
    set: rs.fn(),
    killTweensOf: rs.fn(),
  },
}));

describe("TimelineCircle", () => {
  afterEach(() => {
    cleanup();
  });

  const mockData = [ "History", "Literature", "Science" ];

  test("should render correct number of dots based on data", () => {
    render(<TimelineCircle activeIdx={ 0 } data={ mockData } onClick={ () => {} } />);

    mockData.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  test("should propagate onClick to dots", () => {
    const onClickMock = rs.fn();
    render(
      <TimelineCircle activeIdx={ 0 } data={ mockData } onClick={ onClickMock } />
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);

    const literatureButton = screen.getByRole("button", { name: "Select Literature" });
    fireEvent.click(literatureButton);

    expect(onClickMock).toHaveBeenCalledWith(1);
  });
});
