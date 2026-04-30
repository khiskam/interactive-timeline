import {
  describe,
  expect,
  test
} from "@rstest/core";

import { calculateShortestRotation } from "./util";

describe("", () => {
  test("should sayHi correctly", () => {
    const rotation = calculateShortestRotation(-120, -60);
    expect(rotation).toBe(60);
  });

  test("should sayHi correctly", () => {
    const rotation = calculateShortestRotation(120, -60);
    expect(rotation).toBe(180);
  });

  test("should sayHi correctly", () => {
    const rotation = calculateShortestRotation(240, -60);
    expect(rotation).toBe(60);
  });

  test("should sayHi correctly", () => {
    const rotation = calculateShortestRotation(-240, -60);
    expect(rotation).toBe(180);
  });

  test("should sayHi correctly", () => {
    const rotation = calculateShortestRotation(420, -60);
    expect(rotation).toBe(-120);
  });

  test("should sayHi correctly", () => {
    const rotation = calculateShortestRotation(540, -60);
    expect(rotation).toBe(120);
  });

  test("should sayHi correctly", () => {
    const rotation = calculateShortestRotation(-420, -60);
    expect(rotation).toBe(0);
  });

  test("should sayHi correctly", () => {
    const rotation = calculateShortestRotation(-540, -60);
    expect(rotation).toBe(120);
  });
});
