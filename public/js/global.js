const showHideMenu = document.querySelector('#showHideMenu');
const navHeader = document.querySelector('.navHeader');
const backToTop = document.querySelector('#backToTop');

const toggleTheme = document.querySelector('#toggleTheme');


// Função para abrir/fechar menu para versão mobile
showHideMenu.addEventListener('click',() => {
    if(showHideMenu.classList.contains('bi-list')){
        showHideMenu.classList.remove('bi-list');
        showHideMenu.classList.add('bi-x-lg');

        navHeader.style.right = '0'
    }else{
        showHideMenu.classList.add('bi-list');
        showHideMenu.classList.remove('bi-x-lg');

        navHeader.style.right = '-100%'
    }
});


backToTop.addEventListener('click',() => {
  window.scroll(0,0);
})


//Função de troca de tema
toggleTheme.addEventListener('click',() => {
    if(toggleTheme.classList.contains('bi-moon-fill')){

        toggleTheme.classList.add('bi-brightness-high-fill')
        toggleTheme.classList.remove('bi-moon-fill')

        //Mudar o valor das variaveis do css
        document.documentElement.style.setProperty('--Bege','#402515');
        document.documentElement.style.setProperty('--Marrom-Claro','#F2D2B6');
        document.documentElement.style.setProperty('--Marrom-Escuro', '#F2D2B6')
        document.documentElement.style.setProperty('--Branco','#272727');
        document.documentElement.style.setProperty('--Preto','#f2f2f2');


    }else{

        toggleTheme.classList.remove('bi-brightness-high-fill')
        toggleTheme.classList.add('bi-moon-fill')

        //O valor das variaveis retorna ao normal.
        document.documentElement.style.setProperty('--Bege','#F2D2B6');
        document.documentElement.style.setProperty('--Marrom-Escuro', '#402515');
        document.documentElement.style.setProperty('--Marrom-Claro',"#8c3d35");
        document.documentElement.style.setProperty('--Preto','#272727');
        document.documentElement.style.setProperty('--Branco','#f2f2f2');
    }
})
