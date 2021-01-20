// Kod bez promise
/*
function $(selector) {
    return document.querySelector(selector);
}

function getJSON(url) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            const resp = JSON.parse(xhr.responseText);
            console.log(resp);
            
        } else {
            console.log( new Error("Wystąpił błąd.") );
        }
    };

    xhr.onerror = function () {
        console.log( new Error("Wystąpił błąd.") );
    };

    xhr.send();
};



$("#getData").addEventListener("click", () => {
    getJSON("https://api.punkapi.com/v2/beers");
});

*/

// Kod z promise
const CACHE = {};
function $(selector) {
  return document.querySelector(selector);
}

function getJSON(url) {
  if (CACHE[url] !== undefined) {
    console.log("Zwracam dane z pamięciu podręcznej.");
    return Promise.resolve(CACHE[url]);
  }
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  let p = new Promise((res, reject) => {
    xhr.onload = function () {
      if (xhr.status === 200) {
        res(xhr.responseText);
        CACHE[url] = xhr.responseText;
      } else {
        reject(new Error("Wystąpił błąd."));
      }
    };
  });

  xhr.onerror = function () {
    reject(new Error("Wystąpił błąd."));
  };

  xhr.send();

  return p;
}

$("#getData").addEventListener("click", () => {
  getJSON("https://api.punkapi.com/v2/beers")
    .then(($("body").style.background = "#ddd"))
    .then(($("#data").textContent = "Wczytywanie danych..."))
    .then((json) => {
      $("#data").textContent = json;
      return JSON.parse(json);
    })
    .then((obj) => {
      console.log(obj);
      //   throw new Error("Wystąpił inny błąd!");
      obj.forEach((beer) => {
        $("#parsedData").innerHTML += `<p>${beer.name}</p><br>`;
      });
    })
    .catch((err) => $(("#data".textContent = err)));
});
