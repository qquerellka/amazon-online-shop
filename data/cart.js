export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [];
}

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  clearTimeout();

  let matchingItem;

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    };
  });
  const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
  console.log(quantity)
  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity: quantity
    })
  };
  saveToStorage();

  document.querySelector('.js-add-item-in-cart-button').classList.add('visible');

  setTimeout(() => {
    document.querySelector('.js-add-item-in-cart-button').classList.remove('visible');
  }, 2000);
}

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  })

  cart = newCart;
  saveToStorage();
}