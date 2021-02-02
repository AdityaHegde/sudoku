export class Heap<T> {
  private array: Array<T>;
  private valueToIdxMap: Map<string, number> = new Map();
  private compareFunction: (child: T, parent: T) => number;
  private idGetter: (v: T) => string;

  constructor(
    initArray = [],
    compareFunction: (child: T, parent: T) => number,
    idGetter: (v: T) => string,
  ) {
    this.array = initArray;
    this.compareFunction = compareFunction;
    this.idGetter = idGetter;

    this.array.forEach((e, i) => {
      this.valueToIdxMap.set(idGetter(e), i);
    });
  }

  public add(value: T) {
    this.valueToIdxMap.set(this.idGetter(value), this.array.length);
    this.array.push(value);
    this.moveUp(this.array.length - 1);
  }
  
  public remove(): T {
    if (this.array.length === 0) {
      return null;
    }

    const value = this.array[0];
    this.valueToIdxMap.delete(this.idGetter(value));
    if (this.array.length > 1) {
      this.array[0] = this.array.pop();
      this.valueToIdxMap.set(this.idGetter(this.array[0]), 0);
      this.moveDown(0);
    }
    else {
      this.array.pop();
    }
    return value;
  }
  
  public delete(value: T) {
    const id = this.idGetter(value);
    if (!this.valueToIdxMap.has(id)) {
      return;
    }

    const idx = this.valueToIdxMap.get(id);
    this.valueToIdxMap.delete(id);

    if (idx < this.array.length - 1) {
      this.array[idx] = this.array.pop();
      this.valueToIdxMap.set(this.idGetter(this.array[idx]), idx);
      this.moveDown(idx);
    }
    else {
      this.array.pop();
    }
  }
  
  // doesnt work on literals
  public update(value: T) {
    const idx = this.valueToIdxMap.get(this.idGetter(value));
    if (!this.moveUp(idx)) {
      this.moveDown(idx);
    }
  }

  private moveUp(idx: number) {
    let movedUp = false;
    while (idx > 0) {
      const parentIdx = (idx - 1) >> 1;
      if (this.compareFunction(this.array[idx], this.array[parentIdx]) > 0) {
        this.swap(idx, parentIdx);
        idx = parentIdx;
        movedUp = true;
      }
      else {
        break;
      }
    }
    return movedUp;
  }

  private moveDown(idx: number) {
    let movedDown = false;
    while (idx < this.array.length) {
      let childIdx = 2 * idx + 1;
  
      if (childIdx >= this.array.length) {
        break;
      }
  
      if (childIdx + 1 < this.array.length &&
        this.compareFunction(this.array[childIdx + 1], this.array[childIdx]) > 0) {
        childIdx++;
      }
  
      if (this.compareFunction(this.array[childIdx], this.array[idx]) > 0) {
        this.swap(idx, childIdx);
        idx = childIdx;
        movedDown = true;
      }
      else {
        break;
      }
    }
    return movedDown;
  }

  private swap(idx0: number, idx1: number) {
    const val0 = this.array[idx0];
    this.array[idx0] = this.array[idx1];
    this.array[idx1] = val0;
    this.valueToIdxMap.set(this.idGetter(this.array[idx0]), idx0);
    this.valueToIdxMap.set(this.idGetter(this.array[idx1]), idx1);
  }
}
