function initializeSlider(sliderSelector, slideSelector, dotSelector, nextBtnSelector, prevBtnSelector, slidetoShow, gap = 0) {
    const slider = document.querySelector(sliderSelector);
    const slides = document.querySelectorAll(slideSelector);
    const dots = document.querySelectorAll(dotSelector);
    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth;
  
    document.querySelector(nextBtnSelector).addEventListener('click', () => {
        moveToNextSlide();
    });
  
    document.querySelector(prevBtnSelector).addEventListener('click', () => {
        moveToPrevSlide();
    });
  
    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const slideIndex = event.target.getAttribute('data-slide');
            currentIndex = parseInt(slideIndex);
            updateSliderPosition();
            updateDots();
        });
    });
  
    function moveToNextSlide() {
        if (currentIndex < totalSlides - slidetoShow) {
            currentIndex++;
            updateSliderPosition();
        }
    }
  
    function moveToPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    }
  
    function updateSliderPosition() {
        const newPosition = -(slideWidth + gap) * currentIndex; // Include gap in the position calculation
        slider.style.transform = `translateX(${newPosition}px)`;
        updateDots();
    }
  
    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }
  
    // Mouse wheel functionality
    slider.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            moveToNextSlide();
        } else {
            moveToPrevSlide();
        }
    });
}
  
// Initialize the first slider
initializeSlider('.slider1', '.slide1', '.dot1', '.next-btn1', '.prev-btn1', 1, 0);
initializeSlider('.slider2', '.slide2', '.dot2', '.next-btn2', '.prev-btn2', 1, 0);
