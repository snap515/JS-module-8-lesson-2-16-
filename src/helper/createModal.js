import * as basicLightbox from 'basiclightbox';
import { closeModal } from './closeModal';

function createModal(product) {
  const instance = basicLightbox.create(
    `
	    <div class='modal'>
        <img src="${product.img}" alt="${product.name}" width="200" />
        <h2>${product.name}</h2>
        <h3>${product.price} грн</h3>
        <p>${product.description} грн</p>
        <div>
          <button class="js-favorite">Add to favorite</button>
          <button class="js-basket">Add to basket</button>
        </div>
      </div>
`,
    {
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance);
        document.addEventListener('keydown', this.handler);
      },
      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();
}

export { createModal };
