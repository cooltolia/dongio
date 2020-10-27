/**
 * some global settings and functions
 */
const API = '/app/ajax/';

const windowOnloadFunctions = [];

window.addEventListener('load', () => {
    windowOnloadFunctions.forEach(func => {
        if (typeof func === 'function') {
            func();
        }
    });
});

Inputmask.extendDefinitions({
    f: {
        //masksymbol
        validator: '[0-7|9]',
    },
});

const masksStorage = {
    phoneInputMask: new Inputmask({
        mask: '+7 (f99) 999-99-99',
        showMaskOnHover: false,
    }),
    birthdayInputMask: new Inputmask({
        alias: 'datetime',
        inputFormat: 'dd.mm.yyyy',
        placeholder: 'дд.мм.гггг',
    }),
};

function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

function changeTheme(type = 'green') {
    const styles = {
        basic: {
            baseColor: '#f98858',
            baseBackround: 'linear-gradient(97deg, #f56b51 1%, #feb764 97%)',
        },

        green: {
            baseColor: '#009fa2',
            baseBackround: 'linear-gradient(97deg, #009fa2 1%, #009fa2 97%)',
        },

        blue: {
            baseColor: '#4474c9',
            baseBackround: 'linear-gradient(97deg, #4474c9 1%, #4474c9 97%)',
        },

        tiffany: {
            baseColor: '#39afc7',
            baseBackround: 'linear-gradient(97deg, #39afc7 1%, #39afc7 97%)',
        },

        red: {
            baseColor: '#f15757',
            baseBackround: 'linear-gradient(97deg, #f15757 1%, #f15757 97%)',
        },
    };
    document.body.style.setProperty('--base-color', styles[type].baseColor);
    document.body.style.setProperty('--base-background', styles[type].baseBackround);
}

/** only by window width
 *  should correspond to variables.scss
 */
window.deviceType = {
    isMobile: window.matchMedia('(max-width: 767px)').matches,
    isTablet: window.matchMedia('(min-width: 768px) and (max-width: 1139px)').matches,
    isLaptop: window.matchMedia('(min-width: 1140px) and (max-width: 1279px)').matches,
    isDesktop: window.matchMedia('(min-width: 1280px)').matches,
};

Flickity.prototype._createResizeClass = function () {
    this.element.classList.add('flickity-resize');
};

Flickity.createMethods.push('_createResizeClass');

var resize = Flickity.prototype.resize;
Flickity.prototype.resize = function () {
    this.element.classList.remove('flickity-resize');
    resize.call(this);
    this.element.classList.add('flickity-resize');
};

window.scrollBarWidth = null;
setTimeout(() => {
    window.scrollBarWidth = getScrollbarWidth();
}, 1000);

const stickyElements = document.querySelectorAll('.sticky');
Stickyfill.add(stickyElements);

// $.noConflict();
// jQuery(document).ready(function($) {
// $('body').removeClass('pageload');

if (typeof Promise !== 'function') {
    document.createElement('picture');
    loadScript('/assets/js/polyfills/browser.js', globalInitFunction);
    // loadScript('/js/polyfills/browser.js', globalInitFunction);
} else {
    const start = performance.now();
    globalInitFunction();
    const end = performance.now();

    console.log('globalInitFunction took ' + Math.floor(end - start) + 'ms.');
}

function globalInitFunction() {
    //=require common/*.js
    //=require ../blocks/**/*.js
}

function loadScript(url, done) {
    var script = document.createElement('script');
    script.src = url;
    script.onload = function () {
        done();
    };
    script.onerror = function () {
        throw new Error('Failed to load script ' + url);
    };
    document.head.appendChild(script);
}
