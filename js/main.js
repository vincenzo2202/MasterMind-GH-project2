// -------------------- Callapse Window Rules Game 
const rulesCollapseButton = document.getElementById('rulesCollapseButton');

rulesCollapseButton.addEventListener('click', () => {
    collapseRules.classList.toggle('expanded');

});

document.addEventListener('DOMContentLoaded', () => {
    const collapseRules = document.getElementById('collapseRules');
    collapseRules.classList.remove('expanded');
});

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


// declarar los check

const circleValidator11 = document.querySelector('#circleValidator11');
const circleValidator12 = document.querySelector('#circleValidator12');
const circleValidator13 = document.querySelector('#circleValidator13');
const circleValidator14 = document.querySelector('#circleValidator14');

const circleValidator21 = document.querySelector('#circleValidator21');
const circleValidator22 = document.querySelector('#circleValidator22');
const circleValidator23 = document.querySelector('#circleValidator23');
const circleValidator24 = document.querySelector('#circleValidator24');

const circleValidator31 = document.querySelector('#circleValidator31');
const circleValidator32 = document.querySelector('#circleValidator32');
const circleValidator33 = document.querySelector('#circleValidator33');
const circleValidator34 = document.querySelector('#circleValidator34');

const circleValidator41 = document.querySelector('#circleValidator41');
const circleValidator42 = document.querySelector('#circleValidator42');
const circleValidator43 = document.querySelector('#circleValidator43');
const circleValidator44 = document.querySelector('#circleValidator44');

const circleValidator51 = document.querySelector('#circleValidator51');
const circleValidator52 = document.querySelector('#circleValidator52');
const circleValidator53 = document.querySelector('#circleValidator53');
const circleValidator54 = document.querySelector('#circleValidator54');

const circleValidator61 = document.querySelector('#circleValidator61');
const circleValidator62 = document.querySelector('#circleValidator62');
const circleValidator63 = document.querySelector('#circleValidator63');
const circleValidator64 = document.querySelector('#circleValidator64');

const circleValidator71 = document.querySelector('#circleValidator71');
const circleValidator72 = document.querySelector('#circleValidator72');
const circleValidator73 = document.querySelector('#circleValidator73');
const circleValidator74 = document.querySelector('#circleValidator74');

const circleValidator81 = document.querySelector('#circleValidator81');
const circleValidator82 = document.querySelector('#circleValidator82');
const circleValidator83 = document.querySelector('#circleValidator83');
const circleValidator84 = document.querySelector('#circleValidator84');

const circleValidator91 = document.querySelector('#circleValidator91');
const circleValidator92 = document.querySelector('#circleValidator92');
const circleValidator93 = document.querySelector('#circleValidator93');
const circleValidator94 = document.querySelector('#circleValidator94');

const circleValidator101 = document.querySelector('#circleValidator101');
const circleValidator102 = document.querySelector('#circleValidator102');
const circleValidator103 = document.querySelector('#circleValidator103');
const circleValidator104 = document.querySelector('#circleValidator104');


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


// funcioneas para aplicar el color al row  del juego


function applyColorToElement(element, color) {
    element.style.backgroundColor = color;
}

let arrayRow = [];
// esta funcion mete muchos coloes en el array

// function applyColorToDestinyElements(row) {
//     // let lastSelectedColors = '';
//     const DestinyColor = document.querySelectorAll(row);
//     DestinyColor.forEach((row) => {
//         row.addEventListener('click', () => {

//             if (lastSelectedColor && arrayRow.length<4) {
//                 const computedStyle = window.getComputedStyle(row);
//                 applyColorToElement(row, lastSelectedColor);
//                 const backgroundColor = computedStyle.backgroundColor;
//                 arrayRow.push(backgroundColor);
//                 localStorage.setItem('arrayRow', arrayRow)
//             }
//             console.log(arrayRow);
//         });
//     });
// }

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
            // console.log(arrayRow);
        });
    });
}

// ---- Se ejecuta la funcion para todas las columnas

const checkButtom = document.getElementById('checkbuttom');


applyColorToDestinyElements('.row1');

let checkIterador = 1;

checkButtom.addEventListener('click', () => { 
    if (checkIterador === 1) {
        if (arrayRow.length <= 3) {
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
        if (row1col1.style.backgroundColor === arrayKey[0]) {
            circleValidator11.style.backgroundColor = 'green'
        } else {
            circleValidator11.style.backgroundColor = 'white'
        }
        if (row1col2.style.backgroundColor === arrayKey[1]) {
            circleValidator12.style.backgroundColor = 'green'
        } else {
            circleValidator12.style.backgroundColor = 'white'
        }
        if (row1col3.style.backgroundColor === arrayKey[2]) {
            circleValidator13.style.backgroundColor = 'green'
        } else {
            circleValidator13.style.backgroundColor = 'white'
        }
        if (row1col4.style.backgroundColor === arrayKey[3]) {
            circleValidator14.style.backgroundColor = 'green'
        } else {
            circleValidator14.style.backgroundColor = 'white'
        }
    } else if (checkIterador === 2) {

        if (arrayRow.length <= 3 && arrayRow.length !== 0) {
            alert("yeee te falta un color")
            checkIterador--
        } else {
            arrayRow.splice(0, arrayRow.length);
            applyColorToDestinyElements('.row2');
            arrayrRowString = localStorage.getItem('arrayRow', arrayRow.toString())
            console.log(arrayrRowString);
        }
        if (arrayKeystring === arrayrRowString) {
            console.log("ganaste");
        }
        if (row1col1.style.backgroundColor === arrayKey[0]) {
            circleValidator11.style.backgroundColor = 'green'
        } else {
            circleValidator11.style.backgroundColor = 'white'
        }

        if (row1col2.style.backgroundColor === arrayKey[1]) {
            circleValidator12.style.backgroundColor = 'green'
        } else {
            circleValidator12.style.backgroundColor = 'white'
        }
        if (row1col3.style.backgroundColor === arrayKey[2]) {
            circleValidator13.style.backgroundColor = 'green'
        } else {
            circleValidator13.style.backgroundColor = 'white'
        }
        if (row1col4.style.backgroundColor === arrayKey[3]) {
            circleValidator14.style.backgroundColor = 'green'
        } else {
            circleValidator14.style.backgroundColor = 'white'
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
        }
        if (row2col1.style.backgroundColor === arrayKey[0]) {
            circleValidator21.style.backgroundColor = 'green'
        } else {
            circleValidator21.style.backgroundColor = 'white'
        }
        if (row2col2.style.backgroundColor === arrayKey[1]) {
            circleValidator22.style.backgroundColor = 'green'
        } else {
            circleValidator22.style.backgroundColor = 'white'
        }
        if (row2col3.style.backgroundColor === arrayKey[2]) {
            circleValidator23.style.backgroundColor = 'green'
        } else {
            circleValidator23.style.backgroundColor = 'white'
        }
        if (row2col4.style.backgroundColor === arrayKey[3]) {
            circleValidator24.style.backgroundColor = 'green'
        } else {
            circleValidator24.style.backgroundColor = 'white'
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
            if (row3col1.style.backgroundColor === arrayKey[0]) {
                circleValidator31.style.backgroundColor = 'green'
            } else {
                circleValidator31.style.backgroundColor = 'white'
            }
            if (row3col2.style.backgroundColor === arrayKey[1]) {
                circleValidator32.style.backgroundColor = 'green'
            } else {
                circleValidator32.style.backgroundColor = 'white'
            }
            if (row3col3.style.backgroundColor === arrayKey[2]) {
                circleValidator33.style.backgroundColor = 'green'
            } else {
                circleValidator33.style.backgroundColor = 'white'
            }
            if (row3col4.style.backgroundColor === arrayKey[3]) {
                circleValidator34.style.backgroundColor = 'green'
            } else {
                circleValidator34.style.backgroundColor = 'white'
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
        if (row4col1.style.backgroundColor === arrayKey[0]) {
            circleValidator41.style.backgroundColor = 'green'
        } else {
            circleValidator41.style.backgroundColor = 'white'
        }
        if (row4col2.style.backgroundColor === arrayKey[1]) {
            circleValidator42.style.backgroundColor = 'green'
        } else {
            circleValidator42.style.backgroundColor = 'white'
        }
        if (row4col3.style.backgroundColor === arrayKey[2]) {
            circleValidator43.style.backgroundColor = 'green'
        } else {
            circleValidator43.style.backgroundColor = 'white'
        }
        if (row4col4.style.backgroundColor === arrayKey[3]) {
            circleValidator44.style.backgroundColor = 'green'
        } else {
            circleValidator44.style.backgroundColor = 'white'
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
        if (row5col1.style.backgroundColor === arrayKey[0]) {
            circleValidator51.style.backgroundColor = 'green'
        } else {
            circleValidator51.style.backgroundColor = 'white'
        }
        if (row5col2.style.backgroundColor === arrayKey[1]) {
            circleValidator52.style.backgroundColor = 'green'
        } else {
            circleValidator52.style.backgroundColor = 'white'
        }
        if (row5col3.style.backgroundColor === arrayKey[2]) {
            circleValidator53.style.backgroundColor = 'green'
        } else {
            circleValidator53.style.backgroundColor = 'white'
        }
        if (row5col4.style.backgroundColor === arrayKey[3]) {
            circleValidator54.style.backgroundColor = 'green'
        } else {
            circleValidator54.style.backgroundColor = 'white'
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
        if (row6col1.style.backgroundColor === arrayKey[0]) {
            circleValidator61.style.backgroundColor = 'green'
        } else {
            circleValidator61.style.backgroundColor = 'white'
        }
        if (row6col2.style.backgroundColor === arrayKey[1]) {
            circleValidator62.style.backgroundColor = 'green'
        } else {
            circleValidator62.style.backgroundColor = 'white'
        }
        if (row6col3.style.backgroundColor === arrayKey[2]) {
            circleValidator63.style.backgroundColor = 'green'
        } else {
            circleValidator63.style.backgroundColor = 'white'
        }
        if (row6col4.style.backgroundColor === arrayKey[3]) {
            circleValidator64.style.backgroundColor = 'green'
        } else {
            circleValidator64.style.backgroundColor = 'white'
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
        if (row7col1.style.backgroundColor === arrayKey[0]) {
            circleValidator71.style.backgroundColor = 'green'
        } else {
            circleValidator71.style.backgroundColor = 'white'
        }
        if (row7col2.style.backgroundColor === arrayKey[1]) {
            circleValidator72.style.backgroundColor = 'green'
        } else {
            circleValidator72.style.backgroundColor = 'white'
        }
        if (row7col3.style.backgroundColor === arrayKey[2]) {
            circleValidator73.style.backgroundColor = 'green'
        } else {
            circleValidator73.style.backgroundColor = 'white'
        }
        if (row7col4.style.backgroundColor === arrayKey[3]) {
            circleValidator74.style.backgroundColor = 'green'
        } else {
            circleValidator74.style.backgroundColor = 'white'
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
        if (row8col1.style.backgroundColor === arrayKey[0]) {
            circleValidator81.style.backgroundColor = 'green'
        } else {
            circleValidator81.style.backgroundColor = 'white'
        }
        if (row8col2.style.backgroundColor === arrayKey[1]) {
            circleValidator82.style.backgroundColor = 'green'
        } else {
            circleValidator82.style.backgroundColor = 'white'
        }
        if (row8col3.style.backgroundColor === arrayKey[2]) {
            circleValidator83.style.backgroundColor = 'green'
        } else {
            circleValidator83.style.backgroundColor = 'white'
        }
        if (row8col4.style.backgroundColor === arrayKey[3]) {
            circleValidator84.style.backgroundColor = 'green'
        } else {
            circleValidator84.style.backgroundColor = 'white'
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
        if (row9col1.style.backgroundColor === arrayKey[0]) {
            circleValidator91.style.backgroundColor = 'green'
        } else {
            circleValidator91.style.backgroundColor = 'white'
        }
        if (row9col2.style.backgroundColor === arrayKey[1]) {
            circleValidator92.style.backgroundColor = 'green'
        } else {
            circleValidator92.style.backgroundColor = 'white'
        }
        if (row9col3.style.backgroundColor === arrayKey[2]) {
            circleValidator93.style.backgroundColor = 'green'
        } else {
            circleValidator93.style.backgroundColor = 'white'
        }
        if (row9col4.style.backgroundColor === arrayKey[3]) {
            circleValidator94.style.backgroundColor = 'green'
        } else {
            circleValidator94.style.backgroundColor = 'white'
        }

    } else if (checkIterador === 11) {
        if (row9col1.style.backgroundColor === arrayKey[0]) {
            circleValidator91.style.backgroundColor = 'green'
        } else {
            circleValidator91.style.backgroundColor = 'white'
        }
        if (row9col2.style.backgroundColor === arrayKey[1]) {
            circleValidator92.style.backgroundColor = 'green'
        } else {
            circleValidator92.style.backgroundColor = 'white'
        }
        if (row9col3.style.backgroundColor === arrayKey[2]) {
            circleValidator93.style.backgroundColor = 'green'
        } else {
            circleValidator93.style.backgroundColor = 'white'
        }
        if (row9col4.style.backgroundColor === arrayKey[3]) {
            circleValidator94.style.backgroundColor = 'green'
        } else {
            circleValidator94.style.backgroundColor = 'white'
        }
    }
    checkIterador++

});

// comparar los arrays 

// se manda a localstorage la key y se pasa a string

let arrayKeystring = arrayKey.toString()
// console.log(arrayKeystring);



// ---------------- funcion Comparar color del array con el de la row tras el check
const usedColors = {};

switch (checkButtom) {
    case 1:
        if (row1col1.style.backgroundColor === arrayKey[0]) {
            circleValidator11.style.backgroundColor = 'green'
        } else {
            circleValidator11.style.backgroundColor = 'white'
        }
        if (row1col2.style.backgroundColor === arrayKey[1]) {
            circleValidator12.style.backgroundColor = 'green'
        } else {
            circleValidator12.style.backgroundColor = 'white'
        }
        if (row1col3.style.backgroundColor === arrayKey[2]) {
            circleValidator13.style.backgroundColor = 'green'
        } else {
            circleValidator13.style.backgroundColor = 'white'
        }
        if (row1col4.style.backgroundColor === arrayKey[3]) {
            circleValidator14.style.backgroundColor = 'green'
        } else {
            circleValidator14.style.backgroundColor = 'white'
        }

}



// -----------------------------------------------------------------------


let arrayPusheado = []
let arrayPusheadoString = arrayPusheado.toString()

const meterColorArray1 = (e) => {
    const c1 = window.getComputedStyle(row1col1).backgroundColor;
    const c2 = window.getComputedStyle(row1col2).backgroundColor;
    const c3 = window.getComputedStyle(row1col3).backgroundColor;
    const c4 = window.getComputedStyle(row1col4).backgroundColor;
    arrayPusheado.push(c1, c2, c3, c4);

    console.log(arrayPusheadoString);
}


const meterColorArray2 = (e) => {
    const c1 = window.getComputedStyle(row2col1).backgroundColor;
    const c2 = window.getComputedStyle(row2col2).backgroundColor;
    const c3 = window.getComputedStyle(row2col3).backgroundColor;
    const c4 = window.getComputedStyle(row2col4).backgroundColor;
    arrayPusheado.push(c1, c2, c3, c4);
    console.log(arrayPusheadoString);

}