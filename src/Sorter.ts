import { NumberCollection } from "./NumberCollection";

export class Sorter {
  constructor(public collection: NumberCollection) {}

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
