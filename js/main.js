const colors = document.getElementsByClassName('colors'); 
const choiceColors = document.getElementsByClassName('choice-color');

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', () => {
        collapseBox.classList.toggle('expanded');
    });

  
    choiceColors[i].addEventListener('click', () => {
       
        const colorBackground = getComputedStyle(choiceColors[i]).backgroundColor; 
        
      
        colors[i].style.backgroundColor = colorBackground; 
    });
}

 