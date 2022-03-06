import { LinkedList } from './LinkedList';
import { CharacteresCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 1, 4, 5, 6, 8, 9, 1, 1, 4, 546, 564, 32132]);
numbersCollection.sort();
const charactersCollection = new CharacteresCollection('sakdjflaksjdflkçajsdflkasdfklajsdflkçajsdflçk');
charactersCollection.sort();
const linkedList = new LinkedList();



linkedList.add(51);
linkedList.add(-5);
linkedList.add(5);
linkedList.add(-10);
linkedList.add(15);
linkedList.add(3);
linkedList.sort();

console.log(charactersCollection.data);
console.log(numbersCollection.data);
console.log(linkedList.print());