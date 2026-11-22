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
    title: "Casio Vintage A168WEMB-1BDF Digital Steel Mesh Watch",
    review:
      "A slim 9.6mm retro digital icon with a black dial and stainless steel mesh band that pairs cleanly with streetwear or smart-casual layers.",
    specs: [
      "Unisex 36.3mm square case with adjustable mesh clasp",
      "Electroluminescent backlight, stopwatch & daily alarm",
      "Everyday splash resistance with quartz accuracy"
    ],
    styleTip: "Pair with silver rings or a matte black backpack to keep hardware tones consistent.",
    image: "",
    affiliateUrl: "https://www.amazon.in/dp/B09YPRQV28?tag=thecarryedi0d-21"
  },
  {
    id: "watch-02",
    category: "watches",
    categoryLabel: "Watches",
    tier: "Smart Casual",
    title: "Sonata Aspire Quartz Analog Silver Dial Watch (77105QL03W)",
    review:
      "An understated silver dial paired with a sleek black leather strap that dresses up denim, chinos, or office shirts without bulk.",
    specs: [
      "Clean silver analog dial with stick & Arabic markers",
      "Reliable quartz movement for steady timekeeping",
      "Comfortable black leather strap with slim case"
    ],
    styleTip: "Matches directly with a black or dark brown leather belt for a put-together look.",
    image: "",
    affiliateUrl: "https://www.amazon.in/dp/B0CDXNCH42?tag=thecarryedi0d-21"
  },
  {
    id: "backpack-01",
    category: "backpacks",
    categoryLabel: "Backpacks",
    tier: "Commuter Pick",
    title: "Virtutron 30L Water-Resistant 15.6-Inch Laptop Backpack",
    review:
      "A sleek, weather-resistant commuter pack that protects a 15.6-inch laptop while staying comfortable across college classes and daily travel.",
    specs: [
      "Dedicated padded pocket fits up to 15.6-inch laptops",
      "Water-resistant outer shell shields gear from rain",
      "Breathable back panel with padded shoulder straps"
    ],
    styleTip: "Stick to black or grey so it complements any jacket or sneaker rotation.",
    image: "",
    affiliateUrl: "https://www.amazon.in/dp/B0DMDXZBJ7?tag=thecarryedi0d-21"
  },
  {
    id: "backpack-02",
    category: "backpacks",
    categoryLabel: "Backpacks",
    tier: "Aesthetic Utility",
    title: "The House of Tara 21L Canvas Roll-Top Backpack",
    review:
      "Combines rugged cotton canvas with a classic roll-down top and leather strap closure for an effortless everyday carry silhouette.",
    specs: [
      "21-liter capacity with 100% cotton inner lining",
      "Top roll-down closure with durable leather strap",
      "Unisex build suited for college, travel & daily errands"
    ],
    styleTip: "Works best with earth-tone cargos, relaxed denim, and cream or white sneakers.",
    image: "",
    affiliateUrl: "https://www.amazon.in/dp/B01ER69JTK?tag=thecarryedi0d-21"
  },
  {
    id: "crossbody-01",
    category: "crossbody",
    categoryLabel: "Crossbody Bags",
    tier: "Hands-Free Essential",
    title: "Fastrack Lightweight Twill-Detail Nylon Crossbody Sling",
    review:
      "Built for days when pockets aren't enough—keeps your phone, wallet, charger, and keys sorted without weighing down your shoulder.",
    specs: [
      "Lightweight nylon body with subtle twill texture",
      "2 main compartments + 3 quick-access pockets",
      "Secure smooth zipper closure for daily commutes"
    ],
    styleTip: "Wear snug across the chest over a relaxed tee or hoodie for clean street-ready layering.",
    image: "",
    affiliateUrl: "https://www.amazon.in/dp/B0CXY21M86?tag=thecarryedi0d-21"
  },
  {
    id: "crossbody-02",
    category: "crossbody",
    categoryLabel: "Crossbody Bags",
    tier: "Editorial Favorite",
    title: "WildHorn Genuine Leather Crossbody Messenger Bag",
    review:
      "A compact genuine leather organizer bag with five dedicated pockets that bridges casual cafe runs and smart-casual office days.",
    specs: [
      "Genuine leather exterior in a compact 7 x 2 x 8.5-inch frame",
      "5 organized compartments including front & inner zip pockets",
      "Adjustable shoulder strap for all-day comfort"
    ],
    styleTip: "Pair warm brown leather with neutral tees and clean white trainers.",
    image: "",
    affiliateUrl: "https://www.amazon.in/dp/B0FD9PCYYH?tag=thecarryedi0d-21"
  },
  {
    id: "belt-01",
    category: "belts",
    categoryLabel: "Belts",
    tier: "Wardrobe Staple",
    title: "Louis Philippe 100% Embossed Italian Leather Belt",
    review:
      "Crafted from 100% genuine embossed leather with a brushed nickel zinc-alloy buckle that elevates both tailored trousers and dark denim.",
    specs: [
      "100% genuine Italian embossed leather strap",
      "Minimalist brushed-nickel zinc-alloy profile buckle",
      "Versatile solid finish for formal and casual outfits"
    ],
    styleTip: "Order 2 inches above your trouser waist size so the tail sits neatly past the first loop.",
    image: "",
    affiliateUrl: "https://www.amazon.in/dp/B091XXT6RT?tag=thecarryedi0d-21"
  },
  {
    id: "belt-02",
    category: "belts",
    categoryLabel: "Belts",
    tier: "Streetwear Pick",
    title: "TPM Adjustable Nylon Webbing Belt with Matte Buckle",
    review:
      "Hole-free automatic locking gives an exact waist fit for baggy jeans, cargos, and utility trousers with clean matte-black hardware.",
    specs: [
      "Heavy-duty woven nylon webbing built for daily wear",
      "Automatic matte-black buckle with no fixed belt holes",
      "Trimmable unisex length for a custom waist fit"
    ],
    styleTip: "Ideal for relaxed cargos and oversized silhouettes where dress leather feels too formal.",
    image: "",
    affiliateUrl: "https://www.amazon.in/dp/B0GHZVS6DS?tag=thecarryedi0d-21"
  },
  {
    id: "sunglasses-01",
    category: "sunglasses",
    categoryLabel: "Sunglasses",
    tier: "Sun Protection",
    title: "Lee Cooper Polarized Tortoiseshell Square Sunglasses (LCW10023C2)",
    review:
      "A timeless tortoiseshell square silhouette with TAC polarized brown gradient lenses that cut road glare while flattering round and oval faces.",
    specs: [
      "TAC polarized lenses with full UV protection",
      "Lightweight, impact-resistant tortoiseshell polycarbonate frame",
      "Balanced 50mm lens width for comfortable all-day wear"
    ],
    styleTip: "Warm tortoiseshell frames tie together cognac leather watches and belts effortlessly.",
    image: "",
    affiliateUrl: "https://www.amazon.in/dp/B0HF82GFG7?tag=thecarryedi0d-21"
  },
  {
    id: "sunglasses-02",
    category: "sunglasses",
    categoryLabel: "Sunglasses",
    tier: "Modern Retro",
    title: "SPECSMAKERS Streak Rimless Rectangular Sunglasses (STR1028)",
    review:
      "Featherweight 15-gram rimless metal frames that deliver a crisp 90s minimalist look with full polarization and 100% UV protection.",
    specs: [
      "100% UV-protected polarized rectangular lenses",
      "Ultra-light 15g unisex metal frame construction",
      "Clean rimless profile suits monochromatic outfits"
    ],
    styleTip: "Match slim metal frames with structured crossbody bags and monochrome streetwear.",
    image: "",
    affiliateUrl: "https://www.amazon.in/dp/B0G949MF6R?tag=thecarryedi0d-21"
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
