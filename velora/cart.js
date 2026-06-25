document.addEventListener("DOMContentLoaded", () => {
  const cartTable = document.getElementById("cartTable");
  if (!cartTable) return;

  const SHIPPING_FLAT = 8.00;
  const FREE_SHIP_THRESHOLD = 99;
  let promoDiscount = 0;

  function render(){
    const cart = Store.getCart();

    if (cart.length === 0){
      cartTable.innerHTML = `<div class="empty-state">Your bag is empty. <a href="category.html?cat=men">Start shopping</a></div>`;
      document.getElementById("checkoutLink").classList.add("disabled");
      document.getElementById("checkoutLink").style.pointerEvents = "none";
      document.getElementById("checkoutLink").style.opacity = "0.5";
    } else {
      document.getElementById("checkoutLink").style.pointerEvents = "auto";
      document.getElementById("checkoutLink").style.opacity = "1";
      cartTable.innerHTML = cart.map((item, i) => {
        const p = getProductById(item.id);
        if (!p) return "";
        return `
          <div class="cart-row">
            <div class="cart-row__img"><img src="${p.image}" alt="${p.name}"></div>
            <div>
              <div class="cart-row__name">${p.name}</div>
              <div class="cart-row__meta">${item.size ? `Size: ${item.size}` : ''} ${item.color ? `&nbsp;•&nbsp; <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${item.color};vertical-align:middle;"></span>` : ''}</div>
              <button class="cart-row__remove" data-i="${i}">Remove</button>
            </div>
            <div class="qty-stepper" style="height:38px;">
              <button class="qty-minus" data-i="${i}">&minus;</button>
              <span>${item.qty}</span>
              <button class="qty-plus" data-i="${i}">+</button>
            </div>
            <div class="cart-row__price">$${(p.price * item.qty).toFixed(2)}</div>
          </div>
        `;
      }).join("");
    }

    bindRowEvents();
    updateTotals();
    updateBadges();
  }

  function bindRowEvents(){
    cartTable.querySelectorAll(".cart-row__remove").forEach(btn => {
      btn.addEventListener("click", () => {
        Store.removeFromCart(Number(btn.dataset.i));
        showToast("Removed from bag");
        render();
      });
    });
    cartTable.querySelectorAll(".qty-minus").forEach(btn => {
      btn.addEventListener("click", () => {
        const cart = Store.getCart();
        const i = Number(btn.dataset.i);
        Store.updateCartQty(i, cart[i].qty - 1);
        render();
      });
    });
    cartTable.querySelectorAll(".qty-plus").forEach(btn => {
      btn.addEventListener("click", () => {
        const cart = Store.getCart();
        const i = Number(btn.dataset.i);
        Store.updateCartQty(i, cart[i].qty + 1);
        render();
      });
    });
  }

  function updateTotals(){
    const subtotal = Store.cartTotal();
    const shipping = subtotal === 0 ? 0 : (subtotal >= FREE_SHIP_THRESHOLD ? 0 : SHIPPING_FLAT);
    const discount = subtotal * promoDiscount;
    const total = Math.max(0, subtotal + shipping - discount);

    document.getElementById("summarySubtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("summaryShipping").textContent = shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`;
    document.getElementById("summaryTotal").textContent = `$${total.toFixed(2)}`;

    sessionStorage.setItem("velora_order_total", total.toFixed(2));
  }

  document.getElementById("promoBtn").addEventListener("click", () => {
    const code = document.getElementById("promoInput").value.trim().toUpperCase();
    const msg = document.getElementById("promoMessage");
    if (code === "VELORA10"){
      promoDiscount = 0.10;
      msg.textContent = "Promo applied — 10% off your order.";
      msg.style.color = "#4A3826";
    } else if (code === ""){
      msg.textContent = "Enter a promo code first.";
      msg.style.color = "#A8632F";
    } else {
      promoDiscount = 0;
      msg.textContent = "That code isn't valid. Try VELORA10.";
      msg.style.color = "#A8632F";
    }
    updateTotals();
  });

  render();
});
