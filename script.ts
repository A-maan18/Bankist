///////////////////////////////////////
const btnScroolTo = document.querySelector('.btn--scroll-to');

const section1=document.querySelector('#section--1');

// Modal window

const modal1 = document.querySelector('.modal');
const overlay1 = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal1?.classList.remove('hidden');
  overlay1?.classList.remove('hidden');
};

const closeModal=function(){
  modal1?.classList.add('hidden');
  overlay1?.classList.add('hidden');
};
 
for (let i: number = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal?.addEventListener('click',closeModal);
overlay1?.addEventListener('click',closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal1?.classList.contains('hidden')) {
    closeModal();
  }
});

btnScroolTo?.addEventListener('click',function(e){
  const s1coords=section1?.getBoundingClientRect();

  // window.scrollTo({
  //   left: s1coords.left +window.scrollX,
  //   top : s1coords.top+ window.scrollY,
  //   behavior: 'smooth',
  // });

  section1?.scrollIntoView({behavior: 'smooth'});
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

document.querySelector('.nav__links').addEventListener('click',function(e){

  e.preventDefault();

  // Matching Strategy
  if(e.target.classList.contains('nav__link')){
    const id=e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({behavior : 'smooth'});
  }
})

/////operationsss

const tabs= document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent=document.querySelectorAll('.operations__content');

tabsContainer?.addEventListener('click',function(e){
  const clicked=e.target.closest('.operations__tab');

  if(!clicked)return;

  tabs.forEach(t=> t.classList.remove('operations__tab--active'));

  tabsContent.forEach(c=>c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  document.querySelector(`.operations__content--${clicked.dataset.tab}`)?.classList.add('operations__content--active');
})




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

