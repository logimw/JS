// 1. Największy element w tablicy.
const numbers = [44, 29, 1, 0, 124, 42, 49];
// const max = Math.max(44, 29, 1, 0, 124, 42, 49); // - to działa dla nietablic
const max = Math.max.apply(Math, numbers);
console.log(max);
const maxEs6 = Math.max(...numbers);
console.log(maxEs6);

// 2. Konwerjsa obiektów tablicopodbnych na tablice.

// jest nowszy ES6 lespzy sposób Array.from(arrays);
// edit: spread opertator jest jeszcze lepszy: [...numbers]
function sayHello(firstName, lastName) {
    console.log(Array.isArray(arguments));
    var args = Array.prototype.slice.call(arguments, 0);
    console.log(Array.isArray(args));
    console.log(firstName + " " + lastName);
}

sayHello("don", "Mateo")

// 3. Określenie, czy jeden element zawiera drugi.
const contain = document.getElementById("contain"),
      isHere = document.getElementById("isHere");

console.log(contain.contains(isHere));


// 4. Preload obrazów w tle.
const loadBtn = document.querySelector("#loadImage");
const imgs = ['https://images.pexels.com/photos/6062504/pexels-photo-6062504.jpeg','https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg'];

// ta funkcja pobiera bez preloadera
function showImages() {
    const dc = document.createDocumentFragment();
    imgs.forEach(url => {
        let img = document.createElement("img");
        img.src = url;
        img.style.maxWidth = '100%';
        dc.appendChild(img);
    });

    document.body.appendChild(dc);
}

// preloader, można dodać gif wczytywania
function preloadImages(imgs, fn){
    let counter = 0,
        length = imgs.length,
        dc = document.createDocumentFragment();

    function count() {
        if (++counter === length) {
            fn(dc);
        }
    }

    imgs.forEach(url => {
        let img = document.createElement("img");

        img.onload = count;
        img.src = url;
        img.style.maxWidth = '100%';
        dc.appendChild(img);
    });
}

function showPreloadedImgs() {
    preloadImages(imgs, function(dc) {
        document.body.appendChild(dc);
    });
}

loadBtn.addEventListener("click", showPreloadedImgs);

// 5. Wyłączanie CSS

const styleBtn = document.getElementById("disableCSS"),
      theme = document.querySelector("#theme");

styleBtn.addEventListener("click", () => theme.setAttribute("disabled", "disabled"));

// 6. Wysyłanie informajci bez użycia AJAX.
const resolution = window.screen.width + "x" + window.screen.height;

function sendInfo(url, info) {
    var img = document.createElement("img");
    img.src = url + "?resolution=" + info;
}

console.log(resolution);
// sendInfo("http://localhost/info/info.php", resolution);

// 7. Wyświelanie powiadomeń w tyltule strony.
function notify(text) {
    const title = document.title;
    var interval = setInterval(function() {
        if (document.title === title) {
            document.title = text + " " + document.title;
        } else {
            document.title = title;
        }
    }, 1000);

    return {
        interval: interval,
        title: title
    };

}

function stopNotify(notification) {
    clearInterval(notification.interval);
    document.title = notification.title;
}

var notification = notify("(1)");

// 8. Tworzenie kopii obiektu.

const person = {
    firstName: "Jan",
    lastName: "Kowal",
    age: 33,
    hobbies: ["granie w gierki", "netflix"]
};

// const personCopy = person; // to nie jest kopia, tylko skierowanie na referencje i personCopy.age = 32 zmieni age także w person. person === personCopy => true

function copyObj(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const personCopy = copyObj(person);


// 9. Kodowanie base64.
const str = JSON.stringify(person);
const encoded = window.btoa(str);
console.log(encoded);
const decoded = window.atob(encoded);
console.log(decoded);

window.location.hash = "?data=" + encodeURIComponent(encoded); // używać encodeURIComponent przy wysyłaniu na serwer

// 10. Usuwanie elementu tablicy.
const arrayOfItems = ["chleb", "kiełbasa", 2, 1 ,3, "wóda", "woda"];

// arrayOfItems.splice(1,1);
const removeItem = (arr, i) => {
    arr.splice(i, 1);
}