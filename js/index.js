const button = document.querySelector(".theme");
let y = 0
button.addEventListener("click",() => {
    y++
    button.style.backgroundColor = y%2 === 1 ? "black" : "white";
    document.body.style.backgroundColor = y%2 === 1 ? "black" : "white";
    document.body.style.color = y%2 === 0 ? "black" : "white";

    // si le curseur encore dessus alors adapter les couleurs
    if(button.matches(":hover"))
    {
        button.style.boxShadow = y%2 === 1 ? "0 0 10px #424242" : "0 0 10px #b6b5b5";
    }
})

// si le curseur est dessus
button.addEventListener("mouseover", () =>{
    button.style.boxShadow = y%2 === 1 ? "0 0 10px #424242" : "0 0 10px #b6b5b5";
})

// si le curseur n'est plus dessus
button.addEventListener("mouseout", () =>{
    button.style.boxShadow = "none";
})