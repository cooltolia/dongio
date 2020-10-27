(function () {
    function renderMobileMenu() {
        const mobileNav = document.querySelector('.mobile-nav');
        if (!mobileNav) return;

        const mainNav = document.querySelector('.main-nav');
        const secondaryNav = document.querySelector('.secondary-nav');

        const mainNavWrapper = mobileNav.querySelector('.mobile-nav__main-menu');
        const secondaryNavWrapper = mobileNav.querySelector('.mobile-nav__secondary-menu');

        mainNavWrapper.append(mainNav);
        secondaryNavWrapper.append(secondaryNav);

        mainNavLogic(mainNav);
    }

    function mainNavLogic(mainNav) {
        mainNav.addEventListener('click', e => {

            if (e.target.classList.contains('has-inner')) {
                e.preventDefault();
                
                e.target.classList.toggle('active');
                $$.slideToggle(e.target.nextElementSibling);
            }
        })
    }

    if (!deviceType.isDesktop) renderMobileMenu();

    // deviceType.mobileMedia.addEventListener('change', e => {
    //     if (e.matches) {
    //         renderMobileMenu();
    //     }
    // });
})();
