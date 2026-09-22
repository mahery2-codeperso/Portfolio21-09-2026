const button = document.querySelector(".theme");
let y = 0;

// pour pc et telephone ("click" pour pc, "touchstart" pour mobile, "pointerdown" pour les deux (recommandé))
button.addEventListener("pointerdown", () => {
    y++;
    button.style.backgroundColor = y%2 === 1 ? "black" : "white";
    document.body.style.backgroundColor = y%2 === 1 ? "black" : "white";
    document.body.style.color = y%2 === 0 ? "black" : "white";
    button.style.boxShadow = y%2 === 1 ? "0 0 10px #424242" : "0 0 10px #b6b5b5";
});

// si le curseur ou doigt est dessus
button.addEventListener("pointerenter", () =>{
    button.style.boxShadow = y%2 === 1 ? "0 0 10px #424242" : "0 0 10px #b6b5b5";
});

// si le curseur ou doigt n'est plus dessus
button.addEventListener("pointerleave", () =>{
    button.style.boxShadow = "none";
});

// pointerdown = click; pointerenter = mouseover; pointerleave = mouseout;