const SQUARE_COUNT = 3;

document.addEventListener("DOMContentLoaded", () =>{
    document.querySelector("#square").addEventListener("click", ()=>{
        alert("You clicked me!");
    });

    let box = document.querySelector("%box");
    for (let i = 0; i< SQUARE_COUNT; i++){
        //make element but its not on the page
        let square = document.createElement(`img`);
        //set attributes/properites of that element
        square.src = "laughing_man.jpg";
        square.alt = "Catch the Laughing Man!";
        square.class = "square";
        box.appendChild(square);
    }
});