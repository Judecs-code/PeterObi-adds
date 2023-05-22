'use strict';
const popupShowEl = document.querySelector('.btn');
const popupCloseEl = document.querySelector('.popup__close');
const popupEl = document.querySelector('.popup');
const popupContentEl = document.querySelector('.popup__content');

popupShowEl.addEventListener('click', function () {
  popupEl.style.visibility = 'visible';
  popupEl.style.opacity = '1';
  popupContentEl.style.opacity = '1';
  popupContentEl.style.transform = 'translate(-50%, -50%) scale(1)';
});
popupCloseEl.addEventListener('click', function () {
  popupEl.style.visibility = 'hidden';
  popupEl.style.opacity = '0';
  popupContentEl.style.opacity = '0';
  popupContentEl.style.transform = 'translate(-50%, -50%) scale(0.2)';
});
