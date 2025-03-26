const showHideMenu = document.querySelector('#showHideMenu');
const navHeader = document.querySelector('.navHeader');
const backToTop = document.querySelector('#backToTop');

const toggleTheme = document.querySelector('#toggleTheme');

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

/*

(Em Criação!)

toggleTheme.addEventListener('click',() => {
    if(toggleTheme.classList.contains('bi-moon-fill')){

        toggleTheme.classList.add('bi-brightness-high-fill')
        toggleTheme.classList.remove('bi-moon-fill')

        document.documentElement.style.setProperty('--Bege','#402515')
        document.documentElement.style.setProperty('--Marrrom-Claro','#F2D2B6');
        document.documentElement.style.setProperty('--Branco','#272727');
        document.documentElement.style.setProperty('--Preto','#f2f2f2');

    }else{

        toggleTheme.classList.remove('bi-brightness-high-fill')
        toggleTheme.classList.add('bi-moon-fill')

        document.documentElement.style.setProperty('--Marrom-Claro',"#402515")
        document.documentElement.style.setProperty('--Bege','#F2D2B6');
        document.documentElement.style.setProperty('--Preto','#272727');
        document.documentElement.style.setProperty('--Branco','#f2f2f2');
    }
})
*/
