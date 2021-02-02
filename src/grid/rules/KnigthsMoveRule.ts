import { GridPossibilityData } from "@grid/GridPossibilityData";
import { Rule } from "./Rule";

const COORDS: Array<[moveY: number, moveX: number]> = [
  [-2, -1], [-2, 1],
  [-1, -2], [-1, 2],
  [2, -1], [2, 1],
  [1, -2], [1, 2],
];

export class KnigthsMoveRule extends Rule {
  public set(
    gridPossibilityData: GridPossibilityData,
    y: number, x: number, cellY: number, cellX: number,
    cellStartY: number, cellStartX: number, num: number,
  ): void {
    COORDS.forEach(([moveY, moveX]) => {
      this.removeKnightMovePossibility(gridPossibilityData, y + moveY, x + moveX, num);
    });
  }

  private removeKnightMovePossibility(
    gridPossibilityData: GridPossibilityData,
    y: number, x: number, num: number,
  ) {
    if (y > -1 && y < 9 && x > -1 && x < 9) {
      gridPossibilityData.deleteGridPossibility(y, x, num);
    }
  }
}
