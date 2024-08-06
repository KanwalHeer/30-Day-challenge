Day:7

Question 1: OOP Related

Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
1. Display the book details.
2. Check if the book is a recent publication (within the last 5 years).
3. Change the genre of the book.
4. Check if the book's author matches a given author name.

*Hints:*
- Use console.log to print book details in the displayDetails method.
- In the isRecent method, get the current year using new Date().getFullYear() and compare it with publicationYear.
- Update the genre property in the changeGenre method.
- In the isAuthor method, compare the author property with the given author name.

 Question 2: Nested Object with Interfaces

Create an interface Person that includes properties for name, age, email, phone, and addresses. The addresses property should be an array of objects, each containing street, city, state, and zipcode. Write a function to find the first person living in a specific city and return their name and email.

*Hints:*
- Define the Address and Person interfaces with the required properties.
- Use nested loops to iterate through the people array and each person's addresses array.
- Check if the city property matches the given city in the function.
- Return the name and email of the first matching person or undefined if no match is found.