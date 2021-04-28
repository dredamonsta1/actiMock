let modal = document.getElementById("playModal");

let btn = document.getElementById("playBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
    console.log("you clicked btn");
}

span.onclick = function () {
    modal.style.display = "none";
    console.log("you clicked span");
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    console.log("you clicked window");
}