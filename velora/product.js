document.addEventListener("DOMContentLoaded", () => {
  const detailEl = document.getElementById("productDetail");
  if (!detailEl) return;

  const params = new URLSearchParams(window.location.search);
  const product = getProductById(params.get("id"));

  if (!product){
    detailEl.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">Product not found. <a href="index.html">Return home</a></div>`;
    return;
  }

  document.getElementById("pageTitle").textContent = `${product.name} — Velora Clothing`;
  document.getElementById("breadcrumbCat").href = `category.html?cat=${product.category}`;
  document.getElementById("breadcrumbCat").textContent = CATEGORY_META[product.category].title;
  document.getElementById("breadcrumbName").textContent = product.name;

  let selectedColor = product.colors[0];
  let selectedSize = product.sizes[0];
  let qty = 1;

  detailEl.innerHTML = `
    <div class="product-detail__gallery">
      <div class="main-img"><img id="mainImg" src="${product.images[0]}" alt="${product.name}"></div>
      ${product.images.length > 1 ? `
        <div class="thumb-row">
          ${product.images.map((img, i) => `<img src="${img}" data-i="${i}" class="${i === 0 ? 'active' : ''}" alt="${product.name} view ${i+1}">`).join('')}
        </div>` : ''}
    </div>

    <div class="product-detail__info">
      <h1>${product.name}</h1>
      <p class="product-detail__price">
        ${product.oldPrice ? `<del>$${product.oldPrice.toFixed(2)}</del>` : ''}
        $${product.price.toFixed(2)}
      </p>
      <p class="product-detail__desc">${product.desc}</p>

      <div class="option-block">
        <label>Color</label>
        <div class="color-options" id="colorOptions">
          ${product.colors.map((c, i) => `<span class="color-dot ${i === 0 ? 'active' : ''}" style="background:${c}" data-color="${c}"></span>`).join('')}
        </div>
      </div>

      <div class="option-block">
        <label>Size</label>
        <div class="size-options" id="sizeOptions">
          ${product.sizes.map((s, i) => `<span class="size-pill ${i === 0 ? 'active' : ''}" data-size="${s}">${s}</span>`).join('')}
        </div>
      </div>

      <div class="qty-row">
        <div class="qty-stepper">
          <button id="qtyMinus" aria-label="Decrease quantity">&minus;</button>
          <span id="qtyValue">1</span>
          <button id="qtyPlus" aria-label="Increase quantity">+</button>
        </div>
      </div>

      <div class="detail-actions">
        <button class="btn btn--solid" id="addToCartBtn">Add to Bag — $${product.price.toFixed(2)}</button>
        <button class="icon-wish-btn ${Store.isWishlisted(product.id) ? 'active' : ''}" id="wishBtn" aria-label="Toggle wishlist">
          <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.5-9.3-8.8C1.2 8 2.4 5 5.6 4.4 8 4 10 5 12 7c2-2 4-3 6.4-2.6C21.6 5 22.8 8 21.3 11.2 19 15.5 12 20 12 20z"/></svg>
        </button>
      </div>

      <div class="detail-meta">
        <div><strong>Free shipping</strong> on orders over $99</div>
        <div><strong>Easy returns</strong> within 30 days</div>
        <div><strong>Secure checkout</strong> with encrypted payment</div>
      </div>
    </div>
  `;

  /* thumbnails */
  detailEl.querySelectorAll(".thumb-row img").forEach(thumb => {
    thumb.addEventListener("click", () => {
      document.getElementById("mainImg").src = product.images[thumb.dataset.i];
      detailEl.querySelectorAll(".thumb-row img").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  /* color */
  detailEl.querySelectorAll(".color-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      detailEl.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      selectedColor = dot.dataset.color;
    });
  });

  /* size */
  detailEl.querySelectorAll(".size-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      detailEl.querySelectorAll(".size-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      selectedSize = pill.dataset.size;
    });
  });

  /* qty */
  const qtyValue = document.getElementById("qtyValue");
  document.getElementById("qtyMinus").addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    qtyValue.textContent = qty;
  });
  document.getElementById("qtyPlus").addEventListener("click", () => {
    qty += 1;
    qtyValue.textContent = qty;
  });

  /* add to cart */
  document.getElementById("addToCartBtn").addEventListener("click", () => {
    Store.addToCart(product.id, qty, selectedSize, selectedColor);
    updateBadges();
    showToast(`Added ${qty} × ${product.name} to your bag`);
  });

  /* wishlist */
  const wishBtn = document.getElementById("wishBtn");
  wishBtn.addEventListener("click", () => {
    Store.toggleWishlist(product.id);
    wishBtn.classList.toggle("active");
    updateBadges();
    showToast(wishBtn.classList.contains("active") ? "Saved to wishlist" : "Removed from wishlist");
  });

  /* related products */
  const related = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);
  const relatedGrid = document.getElementById("relatedGrid");
  relatedGrid.innerHTML = related.map(productCardHTML).join("");
  bindProductCardEvents(relatedGrid);
});
