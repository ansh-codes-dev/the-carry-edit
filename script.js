/* ==========================================================================
   THE CARRY EDIT — PRODUCT CATALOG
   HOW TO UPDATE LINKS:
   Replace each `affiliateUrl` below with your Amazon SiteStripe `amzn.to` link.
   Optionally add a local image path in `image` (e.g., "images/watch-1.jpg").
   Leaving `image: ""` renders a clean built-in editorial vector illustration.
   ========================================================================== */

const PRODUCTS = [
  {
    id: "watch-01",
    category: "watches",
    categoryLabel: "Watches",
    tier: "Everyday Classic",
    title: "Minimalist 38mm Vintage Digital Steel Watch",
    review:
      "A featherweight retro stainless-steel icon that sits flat under sleeves and works equally well with oversized streetwear or smart-casual shirts.",
    specs: [
      "Unisex 38mm slim profile with adjustable steel clasp",
      "Built-in LED backlight, stopwatch & daily alarm",
      "Everyday splash water resistance"
    ],
    styleTip: "Pair with silver rings or a matte black backpack to keep hardware tones consistent.",
    image: "",
    affiliateUrl: "https://www.amazon.in/s?k=vintage+stainless+steel+digital+watch+unisex"
  },
  {
    id: "watch-02",
    category: "watches",
    categoryLabel: "Watches",
    tier: "Smart Casual",
    title: "Clean Matte Dial Analog Watch with Leather Strap",
    review:
      "Strip away cluttered sub-dials for an understated monochrome face paired with a warm stitched leather strap that dresses up denim or linen effortlessly.",
    specs: [
      "40mm scratch-resistant mineral glass dial",
      "Reliable Japanese quartz movement",
      "Interchangeable 20mm cognac leather strap"
    ],
    styleTip: "Matches directly with a cognac leather belt for an instant old-money aesthetic.",
    image: "",
    affiliateUrl: "https://www.amazon.in/s?k=minimalist+analog+leather+strap+watch+unisex"
  },
  {
    id: "backpack-01",
    category: "backpacks",
    categoryLabel: "Backpacks",
    tier: "Commuter Pick",
    title: "Slim Water-Resistant 20L Laptop Commuter Pack",
    review:
      "Structured enough to hold its boxy silhouette even when half-empty, making it ideal for college classes, cafe workdays, and weekend train trips.",
    specs: [
      "Padded sleeve fits up to 15.6-inch laptops safely",
      "Water-repellent matte weave fabric with hidden rear pocket",
      "Luggage pass-through strap & breathable back mesh"
    ],
    styleTip: "Stick to charcoal, olive, or matte black so it complements any jacket or sneaker rotation.",
    image: "",
    affiliateUrl: "https://www.amazon.in/s?k=minimalist+water+resistant+slim+laptop+backpack+20L"
  },
  {
    id: "backpack-02",
    category: "backpacks",
    categoryLabel: "Backpacks",
    tier: "Aesthetic Utility",
    title: "Heavyweight Canvas Roll-Top Everyday Backpack",
    review:
      "Combines rugged waxed-feel canvas with warm leather trim accents. Expands vertically when you carry a hoodie or gym gear, then clips down sleek.",
    specs: [
      "Durable high-density canvas with metal buckle hardware",
      "Dual side bottle sleeves & quick-access front zip",
      "Unisex ergonomic padded shoulder straps"
    ],
    styleTip: "Works best with earth-tone cargos, relaxed denim, and cream or white sneakers.",
    image: "",
    affiliateUrl: "https://www.amazon.in/s?k=canvas+roll+top+backpack+unisex"
  },
  {
    id: "crossbody-01",
    category: "crossbody",
    categoryLabel: "Crossbody Bags",
    tier: "Hands-Free Essential",
    title: "Compact Matte Nylon Everyday Sling Bag",
    review:
      "Built for days when pockets aren't enough—fits a phone, power bank, wallet, keys, and sunglasses without swinging around while you walk or commute.",
    specs: [
      "Lightweight ripstop nylon with smooth YKK-style zips",
      "Quick-release buckle strap wearable front or back",
      "Internal mesh dividers + concealed passport pocket"
    ],
    styleTip: "Wear snug across the chest over a relaxed tee or hoodie for clean street-ready layering.",
    image: "",
    affiliateUrl: "https://www.amazon.in/s?k=minimalist+nylon+crossbody+sling+bag+unisex"
  },
  {
    id: "crossbody-02",
    category: "crossbody",
    categoryLabel: "Crossbody Bags",
    tier: "Editorial Favorite",
    title: "Structured Faux-Leather Messenger Crossbody",
    review:
      "A sleek vertical organizer silhouette with refined stitching and zero loud branding—bridges the gap between casual errands and evening dinners.",
    specs: [
      "Textured pebble vegan leather finish that resists scuffs",
      "Magnetic flap closure with zippered main compartment",
      "Adjustable wide shoulder strap for all-day comfort"
    ],
    styleTip: "Choose espresso brown or jet black to pair seamlessly with loafers, boots, or white trainers.",
    image: "",
    affiliateUrl: "https://www.amazon.in/s?k=minimalist+leather+crossbody+messenger+bag+unisex"
  },
  {
    id: "belt-01",
    category: "belts",
    categoryLabel: "Belts",
    tier: "Wardrobe Staple",
    title: "Full-Grain Genuine Leather Brushed-Buckle Belt",
    review:
      "Unlike cheap bonded belts that crack after two months, a solid single-piece leather strap softens over time and develops a rich natural patina.",
    specs: [
      "35mm versatile width fits jeans, chinos, and trousers",
      "Brushed gunmetal or antique brass alloy pin buckle",
      "Clean edge burnishing with reinforced keeper loop"
    ],
    styleTip: "Order 2 inches above your trouser waist size so the tail sits neatly past the first belt loop.",
    image: "",
    affiliateUrl: "https://www.amazon.in/s?k=full+grain+genuine+leather+belt+minimal+buckle"
  },
  {
    id: "belt-02",
    category: "belts",
    categoryLabel: "Belts",
    tier: "Streetwear Pick",
    title: "Tactical Webbing Belt with Matte Quick-Release Buckle",
    review:
      "Micro-adjustable with zero fixed holes—gives an exact waist fit for baggy jeans, carpenter pants, and utility cargos with clean industrial hardware.",
    specs: [
      "Heavy-duty woven nylon webbing that never curls",
      "Low-profile matte black metal clasp",
      "Fully unisex one-size adjustable length"
    ],
    styleTip: "Great for relaxed-fit cargos and oversized silhouettes where traditional leather feels too formal.",
    image: "",
    affiliateUrl: "https://www.amazon.in/s?k=minimalist+nylon+webbing+belt+matte+buckle+unisex"
  },
  {
    id: "sunglasses-01",
    category: "sunglasses",
    categoryLabel: "Sunglasses",
    tier: "Sun Protection",
    title: "Classic Tortoiseshell Square Polarized Sunglasses",
    review:
      "The universally flattering wayfarer-inspired frame that sharpens round and oval faces while cutting harsh road and midday sun glare cleanly.",
    specs: [
      "100% UV400 protection with glare-reducing polarized lenses",
      "Lightweight acetate-style frame with metal hinge pins",
      "Includes hard protective case & microfiber cloth"
    ],
    styleTip: "Warm tortoiseshell frames tie together cognac leather watches and belts effortlessly.",
    image: "",
    affiliateUrl: "https://www.amazon.in/s?k=tortoiseshell+square+polarized+uv400+sunglasses+unisex"
  },
  {
    id: "sunglasses-02",
    category: "sunglasses",
    categoryLabel: "Sunglasses",
    tier: "Modern Retro",
    title: "Slim Metal-Frame Rectangular Tint Sunglasses",
    review:
      "Clean 90s-inspired architectural wireframes that feel weightless on the nose bridge and elevate minimalist monochromatic outfits immediately.",
    specs: [
      "UV400 tinted lenses for crisp outdoor clarity",
      "Adjustable silicone nose pads for zero slip",
      "Corrosion-resistant slim alloy frame"
    ],
    styleTip: "Match gold frames with warm neutrals (beige, olive, cream) or silver frames with black and grey.",
    image: "",
    affiliateUrl: "https://www.amazon.in/s?k=retro+rectangular+metal+frame+uv400+sunglasses+unisex"
  }
];

/* Built-in Editorial Vector Artwork (Prevents Broken Images Out of the Box) */
const CATEGORY_SVGS = {
  watches: `
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <rect x="29" y="6" width="22" height="16" rx="3" stroke="#9A6B2F" stroke-width="2.5"/>
      <rect x="29" y="58" width="22" height="16" rx="3" stroke="#9A6B2F" stroke-width="2.5"/>
      <circle cx="40" cy="40" r="21" fill="#FFFFFF" stroke="#18181B" stroke-width="3"/>
      <circle cx="40" cy="40" r="16" stroke="#E5E2DC" stroke-width="1.5"/>
      <line x1="40" y1="40" x2="40" y2="29" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="40" y1="40" x2="49" y2="44" stroke="#9A6B2F" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="40" cy="40" r="2.2" fill="#18181B"/>
      <rect x="61" y="37" width="4" height="6" rx="1.5" fill="#18181B"/>
    </svg>`,
  backpacks: `
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M31 19V14C31 11.2 33.2 9 36 9H44C46.8 9 49 11.2 49 14V19" stroke="#9A6B2F" stroke-width="2.8" stroke-linecap="round"/>
      <rect x="19" y="19" width="42" height="50" rx="12" fill="#FFFFFF" stroke="#18181B" stroke-width="3"/>
      <path d="M26 37H54" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="27" y="45" width="26" height="16" rx="4" stroke="#9A6B2F" stroke-width="2.4"/>
      <line x1="35" y1="51" x2="45" y2="51" stroke="#18181B" stroke-width="2.4" stroke-linecap="round"/>
    </svg>`,
  crossbody: `
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M22 30C22 15 58 15 58 30" stroke="#9A6B2F" stroke-width="2.8" stroke-linecap="round"/>
      <rect x="16" y="29" width="48" height="36" rx="8" fill="#FFFFFF" stroke="#18181B" stroke-width="3"/>
      <path d="M16 40C16 40 28 47 40 47C52 47 64 40 64 40" stroke="#18181B" stroke-width="2.4"/>
      <rect x="36" y="43" width="8" height="8" rx="2" fill="#9A6B2F"/>
    </svg>`,
  belts: `
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <rect x="8" y="30" width="64" height="20" rx="4" fill="#FFFFFF" stroke="#18181B" stroke-width="3"/>
      <rect x="22" y="25" width="20" height="30" rx="4" fill="#FAF9F6" stroke="#9A6B2F" stroke-width="3"/>
      <line x1="24" y1="40" x2="36" y2="40" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
      <circle cx="52" cy="40" r="2" fill="#18181B"/>
      <circle cx="60" cy="40" r="2" fill="#18181B"/>
    </svg>`,
  sunglasses: `
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <rect x="10" y="28" width="25" height="20" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="3"/>
      <rect x="45" y="28" width="25" height="20" rx="6" fill="#FFFFFF" stroke="#18181B" stroke-width="3"/>
      <path d="M35 35C37.5 32.5 42.5 32.5 45 35" stroke="#9A6B2F" stroke-width="3" stroke-linecap="round"/>
      <line x1="6" y1="33" x2="10" y2="33" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
      <line x1="70" y1="33" x2="74" y2="33" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
      <line x1="16" y1="34" x2="21" y2="42" stroke="#E5E2DC" stroke-width="2" stroke-linecap="round"/>
      <line x1="51" y1="34" x2="56" y2="42" stroke="#E5E2DC" stroke-width="2" stroke-linecap="round"/>
    </svg>`
};

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const gridEl = document.getElementById("product-grid");
  const countEl = document.getElementById("results-count");
  const emptyStateEl = document.getElementById("empty-state");
  const searchInput = document.getElementById("search-input");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const resetBtn = document.getElementById("reset-filters-btn");

  if (!gridEl) return;

  let activeCategory = "all";
  let searchQuery = "";

  function renderProducts() {
    const query = searchQuery.trim().toLowerCase();

    const filtered = PRODUCTS.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const searchableText = [
        item.title,
        item.categoryLabel,
        item.tier,
        item.review,
        item.styleTip,
        ...item.specs
      ]
        .join(" ")
        .toLowerCase();
      const matchesSearch = !query || searchableText.includes(query);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      gridEl.innerHTML = "";
      emptyStateEl.classList.remove("hidden");
      countEl.textContent = "Showing 0 curated essentials";
      return;
    }

    emptyStateEl.classList.add("hidden");
    countEl.textContent = `Showing ${filtered.length} curated ${filtered.length === 1 ? "essential" : "essentials"}`;

    gridEl.innerHTML = filtered
      .map((item) => {
        const visualMarkup = item.image
          ? `<img src="${item.image}" alt="${item.title}" loading="lazy" />`
          : CATEGORY_SVGS[item.category] || "";

        const specsMarkup = item.specs.map((spec) => `<li>${spec}</li>`).join("");

        return `
          <article class="product-card">
            <div class="card-visual">
              <span class="category-badge">${item.categoryLabel}</span>
              <span class="tier-badge">${item.tier}</span>
              ${visualMarkup}
            </div>
            <div class="card-body">
              <h3 class="card-title">${item.title}</h3>
              <p class="card-review">${item.review}</p>
              <ul class="card-specs">${specsMarkup}</ul>
              <div class="style-tip">
                <strong>Styling Note:</strong> ${item.styleTip}
              </div>
              <a
                href="${item.affiliateUrl}"
                class="card-cta"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
              >
                Check Current Price on Amazon <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      activeCategory = btn.dataset.category;
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      activeCategory = "all";
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      filterBtns.forEach((b) => {
        const isAll = b.dataset.category === "all";
        b.classList.toggle("active", isAll);
        b.setAttribute("aria-selected", isAll ? "true" : "false");
      });
      renderProducts();
    });
  }

  renderProducts();
});
