function createMarkup(arr, listEl) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name }) =>
          `<li data-id=${id} class='js-card'>
        <img src="${img}" alt="${name}" width = "400"/>
        <h2>${name}</h2>
        <p>
          <a class='js-info' href="#">More information</a>
        </p>    
        <div>
          <button class="js-favorite">Add to favorite</button>
          <button class="js-basket">Add to basket</button>
        </div>
      </li>`
      )
      .join('');
  } else {
    markup = `<li><img src="https://cdn.dribbble.com/users/1685375/screenshots/6308133/emptylist.png"></li>`;
  }

  listEl.innerHTML = markup;
}

export { createMarkup };
