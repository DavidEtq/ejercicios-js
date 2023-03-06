const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [11, 12, 13, 14, 15];


const head = ([first, ...arr]) => first;
console.log("head:", head(arr));

const tail = ([, ...arr]) => arr;
console.log("tail:", tail(arr));

const init = ([...arr2]) => arr2.slice(0, arr2.length - 1);
console.log("init:", init(arr2));

const last = ([...arr3]) => arr3.slice(-1);
console.log("last:", last(arr3));

const concat = (a, b) => [...a, ...b];
console.log("concat:", concat([1, 2, 3], [10, 11]))


// 3. Clone Merge

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = (a, b) => ({ ...a, ...b });
console.log(merge(a, b));


// 4. Read Books

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books, titleToSearch) {
  return books.find(book => book.title === titleToSearch)?.isRead ?? false;
}
console.log(isBookRead(books, "Canción de hielo y fuego"))
