 
// -------------------- Callapse Window Rules Game 
const rulesCollapseButton = document.getElementById('rulesCollapseButton');

rulesCollapseButton.addEventListener('click', () => {
    collapseRules.classList.toggle('expanded');
    
});  


document.addEventListener('DOMContentLoaded', () => {
    const collapseRules = document.getElementById('collapseRules');
    collapseRules.classList.remove('expanded');
});