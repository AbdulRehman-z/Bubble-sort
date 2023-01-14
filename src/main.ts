export {};
import { NumberCollection } from "./NumberCollection";
import { Sorter } from "./Sorter";

const numberCollection = new NumberCollection([10, 20, 80, 2, 3, -4]);

const sorter = new Sorter(numberCollection);

sorter.sort();
