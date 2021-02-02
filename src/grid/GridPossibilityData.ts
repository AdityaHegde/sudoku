import { Heap } from "@util/Heap";

export type PossibilityEntry = {
  y: number;
  x: number;
  possibility: Set<number>;
};

export class GridPossibilityData {
  public gridPossibility = new Array<Array<PossibilityEntry>>();
  public possibilityHeap = new Heap<PossibilityEntry>(
    [], (child: PossibilityEntry, parent: PossibilityEntry) =>
      parent.possibility.size - child.possibility.size,
    (v: PossibilityEntry) => `${v.y}-${v.x}`,
  );

  constructor() {
    for (let y = 0; y < 9; y++) {
      const rowPossibility = Array<PossibilityEntry>();

      for (let x = 0; x < 9; x++) {
        const possibilityEntry: PossibilityEntry = {
          y, x, possibility: new Set(),
        }
        for (let i = 0; i < 9; i++) {
          possibilityEntry.possibility.add(i + 1);
        }

        rowPossibility.push(possibilityEntry);
        this.possibilityHeap.add(possibilityEntry)
      }

      this.gridPossibility.push(rowPossibility);
    }
  }

  public resolveNumber(y: number, x: number) {
    this.possibilityHeap.delete(this.gridPossibility[y][x]);
  }

  public deleteGridPossibility(y: number, x: number, num: number) {
    const possibilityEntry = this.gridPossibility[y][x];
    possibilityEntry.possibility.delete(num);
    this.possibilityHeap.update(possibilityEntry);
  }

  public *getPossibilityEntries() {
    let possibilityEntry: PossibilityEntry;
    while ((possibilityEntry = this.possibilityHeap.remove())) {
      yield possibilityEntry;
    }
  }
}
