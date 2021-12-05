var c1 = document.getElementsByName("color1")[0];
var c2 = document.getElementsByName("color2")[0];
var h3 = document.getElementsByTagName("h3")[0];

function changeBackground(){
    document.body.style.background = "linear-gradient(to right," + c1.value + "," + c2.value + ")";
    h3.textContent = document.body.style.background + ";" ;
}

addEventListener("input", changeBackground);