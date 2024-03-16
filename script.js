// using event handlers

function redText() {

}

function blueText() {

}

function greenText() {

}

// using event Listeners 
const jsButton = document.getElementById('jsBtn);
jsButton.addEventListener('mouseover', backgroundToPeach);
jsButton.addEventListener('mouseout', backgroundToGrey);
jsButton.addEventListener('click', backgroundToPurple);

function backgroundToPeach() {
    jsDiv.style.background = "salmon";
}

function backgroundToGrey() {
    jsDiv.style.background = "lightgrey";
}

function backgroundToPurple() {
    jsDiv.style.background = "purple";
}