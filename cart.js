/* Initialize cart variables and retrieve saved items from localStorage */
document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-items");
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");
  const cartCountEl = document.getElementById("cart-count");
  const shippingEl = document.getElementById("shipping");
  const shippingCost = 49;

  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

/* Render cart items; show empty message and reset totals if cart is empty */
  function renderCart() {
    cartContainer.innerHTML = "";
    if (cart.length === 0) {
      cartContainer.innerHTML = `<p style="text-align:center; color:#777;">Your cart is empty 🛍️</p>`;
      subtotalEl.textContent = "₱0.00";
      totalEl.textContent = "₱0.00";
      cartCountEl.textContent = "(0)";
      shippingEl.textContent = "₱0.00";
      removeFreeShippingMessage();
      return;
    }
/* Create and display a div for each cart item with image, details, and remove button */
    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <div class="cart-item-details">
          <p class="cart-item-title">${item.title}</p>
          <p class="cart-item-size">Size: ${item.size}</p>
          <p class="cart-item-price">${item.price}</p>
        </div>
        <button class="remove-btn" data-index="${index}">Remove</button>
      `;
      cartContainer.appendChild(cartItem);
    });

    updateTotals();
  }
/* Remove existing free shipping message and calculate cart subtotal */
  function removeFreeShippingMessage() {
    const msg = document.querySelector(".free-shipping-msg");
    if (msg) msg.remove();
  }
/* Calculate subtotal by summing up the prices of all items in the cart */
  function updateTotals() {
    let subtotal = 0;
    cart.forEach((item) => {
      const priceValue = parseFloat(
        item.price.replace("₱", "").replace(",", "").trim()
      );
      subtotal += priceValue;
    });
/* Update shipping, subtotal, total, cart count, and show free shipping message */
    let shipping = subtotal >= 500 ? 0 : shippingCost;

    subtotalEl.textContent = `₱${subtotal.toFixed(2)}`;
    shippingEl.textContent = `₱${shipping.toFixed(2)}`;
    totalEl.textContent = `₱${(subtotal + shipping).toFixed(2)}`;
    cartCountEl.textContent = `(${cart.length})`;

    const summary = document.querySelector(".summary-totals");
    removeFreeShippingMessage();

    const msg = document.createElement("p");
    msg.classList.add("free-shipping-msg");

    if (subtotal >= 500) {
      msg.textContent = "✨ You’ve unlocked FREE shipping! ✨";
      summary.appendChild(msg);
      requestAnimationFrame(() => msg.classList.add("visible"));
    } else if (subtotal > 0) {
      msg.textContent = "₱49 shipping applied (free for ₱500+ orders)";
      msg.style.opacity = "0.7";
      summary.appendChild(msg);
      requestAnimationFrame(() => msg.classList.add("visible"));
    }
  }
/* Handle remove button clicks: delete item from cart, update localStorage, and re-render */
  cartContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cart));
      renderCart();
    }
  });

  renderCart();
/* Prepare checkout elements and define function to finish checkout with fade-out effect */
  const checkoutForm = document.querySelector(".checkout-form form");
  const shippingBtn = document.querySelector("#shippingBtn, .checkout-next");

  function finishCheckout() {
    document.body.style.transition = "opacity 0.8s ease";
    document.body.style.opacity = "0";
/* After fade-out, clear cart from localStorage and redirect to success page; trigger finishCheckout on form submit or checkout button click */
    setTimeout(() => {
      localStorage.removeItem("cartItems");
      window.location.href = "order-success.html";
    }, 800);
  }

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      finishCheckout();
    });
  }

  if (shippingBtn) {
    shippingBtn.addEventListener("click", (e) => {
      e.preventDefault();
      finishCheckout();
    });
  }
});
/* 
Cart Feature Overview:
1. On page load, the script retrieves saved cart items from localStorage.
2. renderCart() displays each item in the cart as a div with image, title, size, price, and a remove button.
3. If the cart is empty, it shows a message and resets totals to ₱0.
4. updateTotals() calculates subtotal by summing all item prices, applies shipping rules (free if subtotal ≥ 500), and updates the displayed subtotal, shipping, total, and cart count.
5. removeFreeShippingMessage() clears any old free shipping messages before adding a new one.
6. Clicking the remove button deletes the item from the cart array, updates localStorage, and re-renders the cart.
7. checkoutForm or checkout button triggers finishCheckout(), which fades out the page, clears the cart from localStorage, and redirects to the order success page.
8. The entire system keeps the cart interactive, visually updated, and synced with saved data for a smooth user experience.
*/