'use strict';

const overlay = document.querySelector('.overlay');
const buyButton = document.querySelectorAll('.button--buy');
const shoppingModal = document.querySelector('.shopping');
const checkoutModal = document.querySelector('.checkout');
const closeButton = document.querySelectorAll('.shopping__close');
const checkoutButton = document.querySelector('.button--checkout');

buyButton.forEach(button => {
  button.addEventListener('click', function() {
    overlay.classList.add('show');
    shoppingModal.classList.add('show');
  });
});

closeButton.forEach(button => {
  button.addEventListener('click', function() {
    overlay.classList.remove('show');
    shoppingModal.classList.remove('show');
    checkoutModal.classList.remove('show');
  });
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (overlay.classList.contains('show')) {
      evt.preventDefault();
      overlay.classList.remove('show');
      shoppingModal.classList.remove('show');
      checkoutModal.classList.remove('show');
    }
  }
});

checkoutButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  shoppingModal.classList.remove('show');
  checkoutModal.classList.add('show');
});
