import {
  describe,
  expect,
  it
} from "@rstest/core";

import { formatNumber } from "./util";

describe("formatNumber", () => {
  it("returns integers >= 10 without padding", () => {
    expect(formatNumber(10)).toBe("10");
  });

  it("pads single-digit positive integers with a leading zero", () => {
    expect(formatNumber(1)).toBe("01");
  });

  it("correctly pads single-digit integers at the upper boundary", () => {
    expect(formatNumber(9)).toBe("09");
  });

  it("formats zero as '00'", () => {
    expect(formatNumber(0)).toBe("00");
  });

  it("leaves negative decimal numbers unchanged", () => {
    expect(formatNumber(-0.01)).toBe("-0.01");
  });

  it("leaves positive decimal numbers unchanged", () => {
    expect(formatNumber(0.01)).toBe("0.01");
  });
});
