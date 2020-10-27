(function () {
    /** demo purpose only */
    const catalog = document.querySelector('.catalog');
    if (!catalog) return;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    catalog.addEventListener('click', e => {
        if (e.target.classList.contains('trigger')) {
            e.target.nextElementSibling.classList.toggle('active');
            e.target.parentNode.classList.toggle('active')

            if (isMobile) {
                document.body.classList.toggle('menu-opened');
            }
        }

        if (e.target.classList.contains('ingredients__submit') || e.target.classList.contains('ingredients__close')) {
            console.log(e.target);
            e.target.closest('.list').classList.remove('active');
            e.target.closest('.list').parentNode.classList.remove('active');
            if (isMobile) {
                document.body.classList.remove('menu-opened');
            }
        }
    });
})();
