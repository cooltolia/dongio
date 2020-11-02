(function() {
    const orderForm = document.querySelector('.order-form');
    if (!orderForm) return;

    const select = orderForm.querySelector('.custom-select');
    new CustomSelect(select)
})();