/* =========================================================
   Shared product-card renderer (used by home + category + wishlist)
========================================================= */
function productCardHTML(p){
  const wished = Store.isWishlisted(p.id);
  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-card__img">
        <a class="product-card__link" href="product.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}">
        </a>
        <button class="wish-toggle ${wished ? 'active' : ''}" data-id="${p.id}" aria-label="Toggle wishlist">
          <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.5-9.3-8.8C1.2 8 2.4 5 5.6 4.4 8 4 10 5 12 7c2-2 4-3 6.4-2.6C21.6 5 22.8 8 21.3 11.2 19 15.5 12 20 12 20z"/></svg>
        </button>
        <button class="add-to-cart" data-id="${p.id}" aria-label="Add ${p.name} to cart">+</button>
      </div>
      <a class="product-card__link" href="product.html?id=${p.id}">
        <h3>${p.name}</h3>
      </a>
      <p class="price">$${p.price.toFixed(2)}${p.oldPrice ? ` <del style="color:#a89a85;font-weight:400;">$${p.oldPrice.toFixed(2)}</del>` : ''}</p>
      <div class="swatches">${p.colors.map(c => `<span style="background:${c}"></span>`).join('')}</div>
    </article>
  `;
}

function bindProductCardEvents(container){
  container.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.dataset.id;
      Store.addToCart(id, 1);
      updateBadges();
      showToast("Added to your bag");
      btn.textContent = "✓";
      setTimeout(() => { btn.textContent = "+"; }, 900);
    });
  });
  container.querySelectorAll(".wish-toggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.dataset.id;
      Store.toggleWishlist(id);
      btn.classList.toggle("active");
      updateBadges();
      showToast(btn.classList.contains("active") ? "Saved to wishlist" : "Removed from wishlist");
    });
  });
}

/* ---------- Home page: New Arrivals slider ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("sliderTrack");
  if (!track) return;

  const featured = PRODUCTS.slice(0, 8);
  track.innerHTML = featured.map(productCardHTML).join("");
  bindProductCardEvents(track);

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const scrollAmount = () => track.clientWidth * 0.6;
  prevBtn.addEventListener("click", () => track.scrollBy({ left: -scrollAmount(), behavior: "smooth" }));
  nextBtn.addEventListener("click", () => track.scrollBy({ left: scrollAmount(), behavior: "smooth" }));

  /* newsletter form */
  const newsletterForm = document.getElementById("newsletterForm");
  const formMessage = document.getElementById("formMessage");
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector("input").value;
    if (email){
      formMessage.textContent = `Thanks! A 10% off code is on its way to ${email}.`;
      formMessage.style.color = "#4A3826";
      newsletterForm.reset();
    }
  });
});
