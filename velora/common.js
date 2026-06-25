/* =========================================================
   VELORA — COMMON (runs on every page)
   Header behaviour, badge counts, toast notifications.
========================================================= */

function updateBadges(){
  const cartCountEl = document.getElementById("cartCount");
  const wishCountEl = document.getElementById("wishCount");
  if (cartCountEl) cartCountEl.textContent = Store.cartCount();
  if (wishCountEl) wishCountEl.textContent = Store.getWishlist().length;
}

function showToast(message){
  let toast = document.getElementById("veloraToast");
  if (!toast){
    toast = document.createElement("div");
    toast.id = "veloraToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.addEventListener("DOMContentLoaded", () => {
  updateBadges();

  /* ---- highlight active nav link ---- */
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(link => {
    const navKey = link.dataset.nav;
    if (navKey === "home" && (page === "index.html" || page === "")) link.classList.add("active");
    if (cat && navKey === cat) link.classList.add("active");
  });

  /* ---- mobile nav ---- */
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("mainNav");
  if (hamburger && mainNav){
    hamburger.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", open);
      hamburger.classList.toggle("is-active", open);
    });
  }

  /* ---- search panel ---- */
  const searchToggle = document.getElementById("searchToggle");
  const searchPanel = document.getElementById("searchPanel");
  const searchClose = document.getElementById("searchClose");
  if (searchToggle && searchPanel){
    searchToggle.addEventListener("click", () => {
      searchPanel.classList.add("open");
      searchPanel.querySelector("input").focus();
    });
    searchClose.addEventListener("click", () => searchPanel.classList.remove("open"));

    const searchInput = searchPanel.querySelector("input");
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && searchInput.value.trim()){
        window.location.href = `category.html?search=${encodeURIComponent(searchInput.value.trim())}`;
      }
    });
  }

  /* ---- header shadow on scroll ---- */
  const header = document.getElementById("siteHeader");
  if (header){
    window.addEventListener("scroll", () => {
      header.style.boxShadow = window.scrollY > 10 ? "0 2px 12px rgba(0,0,0,0.06)" : "none";
    });
  }
});
