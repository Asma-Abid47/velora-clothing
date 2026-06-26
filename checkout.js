document.addEventListener("DOMContentLoaded", () => {
  const checkoutForm = document.getElementById("checkoutForm");
  if (!checkoutForm) return;

  const SHIPPING_FLAT = 8.00;
  const FREE_SHIP_THRESHOLD = 99;

  const cart = Store.getCart();

  if (cart.length === 0){
    checkoutForm.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">Your bag is empty — add something before checking out. <a href="category.html?cat=men">Shop now</a></div>`;
  } else {
    const itemsEl = document.getElementById("checkoutItems");
    itemsEl.innerHTML = cart.map(item => {
      const p = getProductById(item.id);
      if (!p) return "";
      return `<div class="summary-line"><span>${p.name} × ${item.qty}</span><span>$${(p.price * item.qty).toFixed(2)}</span></div>`;
    }).join("");

    const subtotal = Store.cartTotal();
    const shipping = subtotal >= FREE_SHIP_THRESHOLD ? 0 : SHIPPING_FLAT;
    const total = subtotal + shipping;

    document.getElementById("coSubtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("coShipping").textContent = shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`;
    document.getElementById("coTotal").textContent = `$${total.toFixed(2)}`;
  }

  /* toggle card fields based on payment method */
  const cardFields = document.getElementById("cardFields");
  document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener("change", () => {
      cardFields.style.display = radio.value === "card" && radio.checked ? "grid" : "none";
    });
  });

  /* place order */
  const orderForm = document.getElementById("orderForm");
  if (orderForm){
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (Store.getCart().length === 0) return;

      const name = orderForm.querySelector('input[type="text"]').value || "there";
      const orderNumber = "VL" + Math.floor(100000 + Math.random() * 900000);

      document.getElementById("confirmText").textContent =
        `Thank you, ${name} — order #${orderNumber} has been placed. A confirmation email is on its way.`;

      Store.clearCart();
      updateBadges();

      document.querySelector(".checkout-steps span:nth-child(3)").classList.add("active");
      checkoutForm.style.display = "none";
      document.getElementById("orderConfirm").style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
