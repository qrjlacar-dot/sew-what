const productDetails = {
  //Tops
  "Off-Shoulder Crop Top": {
    description: "Off-shoulder crop top with a chic, flattering neckline and lightweight, comfortable fabric. Perfect for casual outings or pairing with high-waisted bottoms for a stylish, modern look."
  },
  "Off-Shoulder Stripped Polo": {
    description: "Off-shoulder striped polo with a relaxed fit and classic polo styling. Lightweight and versatile, perfect for casual, chic everyday looks."
  },
  "Strapless Polka Dots Top": {
    description: "Strapless polka dot top with a playful pattern and flattering fit. Ideal for summer outings or pairing with high-waisted bottoms for a fun, stylish look."
  },
  "Nude Cami-Strap Top": {
    description: "Nude cami-strap top with a sleek, minimalist design and lightweight, comfortable fabric. Perfect for layering or pairing with high-waisted bottoms for a chic, everyday look.Minimalist nude cami top with adjustable straps — soft, comfy, and endlessly wearable."
  },
  "Polka Dots Top": {
    description: "Polka dots top with a playful pattern and flattering fit. Ideal for casual outings or adding a fun, stylish touch to your wardrobe."
  },
  "Belle-Sleeve Collared Top": {
    description: "Belle-sleeve collared top with a stylish, feminine silhouette and puffed sleeves. Features a classic collar for a polished look, perfect for casual outings or semi-formal occasions."
  },
  //Bottoms
  "Light Washed Baggy Jeans": {
    description: "Relaxed-fit light-wash jeans with a loose, baggy silhouette, designed for comfort and casual street-style vibes. Features classic four-pocket styling and a versatile faded denim finish."
  },
  "Black Jorts": {
    description: "Black denim shorts with a relaxed fit and 4-pocket design, offering a minimalist, street-ready look. Perfect for casual, everyday wear."
  },
  "Baggy Jeans x Stars": {
    description: "Baggy jeans with a relaxed fit, featuring playful pink star accents for a fun, street-style look. Comfortable and casual, perfect for everyday wear."
  },
  "Gray Ribbon Sweat Pants": {
    description: "Gray sweatpants with a relaxed, comfortable fit, featuring a stylish ribbon detail at the waist for a touch of casual-chic flair. Perfect for lounging or street-style outfits."
  },
  "Gray Cotton Skirt": {
    description: "Gray cotton skirt with a soft, breathable fabric and a flattering, versatile silhouette. Perfect for casual wear or layering for a chic, everyday look."
  },
  "Gray Sweat Shorts": {
    description: "Gray sweat shorts with a relaxed, comfortable fit, featuring playful star accents for a fun, casual street-style look. Perfect for lounging or everyday wear."
  },
  //Dresses
  "Patterned Summer Dress": {
    description: "Patterned summer dress made from lightweight, breathable fabric, featuring a vibrant design. Perfect for warm-weather outings and casual summer wear."
  },
  "Plaid Halter Dress": {
    description: "Plaid halter dress with a stylish, sleeveless design and adjustable halter neckline. Lightweight and comfortable, perfect for casual outings or summer events."
  },
  "Pastel Floral Halter Dress": {
    description: "Pastel floral halter dress with a soft, lightweight fabric and adjustable halter neckline. Features a delicate floral pattern, perfect for summer outings, casual events, or daytime gatherings."
  },
  "Pastel Blue Patterned Dress": {
    description: "Pastel blue patterned dress made from lightweight, breathable fabric, featuring a soft, feminine design. Perfect for casual outings, daytime events, or warm-weather wear."
  },
  "Mesh Floral Dress": {
    description: "Mesh floral dress with a lightweight, sheer overlay and delicate floral pattern. Stylish and breathable, perfect for wearing on warm-weather outings."
  },
  "Black Polka Dots Dress": {
    description: "Black polka dot dress with a classic, timeless pattern and lightweight, comfortable fabric. Perfect for casual outings, day-to-night wear, or adding a playful touch to your wardrobe."
  },
  //Outwears
  "Brown Leather Jacket": {
    description: "Brown leather jacket with a sleek, timeless design and durable finish. Perfect for layering, adding an edgy touch to casual or street-style outfits."
  },
  "Beige Polyester Cardigan": {
    description: "Beige polyester cardigan with a soft, lightweight fabric and relaxed fit. Ideal for layering over casual or semi-formal outfits for added comfort and style."
  },
  "Stripped Cover Up": {
    description: "Striped cover-up with a lightweight, breathable fabric and relaxed fit. Perfect for layering over swimwear or casual outfits for a stylish, effortless look."
  },
  "Checkered Cropped Sweater": {
    description: "Checkered cropped sweater with a cozy, soft fabric and trendy fit. Perfect for casual wear or layering for a stylish street-style look."
  },
  "Pastel Patterned Cardigan": {
    description: "Pastel patterned cardigan with a lightweight, soft fabric and relaxed fit. Ideal for layering over casual or semi-formal outfits for a cute, comfortable look."
  },
  "Leather Biker Jacket": {
    description: "Leather biker jacket with a sleek, edgy design and durable finish. Perfect for layering over casual or street-style outfits for a bold, timeless look."
  },
  //Sets and Coordinates
  "Light Blue Plaid Formal Set": {
    description: "A chic, coordinated formal set featuring a light blue plaid pattern, designed for a polished and sophisticated look suitable for office wear or special occasions."
  },
  "Halter Top and Skirt Polka Dot Set": {
    description: "A fun and flirty two-piece set with a halter top and matching skirt, decorated with playful polka dots, perfect for casual outings or summer events."
  },
  "Light Pink Silk Sleepwear": {
    description: "Soft and luxurious sleepwear in a delicate light pink silk, crafted for comfort and elegance, ideal for a relaxing night in or lounging at home."
  },
  "Sleepwear Set with Lace Accents": {
    description: "An elegant sleepwear set enhanced with delicate lace accents, combining comfort and a touch of sophistication for a stylish bedtime look."
  },
  "Light Pink Cotton Polka Dot Sleepwear": {
    description: "Comfortable and charming sleepwear made from breathable light pink cotton, adorned with playful polka dots for a cute and cozy nightwear option."
  },
  "Plaid Black Formal Set": {
    description: "A sleek and sophisticated formal set in classic black plaid, designed to offer a polished, professional look while maintaining a modern and stylish edge."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll(".product-card");
  // Get product image, title, and price from the clicked card
  if (productCards.length > 0) {
    productCards.forEach((card) => {
      card.addEventListener("click", () => {
        const img = card.querySelector("img").getAttribute("src");
        const title = card.querySelector(".product-title").innerText;
        const price = card.querySelector(".product-price").innerText;
        // Get current page name (e.g., "tops" or "bottoms")
        const currentPage = window.location.pathname
          .split("/") // Split the URL path into an array
          .pop() // Take the last part (the HTML file name)
          .replace(".html", ""); // Remove ".html" to get collection name

        // Create a product object to store
        const productData = {
          img,
          title,
          price,
          collection: currentPage,
        };
        localStorage.setItem("selectedProduct", JSON.stringify(productData));

        // Redirect to the product details page
        window.location.href = "product.html";
      });
    });
  }
  // Get elements on the product details page
  const productImg = document.getElementById("product-img");
  const productTitle = document.getElementById("product-title");
  const productPrice = document.getElementById("product-price");
  const productDesc = document.getElementById("product-desc");
  const backLink = document.getElementById("back-link");

  if (productImg && productTitle && productPrice) {
    const savedProduct = localStorage.getItem("selectedProduct");
    if (savedProduct) {
      const product = JSON.parse(savedProduct);
      productImg.src = product.img;
      productTitle.textContent = product.title;
      productPrice.textContent = product.price;

      if (productDetails[product.title]) {
        productDesc.textContent = productDetails[product.title].description;
      } else {
        productDesc.textContent = "";
      }

      const activeLink = document.getElementById(`sidebar-${product.collection}`);
      if (activeLink) activeLink.classList.add("active");

      backLink.href = `${product.collection}.html`;
      backLink.textContent = `← Back to ${product.collection.charAt(0).toUpperCase() + product.collection.slice(1)} Collection`;
    }
  }
  // Highlight the correct collection link in the sidebar
  const sizeButtons = document.querySelectorAll(".size-btn");
  let selectedSize = "";
  if (sizeButtons.length > 0) {
    sizeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        sizeButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        selectedSize = btn.textContent;
      });
    });
  }

  //add items to cart
  const addToCartBtn = document.getElementById("add-to-cart-btn");
  //notification-like message will pop up if it's pressed
  const toast = document.getElementById("cart-toast");
  //adds items to cart
  if (addToCartBtn && toast) {
    addToCartBtn.addEventListener("click", () => {
      const img = productImg?.src || "";
      const title = productTitle?.textContent || "";
      const price = productPrice?.textContent || "";

      if (!title || !price) return;
      //stores items using json
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      //adds items to array
      cartItems.push({
        img,
        title,
        price,
        size: selectedSize || "Not selected",
      });
      //save the updated items to the array as string
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      //toast notif
      toast.textContent = "✅ Added to cart!";
      //'show' class to make the toast notification visible
      toast.classList.add("show");
      //how long toast will appear
      setTimeout(() => {
        toast.classList.remove("show");
      }, 2000);
    });
  }
});