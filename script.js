let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add some items before checking out.');
    } else {
        alert(`Thank you for your purchase! Total: $${total}`);
        cart = [];
        total = 0;
        updateCart();
    }
}
