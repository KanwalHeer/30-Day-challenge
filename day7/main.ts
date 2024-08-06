// Question 1: OOP Related

// Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
// 1. Display the book details.
// 2. Check if the book is a recent publication (within the last 5 years).
// 3. Change the genre of the book.
// 4. Check if the book's author matches a given author name.

class Book {
    // Properties
    title: string;
    author: string;
    publicationYear: number;
    genre: string;

    // Constructor to initialize the properties
    constructor(title: string, author: string, publicationYear: number, genre: string) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.genre = genre;
    }

    // Method to display the book details
    displayDetails(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Publication Year: ${this.publicationYear}`);
        console.log(`Genre: ${this.genre}`);
    }

    // Method to check if the book is a recent publication (within the last 5 years)
    isRecentPublication(): boolean {
        const currentYear = new Date().getFullYear();
        return this.publicationYear >= currentYear - 5;
    }

    // Method to change the genre of the book
    changeGenre(newGenre: string): void {
        this.genre = newGenre;
    }

    // Method to check if the book's author matches a given author name
    isAuthor(authorName: string): boolean {
        return this.author.toLowerCase() === authorName.toLowerCase();
    }
}

// Example usage
const book = new Book("The Great Adventure", "John Doe", 2021, "Fiction");
book.displayDetails(); // Displays book details
console.log(book.isRecentPublication()); // Checks if the book is a recent publication
book.changeGenre("Adventure"); // Changes the genre of the book
console.log(book.isAuthor("john doe")); // Checks if the author matches "john doe"
