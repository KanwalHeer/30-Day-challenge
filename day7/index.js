// Question 2: Nested Object with Interfaces
// Function to find the first person living in a specific city
function findPersonInCity(people, targetCity) {
    // Iterate through each person in the people array
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        // Iterate through each address of the current person
        for (var _a = 0, _b = person.addresses; _a < _b.length; _a++) {
            var address = _b[_a];
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
var people = [
    {
        name: "Naimal",
        age: 22,
        email: "naimal.johnson@example.com",
        phone: "123-456-7890",
        addresses: [
            { street: "123  St", city: "Hydrabad", state: "sindh", zipcode: "34566" },
            { street: "456 Oak St", city: "Shelbyville", state: "IL", zipcode: "62565" }
        ]
    },
    {
        name: "Filza",
        age: 30,
        email: "filza.khan@example.com",
        phone: "987-654-3210",
        addresses: [
            { street: "789 Elm St", city: "karachi", state: "IL", zipcode: "62702" }
        ]
    }
];
var result = findPersonInCity(people, "karachi");
console.log(result); // Output: { name: 'Filza', email: 'filza.khan@example.com' }
