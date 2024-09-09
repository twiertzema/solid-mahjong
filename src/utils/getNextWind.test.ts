import { expect, test } from "vitest";
import getNextWind from "./getNextWind";

test("east", () => {
  expect(getNextWind("east")).toBe("south");
});

test("north", () => {
  expect(getNextWind("south")).toBe("west");
});

test("west", () => {
  expect(getNextWind("west")).toBe("north");
});

test("south", () => {
  expect(getNextWind("north")).toBe("east");
});
