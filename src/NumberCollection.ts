import { Sorter } from "./Sorter";

export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(i: number, j: number): boolean {
    return this.data[i] > this.data[j];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftSide = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftSide;
  }
}
