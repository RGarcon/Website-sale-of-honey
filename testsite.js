//Masquer nav quand Click bouton menu
const menu = document.querySelector('.list-nav');
const btnMenu = document.querySelector('.btn-toggle-contain');

btnMenu.addEventListener('click', function (){

    menu.classList.toggle('active-menu')

})

//Masquer nav quand Click items nav
const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(item => {

    item.addEventListener('click',()=>{
        menu.classList.toggle('active-menu')
    })
})