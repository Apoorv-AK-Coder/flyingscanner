function initializeSlider(sliderSelector, slideSelector, dotSelector, nextBtnSelector, prevBtnSelector, defaultSlidesToShow = 1, gap = 0) {
    const slider = document.querySelector(sliderSelector);
    const slides = document.querySelectorAll(slideSelector);
    const dots = document.querySelectorAll(dotSelector);
    const nextBtn = document.querySelector(nextBtnSelector);
    const prevBtn = document.querySelector(prevBtnSelector);

    let currentIndex = 0;
    const totalSlides = slides.length;

    const getSlidesToShow = () => window.innerWidth <= 768 ? 1 : defaultSlidesToShow;
    const getSlideWidth = () => slides[0].clientWidth;
    let slidesToShow = getSlidesToShow();

    const updateSliderPosition = () => {
        slidesToShow = getSlidesToShow();
        const offset = -(getSlideWidth() + gap) * currentIndex;
        slider.style.transform = `translateX(${offset}px)`;
        updateDots();
        updateButtons();
    };

    const updateDots = () => {
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    };

    const updateButtons = () => {
        prevBtn.classList.toggle('disabled', currentIndex === 0);
        nextBtn.classList.toggle('disabled', currentIndex >= totalSlides - slidesToShow);
    };

    const goToSlide = (index) => {
        currentIndex = index;
        updateSliderPosition();
    };

    const moveNext = () => {
        if (currentIndex < totalSlides - slidesToShow) {
            goToSlide(currentIndex + 1);
        }
    };

    const movePrev = () => {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
    };

    // Auto slide
    let autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex < totalSlides - slidesToShow) ? currentIndex + 1 : 0;
        updateSliderPosition();
    }, 5000);

    const restartAutoSlide = () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex < totalSlides - slidesToShow) ? currentIndex + 1 : 0;
            updateSliderPosition();
        }, 5000);
    };

    // Events
    nextBtn.addEventListener('click', () => { moveNext(); restartAutoSlide(); });
    prevBtn.addEventListener('click', () => { movePrev(); restartAutoSlide(); });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            goToSlide(parseInt(e.target.getAttribute('data-slide')));
            restartAutoSlide();
        });
    });

    // Touch support
    let startX = 0;
    slider.addEventListener('touchstart', e => {
        startX = e.changedTouches[0].screenX;
        restartAutoSlide();
    });

    slider.addEventListener('touchend', e => {
        const endX = e.changedTouches[0].screenX;
        const diff = endX - startX;
        if (Math.abs(diff) > 50) diff < 0 ? moveNext() : movePrev();
    });

    // Mouse wheel
    slider.addEventListener('wheel', (e) => {
        e.deltaY > 0 ? moveNext() : movePrev();
        restartAutoSlide();
    });

    // Resize support
    window.addEventListener('resize', updateSliderPosition);

    // Init
    updateSliderPosition();
}


// function initializeSlider(sliderSelector, slideSelector, dotSelector, nextBtnSelector, prevBtnSelector, defaultSlidesToShow = 1, gap = 0) {
//     const slider = document.querySelector(sliderSelector);
//     const slides = document.querySelectorAll(slideSelector);
//     const dots = document.querySelectorAll(dotSelector);
//     const prevBtn = document.querySelector(prevBtnSelector);
//     const nextBtn = document.querySelector(nextBtnSelector);

//     let currentIndex = 0;
//     const totalSlides = slides.length;

//     function getSlideWidth() {
//         return slides[0].clientWidth;
//     }

//     function getSlidesToShow() {
//         return window.innerWidth <= 768 ? 1 : defaultSlidesToShow;
//     }

//     let slidetoShow = getSlidesToShow();

//     nextBtn.addEventListener('click', () => {
//         moveToNextSlide();
//     });

//     prevBtn.addEventListener('click', () => {
//         moveToPrevSlide();
//     });

//     dots.forEach(dot => {
//         dot.addEventListener('click', (event) => {
//             const slideIndex = event.target.getAttribute('data-slide');
//             currentIndex = parseInt(slideIndex);
//             updateSliderPosition();
//             updateDots();
//         });
//     });

//     function moveToNextSlide() {
//         if (currentIndex < totalSlides - slidetoShow) {
//             currentIndex++;
//             updateSliderPosition();
//         }
//     }

//     function moveToPrevSlide() {
//         if (currentIndex > 0) {
//             currentIndex--;
//             updateSliderPosition();
//         }
//     }

//     function updateSliderPosition() {
//         slidetoShow = getSlidesToShow(); // Recalculate in case of resize
//         const slideWidth = getSlideWidth();
//         const newPosition = -(slideWidth + gap) * currentIndex;
//         slider.style.transform = `translateX(${newPosition}px)`;
//         updateDots();
//         updateArrowStates();
//     }

//     function updateDots() {
//         dots.forEach(dot => dot.classList.remove('active'));
//         if (dots[currentIndex]) {
//             dots[currentIndex].classList.add('active');
//         }
//     }

//     function updateArrowStates() {
//         slidetoShow = getSlidesToShow();
//         if (currentIndex === 0) {
//             prevBtn.classList.add('disabled');
//         } else {
//             prevBtn.classList.remove('disabled');
//         }

//         if (currentIndex >= totalSlides - slidetoShow) {
//             nextBtn.classList.add('disabled');
//         } else {
//             nextBtn.classList.remove('disabled');
//         }
//     }

//     slider.addEventListener('wheel', (event) => {
//         if (event.deltaY > 0) {
//             moveToNextSlide();
//         } else {
//             moveToPrevSlide();
//         }
//     });

//     let touchStartX = 0;
//     let touchEndX = 0;

//     slider.addEventListener('touchstart', (event) => {
//         touchStartX = event.changedTouches[0].screenX;
//     });

//     slider.addEventListener('touchend', (event) => {
//         touchEndX = event.changedTouches[0].screenX;
//         handleGesture();
//     });

//     function handleGesture() {
//         const swipeThreshold = 50; // Minimum distance in px to count as a swipe
//         if (touchEndX < touchStartX - swipeThreshold) {
//             moveToNextSlide(); // Swipe left
//         } else if (touchEndX > touchStartX + swipeThreshold) {
//             moveToPrevSlide(); // Swipe right
//         }
//     }

//     window.addEventListener('resize', () => {
//         slidetoShow = getSlidesToShow();
//         updateSliderPosition();
//     });

//     let autoSlideInterval = setInterval(() => {
//         if (currentIndex < totalSlides - slidetoShow) {
//             currentIndex++;
//         } else {
//             currentIndex = 0; // Go back to first slide
//         }
//         updateSliderPosition();
//     }, 5000); // Change slide every 5 seconds (5000 ms)

//     // Pause auto-slide on interaction
//     function pauseAutoSlide() {
//         clearInterval(autoSlideInterval);
//         autoSlideInterval = setInterval(() => {
//             if (currentIndex < totalSlides - slidetoShow) {
//                 currentIndex++;
//             } else {
//                 currentIndex = 0;
//             }
//             updateSliderPosition();
//         }, 5000);
//     }

//     // Pause and restart auto-slide when user interacts
//     nextBtn.addEventListener('click', pauseAutoSlide);
//     prevBtn.addEventListener('click', pauseAutoSlide);
//     slider.addEventListener('wheel', pauseAutoSlide);
//     slider.addEventListener('touchstart', pauseAutoSlide);
//     dots.forEach(dot => {
//         dot.addEventListener('click', pauseAutoSlide);
//     });

//     updateSliderPosition();
//     updateArrowStates();
// }

  
// Initialize the first slider
initializeSlider('.slider1', '.slide1', '.dot1', '.next-btn1', '.prev-btn1', 3, 20);
initializeSlider('.slider2', '.slide2', '.dot2', '.next-btn2', '.prev-btn2', 4, 20);