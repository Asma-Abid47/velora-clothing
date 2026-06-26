/* =========================================================
   VELORA — STORE (cart + wishlist persistence)
   Uses localStorage so the bag/wishlist survive across pages.
========================================================= */

const Store = (() => {
  const CART_KEY = "velora_cart";
  const WISHLIST_KEY = "velora_wishlist";

  function read(key){
    try { return JSON.parse(localStorage.getItem(key)) || []; }
    catch(e){ return []; }
  }
  function write(key, data){
    localStorage.setItem(key, JSON.stringify(data));
  }

  /* ---------- CART ---------- */
  function getCart(){ return read(CART_KEY); }

  function addToCart(id, qty = 1, size = null, color = null){
    const cart = getCart();
    const existing = cart.find(i => i.id === id && i.size === size && i.color === color);
    if (existing) existing.qty += qty;
    else cart.push({ id, qty, size, color });
    write(CART_KEY, cart);
    return cart;
  }

  function updateCartQty(index, qty){
    const cart = getCart();
    if (!cart[index]) return cart;
    if (qty <= 0) cart.splice(index, 1);
    else cart[index].qty = qty;
    write(CART_KEY, cart);
    return cart;
  }

  function removeFromCart(index){
    const cart = getCart();
    cart.splice(index, 1);
    write(CART_KEY, cart);
    return cart;
  }

  function clearCart(){ write(CART_KEY, []); }

  function cartCount(){
    return getCart().reduce((sum, i) => sum + i.qty, 0);
  }

  function cartTotal(){
    return getCart().reduce((sum, i) => {
      const p = getProductById(i.id);
      return p ? sum + p.price * i.qty : sum;
    }, 0);
  }

  /* ---------- WISHLIST ---------- */
  function getWishlist(){ return read(WISHLIST_KEY); }

  function toggleWishlist(id){
    let list = getWishlist();
    if (list.includes(id)) list = list.filter(i => i !== id);
    else list.push(id);
    write(WISHLIST_KEY, list);
    return list;
  }

  function isWishlisted(id){
    return getWishlist().includes(id);
  }

  function removeFromWishlist(id){
    const list = getWishlist().filter(i => i !== id);
    write(WISHLIST_KEY, list);
    return list;
  }

  return {
    getCart, addToCart, updateCartQty, removeFromCart, clearCart, cartCount, cartTotal,
    getWishlist, toggleWishlist, isWishlisted, removeFromWishlist
  };
})();
