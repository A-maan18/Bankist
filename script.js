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
    // window.scrollTo({
    //   left: s1coords.left +window.scrollX,
    //   top : s1coords.top+ window.scrollY,
    //   behavior: 'smooth',
    // });
    section1 === null || section1 === void 0 ? void 0 : section1.scrollIntoView({ behavior: 'smooth' });
});
////////////////////////////////////////////////// Page navigation
// document.querySelectorAll('.nav__link').forEach(function(e1){
//   e1.addEventListener('click',function(e){
//     e.preventDefault();
//     const id=this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior : 'smooth'});
//   });
// });
////EVENT DELEGATION
//1. Add event listener to common parent element
//2. Determine what element originated the event.
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
// sticky navigation
// const initialCoords=section1?.getBoundingClientRect();
// window.addEventListener('scroll',function(e){
//   if(this.window.scrollY>initialCoords.top)nav.classList.add('sticky');
// });
// Intersction Observer API
var nav = document.querySelector('.nav');
// const obsCallback = function (entries, observer) {
//   entries.forEach(ele => {
//     nav?.classList.add('.sticky');
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0,0.1],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
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
// const header=document.querySelector('.header');
// const allSections=document.querySelectorAll('.section'); //return nodeList of all sections
// const message=document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML='We use cookie for improved functionality and analytics. <button class="btn btn--close-cookie btn-sm">Got it!</button>';
// header.prepend(message);
// header.append(message);
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click',function(){
//     message.remove();
//   });
// //styles
// message.style.backgroundColor='#37383d';
// message.style.width='120%';
// message.style.height= Number.parseFloat(getComputedStyle(message).height,10) + 30 + 'px';
// // document.documentElement.style.setProperty('--color-primary','orangered')
// //Attributes
// const logo=document.querySelector('.nav__logo');
// //Data Attributes
// const h1= document.querySelector('h1');
// h1?.addEventListener('mouseenter',function(e){
//   alert('addEvent')
// });
// h1?.onmouseenter = function(e){
// };
