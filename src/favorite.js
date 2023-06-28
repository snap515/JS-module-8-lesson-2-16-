import { common } from './common';
import { createMarkup } from './helper/createMarkup';
import { createModal } from './helper/createModal';
import { instruments } from './helper/instruments';
import 'basiclightbox/dist/basicLightbox.min.css';

const listEl = document.querySelector('.js-list');
const clearBtnEl = document.querySelector('.js-clear-favorite');

const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, listEl);
// favoriteBtnChanger();
clearBtnEl.addEventListener('click', onClearBtnClick);
listEl.addEventListener('click', onInfoClick);

// function favoriteBtnChanger() {
//   const removeBtn = document.querySelector('.js-favorite');
//   removeBtn.innerHTML = 'Remove';
//   removeBtn.addEventListener('click', favoriteElemRemover);

//   function favoriteElemRemover(e) {}
// }

function onClearBtnClick(e) {
  console.log(e);
  listEl.innerHTML =
    '<li><img src="https://cdn.dribbble.com/users/1685375/screenshots/6308133/emptylist.png"></li>';
  localStorage.removeItem(common.KEY_FAVORITE);
}

function onInfoClick(e) {
  e.preventDefault();
  if (e.target.classList.contains('js-info')) {
    const product = findProduct(e.target);
    createModal(product);
  }
}

function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return instruments.find(({ id }) => id === productId);
}
