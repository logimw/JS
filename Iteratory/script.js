/*
const it = () => {
    const numbers = [1, 2, 3, 4, 5];
    let index = 0;

    return {
        next() {
            return {
                done: (index === numbers.length) ? true : false,
                value: numbers[index++]
            };
        }
    };
};

let iterator = it();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (let o = iterator.next(); o.done !== true; o = iterator.next()) {
    console.log(o);
}
*/

// ES6 Poniżej z symbolami

let it = {
    [Symbol.iterator]() {
        const numbers = [1, 2, 3, 4, 5];
        let index = 0;
    
        return {
            next() {
                return {
                    done: (index === numbers.length) ? true : false,
                    value: numbers[index++]
                };
            }
        };
    }
}

let iterator = it[Symbol.iterator]();

// for (let o = iterator.next(); o.done !== true; o = iterator.next()) {
//     console.log(o);
// }

// iterator polega na tym, że przyjmuje jakiś obiekt, na którym można wykonywać wielokrotnie metodę .next(),
// która zwraca done (true lub false), i value. Kiedy done ma wartość true to iteracja powinna siuę zakończyć

for (const value of it) {
    console.log(value);
}

// spread na iteratorze
console.log(Math.max(...it));
// można zrobić tablicę
console.log([...it]);
const list = document.querySelectorAll("li");
const arrList = [...list];

arrList
    .filter(li => li.textContent.includes("3"))
    .forEach(li => li.style.fontSize = "20px");