const headerQuery = document.querySelector('.nav_bar');

window.addEventListener('scroll', () => {        
    let yAxis = window.scrollY;

    yAxis >= 200 ? headerQuery.classList.add('active') : headerQuery.classList.remove('active');

});

