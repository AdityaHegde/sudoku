import { Grid } from "@grid/Grid";
import { PossibilityEntry } from "@grid/GridPossibilityData";
import { Rule } from "@grid/rules/Rule";
import { getNineRandomNumbers } from "@util/getNineRandomNumbers";
import { popRandomNumber } from "@util/popRandomNumber";
import { GeneratorData } from "./GeneratorData";

export class Generator {
  public readonly rules: Array<Rule>;

  constructor(rules: Array<Rule>) {
    this.rules = rules;
  }

  public createGeneratorData() {
    return new GeneratorData(new Grid, this.rules);
  }

  public generate(generatorData: GeneratorData) {
    this.fillCell(generatorData, 0, 0);
    this.fillCell(generatorData, 3, 3);
    this.fillCell(generatorData, 6, 6);

    // for (const possibilityEntry of generatorData.gridPossibilityData.getPossibilityEntries()) {
    //   this.resolveNumber(generatorData, possibilityEntry);
    // }

    return generatorData;
  }

  private fillCell(generatorData: GeneratorData, cellStartY: number, cellStartX: number) {
    const centerGridNumbers = getNineRandomNumbers();
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        generatorData.set(y + cellStartY, x + cellStartX, centerGridNumbers.pop());
      }
    }
  }

  private resolveNumber(generatorData: GeneratorData, possibilityEntry: PossibilityEntry) {
    if (possibilityEntry.possibility.size === 0) {
      throw new Error(`Found no possibility at y=${possibilityEntry.y} x=${possibilityEntry.x}`);
    }
    generatorData.set(
      possibilityEntry.y, possibilityEntry.x,
      popRandomNumber([...possibilityEntry.possibility]),
    );
  }
}
