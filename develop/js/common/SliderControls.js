class SliderContols {
    constructor(slider, parentNode = null) {
        this.slider = slider;
        this.parentNode = parentNode;

        this.init();
    }

    init() {
        this.controls = this.parentNode
            ? this.parentNode.querySelector('.slider-controls')
            : this.slider.element.parentNode.querySelector('.slider-controls');

        this.prevButton = this.controls.querySelector('.prev');
        this.nextButton = this.controls.querySelector('.next');

        this.prevButton.addEventListener('click', () => {
            this.slider.previous();
        });

        this.nextButton.addEventListener('click', () => {
            this.slider.next();
        });
    }

    disablePrev() {
        this.prevButton.disabled = true;
    }

    disableNext() {
        this.nextButton.disabled = true;
    }

    enablePrev() {
        this.prevButton.disabled = false;
    }

    enableNext() {
        this.nextButton.disabled = false;
    }
}
