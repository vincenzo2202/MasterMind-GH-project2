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

// console.log(arrayKey);



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



// funcioneas para aplicar el color al row  del juego


function applyColorToElement(element, color) {
    element.style.backgroundColor = color;
}

let arrayRow = [];

function applyColorToDestinyElements(row) {
    // let lastSelectedColors = '';
    const DestinyColor = document.querySelectorAll(row);

    DestinyColor.forEach((row) => {
        row.addEventListener('click', () => {
            if (lastSelectedColor && arrayRow.length < 4) {
                const computedStyle = window.getComputedStyle(row);
                applyColorToElement(row, lastSelectedColor);
                const backgroundColor = computedStyle.backgroundColor;
                arrayRow.push(backgroundColor);
                localStorage.setItem('arrayRow', arrayRow)
            }
            console.log(arrayRow);
        });
    });
}

// ---- Se ejecuta la funcion para todas las columnas

const checkButtom = document.getElementById('checkbuttom');


applyColorToDestinyElements('.row1');

let checkIterador = 1;

checkButtom.addEventListener('click', () => {
    checkIterador++  
    
    if (checkIterador === 1) {
        if (arrayRow.length <= 3 ) {
            alert("yeee te falta un color")
            checkIterador--
        } else {
            applyColorToDestinyElements('.row1');
            let arrayrRowString = localStorage.getItem('arrayRow', arrayRow.toString())
            console.log(arrayrRowString); 
            if (arrayKeystring === arrayrRowString) {
                console.log("ganaste");
            }
            
        }
        
    } else if (checkIterador === 2) {
        console.log(checkIterador);// funciona 
        if (arrayRow.length <= 3 && arrayRow.length !== 0) {
            alert("yeee te falta un color")
            checkIterador--
        } else {
            arrayRow.splice(0, arrayRow.length);
            applyColorToDestinyElements('.row2');
            arrayrRowString = localStorage.getItem('arrayRow', arrayRow.toString())
            console.log(arrayrRowString);

            if (arrayKeystring === arrayrRowString) {
                console.log("ganaste");
            }
            

        }
    } else if (checkIterador == 3) {
        if (arrayRow.length <= 3 && arrayRow.length !== 0) {
            alert("yeee te falta un color")
            checkIterador--
        } else {
            arrayRow.splice(0, arrayRow.length);
            applyColorToDestinyElements('.row3');
            arrayrRowString = localStorage.getItem('arrayRow', arrayRow.toString())
            console.log(arrayrRowString);

            if (arrayKeystring === arrayrRowString) {
                console.log("ganaste");
            }
            

        }
    } else if (checkIterador === 4) {
        if (arrayRow.length <= 3 && arrayRow.length !== 0) {
            alert("yeee te falta un color")
            checkIterador--
        } else {
            arrayRow.splice(0, arrayRow.length);
            applyColorToDestinyElements('.row4');
            arrayrRowString = localStorage.getItem('arrayRow', arrayRow.toString())
            console.log(arrayrRowString);

            if (arrayKeystring === arrayrRowString) {
                console.log("ganaste");
            }
             

        }
    } else if (checkIterador === 5) {
        if (arrayRow.length <= 3 && arrayRow.length !== 0) {
            alert("yeee te falta un color")
            checkIterador--
        } else {
            arrayRow.splice(0, arrayRow.length);
            applyColorToDestinyElements('.row5');
            arrayrRowString = localStorage.getItem('arrayRow', arrayRow.toString())
            console.log(arrayrRowString);

            if (arrayKeystring === arrayrRowString) {
                console.log("ganaste");
            }

        }
    } else if (checkIterador === 6) {
        if (arrayRow.length <= 3 && arrayRow.length !== 0) {
            alert("yeee te falta un color")
            checkIterador--
        } else {
            arrayRow.splice(0, arrayRow.length);
            applyColorToDestinyElements('.row6');
            arrayrRowString = localStorage.getItem('arrayRow', arrayRow.toString())
            console.log(arrayrRowString);

            if (arrayKeystring === arrayrRowString) {
                console.log("ganaste");
            }

        }

    } else if (checkIterador === 7) {
        if (arrayRow.length <= 3 && arrayRow.length !== 0) {
            alert("yeee te falta un color")
            checkIterador--
        } else {
            arrayRow.splice(0, arrayRow.length);
            applyColorToDestinyElements('.row7');
            arrayrRowString = localStorage.getItem('arrayRow', arrayRow.toString())
            console.log(arrayrRowString);

            if (arrayKeystring === arrayrRowString) {
                console.log("ganaste");
            }

        }
    } else if (checkIterador === 8) {
        if (arrayRow.length <= 3 && arrayRow.length !== 0) {
            alert("yeee te falta un color")
            checkIterador--
        } else {
            arrayRow.splice(0, arrayRow.length);
            applyColorToDestinyElements('.row8');
            arrayrRowString = localStorage.getItem('arrayRow', arrayRow.toString())
            console.log(arrayrRowString);

            if (arrayKeystring === arrayrRowString) {
                console.log("ganaste");
            }

        }
    } else if (checkIterador === 9) {
        if (arrayRow.length <= 3 && arrayRow.length !== 0) {
            alert("yeee te falta un color")
            checkIterador--

        } else {
            arrayRow.splice(0, arrayRow.length);
            applyColorToDestinyElements('.row9');
            arrayrRowString = localStorage.getItem('arrayRow', arrayRow.toString())
            console.log(arrayrRowString);

            if (arrayKeystring === arrayrRowString) {
                console.log("ganaste");
            }

        }
    } else if (checkIterador === 10) {
        if (arrayRow.length <= 3 && arrayRow.length !== 0) {
            alert("yeee te falta un color")
            checkIterador--
        } else {
            arrayRow.splice(0, arrayRow.length);
            applyColorToDestinyElements('.row10');

            arrayrRowString = localStorage.getItem('arrayRow', arrayRow.toString()) // esto trae del local storage e imprime 
            console.log(arrayrRowString);

            if (arrayKeystring === arrayrRowString) {
                console.log("ganaste");
            } 
        }
    } 
    
   
});


// comparar los arrays 

// se manda a localstorage la key y se pasa a string

let arrayKeystring = arrayKey.toString()
 console.log(arrayKeystring);
 


// ----------se declaran las constantes 

const row1col1 = document.querySelector("#row1col1");
const row1col2 = document.querySelector("#row1col2");
const row1col3 = document.querySelector("#row1col3");
const row1col4 = document.querySelector("#row1col4");
const row2col1 = document.querySelector("#row2col1");
const row2col2 = document.querySelector("#row2col2");
const row2col3 = document.querySelector("#row2col3");
const row2col4 = document.querySelector("#row2col4");
const row3col1 = document.querySelector("#row3col1");
const row3col2 = document.querySelector("#row3col2");
const row3col3 = document.querySelector("#row3col3");
const row3col4 = document.querySelector("#row3col4");
const row4col1 = document.querySelector("#row4col1");
const row4col2 = document.querySelector("#row4col2");
const row4col3 = document.querySelector("#row4col3");
const row4col4 = document.querySelector("#row4col4");
const row5col1 = document.querySelector("#row5col1");
const row5col2 = document.querySelector("#row5col2");
const row5col3 = document.querySelector("#row5col3");
const row5col4 = document.querySelector("#row5col4");
const row6col1 = document.querySelector("#row6col1");
const row6col2 = document.querySelector("#row6col2");
const row6col3 = document.querySelector("#row6col3");
const row6col4 = document.querySelector("#row6col4");
const row7col1 = document.querySelector("#row7col1");
const row7col2 = document.querySelector("#row7col2");
const row7col3 = document.querySelector("#row7col3");
const row7col4 = document.querySelector("#row7col4");
const row8col1 = document.querySelector("#row8col1");
const row8col2 = document.querySelector("#row8col2");
const row8col3 = document.querySelector("#row8col3");
const row8col4 = document.querySelector("#row8col4");
const row9col1 = document.querySelector("#row9col1");
const row9col2 = document.querySelector("#row9col2");
const row9col3 = document.querySelector("#row9col3");
const row9col4 = document.querySelector("#row9col4");
const row10col1 = document.querySelector("#row10col1");
const row10col2 = document.querySelector("#row10col2");
const row10col3 = document.querySelector("#row10col3");
const row10col4 = document.querySelector("#row10col4");