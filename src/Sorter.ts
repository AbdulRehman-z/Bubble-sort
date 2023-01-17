export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort() {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let z = 0; z < length - i - 1; z++) {
        if (this.compare(z, z + 1)) {
          this.swap(z, z + 1);
        }
      }
    }
    console.log(this);
  }
}
