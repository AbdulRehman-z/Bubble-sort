export {};
import { CharacterCollection } from "./CharactersCollection";
import { NumberCollection } from "./NumberCollection";
import { LinkedList } from "./LinkedList";

// sort linked list in correct order
const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);
linkedList.sort();
linkedList.print();

// sort numbers in ascending order
const numberCollection = new NumberCollection([10, 3, -5, 0]);
numberCollection.sort();
console.log(numberCollection.data);

// sort characters in ascending order
const characterCollection = new CharacterCollection(
  "zyxwvutsrqponmlkjihgfedcba"
);
characterCollection.sort();
console.log(characterCollection.data);
