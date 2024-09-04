const firstWrapper = document.querySelector('#vitrineMain');
const secondWrapper = document.querySelector('#vitrineDestaques');
const mainBtns = document.querySelectorAll('.swipperBtnMain');
const destaquesBtns = document.querySelectorAll('.swipperBtnDestaques');
const firstCardWidth = document.querySelector('.cards_items').offsetWidth;

function carousel() {
    mainBtns.forEach(btn => {

        btn.addEventListener('click', () => {
            firstWrapper.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;    
        });

        destaquesBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                secondWrapper.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
            });
        });
    });
};