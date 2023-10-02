const username = document.querySelector('.input-box-text input');

username.addEventListener('input', ()=> { 
    localStorage.setItem('username', username.value);
})