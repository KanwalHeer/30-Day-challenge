// Question 1: OOP Related
// Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
// 1. Display the book details.
// 2. Check if the book is a recent publication (within the last 5 years).
// 3. Change the genre of the book.
// 4. Check if the book's author matches a given author name.
var Book = /** @class */ (function () {
    // Constructor to initialize the properties
    function Book(title, author, publicationYear, genre) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.genre = genre;
    }
    // Method to display the book details
    Book.prototype.displayDetails = function () {
        console.log("Title: ".concat(this.title));
        console.log("Author: ".concat(this.author));
        console.log("Publication Year: ".concat(this.publicationYear));
        console.log("Genre: ".concat(this.genre));
    };
    // Method to check if the book is a recent publication (within the last 5 years)
    Book.prototype.isRecentPublication = function () {
        var currentYear = new Date().getFullYear();
        return this.publicationYear >= currentYear - 5;
    };
    // Method to change the genre of the book
    Book.prototype.changeGenre = function (newGenre) {
        this.genre = newGenre;
    };
    // Method to check if the book's author matches a given author name
    Book.prototype.isAuthor = function (authorName) {
        return this.author.toLowerCase() === authorName.toLowerCase();
    };
    return Book;
}());
// Example usage
var book = new Book("The Great Adventure", "John Doe", 2021, "Fiction");
book.displayDetails(); // Displays book details
console.log(book.isRecentPublication()); // Checks if the book is a recent publication
book.changeGenre("Adventure"); // Changes the genre of the book
console.log(book.isAuthor("john doe")); // Checks if the author matches "john doe"
