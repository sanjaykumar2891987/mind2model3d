// ===== SHOP FILTERS =====
const filterBtns = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    products.forEach(p => {
      if (filter === 'all' || p.dataset.cat === filter) {
        p.classList.remove('hidden');
      } else {
        p.classList.add('hidden');
      }
    });
  });
});

// ===== CART =====
let cart = [];

function addToCart(btn, name, price) {
  cart.push({ name, price, id: Date.now() });
  btn.textContent = '✓ Added';
  btn.classList.add('added');
  setTimeout(() => {
    btn.textContent = 'Add to Cart';
    btn.classList.remove('added');
  }, 1800);
  renderCart();
  updateFab();
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
  updateFab();
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');

  countEl.textContent = cart.length;
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalEl.textContent = '€' + total.toFixed(2);

  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty">Your cart is empty.<br>Add some products!</div>';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <span class="cart-item-name">${item.name}</span>
      <span class="cart-item-price">€${item.price.toFixed(2)}</span>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `).join('');
}

function updateFab() {
  const fab = document.getElementById('fabCount');
  if (fab) fab.textContent = cart.length;
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}
