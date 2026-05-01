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

import { Header } from "./header";

describe("Header", () => {
  afterEach(() => {
    cleanup();
  });

  test("should render Header", () => {
    render(
      <Header />
    );

    expect(screen.getByText(/Historical.*dates/)).toBeInTheDocument();
  });
});
