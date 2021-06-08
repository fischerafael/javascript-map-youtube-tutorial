const numbers = [1, 3, 6];
const people = [
  {
    firstName: "Rafael",
    lastName: "Fischer",
  },
  {
    firstName: "Brad",
    lastName: "Pit",
  },
  {
    firstName: "Tom",
    lastName: "Cruise",
  },
];

let doubleNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

console.log("double using for", doubleNumbers);

const doubleNumbersMap = numbers.map((number) => number * 2);

console.log("double using map", doubleNumbersMap);

let completeNames = [];
for (let i = 0; i < people.length; i++) {
  completeNames.push(`${people[i].firstName} ${people[i].lastName}`);
}

console.log("double using for", completeNames);

const concatenateString = (person) => {
  return `${person.firstName} ${person.lastName}`;
};

const completeNamesMap = people.map((person) => concatenateString(person));

console.log("double using map", completeNamesMap);
