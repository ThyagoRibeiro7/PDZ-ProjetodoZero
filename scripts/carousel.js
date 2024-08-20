const firstWrapper = document.querySelector('#vitrineMain');
const secondWrapper = document.querySelector('#vitrineDestaques');
const firstBtns = document.querySelectorAll('.swipperBtnMain');
const secondBtns = document.querySelectorAll('.swipperBtnDestaques');
const firstCardWidth = document.querySelector('.cards_items').offsetWidth;

// ForEach method to add a event for every button on the 'firstWrapper' container.
function carousel () {
    // ForEach method to add a event for every button on the 'secondWrapper' container.
    firstBtns.forEach(btn => {
    
        // Check the width of the first element, and than remove or add to the scrollLeft number.
        btn.addEventListener('click', () => {
            firstWrapper.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
            // disableLeftAndRight();
        });
    });
    
    secondBtns.forEach(btn => {
    
        // Check the width of the first element, and than remove or add to the scrollLeft number.
        btn.addEventListener('click', () => {
            secondWrapper.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
            showAndHideArrows();
        });
    });
};


function showAndHideArrows () {
    if (firstWrapper.scrollLeft === 0) {
        arrowBtns[0].style.display = 'none';
    }
    else {
        arrowBtns[0].style.display = 'flex';
    }

    if (firstWrapper.scrollLeft + firstWrapper.offsetWidth === firstWrapper.scrollLeft) {
        arrowBtns[1].style.display = 'none';

    } else {
        arrowBtns[1].style.display = 'flex';
    }
}

carousel();