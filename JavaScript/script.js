let cart = [];

function addToCart(event, productName, price) {
  event.preventDefault();

  // Add product to cart
  const product = { name: productName, price: price };
  cart.push(product);

  // Update cart count
  document.getElementById('cart-count').textContent = cart.length;
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  // Clear previous items
  cartItems.innerHTML = '';
  let total = 0;

  // Display all cart items
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
    total += item.price;
  });

  // Update total price
  cartTotal.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  document.getElementById('cart-count').textContent = cart.length;
  updateCartDisplay();
}

function toggleCart() {
  const cartPopup = document.getElementById('cart-popup');
  cartPopup.classList.toggle('active');
}
