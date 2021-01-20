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

function run(gen, ...args) {
  let it = gen(...args),
    result;

function next(value) {
    result = it.next(value);
    if (!result.done) {
        if (typeof result.value.then === "function") {
            result.value.then(next);
        };
    };
}
next();

}

$("#getData").addEventListener("click", () => {
  run(function* (url) {
    let json = yield getJSON(url);
    $("#data").textContent = json;
  }, "https://api.punkapi.com/v2/beers/122");
});

$("#getData").onclick = function () {};
