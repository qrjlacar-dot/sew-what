document.addEventListener("DOMContentLoaded", () => {
  // Read existing favorites from localStorage
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  function getSelectedSizeOnProductPage() {
    const activeBtn = document.querySelector(".size-btn.active");
    if (activeBtn) return activeBtn.textContent.trim();
    const activeAlt = document.querySelector(".size-options .active");
    if (activeAlt) return activeAlt.textContent.trim();
    return "Not selected";
  }

  const favBtn = document.getElementById("add-to-favorites-btn");
  if (favBtn) {
    favBtn.addEventListener("click", () => {
      const titleEl = document.getElementById("product-title");
      const priceEl = document.getElementById("product-price");
      const imgEl = document.getElementById("product-img");

      const title = titleEl ? titleEl.textContent.trim() : "Untitled";
      const price = priceEl ? priceEl.textContent.trim() : "₱0";
      const image = imgEl ? imgEl.src : "";
      const size = getSelectedSizeOnProductPage();
      const existsIndex = favorites.findIndex(f => f.title === title && f.size === size);

      if (existsIndex === -1) {
        favorites.push({ title, price, image, size });
        localStorage.setItem("favorites", JSON.stringify(favorites));
        favBtn.classList.add("active");
        favBtn.textContent = "♥ Added to Favorites";
      } else {
        favorites.splice(existsIndex, 1);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        favBtn.classList.remove("active");
        favBtn.textContent = "♡ Add to Favorites";
      }

      const toast = document.createElement("div");
      toast.textContent = "Saved to Favorites";
      toast.style.position = "fixed";
      toast.style.bottom = "28px";
      toast.style.right = "28px";
      toast.style.background = "#1E3226";
      toast.style.color = "#fff";
      toast.style.padding = "10px 14px";
      toast.style.borderRadius = "6px";
      toast.style.zIndex = 9999;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 1500);
    });

    // Set initial button state if already favorited
    const titleNow = document.getElementById("product-title")?.textContent.trim();
    const sizeNow = getSelectedSizeOnProductPage();
    if (titleNow && favorites.some(f => f.title === titleNow && f.size === sizeNow)) {
      favBtn.classList.add("active");
      favBtn.textContent = "♥ Added to Favorites";
    }
  }

  const cartBtn = document.querySelector(".add-to-cart");
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      cartBtn.classList.toggle("active");
      if (cartBtn.classList.contains("active")) {
        cartBtn.textContent = "Added to Cart";
      } else {
        cartBtn.textContent = "Add to Cart";
      }
    });
  }

  const favoritesList = document.getElementById("favorites-list");
  if (favoritesList) renderFavorites();

  function renderFavorites() {
    favoritesList.innerHTML = "";

    if (!favorites || favorites.length === 0) {
      favoritesList.innerHTML = `<p class="empty-favorites">No favorites yet 💛</p>`;
      return;
    }

    favorites.forEach((item, idx) => {
      const wrapper = document.createElement("div");
      wrapper.className = "favorite-wrapper";

      const card = document.createElement("div");
      card.className = "favorite-item";

      const sizeText =
        item.size && item.size !== "Not selected"
          ? `<p class="fav-size">Size: ${escapeHtml(item.size)}</p>`
          : "";

      card.innerHTML = `
      <img src="${item.image}" alt="${escapeHtml(item.title)}" />
      <div class="fav-info">
        <h3>${escapeHtml(item.title)}</h3>
        <p class="fav-price">${escapeHtml(item.price)}</p>
        ${sizeText}
      </div>
    `;

      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-fav";
      removeBtn.dataset.index = idx;
      removeBtn.textContent = "Remove";

      wrapper.appendChild(card);
      wrapper.appendChild(removeBtn);

      favoritesList.appendChild(wrapper);
    });

    favoritesList.querySelectorAll(".remove-fav").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = Number(e.currentTarget.dataset.index);
        if (!Number.isNaN(index)) {
          favorites.splice(index, 1);
          localStorage.setItem("favorites", JSON.stringify(favorites));
          renderFavorites();
        }
      });
    });
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});