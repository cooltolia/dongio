/** and again, demo purpose only
 *  do not use
 */

const getStarRating = () => {
    const $stars = document.querySelectorAll('.star-rating__star');
    const $wrapStars = document.querySelector('.star-rating__stars');
    if (!$wrapStars) return;

    let rating = 0;
    $wrapStars.addEventListener('click', e => {
        let action = 'add';

        for (const star of $wrapStars.children) {
            star.classList[action]('filled');
            if (star === e.target) action = 'remove';
        }
    });

    $stars.forEach((star, i) => {
        const radioBtn = star.querySelector('[type="radio"]');
        $stars[i].classList.remove('filled');

        star.addEventListener('click', () => {
            rating = i + 1;

            radioBtn.checked = true;
        });
    });
};
getStarRating();
