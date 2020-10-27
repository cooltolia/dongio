function postData(url, options) {
    const requestOptions = {
        method: 'POST',
        headers: options.headers,
        body: options.body,
    };
    return fetch(url, requestOptions).then(response => {
        return response.json();
        // if  (response.ok) {
        //     return response.json();
        // } else {
        //     window.location.reload()
        // }
    });
}

function getData(url, options) {
    return fetch(url, options).then(
        response => {
            return response.json();
        },
        e => {}
    );
}

// function updateCartCounter(count) {
//     const cartButtons = document.querySelectorAll(
//         '.header__icon-btn--cart, .mob-menu-modal__icon-btn--cart, .cart-btn'
//     );
//     const cartQuantityCounter = document.querySelector('.basket-hero__count-num');

//     cartButtons.forEach(node => {
//         node.setAttribute('data-content', count);
//     });
//     if (cartQuantityCounter) cartQuantityCounter.textContent = count;
// }

// function updateCartSum(sum, sumSelector) {
//     const cartSumNode = sumSelector ? document.querySelectorAll(sumSelector) : document.querySelectorAll('.basket-hero__sum-num');
//     cartSumNode.forEach(node => {
//         node.textContent = sum;
//     })
// }

function loadYandexMap(url) {
    return new Promise(resolve => {
        if (window.yandexMapIsLoading) {
            setTimeout(() => resolve(loadYandexMap(url)), 1000);
        } else if (typeof ymaps !== 'undefined') {
            resolve();
        } else {
            // const yandexMapUrl = url;
            window.yandexMapIsLoading = true;
            const yandexMapUrl =
                'https://api-maps.yandex.ru/2.1/?apikey=6cabbeea-5917-4375-b061-36a551dae260&lang=ru_RU';
            const yandexMapScript = document.createElement('script');
            yandexMapScript.type = 'text/javascript';
            yandexMapScript.src = yandexMapUrl;
            document.body.appendChild(yandexMapScript);

            yandexMapScript.onload = function () {
                window.yandexMapIsLoading = false;
                console.log('resolved');
                resolve();
            };
        }
    });
}
