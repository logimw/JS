// zwróci nowy obiekt, w którym można przechowywać różnego rodzaju dane. ma metody add, has, delete, clear
let person1 = {
    firstName: "Jan",
    lastName: "Kowalski"
};

let person2 = {
    firstName: "anna",
    lastName: "Nowak"
}
let s = new Set();
s.add("Mateo");
s.add("Pjoter");
// dane muszą być unikalne
console.log(s.size);
console.log(s.has("Mateo"));

let numbers = [1, 2, 9,5, 1, 2, 3, 1];

const removeDuplicates = arr => [...(new Set(arr))];
console.log(removeDuplicates(numbers));

let s = new WeakSet();
// wekaset w przeciwieństwie do Set przyjmnuje tylko wartości nieprywmitywne, i nie można iterować i nie ma size


s.add(person1);
s.add(person2);

