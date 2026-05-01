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
    matches = true;
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

  test("should return true when the media query initially matches", () => {
    const { result } = renderHook(() => useMatchMedia("(max-width: 767px)"));
    expect(result.current).toBe(true);
  });

  test("should return false when the media query initially does not match", () => {
    matches = false;
    const { result } = renderHook(() => useMatchMedia("(max-width: 767px)"));
    expect(result.current).toBe(false);
  });

  test("should update value when media query match status changes", () => {
    matches = false;
    const { result } = renderHook(() => useMatchMedia("(max-width: 767px)"));
    expect(result.current).toBe(false);

    act(() => {
      matches = true;
      listeners.forEach((cb) => cb());
    });

    expect(result.current).toBe(true);
  });

  test("should clean up event listeners on unmount to prevent memory leaks", () => {
    matches = false;
    const { unmount } = renderHook(() => useMatchMedia("(max-width: 767px)"));
    expect(listeners.length).toBe(1);

    unmount();

    expect(listeners.length).toBe(0);
  });
});
