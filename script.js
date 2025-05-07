// Toggle mobile navigation
const toggleBtn = document.getElementById('nav-toggle');
const navbar = document.getElementById('navbar');

toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Cart count logic
let cartCount = 0;
const cartDisplay = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartDisplay.textContent = cartCount;
    alert('Item added to cart!');
  });
});

// Toggle mobile nav
document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('navbar').classList.toggle('show');
  });
  
  // Add to cart (optional if not on this page anymore)
  let cartCount = 0;
  const cartDisplay = document.getElementById('cart-count');
  document.querySelectorAll('.product button')?.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      cartDisplay.textContent = cartCount;
      alert('Item added to cart!');
    });
  });
  
  // Product Search Filter
  const searchInput = document.getElementById('product-search');
  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('#product-list .product');
    products.forEach(product => {
      const title = product.querySelector('h3').textContent.toLowerCase();
      product.style.display = title.includes(filter) ? 'block' : 'none';
    });
  });
  