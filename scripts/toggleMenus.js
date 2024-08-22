function dropDownMenu() {
    const navUserBtn = document.querySelector('.nav_user');
    const navUserMenu = document.querySelector('.nav_user_menu');

    navUserBtn.addEventListener('click', () => {
        navUserMenu.classList.toggle('showBlockMenu');
    });
};

function toggleBurguerMenu (){
    const buguerMenu = document.querySelector('.hamburguer_menu_active');
    const burguerMenuToggler = document.querySelector('.hamburguer_toggler');

    burguerMenuToggler.addEventListener('click', () => {
        buguerMenu.classList.toggle('showFlexMenu');
    });
};

function showSearchModal () {
    const searchIcon = document.querySelector('.lupaIcon');
    const searchModal = document.querySelector('.searchModal_bg');
    const closeModalIcon = document.querySelector('.closeModal_icon');

    searchIcon.addEventListener('click', () => {
        searchModal.style.display = 'block';
    });

    closeModalIcon.addEventListener('click', () => {
        searchModal.style.display = 'none';
    });
};

dropDownMenu();
toggleBurguerMenu();
showSearchModal();