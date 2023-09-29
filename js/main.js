 const colors = document.getElementsByClassName('colors'); // Obtiene una colección de elementos

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function () {
        collapseBox.classList.toggle('expanded');
    });
}