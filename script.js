// using event handlers
const textToChange = document.querySelector('colorText');

function redText() {
    colorText.style.color = 'crimson';
}

function blueText() {
    colorText.style.color = 'royalblue';
}

function greenText() {
    colorText.style.color = 'green';
}

function boldText() {
    colorText.style.fontWeight = 'bold';
}
    


// using event Listeners 
const jsButton = document.getElementById('jsBtn');
const jsDiv = document.querySelector('#divTwo');
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