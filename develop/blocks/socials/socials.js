(function() {
    const socialsImages = document.querySelectorAll('.socials__link img');
    if (socialsImages.length === 0) return;

    lazyLoadImages(socialsImages);
})();
