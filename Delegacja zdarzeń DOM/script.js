var article = document.querySelector("article"),
    paragraphs = document.getElementsByTagName("p");


const changeColor = e => {
    e.target.style.color = "#ff0000";
}

// Niewydajna metoda, bo dodaje do każdego elementu metodę w pętli
paragraphs = Array.from(paragraphs);

paragraphs.forEach(p => {
    p.addEventListener("click", changeColor);
});

// Alternatywne użycie pętli
[].forEach.call(paragraphs, function(p) {
    p.onclick = changeColor;
});

// Najwydajniesza metoda to dodać addEventListener do rodzica rzeczy, na których chcesz robić zdarzenia,
// a następnie dodanie warunku, który sprecyzuje elementy do zmiany.
// Dodatkowo ten sposób daje możliwość wykonywania zdarzeń na dynamicznie dodane elementy, po pierwszym wczytaniu strony.

const efficientColorChange = e => {
    if (e.target.nodeName === "P") {
        e.target.style.color = "#2c1fd3";
    }
}

article.addEventListener("click", efficientColorChange);

