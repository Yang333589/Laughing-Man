const SQUARE_COUNT = 3;
const TIMER_SPEED = 10;
const SPEED = 5;

document.addEventListener("DOMContentLoaded", () =>{
    document.querySelector("#square").addEventListener("click", ()=>{
        alert("You clicked me!");
    });

    let box = document.querySelector("#box");
    for (let i = 0; i< SQUARE_COUNT; i++){
        //make element but its not on the page
        let square = document.createElement(`img`);
        //set attributes/properites of that element
        square.src = "laughing_man.jpg";
        square.alt = "Catch the Laughing Man!";
        square.className = "square";
        box.appendChild(square);
    }

    //forEach runs a function
    Array.from(box.children).forEach((element)=>{
        let dx = SPEED* Math.random()*2-1; //this gives a number from -1 to 0.99999
        let dy = SPEED* Math.random()*2-1;

        let x = parseInt(element.style.left) || 225;
        let y = parseInt(element.style.top) || 175;

        //setInterval takes a function and a period of time
        setInterval(()=>{
            x += dx;
            y += dy;

            element.style.left = x + "px";
            element.style.top = y + "px";
        }, TIMER_SPEED)
    });
});