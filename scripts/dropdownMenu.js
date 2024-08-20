const navUserBtn = document.querySelector('.nav_user');
const navUserMenu = document.querySelector('.nav_user_menu');
const burguerMenuToggler = document.querySelector('.hamburguer_toggler');
const buguerMenu = document.querySelector('.hamburguer_menu_active');

function dropDownMenu() {
    navUserBtn.addEventListener('click', () => {
        navUserMenu.classList.toggle('showMenu');
    });
};

function toggleBurguerMenu (){
    burguerMenuToggler.addEventListener('click', () => {
        buguerMenu.classList.toggle('showMenu');
    });
};

toggleBurguerMenu();
dropDownMenu();