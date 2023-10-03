 
// -------------------- Callapse Window Rules Game 
const rulesCollapseButton = document.getElementById('rulesCollapseButton');

rulesCollapseButton.addEventListener('click', () => {
    collapseRules.classList.toggle('expanded');
    
});   

document.addEventListener('DOMContentLoaded', () => {
    const collapseRules = document.getElementById('collapseRules');
    collapseRules.classList.remove('expanded');
});

// coger los elementos del localstorage 

const colors1 = localStorage.getItem('colors1');
const colors2 = localStorage.getItem('colors2');
const colors3 = localStorage.getItem('colors3');
const colors4 = localStorage.getItem('colors4');


// Aplica los colores a los elementos correspondientes
applyColorToElement(document.getElementById('selected1'), colors1);
applyColorToElement(document.getElementById('selected2'), colors2);
applyColorToElement(document.getElementById('selected3'), colors3);
applyColorToElement(document.getElementById('selected4'), colors4);



 

// seleccionar colores 

let lastSelectedColor = null;

selected1.addEventListener('click', () => { 
    lastSelectedColor = getComputedStyle(selected1).backgroundColor;
    applyColorToDestinyElements();
});

selected2.addEventListener('click', () => { 
    lastSelectedColor = getComputedStyle(selected2).backgroundColor;
    applyColorToDestinyElements();
});

selected3.addEventListener('click', () => { 
    lastSelectedColor = getComputedStyle(selected3).backgroundColor;
    applyColorToDestinyElements();
});

selected4.addEventListener('click', () => { 
    lastSelectedColor = getComputedStyle(selected4).backgroundColor;
    applyColorToDestinyElements();
});

 

// funcioneas para aplicar el color 

function applyColorToElement(element, color) {
    element.style.backgroundColor = color;  
}

function applyColorToDestinyElements() {
    const DestinyColor = document.querySelectorAll('.circleMastermind.row1'); 

    DestinyColor.forEach((circle) => {
        circle.addEventListener('click', () => {
            if (lastSelectedColor) {
                const destinationColor = getComputedStyle(circle).backgroundColor;
                applyColorToElement(circle, lastSelectedColor);
            }
        });
    });
    
}
// ----------------

