// Se declaran las variables 

const color1 = document.getElementById('colors1');
const color2 = document.getElementById('colors2');
const color3 = document.getElementById('colors3');
const color4 = document.getElementById('colors4');
const colorSelected = document.getElementsByClassName('choice-color');
let lastSelectedColor = null;

// Función para aplicar el color al elemento seleccionado



// desplegable 
color1.addEventListener('click', () => {
    collapseBox.classList.toggle('expanded');
    lastSelectedColor = color1; 
});

color2.addEventListener('click', () => {
    collapseBox.classList.toggle('expanded');
    lastSelectedColor = color2; 
});

color3.addEventListener('click', () => {
    collapseBox.classList.toggle('expanded');
    lastSelectedColor = color3;
});

color4.addEventListener('click', () => {
    collapseBox.classList.toggle('expanded');
    lastSelectedColor = color4;
});

// es la funcion  para aplicar color al elemento y guardarlo en el local storage
function applyColorToElement(element, color) {
    element.style.backgroundColor = color;  
   lastSelectedColor = element; 
   localStorage.setItem(element.id, color); 
}

// Agregar eventos a los elementos con la clase 'choice-color'
for (let i = 0; i < colorSelected.length; i++) {
    colorSelected[i].addEventListener('click', () => {
        if (lastSelectedColor) {
            const selectedColor = getComputedStyle(colorSelected[i]).backgroundColor;
            applyColorToElement(lastSelectedColor, selectedColor);
            
        }   
    });
}
 
 
 