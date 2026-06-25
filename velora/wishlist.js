git statusdocument.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("wishlistGrid");
  if (!grid) return;

  function render(){
    const ids = Store.getWishlist();
    const products = ids.map(getProductById).filter(Boolean);

    if (products.length === 0){
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">Your wishlist is empty. <a href="category.html?cat=men">Discover pieces you'll love</a></div>`;
      return;
    }

    grid.innerHTML = products.map(productCardHTML).join("");
    bindProductCardEvents(grid);

    grid.querySelectorAll(".wish-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        setTimeout(render, 150);
      });
    });
  }

  render();
});
