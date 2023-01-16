export {};
import { CharacterCollection } from "./CharactersCollection";
import { NumberCollection } from "./NumberCollection";
import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";

// const numberCollection = new NumberCollection([10, 20, 80, 2, 3, -4]);

// const characterCollection = new CharacterCollection(
//   "zyxwvutsrqponmlkjihgfedcba"
// );

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);

console.log(linkedList);
const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
