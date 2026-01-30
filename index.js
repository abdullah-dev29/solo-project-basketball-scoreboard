let homeCount = 0;
let guestCount = 0;

let homeEl = document.getElementById("home");
let guestEl = document.getElementById("guest");

function homeOne () {
    homeCount += 1;
    homeEl.textContent = homeCount;
}

function homeTwo () {
    homeCount += 2;
    homeEl.textContent = homeCount;
}

function homeThree () {
    homeCount += 3;
    homeEl.textContent = homeCount;
}

function guestOne () {
    guestCount += 1;
    guestEl.textContent = guestCount;
}

function guestTwo () {
    guestCount += 2;
    guestEl.textContent = guestCount;
}

function guestThree () {
    guestCount += 3;
    guestEl.textContent = guestCount;
}

function newGame () {
    homeCount = 0;
    guestCount = 0;
    homeEl.textContent = homeCount;
    guestEl.textContent = guestCount;
}
