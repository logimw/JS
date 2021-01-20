function $(selector) {
  return document.querySelector(selector);
}

function getJSON(url) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  let p = new Promise((res, reject) => {
    xhr.onload = function () {
      if (xhr.status === 200) {
        res(xhr.responseText);
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

function timeout(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => reject( new Error(`Czas ${ms} został przekroczony.`)), ms)
    })
}

$("#getData").addEventListener("click", () => {
  /*Promise.all([
    getJSON("https://api.punkapi.com/v2/beers/69"),
    getJSON("https://api.punkapi.com/v2/beers/122"),
  ])
    .then((data) => {
      data.forEach((item, key) => {
        let [beer] = JSON.parse(item);
        console.log(beer.name);
      });
    })
    .catch((err) => $(("#data".textContent = err)));*/
/*
  Promise.race([
    getJSON("https://api.punkapi.com/v2/beers/"),
    getJSON("https://api.punkapi.com/v2/beers/122"),
  ]).then(json => console.log(json));

  // jeśli pierwsza z race ma błąd to na drugą już sie nie czeka
  */
 Promise.race([
    getJSON("https://api.punkapi.com/v2/beers/122"),
    timeout(1000)
  ]).then(json => console.log(json));

});
