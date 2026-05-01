import { expect } from "@rstest/core";
import * as jestDomMatchers from "@testing-library/jest-dom/matchers";

// 1. Добавляем матчеры в runtime
expect.extend(jestDomMatchers);

// 2. Расширяем типы TypeScript (если первого пункта оказалось недостаточно)
declare module "@rstest/core" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Assertion<T = any> extends jestDomMatchers.TestingLibraryMatchers<typeof expect.stringContaining, T> { not: Assertion<T> }
}
