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

import { TimelineDot } from "./timeline-dot";

describe("TimelineDot", () => {
  afterEach(() => {
    cleanup();
  });

  test("should render title and not index if inactive and not hovered", () => {
    render(
      <TimelineDot
        idx={ 0 }
        isActive={ false }
        rotationOffset={ 0 }
        stepAngle={ 60 }
        title="Event 1"
        titleRef={ () => {} }
        onClick={ () => {} }
      />
    );

    expect(screen.getByText("Event 1")).toBeInTheDocument();
    expect(screen.queryByText("1")).not.toBeInTheDocument();
  });

  test("should render index if active", () => {
    render(
      <TimelineDot
        idx={ 0 }
        isActive={ true }
        rotationOffset={ 0 }
        stepAngle={ 60 }
        title="Event 1"
        titleRef={ () => {} }
        onClick={ () => {} }
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("should render index when hovered", () => {
    render(
      <TimelineDot
        idx={ 3 }
        isActive={ false }
        rotationOffset={ 0 }
        stepAngle={ 60 }
        title="Event 4"
        titleRef={ () => {} }
        onClick={ () => {} }
      />
    );

    const button = screen.getByRole("button", { name: "Select Event 4" });

    fireEvent.mouseEnter(button);

    expect(screen.getByText("4")).toBeInTheDocument();

    fireEvent.mouseLeave(button);

    expect(screen.queryByText("4")).not.toBeInTheDocument();
  });

  test("should call onClick with idx when dot is clicked", () => {
    const onClickMock = rs.fn();
    render(
      <TimelineDot
        idx={ 2 }
        isActive={ false }
        rotationOffset={ 0 }
        stepAngle={ 60 }
        title="Event 3"
        titleRef={ () => {} }
        onClick={ onClickMock }
      />
    );

    const button = screen.getByRole("button", { name: "Select Event 3" });
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledWith(2);
  });
});
