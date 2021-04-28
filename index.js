let modal = document.getElementById("playModal");

let btn = document.getElementById("playBtn");

let span = document.getElementsByClassName("close")[0];

btn.onClick = function () {
    modal.style.display = "block";
    console.log("you clicked btn");
}

span.onClick = function () {
    modal.style.display = "none";
    console.log("you clicked span");
}

window.onClick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    console.log("you clicked window");
}