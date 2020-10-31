(function () {
    /** just a small code for mobile categories scroll */
    const nav = document.querySelector('.main-header__categories');
    if (!nav) return;
    
    const list = nav.querySelector('.main-header__categories-list');

    const listWidth = list.scrollWidth;
    const navWidth = nav.offsetWidth;

    if (listWidth > navWidth) {
        list.addEventListener('scroll', e => {
            const scrollLeft = list.scrollLeft;
            const startPoint = 20;
            const finishPoint = listWidth - navWidth - 20;
            if (scrollLeft > startPoint) {
                nav.classList.remove('scroll-start');
            } else {
                nav.classList.add('scroll-start');
            }
            if (scrollLeft > finishPoint) {
                nav.classList.add('scroll-finish');
            } else {
                nav.classList.remove('scroll-finish');
            }
            console.log(scrollLeft);
        });
    } else {
        nav.classList.add('scroll-finish');
    }
})();
