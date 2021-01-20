// Map, podobny do obiektu
let person1 = {
    firstName: "Jan",
    lastName: "Kowalski"
};

let person2 = {
    firstName: "anna",
    lastName: "Nowak"
}
let age = new Map();

age.set(person1, 32);
age.set(person2, 22);

let hobby = new Map([[person1, "sport"], [person2, "internet"]]);
console.log( age.get(person1)); // można dodwać dane do obiektu nie modyfikując go
console.log( hobby.get(person2));

for ( let obj of hobby ) {
    console.log(obj)
}


// map.set("Jan", "Kowalski");
// map.set("Anna", "Nowak");

// console.log(map);
// console.log(map.get("Anna"));

