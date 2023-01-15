export {};
import { CharacterCollection } from "./CharactersCollection";
import { NumberCollection } from "./NumberCollection";
import { Sorter } from "./Sorter";

const numberCollection = new NumberCollection([10, 20, 80, 2, 3, -4]);

const characterCollection = new CharacterCollection(
  "zyxwvutsrqponmlkjihgfedcba"
);

const sorter = new Sorter(characterCollection);

sorter.sort();
