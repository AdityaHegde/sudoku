import { Grid } from "@grid/Grid";
import { GridPossibilityData } from "@grid/GridPossibilityData";
import { Rule } from "@grid/rules/Rule";

export class GeneratorData {
  public readonly grid: Grid;
  public readonly gridPossibilityData = new GridPossibilityData();

  private rules: Array<Rule>;

  constructor(
    grid: Grid, rules: Array<Rule>,
  ) {
    this.grid = grid;
    this.rules = rules;
  }

  public set(y: number, x: number, num: number) {
    this.grid.set(y, x, num);
    this.gridPossibilityData.resolveNumber(y, x);

    const cellY = Math.floor(y / 3);
    const cellStartY = cellY * 3;
    const cellX = Math.floor(x / 3);
    const cellStartX = cellX * 3;

    this.rules.forEach((rule) => {
      rule.set(
        this.gridPossibilityData,
        y, x, cellY, cellX, cellStartY, cellStartX,
        num,
      );
    });
  }
}
