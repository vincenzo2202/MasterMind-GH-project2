const username = document.querySelector('.input');

username.addEventListener('input', ()=> { 
    localStorage.setItem('username', username.value);
})
  
const PlayButtom = document.getElementById('playButtom')

PlayButtom.addEventListener('click',()=>{
   
    if (username.value !== ""){ 
        window.location.href='../pages/level.html' 
    }else{
        alert("Debes decir un nombre") 
    }
} )