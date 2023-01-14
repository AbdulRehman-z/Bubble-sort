export class NumberCollection {
  constructor(public data: number[]) {}

  get length(): number {
    console.log(this.data);
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
