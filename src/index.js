import { common } from './common';
import { createMarkup } from './helper/createMarkup';
import { createModal } from './helper/createModal';
import { instruments } from './helper/instruments';

import 'basiclightbox/dist/basicLightbox.min.css';
/*
 *Задание
 *1. Нарисовать разметку из массива объектов
 *2. Написать логику нажатия на More Information. Используя simplelightbox сделать модалку с развертыванием полной инфы по продукту
 *3. Добавить закрытие по ESC
 *4. Добавить возможность сохранять товары в favorite и basket в локальном хранилище
 *5. На страницах корзины и favorite добавить кнопку удаления элемента
 */

const searchEl = document.querySelector('.js-search');
const listEl = document.querySelector('.js-list');
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

createMarkup(instruments, listEl);

listEl.addEventListener('click', onInfoClick);

function onInfoClick(e) {
  e.preventDefault();
  if (e.target.classList.contains('js-info')) {
    const product = findProduct(e.target);
    createModal(product);
  }

  if (e.target.classList.contains('js-basket')) {
    const product = findProduct(e.target);

    basketArr.push(product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
  }
  if (e.target.classList.contains('js-favorite')) {
    const product = findProduct(e.target);
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (!inStorage) {
      favoriteArr.push(product);
      localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
    }
  }
}

function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return instruments.find(({ id }) => id === productId);
}

const REQUIRED_ELEMENTS = ['H', 'C', 'N', 'O', 'P', 'Ca'];

function bestPlanet(solarSystem, maxSize) {
  const planets = solarSystem.map(planet => {
    return planet.split('_');
  });
  console.log(planets);
  const filteredPlanets = planets.filter(planet =>
    planet[0].includes(REQUIRED_ELEMENTS.join(', '))
  );
  console.log(filteredPlanets);
}

bestPlanet(
  ['OHNCCaP_100', 'OHC_200', 'OCa_50', 'OHCCaP_400', 'OHNCCaP_225'],
  250
);
