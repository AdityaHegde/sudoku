export class Grid {
  private grid = new Array<Array<number>>();

  constructor() {
    for (let y = 0; y < 9; y++) {
      const row = new Array<number>();

      for (let x = 0; x < 9; x++) {
        row.push(0);
      }

      this.grid.push(row);
    }
  }

  public set(y: number, x: number, num: number) {
    this.grid[y][x] = num;
  }

  public get(y: number, x: number) {
    return this.grid[y][x];
  }

  public toString() {
    let gridStr = "";

    const fillRowSeperation = () => {
      for (let y = 0; y < (9 * 4 + 1); y++) {
        gridStr += "-";
      }
      gridStr += "\n";
    };

    fillRowSeperation();

    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        gridStr += `| ${this.grid[y][x]} `;
      }
      gridStr += "|\n";
      fillRowSeperation();
    }

    return gridStr;
  }
}
