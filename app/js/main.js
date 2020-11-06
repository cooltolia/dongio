"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * some global settings and functions
 */
var API = '/app/ajax/';
var windowOnloadFunctions = [];
window.addEventListener('load', function () {
  windowOnloadFunctions.forEach(function (func) {
    if (typeof func === 'function') {
      func();
    }
  });
});
Inputmask.extendDefinitions({
  f: {
    //masksymbol
    validator: '[0-7|9]'
  }
});
var masksStorage = {
  phoneInputMask: new Inputmask({
    mask: '+7 (f99) 999-99-99',
    showMaskOnHover: false
  }),
  birthdayInputMask: new Inputmask({
    alias: 'datetime',
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'дд.мм.гггг'
  })
};

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function changeTheme() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'green';
  var styles = {
    basic: {
      baseColor: '#f98858',
      baseBackround: 'linear-gradient(97deg, #f56b51 1%, #feb764 97%)'
    },
    green: {
      baseColor: '#009fa2',
      baseBackround: 'linear-gradient(97deg, #009fa2 1%, #009fa2 97%)'
    },
    blue: {
      baseColor: '#4474c9',
      baseBackround: 'linear-gradient(97deg, #4474c9 1%, #4474c9 97%)'
    },
    tiffany: {
      baseColor: '#39afc7',
      baseBackround: 'linear-gradient(97deg, #39afc7 1%, #39afc7 97%)'
    },
    red: {
      baseColor: '#f15757',
      baseBackround: 'linear-gradient(97deg, #f15757 1%, #f15757 97%)'
    }
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
  isDesktop: window.matchMedia('(min-width: 1280px)').matches
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
setTimeout(function () {
  window.scrollBarWidth = getScrollbarWidth();
}, 1000);
var stickyElements = document.querySelectorAll('.sticky');
Stickyfill.add(stickyElements); // $.noConflict();
// jQuery(document).ready(function($) {
// $('body').removeClass('pageload');

if (typeof Promise !== 'function') {
  document.createElement('picture');
  loadScript('/assets/js/polyfills/browser.js', globalInitFunction); // loadScript('/js/polyfills/browser.js', globalInitFunction);
} else {
  var start = performance.now();
  globalInitFunction();
  var end = performance.now();
  console.log('globalInitFunction took ' + Math.floor(end - start) + 'ms.');
}

function globalInitFunction() {
  function postData(url, options) {
    var requestOptions = {
      method: 'POST',
      headers: options.headers,
      body: options.body
    };
    return fetch(url, requestOptions).then(function (response) {
      return response.json(); // if  (response.ok) {
      //     return response.json();
      // } else {
      //     window.location.reload()
      // }
    });
  }

  function getData(url, options) {
    return fetch(url, options).then(function (response) {
      return response.json();
    }, function (e) {});
  } // function updateCartCounter(count) {
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
    return new Promise(function (resolve) {
      if (window.yandexMapIsLoading) {
        setTimeout(function () {
          return resolve(loadYandexMap(url));
        }, 1000);
      } else if (typeof ymaps !== 'undefined') {
        resolve();
      } else {
        // const yandexMapUrl = url;
        window.yandexMapIsLoading = true;
        var yandexMapUrl = 'https://api-maps.yandex.ru/2.1/?apikey=6cabbeea-5917-4375-b061-36a551dae260&lang=ru_RU';
        var yandexMapScript = document.createElement('script');
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

  var CustomSelect =
  /*#__PURE__*/
  function () {
    /**
     * @param {HTMLElement} select
     * @param {Object} options
     * @param {Boolean} options.multiple - multiple choises
     * @param {String} options.multipleCounterLabel
     */
    function CustomSelect(select) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, CustomSelect);

      if (!select) {
        throw new Error('No element has been passed');
      }

      this.select = select;
      this.options = options;
      this.setup();
    }

    _createClass(CustomSelect, [{
      key: "setup",
      value: function setup() {
        this.valueInput = this.select.querySelector('.custom-select__value');
        this.selected = this.select.querySelector('.custom-select__selected');
        this.dropdown = this.select.querySelector('.custom-select__dropdown');
        this.optionsList = this.select.querySelector('.custom-select__options');
        this.inititalPlaceholder = this.selected.textContent.trim(); // new SimpleBar(this.dropdown, {
        //     autoHide: false,
        // });

        /** keycodes */

        this.keyCodes = {
          enter: 13,
          down_arrow: 40,
          up_arrow: 38,
          escape: 27
        };

        if (this.options.multiple) {
          this.multipleCounter = 0;
          this.optionsList.classList.add('multiple');
        }

        this.setEventHandlers();
      }
    }, {
      key: "setEventHandlers",
      value: function setEventHandlers() {
        var _this = this;

        this.selected.addEventListener('keydown', function (e) {
          return _this.toggleOptionsList(e);
        });
        this.selected.addEventListener('click', function (e) {
          return _this.toggleOptionsList(e);
        });
        this.optionsList.addEventListener('click', function (e) {
          var target = e.target;

          if (target.classList.contains('custom-select__option')) {
            _this.selectItem(e);
          }
        });
        this.optionsList.addEventListener('keydown', function (e) {
          var target = e.target;

          if (target.classList.contains('custom-select__option')) {
            switch (e.keyCode) {
              case _this.keyCodes.enter:
                _this.selectItem(e);

                return;

              case _this.keyCodes.down_arrow:
                e.preventDefault();

                _this.focusNextListItem(_this.keyCodes.down_arrow);

                return;

              case _this.keyCodes.up_arrow:
                e.preventDefault();

                _this.focusNextListItem(_this.keyCodes.up_arrow);

                return;

              case _this.keyCodes.escape:
                _this.closeOptionsList();

                return;

              default:
                return;
            }
          }
        });
        document.addEventListener('click', function (e) {
          if (!_this.select.contains(e.target) && _this.dropdown.classList.contains('opened')) {
            _this.closeOptionsList();
          }
        });
      }
    }, {
      key: "toggleOptionsList",
      value: function toggleOptionsList(e) {
        if (e.keyCode === this.keyCodes.escape) {
          this.closeOptionsList();
        }

        if (e.type === 'click') {
          this.dropdown.classList.toggle('opened');
          this.selected.classList.toggle('opened');
          this.dropdown.setAttribute('aria-expanded', this.dropdown.classList.contains('opened'));
          $$.fadeToggle(this.dropdown);
        }

        if (e.keyCode === this.keyCodes.down_arrow) {
          e.preventDefault();
          this.focusNextListItem(this.keyCodes.down_arrow);
        }

        if (e.keyCode === this.keyCodes.up_arrow) {
          e.preventDefault();
          this.focusNextListItem(this.keyCodes.up_arrow);
        }
      }
    }, {
      key: "closeOptionsList",
      value: function closeOptionsList() {
        this.dropdown.classList.remove('opened');
        this.selected.classList.remove('opened');
        this.dropdown.setAttribute('aria-expanded', false);
        $$.fadeOut(this.dropdown);
      }
    }, {
      key: "focusNextListItem",
      value: function focusNextListItem(direction) {
        var activeElement = document.activeElement;

        var options = _toConsumableArray(this.optionsList.children);

        if (activeElement.classList.contains('custom-select__selected')) {
          this.optionsList.children[0].focus();
        } else {
          var currentActiveElementIndex = options.indexOf(activeElement);

          if (direction === this.keyCodes.down_arrow) {
            var currentActiveElementIsNotLastItem = currentActiveElementIndex < options.length - 1;

            if (currentActiveElementIsNotLastItem) {
              var nextListItem = options[currentActiveElementIndex + 1];
              nextListItem.focus();
            }
          } else if (direction === this.keyCodes.up_arrow) {
            var currentActiveElementIsNotFirstItem = currentActiveElementIndex > 0;

            if (currentActiveElementIsNotFirstItem) {
              var _nextListItem = options[currentActiveElementIndex - 1];

              _nextListItem.focus();
            }
          }
        }
      }
    }, {
      key: "selectItem",
      value: function selectItem(e) {
        var selectedValue = e.target.textContent.trim();

        if (this.options.multiple) {
          this.multipleSelectLogic(e, selectedValue);
        } else {
          this.selected.textContent = selectedValue;
          if (this.valueInput) this.valueInput.value = selectedValue;
          this.closeOptionsList();
        }

        if (typeof this.options.onSelect === 'function') {
          this.options.onSelect(selectedValue);
        }
      }
    }, {
      key: "setSelected",
      value: function setSelected(value) {
        this.selected.textContent = value;
        if (this.valueInput) this.valueInput.value = value;
      }
    }, {
      key: "multipleSelectLogic",
      value: function multipleSelectLogic(e, selectedValue) {
        var valueDivider = ';';

        if (e.target.classList.contains('selected')) {
          e.target.classList.remove('selected');
          this.multipleCounter--;

          if (this.valueInput) {
            this.valueInput.value = this.valueInput.value.split(valueDivider).filter(function (val) {
              return val !== selectedValue;
            }).join(valueDivider);
          }
        } else {
          e.target.classList.add('selected');
          this.multipleCounter++;
          if (this.valueInput) this.valueInput.value += selectedValue + valueDivider;
        }

        if (this.multipleCounter === 0) {
          this.selected.textContent = this.inititalPlaceholder;
        } else {
          this.selected.textContent = "".concat(this.options.multipleCounterLabel, ": ").concat(this.multipleCounter);
        }
      }
    }]);

    return CustomSelect;
  }();

  var debounce = function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  var throttle = function throttle(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};

    var later = function later() {
      previous = options.leading === false ? 0 : Date.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    return function () {
      var now = Date.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;

      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }

        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }

      return result;
    };
  };

  var setCookie = function setCookie(key, value, expiry) {
    var expires = new Date();
    expires.setTime(expires.getTime() + expiry * 24 * 60 * 60 * 1000);
    document.cookie = key + '=' + value + '; path=/ ;expires=' + expires.toUTCString();
  };
  /**
   * @param {string} value email input value
   * @returns {boolean}
   */


  function isEmailValid(value) {
    var emailRegex = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.))+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]/i;
    var result = value.match(emailRegex);
    if (result && result[0]) return true;
    return false;
  }

  function isPhoneValid(phone) {
    return Inputmask.isValid(phone, {
      mask: phoneMask
    });
  }

  function validatePhone(phone) {
    var isValid = Inputmask.isValid(phone.value, {
      mask: phoneMask
    });

    if (isValid) {
      phone.parentElement.classList.add('valid');
    } else {
      showInputError(phone, 'Не верно введен номер телефона');
    }

    return isValid;
  }

  function validateBirthday(date) {
    var isValid = Inputmask.isValid(date.value, {
      alias: 'datetime',
      inputFormat: 'dd.mm.yyyy'
    });

    if (isValid) {
      date.parentElement.classList.add('valid');
    } else {
      showInputError(date, 'Неверная дата рождения');
    }

    return isValid;
  }
  /**
   * @param {NodeList} inputs
   */


  function hideInputErrors(inputs) {
    inputs.forEach(function (input) {
      var wrapper = input.parentElement;
      wrapper.classList.remove('error');
    });
  }
  /**
   * @param {HTMLInputElement} input
   * @param {string} [errorText] set custom error text
   */


  function showInputError(input, errorText) {
    var wrapper = input.parentElement;
    if (wrapper.classList.contains('error')) return;
    wrapper.classList.add('error');
    wrapper.classList.remove('valid');

    if (errorText) {
      var errorNode = document.createElement('span');
      errorNode.classList.add('custom-input__error');
      errorNode.textContent = errorText;
      wrapper.append(errorNode);
    }
  }
  /**
   * @param {HTMLInputElement} input
   */


  function hideSingleInputError(input) {
    var wrapper = input.parentElement;
    wrapper.classList.remove('error');
    var errorNode = wrapper.querySelector('.custom-input__error');
    if (errorNode) errorNode.remove();
  }

  function createNewEvent(eventName, data) {
    (function () {
      if (typeof window.CustomEvent === 'function') return false;

      function CustomEvent(event, params) {
        params = params || {
          bubbles: false,
          cancelable: false,
          detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      }

      CustomEvent.prototype = window.Event.prototype;
      window.CustomEvent = CustomEvent;
    })();

    var event = new CustomEvent(eventName, data);
    return event;
  } // function numberWithSpaces(n) {
  //     return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  // }


  function lazyLoadImages(imagesNodes) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = {
      rootMargin: opts.rootMargin || '0px 0px 100% 0px',
      root: opts.root || null,
      threshold: opts.threshold || 0
    };

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            var src = image.getAttribute('data-src');
            if (!src) return;
            image.addEventListener('load', function () {
              image.classList.add('loaded');
              observer.unobserve(entry.target);
            });
            image.src = src;
          }
        });
      }, {
        rootMargin: options.rootMargin,
        root: options.root,
        threshold: options.threshold
      });
      imagesNodes.forEach(function (image) {
        return observer.observe(image);
      });
    } else {
      imagesNodes.forEach(function (image) {
        var src = image.getAttribute('data-src');
        if (!src) return;
        image.src = src;
        image.classList.add('loaded');
      });
    }
  }

  function lazyLoadPictures(imagesContainers) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = {
      rootMargin: opts.rootMargin || '0px 0px 100% 0px',
      root: opts.root || null,
      threshold: opts.threshold || 0
    };

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var imageContainer = entry.target;
            var image = imageContainer.querySelectorAll('img, source');
            image.forEach(function (img) {
              if (img.dataset && img.dataset.src) {
                img.src = img.dataset.src;
              }

              if (img.dataset && img.dataset.srcset) {
                img.srcset = img.dataset.srcset;
              }
            });
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: options.rootMargin,
        root: options.root,
        threshold: options.threshold
      });
      imagesContainers.forEach(function (container) {
        return observer.observe(container);
      });
    } else {
      imagesContainers.forEach(function (container) {
        var image = container.querySelector('img');
        var source = container.querySelector('source');
        image.src = source.dataset.srcset;
      });
    }
  } // function forwardingZero(val) {
  //     return val < 10 ? '0' + val : val;
  // }
  // function triggerAnimation(items, opts = {}) {
  //     const options = {
  //         rootMargin: opts.rootMargin || '0px 0px -20% 0px',
  //         root: opts.root || null,
  //         threshold: opts.threshold || 0,
  //     };
  //     if ('IntersectionObserver' in window) {
  //         const observer = new IntersectionObserver(
  //             entries => {
  //                 entries.forEach(entry => {
  //                     if (entry.isIntersecting) {
  //                         entry.target.classList.add('animated');
  //                         observer.unobserve(entry.target);
  //                     }
  //                 });
  //             },
  //             { rootMargin: options.rootMargin, root: options.root, threshold: options.threshold }
  //         );
  //         items.forEach(item => observer.observe(item));
  //     } else {
  //         setTimeout(() => {
  //             items.forEach(item => {
  //                 item.classList.add('animated');
  //             });
  //         }, 300)
  //     }
  // }

  /**
   * Returns an array with arrays of the given size.
   *
   * @param {[]} arr  array to split
   * @param {number} chunk_size  Size of every group
   */


  function chunkArray(arr, chunk_size) {
    var index = 0;
    var arrayLength = arr.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      var chunk = arr.slice(index, index + chunk_size);
      tempArray.push(chunk);
    }

    return tempArray;
  }

  function generateCustomDots(slider, parentNode, slideClass) {
    var slidesArray = _toConsumableArray(parentNode.querySelectorAll(slideClass));

    var sliderDots = parentNode.querySelector('.slider-dots');
    slidesArray.forEach(function (_, index) {
      var dotButton = document.createElement('button');
      if (index === 0) dotButton.classList.add('is-selected');
      sliderDots.appendChild(dotButton);
    });

    var dotsArray = _toConsumableArray(sliderDots.children);

    slider.on('select', function () {
      var previousSelectedDot = sliderDots.querySelector('.is-selected');
      var selectedDot = sliderDots.children[slider.selectedIndex];
      previousSelectedDot.classList.remove('is-selected');
      selectedDot.classList.add('is-selected');
    });
    sliderDots.addEventListener('click', function (e) {
      if (!e.target.matches('button')) {
        return;
      }

      var index = dotsArray.indexOf(e.target);
      slider.select(index);
    });
  }

  var $$ = {
    currentRequestAnimationFrame: null,

    /**
     * @param {HTMLElement} el
     * @param {Object} [{ speed = 200 }={}]
     * @returns {Promise}
     */
    fadeIn: function fadeIn(el) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$display = _ref.display,
          display = _ref$display === void 0 ? 'block' : _ref$display,
          _ref$speed = _ref.speed,
          speed = _ref$speed === void 0 ? 200 : _ref$speed;

      return new Promise(function (resolve) {
        var animationSpeed = 16 / speed;
        el.style.opacity = 0;
        el.style.display = display;

        var fade = function fade() {
          var id;
          var val = parseFloat(el.style.opacity);

          if (!((val += animationSpeed) > 1)) {
            el.style.opacity = val;
            id = requestAnimationFrame(fade);
          } else {
            el.style.opacity = 1;
            resolve();
          }

          return id;
        };

        fade();
      });
    },

    /**
     * @param {HTMLElement} el
     * @param {Object} [{ speed = 200 }={}]
     * @returns {Promise}
     */
    fadeOut: function fadeOut(el) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$speed = _ref2.speed,
          speed = _ref2$speed === void 0 ? 200 : _ref2$speed;

      return new Promise(function (resolve) {
        var animationSpeed = 16 / speed;
        el.style.opacity = 1;

        var fade = function fade() {
          var id;

          if ((el.style.opacity -= animationSpeed) < 0) {
            el.style.display = 'none';
            resolve();
          } else {
            id = requestAnimationFrame(fade);
          }

          return id;
        };

        fade();
      });
    },
    fadeToggle: function fadeToggle(el) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$speed = _ref3.speed,
          speed = _ref3$speed === void 0 ? 200 : _ref3$speed,
          _ref3$display = _ref3.display,
          display = _ref3$display === void 0 ? 'block' : _ref3$display;

      if ($$.isHidden(el)) {
        this.fadeIn(el, {
          speed: speed,
          display: display
        });
      } else {
        this.fadeOut(el, {
          speed: speed
        });
      }
    },

    /** @param {HTMLElement} el */
    show: function show(el) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref4$display = _ref4.display,
          display = _ref4$display === void 0 ? 'block' : _ref4$display,
          _ref4$classList = _ref4.classList,
          classList = _ref4$classList === void 0 ? '' : _ref4$classList;

      el.style.display = display;
      if (classList.length > 0) el.classList.add(classList);
    },

    /** @param {HTMLElement} el */
    hide: function hide(el) {
      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref5$classList = _ref5.classList,
          classList = _ref5$classList === void 0 ? '' : _ref5$classList;

      el.style.display = 'none';
      if (classList.length > 0) el.classList.remove(classList);
    },

    /** @param {HTMLElement} el */
    toggle: function toggle(el) {
      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref6$display = _ref6.display,
          display = _ref6$display === void 0 ? 'block' : _ref6$display,
          _ref6$classList = _ref6.classList,
          classList = _ref6$classList === void 0 ? '' : _ref6$classList;

      if (getComputedStyle(el).display === 'none') {
        el.style.display = display;
        if (classList.length > 0) el.classList.add(classList);
      } else {
        el.style.display = 'none';
        if (classList.length > 0) el.classList.remove(classList);
      }
    },

    /** @param {HTMLElement} el */
    slideDown: function slideDown(el) {
      var _this2 = this;

      var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref7$speed = _ref7.speed,
          speed = _ref7$speed === void 0 ? 120 : _ref7$speed,
          _ref7$display = _ref7.display,
          display = _ref7$display === void 0 ? 'block' : _ref7$display;

      var resolve, reject;
      var promise = new Promise(function (promiseResolve, promiseReject) {
        resolve = promiseResolve;
        reject = promiseReject;
        var startHeight = 0;
        var startPaddingTop = 0;
        var startPaddingBottom = 0;
        var elStyles = window.getComputedStyle(el);
        var paddingTop = parseInt(elStyles.paddingTop);
        var paddingBottom = parseInt(elStyles.paddingBottom);
        el.style.height = startHeight + 'px';
        el.style.overflow = 'hidden';
        el.style.display = 'block';
        var height = el.scrollHeight;
        el.style.paddingTop = startPaddingTop;
        el.style.paddingBottom = startPaddingBottom;
        var heightAnimationSpeed = height / speed * 16;
        var paddingTopAnimationSpeed = paddingTop / speed * 16;
        var paddingBottomAnimationSpeed = paddingBottom / speed * 16;
        el.style.display = display;

        var slide = function slide() {
          var id;
          var newHeight = startHeight += heightAnimationSpeed;
          var newPaddingTop = startPaddingTop += paddingTopAnimationSpeed;
          var newPaddingBottom = startPaddingBottom += paddingBottomAnimationSpeed;
          el.style.height = newHeight + 'px';
          el.style.paddingTop = newPaddingTop + 'px';
          el.style.paddingBottom = newPaddingBottom + 'px';

          if (newHeight > height) {
            _this2.currentRequestAnimationFrame = null;
            el.style.cssText = "display: ".concat(display);
            resolve();
          } else {
            _this2.currentRequestAnimationFrame = requestAnimationFrame(slide);
          }

          return id;
        };

        slide();
      });
      return {
        promise: promise,
        cancel: function cancel() {
          cancelled = true;
          reject({
            reason: 'cancelled'
          });
        }
      };
    },

    /** @param {HTMLElement} el */
    slideUp: function slideUp(el) {
      var _this3 = this;

      var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref8$speed = _ref8.speed,
          speed = _ref8$speed === void 0 ? 120 : _ref8$speed;

      var resolve, reject;
      var promise = new Promise(function (promiseResolve, promiseReject) {
        resolve = promiseResolve;
        reject = promiseReject;
        var elStyles = window.getComputedStyle(el);
        var height = el.offsetHeight;
        var paddingTop = parseInt(elStyles.paddingTop);
        var paddingBottom = parseInt(elStyles.paddingBottom);
        var startHeight = height;
        var startPaddingTop = paddingTop;
        var startPaddingBottom = paddingBottom;
        el.style.height = startHeight + 'px';
        el.style.overflow = 'hidden';
        var heightAnimationSpeed = height / speed * 16;
        var paddingTopAnimationSpeed = paddingTop / speed * 16;
        var paddingBottomAnimationSpeed = paddingBottom / speed * 16;

        var slide = function slide() {
          var id;
          var newHeight = startHeight -= heightAnimationSpeed;
          var newPaddingTop = startPaddingTop -= paddingTopAnimationSpeed;
          var newPaddingBottom = startPaddingBottom -= paddingBottomAnimationSpeed;
          el.style.height = newHeight + 'px';
          el.style.paddingTop = newPaddingTop + 'px';
          el.style.paddingBottom = newPaddingBottom + 'px';

          if (newHeight < 0) {
            el.style.cssText = "display: none";
            _this3.currentRequestAnimationFrame = null;
            resolve();
          } else {
            _this3.currentRequestAnimationFrame = requestAnimationFrame(slide);
          }

          return id;
        };

        slide();
      });
      return {
        promise: promise,
        cancel: function cancel() {
          cancelled = true;
          reject({
            reason: 'cancelled'
          });
        }
      };
    },
    slideToggle: function slideToggle(el) {
      var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref9$speed = _ref9.speed,
          speed = _ref9$speed === void 0 ? 120 : _ref9$speed,
          _ref9$display = _ref9.display,
          display = _ref9$display === void 0 ? 'block' : _ref9$display;

      if ($$.isHidden(el)) {
        this.slideDown(el, {
          speed: speed,
          display: display
        });
      } else {
        this.slideUp(el, {
          speed: speed
        });
      }
    },
    scrollTo: function scrollTo(target) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

      if (!target) {
        console.log('target: ', target);
        return;
      }

      var scrollPosition = target.getBoundingClientRect().top + window.scrollY;
      console.log(scrollPosition);
      window.scrollTo({
        top: scrollPosition - offset,
        behavior: 'smooth'
      });
    },
    isHidden: function isHidden(el) {
      var style = window.getComputedStyle(el);
      return style.display === 'none';
    },

    /**
     *
     * @param {String} id - id of modal
     * @param {*} {
     *         onShow = null, onClose = null, removeOnClose = false
     *     }
     */
    showModal: function showModal(id) {
      var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref10$onShow = _ref10.onShow,
          _onShow = _ref10$onShow === void 0 ? null : _ref10$onShow,
          _ref10$onClose = _ref10.onClose,
          _onClose = _ref10$onClose === void 0 ? null : _ref10$onClose,
          _ref10$removeOnClose = _ref10.removeOnClose,
          removeOnClose = _ref10$removeOnClose === void 0 ? false : _ref10$removeOnClose;

      MicroModal.show(id, {
        disableScroll: true,
        disableFocus: true,
        awaitCloseAnimation: true,
        onShow: function onShow(modal) {
          onModalOpen(modal);
          if (typeof _onShow === 'function') _onShow(modal);
        },
        onClose: function onClose(modal) {
          onModalClose(modal, removeOnClose);
          if (typeof _onClose === 'function') _onClose(modal);
        }
      });
    }
  };
  window.$$ = $$;

  var SliderContols =
  /*#__PURE__*/
  function () {
    function SliderContols(slider) {
      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, SliderContols);

      this.slider = slider;
      this.parentNode = parentNode;
      this.init();
    }

    _createClass(SliderContols, [{
      key: "init",
      value: function init() {
        var _this4 = this;

        this.controls = this.parentNode ? this.parentNode.querySelector('.slider-controls') : this.slider.element.parentNode.querySelector('.slider-controls');
        this.prevButton = this.controls.querySelector('.prev');
        this.nextButton = this.controls.querySelector('.next');
        this.prevButton.addEventListener('click', function () {
          _this4.slider.previous();
        });
        this.nextButton.addEventListener('click', function () {
          _this4.slider.next();
        });
      }
    }, {
      key: "disablePrev",
      value: function disablePrev() {
        this.prevButton.disabled = true;
      }
    }, {
      key: "disableNext",
      value: function disableNext() {
        this.nextButton.disabled = true;
      }
    }, {
      key: "enablePrev",
      value: function enablePrev() {
        this.prevButton.disabled = false;
      }
    }, {
      key: "enableNext",
      value: function enableNext() {
        this.nextButton.disabled = false;
      }
    }]);

    return SliderContols;
  }();

  (function () {
    var accountInfo = document.querySelector('.account-info');
    if (!accountInfo) return;
    var select = accountInfo.querySelector('.custom-select');
    new CustomSelect(select);
  })();

  (function () {
    var catalogFilter = document.querySelector('.catalog-filter');
    if (!catalogFilter) return;
    var ingredientsTrigger = document.querySelector('.catalog-filter__ingredients-trigger');
    var ingredientsModal = document.querySelector('.catalog-filter__ingredients-modal');
    ingredientsTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      ingredientsTrigger.classList.toggle('active');
      ingredientsModal.classList.toggle('active');
    });
  })();

  (function () {
    /** demo purpose only */
    var catalog = document.querySelector('.catalog');
    if (!catalog) return;
    var isMobile = window.matchMedia('(max-width: 767px)').matches;
    catalog.addEventListener('click', function (e) {
      if (e.target.classList.contains('trigger')) {
        e.target.nextElementSibling.classList.toggle('active');
        e.target.parentNode.classList.toggle('active');

        if (isMobile) {
          document.body.classList.toggle('menu-opened');
        }
      }

      if (e.target.classList.contains('ingredients__submit') || e.target.classList.contains('ingredients__close')) {
        console.log(e.target);
        e.target.closest('.list').classList.remove('active');
        e.target.closest('.list').parentNode.classList.remove('active');

        if (isMobile) {
          document.body.classList.remove('menu-opened');
        }
      }
    });
  })();

  (function () {
    var hamburger = document.querySelector('.hamburger');
    var mobileMenu = document.querySelector('.mobile-menu');
    if (!hamburger) return;
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('opened');
      document.body.classList.toggle('menu-opened');
    });
  })();

  (function () {
    var mainFooter = document.querySelector('.main-footer');
  })();

  (function () {
    /** just a small code for mobile categories scroll */
    var nav = document.querySelector('.main-header__categories');
    if (!nav) return;
    var list = nav.querySelector('.main-header__categories-list');
    var listWidth = list.scrollWidth;
    var navWidth = nav.offsetWidth;

    if (listWidth > navWidth) {
      list.addEventListener('scroll', function (e) {
        var scrollLeft = list.scrollLeft;
        var startPoint = 20;
        var finishPoint = listWidth - navWidth - 20;

        if (scrollLeft > startPoint) {
          nav.classList.remove('scroll-start');
        } else {
          nav.classList.add('scroll-start');
        }

        if (scrollLeft > finishPoint) {
          nav.classList.add('scroll-finish');
        } else {
          nav.classList.remove('scroll-finish');
        }

        console.log(scrollLeft);
      });
    } else {
      nav.classList.add('scroll-finish');
    }
  })();

  (function () {
    function renderMobileMenu() {
      var mobileNav = document.querySelector('.mobile-nav');
      if (!mobileNav) return;
      var mainNav = document.querySelector('.main-nav');
      var secondaryNav = document.querySelector('.secondary-nav');
      var mainNavWrapper = mobileNav.querySelector('.mobile-nav__main-menu');
      var secondaryNavWrapper = mobileNav.querySelector('.mobile-nav__secondary-menu');
      mainNavWrapper.append(mainNav);
      secondaryNavWrapper.append(secondaryNav);
      mainNavLogic(mainNav);
    }

    function mainNavLogic(mainNav) {
      mainNav.addEventListener('click', function (e) {
        if (e.target.classList.contains('has-inner')) {
          e.preventDefault();
          e.target.classList.toggle('active');
          $$.slideToggle(e.target.nextElementSibling);
        }
      });
    }

    if (!deviceType.isDesktop) renderMobileMenu(); // deviceType.mobileMedia.addEventListener('change', e => {
    //     if (e.matches) {
    //         renderMobileMenu();
    //     }
    // });
  })();

  (function () {
    var orderForm = document.querySelector('.order-form');
    if (!orderForm) return;
    var select = orderForm.querySelector('.custom-select');
    new CustomSelect(select);
  })();

  (function () {
    /** just a small code for mobile order steps scroll */
    var stepsNode = document.querySelector('.order-steps');
    if (!stepsNode) return;
    var list = stepsNode.querySelector('.order-steps__list');
    var listWidth = list.scrollWidth;
    var stepsNodeWidth = stepsNode.offsetWidth;

    if (listWidth > stepsNodeWidth) {
      list.addEventListener('scroll', function (e) {
        var scrollLeft = list.scrollLeft;
        var startPoint = 20;
        var finishPoint = listWidth - stepsNodeWidth - 20;

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

  (function () {
    var socialsImages = document.querySelectorAll('.socials__link img');
    if (socialsImages.length === 0) return;
    lazyLoadImages(socialsImages);
  })();
  /** and again, demo purpose only
  *  do not use
  */


  var getStarRating = function getStarRating() {
    var $stars = document.querySelectorAll('.star-rating__star');
    var $wrapStars = document.querySelector('.star-rating__stars');
    if (!$wrapStars) return;
    var rating = 0;
    $wrapStars.addEventListener('click', function (e) {
      var action = 'add';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = $wrapStars.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var star = _step.value;
          star.classList[action]('filled');
          if (star === e.target) action = 'remove';
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
    $stars.forEach(function (star, i) {
      var radioBtn = star.querySelector('[type="radio"]');
      $stars[i].classList.remove('filled');
      star.addEventListener('click', function () {
        rating = i + 1;
        radioBtn.checked = true;
      });
    });
  };

  getStarRating();

  (function () {
    var workSection = document.querySelector('.work-section');
    if (!workSection) return;
    var selects = workSection.querySelectorAll('.custom-select');
    selects.forEach(function (select) {
      new CustomSelect(select);
    });
  })();
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