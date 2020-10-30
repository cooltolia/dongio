(function () {
    const catalogFilter = document.querySelector('.catalog-filter');
    if (!catalogFilter) return;

    const ingredientsTrigger = document.querySelector('.catalog-filter__ingredients-trigger');
    const ingredientsModal = document.querySelector('.catalog-filter__ingredients-modal');

    ingredientsTrigger.addEventListener('click', e => {
        e.preventDefault();

        ingredientsTrigger.classList.toggle('active');
        ingredientsModal.classList.toggle('active');
    });
})();
