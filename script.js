const cartBtn = document.getElementById('cart-btn');
const cartOverlay = document.getElementById('cart-overlay');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const clearCartBtn = document.getElementById('clear-cart');
const addToCartBtns = document.querySelectorAll('.add-to-cart');

let total = 0;
let cart = [];

cartBtn.addEventListener('click', () => {
    cartOverlay.style.display = 'flex';
});

addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const name = e.target.dataset.name;
        const price = Number(e.target.dataset.price);

        cart.push({ name, price });
        total += price;

        renderCart();
    });
});

function renderCart() {
    cartItems.innerHTML = '';
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total;
}

clearCartBtn.addEventListener('click', () => {
    cart = [];
    total = 0;
    renderCart();
});

window.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
        cartOverlay.style.display = 'none';
    }
});
