'use strict';

const buyButton = document.querySelectorAll('.button--buy');
const shoppingModal = document.querySelector('.shopping');
const checkoutModal = document.querySelector('.checkout');
const thanksModal = document.querySelector('.thanks');
const overlay = document.querySelector('.overlay');
const shoppingBag = document.querySelector('.header__basket-icon');
const closeButton = document.querySelectorAll('.shopping__close');
const checkoutButton = document.querySelector('.button--checkout');
const paymentButton = document.querySelector('.button--payment');

shoppingBag.addEventListener('click', function(evt) {
  evt.preventDefault();
  overlay.classList.add('show');
  shoppingModal.classList.add('show');
});

buyButton.forEach(button => {
  button.addEventListener('click', function() {
    overlay.classList.add('show');
    shoppingModal.classList.add('show');
  });
});

checkoutButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  shoppingModal.classList.remove('show');
  checkoutModal.classList.add('show');
});

paymentButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  shoppingModal.classList.remove('show');
  checkoutModal.classList.remove('show');
  thanksModal.classList.add('show');
});

closeButton.forEach(button => {
  button.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.classList.remove('show');
    shoppingModal.classList.remove('show');
    checkoutModal.classList.remove('show');
    thanksModal.classList.remove('show');
  });
});

overlay.addEventListener('click', function(evt) {
  overlay.classList.remove('show');
  shoppingModal.classList.remove('show');
  checkoutModal.classList.remove('show');
  thanksModal.classList.remove('show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (overlay.classList.contains('show')) {
      evt.preventDefault();
      overlay.classList.remove('show');
      shoppingModal.classList.remove('show');
      checkoutModal.classList.remove('show');
      thanksModal.classList.remove('show');
    }
  }
});
