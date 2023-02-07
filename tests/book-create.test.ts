import { IAuthorCreate } from "../app/author/author.interface";
import { IBookCreate } from "../app/book/book.interface";
import { IPublisher } from "../app/publisher/publisher.interface";

/**const testNewBook = () => {
  const newAuthor: IAuthorCreate = {
    firstName: "John",
    lastName: "Doe",
  };
  
  const newPublisher: IPublisher = { name: "Tatravoid" };

  const newBook: IBookCreate = {
    name: "Test Book",
    author: newAuthor,
    publisher: newPublisher,
  };
  if (newBook.name !== "Test Book") {
    throw new Error
    (`Expected book name to be "Test Book" but got "${newBook.name}"`);
}
  if (newBook.author.firstName !== "John") {
    throw new Error
    (`Expected author first name to be "John" but got "${newBook.author.firstName}"`);
}
  if (newBook.author.lastName !== "Doe") {
    throw new Error
    (`Expected author last name to be "Doe" but got "${newBook.author.lastName}"`);
}
  if (newBook.publisher.name !== "Tatravoid") {
    throw new Error
    (`Expected publisher name to be "Tatravoid" but got "${newBook.publisher.name}"`);
} else{
    console.log("Book created successfully!");
};

  testNewBook();
}; */
