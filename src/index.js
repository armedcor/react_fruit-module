import fruit from "./foods";
import { choice, remove } from "./helpers";

const randomFruit = choice(fruit);
console.log(`I'd Like one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);
const fruitsLeft = remove(fruit, randomFruit);
console.log(`I'm sorry, we're all out. We have ${fruitsLeft}`);
