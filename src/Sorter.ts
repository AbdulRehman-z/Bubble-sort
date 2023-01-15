interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort() {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let z = 0; z < length - i - 1; z++) {
        if (this.collection.compare(z, z + 1)) {
          this.collection.swap(z, z + 1);
        }
      }
    }
    console.log(this.collection);
  }
}
