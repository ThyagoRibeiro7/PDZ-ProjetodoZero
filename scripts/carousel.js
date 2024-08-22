const firstWrapper = document.querySelector('#vitrineMain');
const secondWrapper = document.querySelector('#vitrineDestaques');
const mainBtns = document.querySelectorAll('.swipperBtnMain');
const destaquesBtns = document.querySelectorAll('.swipperBtnDestaques');
const firstCardWidth = document.querySelector('.cards_items').offsetWidth;

function carousel() {
    mainBtns.forEach(btn => {

        btn.addEventListener('click', () => {
            firstWrapper.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
            showAndHideMainBtns();
        });

        destaquesBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                secondWrapper.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
                showAndHideDestaquesBtns();
            });
        });
    });
};

function showAndHideMainBtns() {
    let firstBtn = mainBtns[0];
    firstWrapper.scrollLeft == 0 ? firstBtn.style.display = 'none' : firstBtn.style.display = 'flex';
};

function showAndHideDestaquesBtns() {
    let firstMainBtn = mainBtns[0];

    secondWrapper.scrollLeft == 0 ? firstMainBtn.style.display = 'none' : firstMainBtn.style.display = 'flex';
}

carousel();