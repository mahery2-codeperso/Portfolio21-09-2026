const button = document.querySelector(".theme");
let y = 0
button.addEventListener("click",() => {
    y++
    button.style.backgroundColor = y%2 === 1 ? "black" : "white";
    document.body.style.backgroundColor = y%2 === 1 ? "black" : "white";
    document.body.style.color = y%2 === 0 ? "black" : "white";

    if(button.matches(":hover"))
    {
        button.style.boxShadow = y%2 === 1 ? "0 0 10px #424242" : "0 0 10px #b6b5b5";
    }
})

button.addEventListener("mouseover", () =>{
    button.style.boxShadow = y%2 === 1 ? "0 0 10px #424242" : "0 0 10px #b6b5b5";
})

button.addEventListener("mouseout", () =>{
    button.style.boxShadow = "none";
})