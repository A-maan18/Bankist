var _a;
///////////////////////////////////////
var btnScroolTo = document.querySelector('.btn--scroll-to');
var section1 = document.querySelector('#section--1');
// Modal window
var modal1 = document.querySelector('.modal');
var overlay1 = document.querySelector('.overlay');
var btnCloseModal = document.querySelector('.btn--close-modal');
var btnsOpenModal = document.querySelectorAll('.btn--show-modal');
var openModal = function () {
    modal1 === null || modal1 === void 0 ? void 0 : modal1.classList.remove('hidden');
    overlay1 === null || overlay1 === void 0 ? void 0 : overlay1.classList.remove('hidden');
};
var closeModal = function () {
    modal1 === null || modal1 === void 0 ? void 0 : modal1.classList.add('hidden');
    overlay1 === null || overlay1 === void 0 ? void 0 : overlay1.classList.add('hidden');
};
for (var i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal === null || btnCloseModal === void 0 ? void 0 : btnCloseModal.addEventListener('click', closeModal);
overlay1 === null || overlay1 === void 0 ? void 0 : overlay1.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !(modal1 === null || modal1 === void 0 ? void 0 : modal1.classList.contains('hidden'))) {
        closeModal();
    }
});
btnScroolTo === null || btnScroolTo === void 0 ? void 0 : btnScroolTo.addEventListener('click', function (e) {
    var s1coords = section1 === null || section1 === void 0 ? void 0 : section1.getBoundingClientRect();
    section1 === null || section1 === void 0 ? void 0 : section1.scrollIntoView({ behavior: 'smooth' });
});
(_a = document.querySelector('.nav__links')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
    var _a;
    e.preventDefault();
    // Matching Strategy
    if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.classList.contains('nav__link')) {
        var id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});
/////operationsss
var tabs = document.querySelectorAll('.operations__tab');
var tabsContainer = document.querySelector('.operations__tab-container');
var tabsContent = document.querySelectorAll('.operations__content');
tabsContainer === null || tabsContainer === void 0 ? void 0 : tabsContainer.addEventListener('click', function (e) {
    var _a, _b;
    var clicked = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest('.operations__tab');
    if (!clicked)
        return;
    tabs.forEach(function (t) { return t.classList.remove('operations__tab--active'); });
    tabsContent.forEach(function (c) { return c.classList.remove('operations__content--active'); });
    clicked.classList.add('operations__tab--active');
    (_b = document
        .querySelector(".operations__content--".concat(clicked.dataset.tab))) === null || _b === void 0 ? void 0 : _b.classList.add('operations__content--active');
});
// Intersction Observer API
var nav = document.querySelector('.nav');
var header = document.querySelector('.header');
var navHeight = nav === null || nav === void 0 ? void 0 : nav.getBoundingClientRect().height;
var stickyNav = function (entries) {
    var entry = entries[0];
    if (!entry.isIntersecting)
        nav === null || nav === void 0 ? void 0 : nav.classList.add('sticky');
    else
        nav.classList.remove('sticky');
};
var headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: "-".concat(navHeight, "px"),
});
headerObserver.observe(header);
//   Reveal Section //////
var allSections = document.querySelectorAll('.section');
var revealSection = function (entries, observer) {
    var _a;
    var entry = entries[0];
    if (entry.isIntersecting) {
        (_a = entry.target) === null || _a === void 0 ? void 0 : _a.classList.remove('section--hidden');
        observer.unobserve(entry.target);
    }
};
var sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.20,
});
allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});
// Lazy Loading Images..............
var imgTargets = document.querySelectorAll('img[data-src]');
var loading = function (entries, observer) {
    var entry = entries[0];
    if (!entry.isIntersecting)
        return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    });
};
var imgObserver = new IntersectionObserver(loading, {
    root: null,
    threshold: 0,
});
imgTargets.forEach(function (ele) { return imgObserver.observe(ele); });
//--------------- slider --------------------
var slides = document.querySelectorAll('.slide');
var btnLeft = document.querySelector('.slider__btn--left');
var btnRight = document.querySelector('.slider__btn--right');
var dotsContainer = document.querySelector('.dots');
var curSlide = 0;
// const slider=document.querySelector('.slider');
// slider.style.transform= 'scale(0.4) translateX(-800px)';
// slider.style.overflow='visible';
slides.forEach(function (s, i) { return s.style.transform = "translateX(".concat(100 * i, "%)"); });
btnLeft === null || btnLeft === void 0 ? void 0 : btnLeft.addEventListener('click', function () {
    if (curSlide === 0)
        curSlide = slides.length - 1;
    else
        curSlide--;
    slides.forEach(function (s, i) { return s.style.transform = "translateX(".concat((100 * (i - curSlide)), "%)"); });
});
btnRight === null || btnRight === void 0 ? void 0 : btnRight.addEventListener('click', function () {
    if (curSlide === slides.length - 1)
        curSlide = 0;
    else
        curSlide++;
    slides.forEach(function (s, i) { return s.style.transform = "translateX(".concat((100 * (i - curSlide)), "%)"); });
});
////  create Dots
var createDots = function () {
    slides.forEach(function (_, i) {
        dotsContainer.insertAdjacentHTML('beforeend', "<button class=\"dots__dot\" data-slide=\"".concat(i, "\"></button>"));
    });
};
createDots();
dotsContainer === null || dotsContainer === void 0 ? void 0 : dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
        var slide_1 = e.target.dataset.slide;
        currSlide = slide_1 - 1;
        slides.forEach(function (s, i) { return s.style.transform = "translateX(".concat((100 * (i - slide_1)), "%)"); });
    }
});
