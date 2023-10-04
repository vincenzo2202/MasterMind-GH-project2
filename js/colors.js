// Se declaran las variables 

const color1 = document.getElementById('colors1');
const color2 = document.getElementById('colors2');
const color3 = document.getElementById('colors3');
const color4 = document.getElementById('colors4');
const arrayColor = []
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
 
const usedColors = {};

function applyColorToElement(element, color) {
    element.style.backgroundColor = color;  
   lastSelectedColor = element; 
   localStorage.setItem(element.id, color); 
    usedColors[color] = true;
    console.log(color);
}

// Agregar eventos a los elementos con la clase 'choice-color'
for (let i = 0; i < colorSelected.length; i++) {
    colorSelected[i].addEventListener('click', () => {
        if (lastSelectedColor ) {
            const selectedColor = getComputedStyle(colorSelected[i]).backgroundColor; 
           
            
            if (!usedColors[selectedColor]) {
                applyColorToElement(lastSelectedColor, selectedColor);
  
            } else {
                alert('El color ya ha sido seleccionado anteriormente. Elige otro color.');
            }
           
        }  
         
    });
    
}  

// ----------------------------------------------------
 
 
const next = document.getElementById('next')

next.addEventListener('click',()=>{
   
    if (next.value !== " "){ 
        window.location.href='../pages/easyLevel.html' 
    }else{
        alert("Debes decir un nombre") 
    }
} )

 

  