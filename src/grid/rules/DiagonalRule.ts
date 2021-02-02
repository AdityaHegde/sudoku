import { GridPossibilityData } from "@grid/GridPossibilityData";
import { Rule } from "./Rule";

export class DiagonalRule extends Rule {
  public set(
    gridPossibilityData: GridPossibilityData,
    y: number, x: number, cellY: number, cellX: number,
    cellStartY: number, cellStartX: number, num: number,
  ): void {
    if (y === x || y + x === 8) {
      this.removeDiagonalPossibility(gridPossibilityData, num);
    }
  }

  private removeDiagonalPossibility(
    gridPossibilityData: GridPossibilityData, num: number,
  ) {
    for (let y = 0; y < 9; y++) {
      gridPossibilityData.deleteGridPossibility(y, y, num);
      gridPossibilityData.deleteGridPossibility(y, 8 - y, num);
    }
  }
}
