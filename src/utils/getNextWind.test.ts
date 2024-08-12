import { expect, test } from "vitest";
import getNextWind from "./getNextWind";

test("east", () => {
  expect(getNextWind("east")).toBe("north");
});

test("north", () => {
  expect(getNextWind("north")).toBe("west");
});

test("west", () => {
  expect(getNextWind("west")).toBe("south");
});

test("south", () => {
  expect(getNextWind("south")).toBe("east");
});
