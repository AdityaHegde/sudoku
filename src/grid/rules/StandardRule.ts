import { GridPossibilityData } from "@grid/GridPossibilityData";
import { Rule } from "./Rule";

export class StandardRule extends Rule {
  public set(
    gridPossibilityData: GridPossibilityData,
    y: number, x: number, cellY: number, cellX: number,
    cellStartY: number, cellStartX: number, num: number,
  ): void {
    gridPossibilityData.deleteGridPossibility(y, x, num);

    this.removeCellPossibility(gridPossibilityData, cellStartY, cellStartX, num);

    for (let i = 0; i < 3; i++) {
      if (cellX !== i) {
        this.removeRowPossibility(gridPossibilityData, y, i * 3, num);
      }
      if (cellY !== i) {
        this.removeColumnPossibility(gridPossibilityData, x, i * 3, num);
      }
    }
  }

  private removeCellPossibility(
    gridPossibilityData: GridPossibilityData,
    cellStartY: number, cellStartX: number, num: number,
  ) {
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        gridPossibilityData.deleteGridPossibility(cellStartY + y, cellStartX + x, num);
      }
    }
  }

  private removeRowPossibility(
    gridPossibilityData: GridPossibilityData,
    row: number, cellStartX: number, num: number,
  ) {
    for (let x = 0; x < 3; x++) {
      gridPossibilityData.deleteGridPossibility(row, cellStartX + x, num);
    }
  }

  private removeColumnPossibility(
    gridPossibilityData: GridPossibilityData,
    column: number, cellStartX: number, num: number,
  ) {
    for (let y = 0; y < 3; y++) {
      gridPossibilityData.deleteGridPossibility(cellStartX + y, column, num);
    }
  }
}
