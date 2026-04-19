let cart = [];

function getCart() {
    let data = localStorage.getItem("cart");

    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
    let currentCart = getCart();

    let item = {
        name: name,
        price: Number(price)
    };

    currentCart.push(item);

    saveCart(currentCart);

    alert(name + " added to cart");
}

function displayCart() {
    let currentCart = getCart();

    let container = document.getElementById("cart-items");
    let totalText = document.getElementById("cart-total");

    if (!container) return;

    container.innerHTML = "";

    let total = 0;

    if (currentCart.length === 0) {
        container.innerHTML = "<p>Your cart is empty</p>";
        totalText.textContent = "Total: £0.00";
        return;
    }

    for (let i = 0; i < currentCart.length; i++) {
        let item = currentCart[i];

        total += item.price;

        container.innerHTML += `
            <div class="cd-card">
                <div class="cd-info">
                    <h3>${item.name}</h3>
                    <p class="price">£${item.price.toFixed(2)}</p>
                    <button class="buy-btn" onclick="removeItem(${i})">Remove</button>
                </div>
            </div>
        `;
    }

    totalText.textContent = "Total: £" + total.toFixed(2);
}

function removeItem(index) {
    let currentCart = getCart();

    currentCart.splice(index, 1);

    saveCart(currentCart);

    displayCart();
}

function clearCart() {
    localStorage.removeItem("cart");

    displayCart();
}

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.querySelectorAll(".buy-btn");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {

            let name = this.getAttribute("data-name");
            let price = this.getAttribute("data-price");

            if (name && price) {
                addToCart(name, price);
            }
        });
    }

    displayCart();
});
