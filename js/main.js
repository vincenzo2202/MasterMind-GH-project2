// -------------------- Callapse Window colors selector
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

// -------------------- Callapse Window Rules Game
const rulesCollapseButton = document.getElementById('rulesCollapseButton');
const collapseRules = document.getElementById('collapseRules');

rulesCollapseButton.addEventListener('click', () => {
    collapseRules.classList.toggle('expanded');
});
