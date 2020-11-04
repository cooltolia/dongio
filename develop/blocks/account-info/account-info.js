(function () {
    const accountInfo = document.querySelector('.account-info');
    if (!accountInfo) return;

    const select = accountInfo.querySelector('.custom-select');
    new CustomSelect(select);
})();
