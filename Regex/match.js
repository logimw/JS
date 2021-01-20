var p = document.querySelector("p");

const regex = /\w+@(\w+\.\w{2,4})/;

// const search = regex.exec(p.textContent);
const search = p.textContent.match(regex);

console.log(search);