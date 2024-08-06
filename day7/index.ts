// Question 2: Nested Object with Interfaces

// Create an interface Person that includes properties for name, age, email, phone, and addresses. The addresses property should be an array of objects, each containing street, city, state, and zipcode. Write a function to find the first person living in a specific city and return their name and email.

// *Hints:*
// - Define the Address and Person interfaces with the required properties.
// - Use nested loops to iterate through the people array and each person's addresses array.
// - Check if the city property matches the given city in the function.
// - Return the name and email of the first matching person or undefined if no match is found.

// Define the Address interface
interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

// Define the Person interface
interface Person {
  name: string;
  age: number;
  email: string;
  phone: string;
  addresses: Address[];
}

// Function to find the first person living in a specific city
function findPersonInCity(
  people: Person[],
  targetCity: string
): { name: string; email: string } | undefined {
  // Iterate through each person in the people array
  for (const person of people) {
    // Iterate through each address of the current person
    for (const address of person.addresses) {
      // Check if the address city matches the target city
      if (address.city.toLowerCase() === targetCity.toLowerCase()) {
        // Return the name and email of the first matching person
        return { name: person.name, email: person.email };
      }
    }
  }
  // Return undefined if no person is found in the target city
  return undefined;
}

// Example usage
const people: Person[] = [
  {
    name: "Naimal",
    age: 22,
    email: "naimal.johnson@example.com",
    phone: "123-456-7890",
    addresses: [
      { street: "123  St", city: "Hydrabad", state: "sindh", zipcode: "34566" },
      {
        street: "456 Oak St",
        city: "larhkana",
        state: "sindh",
        zipcode: "62565",
      },
    ],
  },
  {
    name: "Filza",
    age: 30,
    email: "filza.khan@example.com",
    phone: "987-654-3210",
    addresses: [
      {
        street: "789 Elm St",
        city: "karachi",
        state: "sindh",
        zipcode: "62702",
      },
    ],
  },
];

const result = findPersonInCity(people, "karachi");
console.log(result); // Output: { name: 'Filza', email: 'filza.khan@example.com' }
