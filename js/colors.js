// Se declaran las variables 

const color1 = document.getElementById('colors1');
const color2 = document.getElementById('colors2');
const color3 = document.getElementById('colors3');
const color4 = document.getElementById('colors4');
const colorSelected = document.getElementsByClassName('choice-color'); 
let lastSelectedColor = null;

// Función para aplicar el color al elemento seleccionado

const colors = document.querySelectorAll('.colors')
 

colors.forEach((color) => {
    color.addEventListener('click', () => { 
        collapseBox.classList.toggle('expanded');
        lastSelectedColor = color;  
    });
});


collapseBox.addEventListener('click', () => {
    collapseBox.classList.remove('expanded');
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

// boton

// const next = document.getElementById('next');

// next.addEventListener('click', ()=>{ 
// if( applyColorToElement(lastSelectedColor).length < 4 ){  

    
//     alert('Debes introducir todos los colores y que sean distintos')

    
 
// }else{ 
//     window.location.href = './pages/easyLevel.html';
// }

// })
 
 
//  notas

  