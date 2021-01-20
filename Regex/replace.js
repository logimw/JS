const img = document.querySelector("img"),
      p = document.querySelector("p");

 // Jeżeli svg nie jest wpiswernae
img.src = img.src.replace(".svg", ".png");

p.innerHTML = p.textContent.replace(/\*\*/g, "--");

