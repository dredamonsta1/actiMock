let modal = document.getElementById("playBtn");

let btn = document.getElementById("playBtn");

let span = document.getElementsByClassName("close")[0];

btn.onClick = function () {
    modal.style.display = "block";
}

span.onClick = function () {
    modal.style.display = "none";
}

window.onClick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}