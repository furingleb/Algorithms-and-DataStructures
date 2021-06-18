import { getSortedArray, shuffleArray } from "../../../utils";
import quickSort from "./quickSort";

describe("Quick Sort", () => {
  test("should sort numbers", () => {
    const sortedArray = getSortedArray(100);
    const unSortedArray = shuffleArray(sortedArray);
    expect(quickSort(unSortedArray)).toEqual(sortedArray);
  });
});
