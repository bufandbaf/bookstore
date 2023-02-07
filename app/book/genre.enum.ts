// TODO: Vytvořit enum Genre a použít jej v IBookView interface

export enum Genre {
  Drama = "DRAMA",
  Adventure = "ADVENTURE",
  ScienceFiction = "SCIENCE FICTION",
  History = "HISTORY",
}

interface IBook {
  code: string;
  name: string;
  author: string;
  genre: Genre;
}

interface IBookCreate extends Pick<IBook, "name" | "author" | "genre"> {}

const books: IBook[] = [
  {
    code: "uuid-1",
    name: "Animal Farm",
    author: "George Orwell",
    genre: Genre.Drama,
  },
  {
    code: "uuid-2",
    name: "Cesta kolem světa za 80 dnů",
    author: "Jules Verne",
    genre: Genre.Adventure,
  },
  {
    code: "uuid-3",
    name: "1984",
    author: "George Orwell",
    genre: Genre.ScienceFiction,
  },
];

function createBook(newBook: IBookCreate) {
  const code = `uuid-${Math.floor(Math.random() * 1000000)}`;
  const book: IBook = {
    code,
    name: newBook.name,
    author: newBook.author,
    genre: newBook.genre,
  };
  books.push(book);
  return book;
}

console.clear();
// console.log(createBook({genre: Genre.ScienceFiction, name: "Jára Cimrman"}));
console.log("new book: ", books[books.length - 1]);
