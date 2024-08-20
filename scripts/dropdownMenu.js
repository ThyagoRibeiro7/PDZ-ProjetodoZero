const navUserBtn = document.querySelector('.nav_user');
const navUserMenu = document.querySelector('.nav_user_menu');
const hamburguerToggler = document.querySelector('.hamburguer_toggler');
const hamburguerMenu = document.querySelector('.hamburguer_menu_active');

function dropDownMenu() {
    navUserBtn.addEventListener('click', () => {
        navUserMenu.classList.toggle('showMenu');
    });
};

function toggleBurguerMenu (){
    hamburguerToggler.addEventListener('click', () => {
        hamburguerMenu.classList.toggle('showMenu');
    });
};

toggleBurguerMenu();
dropDownMenu();