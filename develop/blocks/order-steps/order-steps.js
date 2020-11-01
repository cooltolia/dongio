(function () {
    /** just a small code for mobile order steps scroll */
    const stepsNode = document.querySelector('.order-steps');
    if (!stepsNode) return;

    const list = stepsNode.querySelector('.order-steps__list');

    const listWidth = list.scrollWidth;
    const stepsNodeWidth = stepsNode.offsetWidth;

    if (listWidth > stepsNodeWidth) {
        list.addEventListener('scroll', e => {
            const scrollLeft = list.scrollLeft;
            const startPoint = 20;
            const finishPoint = listWidth - stepsNodeWidth - 20;
           
            if (scrollLeft > finishPoint) {
                stepsNode.classList.add('scroll-finish');
            } else {
                stepsNode.classList.remove('scroll-finish');
            }
        });
    } else {
        stepsNode.classList.add('scroll-finish');
    }
})();
