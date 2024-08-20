const headerQuery = document.querySelector('.nav_bar');

window.addEventListener('scroll', () => {        
    let yAxis = window.scrollY;

    // console.log(yAxis); logs out the Y scroll.
    
    // If the yAxis if greater or equal to 200px, add the class 'active' in the DOM tree, else remove it.
    if (yAxis >= 200){
        headerQuery.classList.add('active');
    }
    else{
        headerQuery.classList.remove('active');
    };

});

