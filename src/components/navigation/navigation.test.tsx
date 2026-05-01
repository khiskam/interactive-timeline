import {
  afterEach,
  describe,
  expect,
  it,
  rs
} from "@rstest/core";
import {
  cleanup,
  fireEvent,
  render,
  screen
} from "@testing-library/react";

import { Navigation } from "./navigation";

describe("Navigation component", () => {
  afterEach(cleanup);

  it("should display current page and total items as '01 / 06'", () => {
    render(
      <Navigation
        activeIdx={ 0 }
        totalItems={ 6 }
        onPrev={ () => {} }
        onNext={ () => {} }
      />
    );

    expect(screen.getByText("01 / 06")).toBeInTheDocument();
  });

  it("should call onNext callback when Next button is clicked", () => {
    const mockOnNext = rs.fn();

    render(
      <Navigation
        activeIdx={ 0 }
        totalItems={ 6 }
        onPrev={ () => {} }
        onNext={ mockOnNext }
      />
    );

    const nextButton = screen.getByRole("button", { name: /next/i });

    fireEvent.click(nextButton);

    expect(mockOnNext).toHaveBeenCalledTimes(1);
  });

  it("should call onPrev callback when Prev button is clicked", () => {
    const mockOnPrev = rs.fn();

    render(
      <Navigation
        activeIdx={ 0 }
        totalItems={ 6 }
        onPrev={ mockOnPrev }
        onNext={ () => {} }
      />
    );

    const prevButton = screen.getByRole("button", { name: /prev/i });

    fireEvent.click(prevButton);

    expect(mockOnPrev).toHaveBeenCalledTimes(1);
  });

  it("should handle both Prev and Next button clicks independently", () => {
    const mockOnPrev = rs.fn();
    const mockOnNext = rs.fn();

    render(
      <Navigation
        activeIdx={ 0 }
        totalItems={ 6 }
        onPrev={ mockOnPrev }
        onNext={ mockOnNext }
      />
    );

    const prevButton = screen.getByRole("button", { name: /prev/i });
    const nextButton = screen.getByRole("button", { name: /next/i });

    fireEvent.click(prevButton);
    expect(mockOnPrev).toHaveBeenCalledTimes(1);

    fireEvent.click(nextButton);
    expect(mockOnNext).toHaveBeenCalledTimes(1);
  });
});
