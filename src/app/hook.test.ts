import {
  afterEach,
  beforeEach,
  describe,
  expect,
  rs,
  test
} from "@rstest/core";
import { act, renderHook } from "@testing-library/react";

import { useMatchMedia } from "./hook";

describe("useMatchMedia", () => {
  let matches = true;
  let listeners: (() => void)[] = [];

  beforeEach(() => {
    listeners = [];
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: rs.fn().mockImplementation((query) => ({
        matches,
        media: query,
        onchange: null,
        addEventListener: rs.fn((event, callback) => {
          if (event === "change") {
            listeners.push(callback);
          }
        }),
        removeEventListener: rs.fn((event, callback) => {
          if (event === "change") {
            listeners = listeners.filter((cb) => cb !== callback);
          }
        }),
        dispatchEvent: rs.fn(),
      })),
    });
  });

  afterEach(() => {
    rs.resetAllMocks();
  });

  test("", () => {
    const { result } = renderHook(() => useMatchMedia("(max-width: 767px)"));

    expect(result.current).toBe(true);
  });

  test("", () => {
    matches = false;

    const { result } = renderHook(() => useMatchMedia("(max-width: 767px)"));

    expect(result.current).toBe(false);
  });

  test("", () => {
    matches = false;

    const { result } = renderHook(() => useMatchMedia("(max-width: 767px)"));

    expect(result.current).toBe(false);

    act(() => {
      matches = true;

      listeners.forEach((cb) => cb());
    });

    expect(result.current).toBe(true);
  });

  test("", () => {
    matches = false;
    const { unmount } = renderHook(() => useMatchMedia("(max-width: 767px)"));

    expect(listeners.length).toBe(1);

    unmount();

    expect(listeners.length).toBe(0);
  });
});
