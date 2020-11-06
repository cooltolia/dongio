(function () {
    const workSection = document.querySelector('.work-section');
    if (!workSection) return;

    const selects = workSection.querySelectorAll('.custom-select');

    selects.forEach(select => {
        new CustomSelect(select);
    });
})();
