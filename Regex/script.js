// .exec

const p = document.querySelector("p");

// const regex1 = new RegExp("\\w+@(\\w+\\.\\w{2,4})", "g");
const regex = /\w+@(\w+\.\w{2,4})/g;

// let search = regex.exec(p.textContent);
var search,
  domains = [];

// search = regex.exec(p.textContent);
while ((search = regex.exec(p.textContent))) {
  domains.push(search[1]);
}
// search.forEach(word => {
//     domains.push(search[1])
// });

console.log(search);
console.log(domains);

const files = [
  "picture-thumb-150x150.jpg",
  "beach-thumb-150x150.jpg",
  "monako-thumb-150x150.jpg",
  "sportacar-thumb-330x330.jpg",
  "brazil-thumb-1150x1150.jpg",
];


const testRegex = /150x150/g;

const thubms = files.filter(file => {
   return testRegex.test(file);
});