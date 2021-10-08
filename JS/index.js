const lordlings = document.querySelector(".lordlings");
const arrowDown = document.querySelector(".arrow");
const arrowUp = document.querySelector(".arrowUp");


arrowDown.addEventListener("click", function(event){
    lordlings.style.display = "block";
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
});

arrowUp.addEventListener("click", function(event){
    lordlings.style.display = "none";
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
});



