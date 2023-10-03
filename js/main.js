 
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

 

// funcioneas para aplicar el color al row1 del juego
 

function applyColorToElement(element, color) {
    element.style.backgroundColor = color;  
}

function applyColorToDestinyElements(row) {
    const DestinyColor = document.querySelectorAll(row); 
  
    DestinyColor.forEach((circle) => {
        circle.addEventListener('click', () => {
            if (lastSelectedColor) {
                const destinationColor = getComputedStyle(circle).backgroundColor;
                applyColorToElement(circle, lastSelectedColor); 
            } 
        });
    }); 
}

// ---- Se ejecuta la funcion para todas las columnas
applyColorToDestinyElements('.circleMastermind.row1') 
applyColorToDestinyElements('.circleMastermind.row2') 
applyColorToDestinyElements('.circleMastermind.row3') 
applyColorToDestinyElements('.circleMastermind.row4') 
applyColorToDestinyElements('.circleMastermind.row5')
applyColorToDestinyElements('.circleMastermind.row6')
applyColorToDestinyElements('.circleMastermind.row7')
applyColorToDestinyElements('.circleMastermind.row8')
applyColorToDestinyElements('.circleMastermind.row9')
applyColorToDestinyElements('.circleMastermind.row10')



// ---------------- array ganador--------

let arrayKey = []

for (let i = 1; i <= 4; i++) {
    const random = Math.floor(Math.random() * 4) + 1;
    if (random == 1) {
        arrayKey.push(localStorage.getItem("colors1"));
    } else if (random == 2) {
        arrayKey.push(localStorage.getItem("colors2"));
    } else if (random == 3) {
        arrayKey.push(localStorage.getItem("colors3"));
    } else {
        arrayKey.push(localStorage.getItem("colors4"));
    }
} 

console.log(arrayKey);
 

