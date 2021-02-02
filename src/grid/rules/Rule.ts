import { GridPossibilityData } from "@grid/GridPossibilityData";

export abstract class Rule {
  public abstract set(
    gridPossibilityData: GridPossibilityData,
    y: number, x: number, cellY: number, cellX: number,
    cellStartY: number, cellStartX: number, num: number,
  ): void;
}
