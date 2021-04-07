function Slider(images) {

    this.images = document.querySelectorAll(images.images);
    this.btPrev = document.querySelector(images.prev);
    this.btNext = document.querySelector(images.next);
    this.interval = images.interval;

    let i = 0;

    this.prev = function () {
        this.images[i].classList.remove("shown");
        i--;
        if (i < 0) {
            i = this.images.length - 1;
        }
        this.images[i].classList.add("shown");
    },

        this.next = function () {
            this.images[i].classList.remove("shown");
            i++;
            if (i >= this.images.length) {
                i = 0;
            }
            this.images[i].classList.add("shown");
        }

    this.btPrev.addEventListener('click', this.prev.bind(this));
    this.btNext.addEventListener('click', this.next.bind(this));

    setInterval(this.next.bind(this), this.interval);

}

