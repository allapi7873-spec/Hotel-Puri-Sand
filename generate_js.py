import json

products = [
    # BREAKFAST
    {"name": "Bread Toast with Butter & Jam", "price": "50", "type": "veg", "category": "breakfast-snacks", "subCategory": "Breakfast"},
    {"name": "Veg Sandwich", "price": "60", "type": "veg", "category": "breakfast-snacks", "subCategory": "Breakfast"},
    {"name": "Chicken Sandwich", "price": "70", "type": "non-veg", "category": "breakfast-snacks", "subCategory": "Breakfast"},
    {"name": "Cheese Sandwich", "price": "80", "type": "veg", "category": "breakfast-snacks", "subCategory": "Breakfast"},
    {"name": "Poori Bhaji", "price": "70", "type": "veg", "category": "breakfast-snacks", "subCategory": "Breakfast"},
    {"name": "Aloo Paratha (Served with Curd & Pickle)", "price": "70", "type": "veg", "category": "breakfast-snacks", "subCategory": "Breakfast"},
    {"name": "Gobi Paratha (Served with Curd & Pickle)", "price": "70", "type": "veg", "category": "breakfast-snacks", "subCategory": "Breakfast"},
    {"name": "Paneer Paratha (Served with Curd & Pickle)", "price": "90", "type": "veg", "category": "breakfast-snacks", "subCategory": "Breakfast"},
    {"name": "Plain Paratha with Aloo Dum", "price": "80", "type": "veg", "category": "breakfast-snacks", "subCategory": "Breakfast"},
    {"name": "Idly / Poha (Served with Sambar & Chutney)", "price": "70", "type": "veg", "category": "breakfast-snacks", "subCategory": "Breakfast"},
    {"name": "Cereals with Hot & Cold Milk", "price": "80", "type": "veg", "category": "breakfast-snacks", "subCategory": "Breakfast"},
    {"name": "Eggs to Order (Omlete/Boiled/Bread Omlete)", "price": "80", "type": "non-veg", "category": "breakfast-snacks", "subCategory": "Breakfast"},
    
    # SNACKS/QUICK BITES
    {"name": "Paneer Chilli", "price": "180", "type": "veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Mushroom Chilli", "price": "180", "type": "veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Chicken Chilli", "price": "220", "type": "non-veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Assorted Veg Pakoda", "price": "120", "type": "veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Gobi/Onion/Mushroom/Paneer Pakoda", "price": "150", "type": "veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Egg Pakoda", "price": "100", "type": "non-veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Chicken Pakoda", "price": "180", "type": "non-veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Prawn Pakoda", "price": "280", "type": "non-veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Finger Chips", "price": "100", "type": "veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Dry Chana", "price": "130", "type": "veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Peanuts Masala", "price": "100", "type": "veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Paneer 65", "price": "170", "type": "veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Boil Corn Chaat", "price": "100", "type": "veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Dry Papad", "price": "25", "type": "veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Fry Papad", "price": "30", "type": "veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Masala Papad", "price": "35", "type": "veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Fish Fry", "price": "130", "type": "non-veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Veg Roll", "price": "110", "type": "veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    {"name": "Non-Veg Roll", "price": "149", "type": "non-veg", "category": "breakfast-snacks", "subCategory": "Snacks"},
    
    # BEVERAGES
    {"name": "Ready Made Tea", "price": "20", "type": "veg", "category": "soup-beverage", "subCategory": "Beverages"},
    {"name": "Masala/Black/Lemon/Green Tea", "price": "20", "type": "veg", "category": "soup-beverage", "subCategory": "Beverages"},
    {"name": "Coffee", "price": "25", "type": "veg", "category": "soup-beverage", "subCategory": "Beverages"},
    {"name": "Black Coffee", "price": "30", "type": "veg", "category": "soup-beverage", "subCategory": "Beverages"},
    {"name": "Hot Milk / Cold Milk", "price": "50", "type": "veg", "category": "soup-beverage", "subCategory": "Beverages"},
    {"name": "Hot Chocolate / Horlicks / Bournvita", "price": "100", "type": "veg", "category": "soup-beverage", "subCategory": "Beverages"},
    {"name": "Plain Cold Drink", "price": "30", "type": "veg", "category": "soup-beverage", "subCategory": "Beverages"},
    {"name": "Masala Cold Drink", "price": "40", "type": "veg", "category": "soup-beverage", "subCategory": "Beverages"},
    {"name": "Juice (Canned / Fresh)", "price": "70", "type": "veg", "category": "soup-beverage", "subCategory": "Beverages"},
    {"name": "Mineral Water", "price": "20", "type": "veg", "category": "soup-beverage", "subCategory": "Beverages"},

    # SOUP
    {"name": "Veg Manchow Soup", "price": "70", "type": "veg", "category": "soup-beverage", "subCategory": "Soup"},
    {"name": "Non-Veg Manchow Soup", "price": "90", "type": "non-veg", "category": "soup-beverage", "subCategory": "Soup"},
    {"name": "Veg Noodle Soup", "price": "70", "type": "veg", "category": "soup-beverage", "subCategory": "Soup"},
    {"name": "Non-Veg Noodle Soup", "price": "90", "type": "non-veg", "category": "soup-beverage", "subCategory": "Soup"},
    {"name": "Veg Hot & Sour Soup", "price": "70", "type": "veg", "category": "soup-beverage", "subCategory": "Soup"},
    {"name": "Non-Veg Hot & Sour Soup", "price": "90", "type": "non-veg", "category": "soup-beverage", "subCategory": "Soup"},
    {"name": "Veg Sweet Corn Soup", "price": "70", "type": "veg", "category": "soup-beverage", "subCategory": "Soup"},
    {"name": "Non-Veg Sweet Corn Soup", "price": "90", "type": "non-veg", "category": "soup-beverage", "subCategory": "Soup"},
    
    # SALAD & RAITA
    {"name": "Garden Fresh Green Salad", "price": "50", "type": "veg", "category": "veg-course", "subCategory": "Salad & Raita"},
    {"name": "Onion Salad", "price": "25", "type": "veg", "category": "veg-course", "subCategory": "Salad & Raita"},
    {"name": "Cuchumbar Salad", "price": "50", "type": "veg", "category": "veg-course", "subCategory": "Salad & Raita"},
    {"name": "Chicken Salad", "price": "100", "type": "non-veg", "category": "non-veg-course", "subCategory": "Salad & Raita"},
    {"name": "Mix Raita", "price": "50", "type": "veg", "category": "veg-course", "subCategory": "Salad & Raita"},
    {"name": "Onion Raita", "price": "50", "type": "veg", "category": "veg-course", "subCategory": "Salad & Raita"},
    {"name": "Boondi Raita", "price": "50", "type": "veg", "category": "veg-course", "subCategory": "Salad & Raita"},

    # VEG CURRY
    {"name": "Mix Vegetable", "price": "160", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Mushroom (Masala/Kadhai/Dopiyaza/Chilli)", "price": "180", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Paneer (Masala/Kadhai/Dopiyaza/Chilli)", "price": "180", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Veg Manchurian", "price": "150", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Aloo Gobi Masala", "price": "159", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Bhindi Masala / Dopiyaza / Kurkure", "price": "150", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Aloo Bhaji / Mix Bhaji", "price": "120", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Aloo Jeera", "price": "130", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Kalara / Aloo Chips", "price": "120", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Dalma / Santula", "price": "150", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Chana Masala", "price": "150", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Sorisa Baigan", "price": "140", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Dahi Baingan", "price": "120", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Aloo Bharta", "price": "60", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Badi Chura", "price": "60", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Tomato Chutney", "price": "70", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Dahi Pakhala", "price": "90", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Moong Dal", "price": "100", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},
    {"name": "Aloo Jhuri", "price": "110", "type": "veg", "category": "veg-course", "subCategory": "Veg Curry"},

    # NON VEG CURRY
    {"name": "Mutton Curry / Kassa", "price": "300", "type": "non-veg", "category": "non-veg-course", "subCategory": "Non-Veg Curry"},
    {"name": "Prawn Curry / Kassa", "price": "320", "type": "non-veg", "category": "non-veg-course", "subCategory": "Non-Veg Curry"},
    {"name": "Chicken Curry / Kassa", "price": "240", "type": "non-veg", "category": "non-veg-course", "subCategory": "Non-Veg Curry"},
    {"name": "Fish Curry / Tawa / Fry (Bone)", "price": "149", "type": "non-veg", "category": "non-veg-course", "subCategory": "Non-Veg Curry"},
    {"name": "Fish Curry / Tawa / Fry (Boneless)", "price": "199", "type": "non-veg", "category": "non-veg-course", "subCategory": "Non-Veg Curry"},
    {"name": "Machha Chhecha", "price": "149", "type": "non-veg", "category": "non-veg-course", "subCategory": "Non-Veg Curry"},
    {"name": "Egg Masala / Curry / Kassa / Bhurji", "price": "130", "type": "non-veg", "category": "non-veg-course", "subCategory": "Non-Veg Curry"},

    # RICE & NOODLES
    {"name": "Veg Fried Rice (Chili Garlic/Schezwan)", "price": "140", "type": "veg", "category": "rice-roti", "subCategory": "Rice & Noodles"},
    {"name": "Veg Hakka Noodles (Chili Garlic/Schezwan)", "price": "140", "type": "veg", "category": "rice-roti", "subCategory": "Rice & Noodles"},
    {"name": "Chicken Fried Rice (Chili Garlic/Schezwan)", "price": "180", "type": "non-veg", "category": "rice-roti", "subCategory": "Rice & Noodles"},
    {"name": "Chicken Noodles (Chili Garlic/Schezwan)", "price": "180", "type": "non-veg", "category": "rice-roti", "subCategory": "Rice & Noodles"},
    {"name": "Egg Fried Rice (Chili Garlic/Schezwan)", "price": "150", "type": "non-veg", "category": "rice-roti", "subCategory": "Rice & Noodles"},
    {"name": "Egg Noodles (Chili Garlic/Schezwan)", "price": "150", "type": "non-veg", "category": "rice-roti", "subCategory": "Rice & Noodles"},
    {"name": "Prawn Fried Rice (Chili Garlic/Schezwan)", "price": "200", "type": "non-veg", "category": "rice-roti", "subCategory": "Rice & Noodles"},
    {"name": "Prawn Noodles (Chili Garlic/Schezwan)", "price": "200", "type": "non-veg", "category": "rice-roti", "subCategory": "Rice & Noodles"},

    # DAL & RICE
    {"name": "Plain Dal", "price": "60", "type": "veg", "category": "veg-course", "subCategory": "Dal"},
    {"name": "Dal Fry", "price": "80", "type": "veg", "category": "veg-course", "subCategory": "Dal"},
    {"name": "Dal Tadka", "price": "80", "type": "veg", "category": "veg-course", "subCategory": "Dal"},
    {"name": "Egg Dal Tadka", "price": "120", "type": "non-veg", "category": "non-veg-course", "subCategory": "Non-Veg Curry"},
    
    {"name": "Plain Rice", "price": "60", "type": "veg", "category": "rice-roti", "subCategory": "Rice & Pulao"},
    {"name": "Lemon Rice / Jeera Rice / Veg Pulao", "price": "80", "type": "veg", "category": "rice-roti", "subCategory": "Rice & Pulao"},
    {"name": "Kashmiri Pulao", "price": "90", "type": "veg", "category": "rice-roti", "subCategory": "Rice & Pulao"},
    {"name": "Green Peas Pulao", "price": "90", "type": "veg", "category": "rice-roti", "subCategory": "Rice & Pulao"},
    {"name": "Curd Rice", "price": "80", "type": "veg", "category": "rice-roti", "subCategory": "Rice & Pulao"},

    # BIRIYANI
    {"name": "Veg Biriyani", "price": "180", "type": "veg", "category": "rice-roti", "subCategory": "Biryani"},
    {"name": "Chicken Biriyani", "price": "220", "type": "non-veg", "category": "rice-roti", "subCategory": "Biryani"},
    {"name": "Mutton Biriyani", "price": "300", "type": "non-veg", "category": "rice-roti", "subCategory": "Biryani"},
    {"name": "Egg Biriyani", "price": "190", "type": "non-veg", "category": "rice-roti", "subCategory": "Biryani"},
    {"name": "Prawn Biriyani", "price": "380", "type": "non-veg", "category": "rice-roti", "subCategory": "Biryani"},

    # ROTI
    {"name": "Chapati", "price": "15", "type": "veg", "category": "rice-roti", "subCategory": "Roti"},
    {"name": "Butter Chapati", "price": "20", "type": "veg", "category": "rice-roti", "subCategory": "Roti"},
    {"name": "Plain Paratha", "price": "30", "type": "veg", "category": "rice-roti", "subCategory": "Roti"},
    {"name": "Lachha Paratha", "price": "40", "type": "veg", "category": "rice-roti", "subCategory": "Roti"},

    # DESSERT
    {"name": "Hot Gulab Jamun", "price": "50", "type": "veg", "category": "dessert", "subCategory": "Desserts"},
    {"name": "Rassogola", "price": "50", "type": "veg", "category": "dessert", "subCategory": "Desserts"},
    {"name": "Ice Cream (Vanilla/Strawberry)", "price": "70", "type": "veg", "category": "dessert", "subCategory": "Desserts"},
    {"name": "Ice Cream (Butter Scotch/Pista/Chocolate)", "price": "90", "type": "veg", "category": "dessert", "subCategory": "Desserts"}
]

for idx, p in enumerate(products):
    p["id"] = idx + 1
    p["price"] = int(p["price"])

categories = [
    {
        "id": "breakfast-snacks",
        "name": "☕ Breakfast & Snacks",
        "subs": ["Breakfast", "Snacks"]
    },
    {
        "id": "soup-beverage",
        "name": "🥣 Soup & Beverages",
        "subs": ["Soup", "Beverages"]
    },
    {
        "id": "veg-course",
        "name": "🥦 Veg Main Course",
        "subs": ["Salad & Raita", "Veg Curry", "Dal"]
    },
    {
        "id": "non-veg-course",
        "name": "🍗 Non-Veg Main Course",
        "subs": ["Non-Veg Curry", "Salad & Raita"]
    },
    {
        "id": "rice-roti",
        "name": "🍚 Rice, Biryani & Roti",
        "subs": ["Rice & Noodles", "Rice & Pulao", "Biryani", "Roti"]
    },
    {
        "id": "dessert",
        "name": "🍨 Dessert",
        "subs": ["Desserts"]
    }
]

js_code = f"""// =========================================
// NAWABI THALI - MAIN SCRIPT (MULTI-PAGE)
// =========================================

// Full Menu Data
const products = {json.dumps(products, indent=4)};

const menuCategories = {json.dumps(categories, indent=4)};

// State
let cart = [];
let currentCategory = "breakfast-snacks";
let currentSubCategory = "Breakfast";

// DOM Elements
const productContainer = document.getElementById("product-container");
const cartOverlay = document.getElementById("cart-overlay");
const cartSidebar = document.getElementById("cart-sidebar");
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartBadge = document.getElementById("cart-badge");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalPrice = document.getElementById("cart-total-price");
const checkoutBtn = document.getElementById("checkout-btn");
const bookWhatsappBtn = document.getElementById("book-whatsapp-btn");
const navbar = document.querySelector(".navbar");

// Initialize App
function init() {{
    handlePreloader();
    handleNavbarScroll();
    
    // Only render menu if on menu.html
    if(productContainer) {{
        renderCategories();
        setupMenuListeners();
        renderProducts(currentCategory, currentSubCategory);
    }}
    
    // Global Listeners
    if(openCartBtn && cartSidebar) {{
        openCartBtn.addEventListener("click", toggleCart);
        closeCartBtn.addEventListener("click", toggleCart);
        cartOverlay.addEventListener("click", toggleCart);
        if(checkoutBtn) checkoutBtn.addEventListener("click", processCheckout);
    }}

    if(bookWhatsappBtn) {{
        bookWhatsappBtn.addEventListener("click", processTableBooking);
    }}
}}

function renderCategories() {{
    const stickyContainer = document.getElementById("sticky-menu-tabs");
    if(!stickyContainer) return;

    let catHTML = '<div class="category-tabs" id="category-tabs">';
    menuCategories.forEach(cat => {{
        catHTML += `<button class="tab-btn ${{cat.id === currentCategory ? 'active' : ''}}" data-main-category="${{cat.id}}">${{cat.name}}</button>`;
    }});
    catHTML += '</div><div class="sub-category-tabs" id="sub-category-tabs"></div>';
    
    stickyContainer.innerHTML = catHTML;
    
    const categoryTabs = document.querySelectorAll(".tab-btn");
    categoryTabs.forEach(tab => {{
        tab.addEventListener("click", (e) => {{
            categoryTabs.forEach(t => t.classList.remove("active"));
            e.target.classList.add("active");
            currentCategory = e.target.getAttribute("data-main-category");
            
            const catObj = menuCategories.find(c => c.id === currentCategory);
            currentSubCategory = catObj.subs[0];
            
            updateSubTabs();
            renderProducts(currentCategory, currentSubCategory, document.getElementById("menu-search") ? document.getElementById("menu-search").value : "");
            
            // scroll to products to avoid jumping confusion
            productContainer.scrollIntoView({{ behavior: "smooth", block: "start" }});
        }});
    }});
    
    updateSubTabs();
}}

function updateSubTabs() {{
    const subContainer = document.getElementById("sub-category-tabs");
    if(!subContainer) return;
    const catObj = menuCategories.find(c => c.id === currentCategory);
    
    let subHTML = '';
    catObj.subs.forEach(sub => {{
        subHTML += `<button class="sub-tab-btn ${{sub === currentSubCategory ? 'active' : ''}}" data-sub-category="${{sub}}">${{sub}}</button>`;
    }});
    subContainer.innerHTML = subHTML;
    
    const newSubTabs = document.querySelectorAll(".sub-tab-btn");
    newSubTabs.forEach(tab => {{
        tab.addEventListener("click", (e) => {{
            newSubTabs.forEach(t => t.classList.remove("active"));
            e.target.classList.add("active");
            currentSubCategory = e.target.getAttribute("data-sub-category");
            renderProducts(currentCategory, currentSubCategory, document.getElementById("menu-search") ? document.getElementById("menu-search").value : "");
        }});
    }});
}}

// Preloader Logic
function handlePreloader() {{
    const hidePreloader = () => {{
        setTimeout(() => {{
            document.body.classList.remove('loading');
        }}, 500);
    }};

    if (document.readyState === 'complete') {{
        hidePreloader();
    }} else {{
        window.addEventListener('load', hidePreloader);
    }}
}}

// Navbar scroll effect
function handleNavbarScroll() {{
    if(!navbar) return;
    window.addEventListener("scroll", () => {{
        if(window.scrollY > 50) {{
            navbar.style.padding = "10px 5%";
            navbar.style.background = "rgba(255, 255, 255, 0.98)";
            navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.05)";
        }} else {{
            navbar.style.padding = "15px 5%";
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
            navbar.style.boxShadow = "none";
        }}
    }});
    window.dispatchEvent(new Event('scroll'));
}}

function setupMenuListeners() {{
    const searchInput = document.getElementById("menu-search");
    if (searchInput) {{
        searchInput.addEventListener("input", (e) => {{
            renderProducts(currentCategory, currentSubCategory, e.target.value);
        }});
    }}
}}

// Render Products Based on Main & Sub Category & Search
function renderProducts(mainCategory, subCategory, searchQuery = "") {{
    if(!productContainer) return;
    productContainer.innerHTML = "";
    
    let itemsToRender = [];
    const query = searchQuery.toLowerCase().trim();
    
    itemsToRender = products.filter(p => p.category === mainCategory && p.subCategory === subCategory);

    if (query) {{
        itemsToRender = itemsToRender.filter(p => p.name.toLowerCase().includes(query));
    }}

    if (itemsToRender.length === 0) {{
        productContainer.innerHTML = "<div style='grid-column: 1/-1; text-align: center; color: #888; padding: 40px;'>No dishes available in this category.</div>";
        return;
    }}

    // Add Grid Container
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("menu-section-grid");
    
    // Make it span full width so grid works inside container
    const wrapper = document.createElement("div");
    wrapper.classList.add("menu-section-container");

    itemsToRender.forEach(product => {{
        const isNonVeg = product.type === 'non-veg';
        const dietMark = isNonVeg ? '<span class="diet-mark non-veg" title="Non-Vegetarian"></span>' : '<span class="diet-mark veg" title="Vegetarian"></span>';

        const cartItem = cart.find(i => i.id === product.id);
        
        let actionHTML = '';
        if (cartItem) {{
            actionHTML = `
                <div class="cart-item-controls in-menu">
                    <button class="qty-btn" onclick="updateQuantity(${{product.id}}, -1)">-</button>
                    <span>${{cartItem.quantity}}</span>
                    <button class="qty-btn" onclick="updateQuantity(${{product.id}}, 1)">+</button>
                </div>
            `;
        }} else {{
            actionHTML = `<button class="btn-add" onclick="addToCart(${{product.id}})">Add</button>`;
        }}

        const productEl = document.createElement("div");
        productEl.classList.add("menu-list-item");
        productEl.innerHTML = `
            <div class="item-details">
                <h4 style="display:flex; align-items:flex-start; margin-bottom:5px; margin-top:0;">${{dietMark}}<span style="white-space: normal; overflow-wrap: anywhere; word-break: break-word; flex: 1; min-width: 0;">${{product.name}}</span></h4>
                <div class="item-price">${{product.price === "MRP" ? "MRP" : "₹" + product.price}}</div>
            </div>
            <div class="item-actions" data-id="${{product.id}}">
                ${{actionHTML}}
            </div>
        `;
        gridContainer.appendChild(productEl);
    }});

    wrapper.appendChild(gridContainer);
    productContainer.appendChild(wrapper);
}}

// Toggle Cart Sidebar
function toggleCart() {{
    if(!cartSidebar) return;
    cartSidebar.classList.toggle("active");
    cartOverlay.classList.toggle("active");
}}

// Add to Cart
window.addToCart = function(productId) {{
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {{
        existingItem.quantity += 1;
    }} else {{
        cart.push({{ ...product, quantity: 1 }});
    }}
    
    updateCartUI();
    
    // Tiny animation for button
    const btn = document.querySelector(`button[onclick="addToCart(${{productId}})"]`);
    if(btn) {{
        btn.textContent = "Added!";
        btn.style.background = "var(--primary-gold)";
        btn.style.color = "var(--bg-dark)";
        setTimeout(() => {{
            btn.textContent = "Add";
            btn.style.background = "transparent";
            btn.style.color = "var(--primary-gold)";
        }}, 1000);
    }}
}}

// Update Cart Quantity
window.updateQuantity = function(productId, change) {{
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {{
        cart = cart.filter(i => i.id !== productId);
    }}
    
    updateCartUI();
}}

// Update Menu Buttons Sync
function updateMenuButtons() {{
    const allActions = document.querySelectorAll('.item-actions');
    allActions.forEach(actionDiv => {{
        const productId = parseInt(actionDiv.getAttribute('data-id'));
        if(!productId) return;
        
        const cartItem = cart.find(i => i.id === productId);
        if (cartItem) {{
            actionDiv.innerHTML = `
                <div class="cart-item-controls in-menu">
                    <button class="qty-btn" onclick="updateQuantity(${{productId}}, -1)">-</button>
                    <span>${{cartItem.quantity}}</span>
                    <button class="qty-btn" onclick="updateQuantity(${{productId}}, 1)">+</button>
                </div>
            `;
        }} else {{
            actionDiv.innerHTML = `<button class="btn-add" onclick="addToCart(${{productId}})">Add</button>`;
        }}
    }});
}}

// Update UI
function updateCartUI() {{
    updateMenuButtons();

    const cartBadge = document.getElementById("cart-badge");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartSubtotalPrice = document.getElementById("cart-subtotal-price");
    const cartGstPrice = document.getElementById("cart-gst-price");
    const cartTotalPrice = document.getElementById("cart-total-price");
    const stickyCartFooter = document.getElementById("sticky-cart-footer");
    const stickyCartCount = document.getElementById("sticky-cart-count");
    const stickyCartPrice = document.getElementById("sticky-cart-price");

    if(!cartBadge || !cartItemsContainer) return;
    
    // Update Badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    
    // Update List
    if (cart.length === 0) {{
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Aapka cart abhi khaali hai! Kuch swadisht add karein.</div>';
        if(cartSubtotalPrice) cartSubtotalPrice.textContent = "0";
        if(cartGstPrice) cartGstPrice.textContent = "0";
        if(cartTotalPrice) cartTotalPrice.textContent = "0";
        if(stickyCartFooter) stickyCartFooter.style.display = "none";
        
        // Reset slider if cart is emptied
        const cartSlider = document.getElementById("cart-slider");
        if(cartSlider) cartSlider.style.transform = "translateX(0)";
        return;
    }}
    
    cartItemsContainer.innerHTML = "";
    let subtotalAmount = 0;
    
    cart.forEach(item => {{
        const itemTotal = item.price * item.quantity;
        subtotalAmount += itemTotal;
        
        const isNonVeg = item.type === 'non-veg';
        const dietMark = isNonVeg ? '<span class="diet-mark non-veg" title="Non-Vegetarian" style="margin-right: 5px;"></span>' : '<span class="diet-mark veg" title="Vegetarian" style="margin-right: 5px;"></span>';

        const cartItemEl = document.createElement("div");
        cartItemEl.classList.add("cart-item");
        cartItemEl.innerHTML = `
            <div class="cart-item-info">
                <h4 style="display:flex; align-items:flex-start;"><span style="margin-top: 4px;">${{dietMark}}</span><span style="white-space: normal; overflow-wrap: anywhere; word-break: break-word; flex: 1; min-width: 0;">${{item.name}}</span></h4>
                <p>₹${{item.price}} x ${{item.quantity}}</p>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity(${{item.id}}, -1)">-</button>
                <span>${{item.quantity}}</span>
                <button class="qty-btn" onclick="updateQuantity(${{item.id}}, 1)">+</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    }});
    
    // Calculate GST
    const gstAmount = Math.round(subtotalAmount * 0.18);
    const grandTotal = subtotalAmount + gstAmount;

    // Update Totals
    if(cartSubtotalPrice) cartSubtotalPrice.textContent = subtotalAmount;
    if(cartGstPrice) cartGstPrice.textContent = gstAmount;
    if(cartTotalPrice) cartTotalPrice.textContent = grandTotal;

    // Update Sticky Footer
    if(stickyCartFooter) {{
        stickyCartFooter.style.display = "flex";
        stickyCartCount.textContent = totalItems + (totalItems > 1 ? " Items" : " Item");
        stickyCartPrice.textContent = "₹" + grandTotal;
    }}
}}

// Proceed to Checkout Button Logic
document.addEventListener("DOMContentLoaded", () => {{
    const proceedBtn = document.getElementById("proceed-checkout-btn");
    const backBtn = document.getElementById("back-to-cart-btn");
    const cartSlider = document.getElementById("cart-slider");
    
    if (proceedBtn && cartSlider) {{
        proceedBtn.addEventListener("click", () => {{
            cartSlider.style.transform = "translateX(-50%)";
        }});
    }}
    
    if (backBtn && cartSlider) {{
        backBtn.addEventListener("click", () => {{
            cartSlider.style.transform = "translateX(0)";
        }});
    }}
}});

// Process WhatsApp Checkout
async function processCheckout() {{
    if (cart.length === 0) {{
        alert("Bhai, cart khaali hai. Pehle kuch items add karein!");
        return;
    }}
    
    const custName = document.getElementById("cust-name").value.trim();
    const custAltPhone = document.getElementById("cust-alt-phone").value.trim();
    const custRoom = document.getElementById("cust-room").value.trim();
    const errorDiv = document.getElementById("checkout-error");
    
    if (errorDiv) errorDiv.style.display = "none";
    
    if (!custName || !custAltPhone || !custRoom) {{
        if (errorDiv) {{
            errorDiv.textContent = "Please fill in all the details including Room Number to proceed.";
            errorDiv.style.display = "block";
        }} else {{
            alert("Please fill in all the details including Room Number to proceed.");
        }}
        return;
    }}

    // 1. Message ka Text banana
    const crownEmoji = String.fromCodePoint(0x1F451);

    let orderText = `*Puri Sand Hotel Room Service* ${{crownEmoji}}\n\n`;

    orderText += `*Customer Details:*\n`;
    orderText += `- Name: ${{custName}}\n`;
    orderText += `- Room Number: ${{custRoom}}\n`;
    orderText += `- Phone: ${{custAltPhone}}\n`;

    orderText += `\n*Order Items:*\n`;

    // 3. Cart Items
    let subtotal = 0;

    // Emoji Unicode
    const redCircle = String.fromCodePoint(0x1F534);   // 🔴
    const greenCircle = String.fromCodePoint(0x1F7E2); // 🟢

    cart.forEach(item => {{
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        // Add item to WhatsApp message
        const symbol = item.type === 'non-veg' ? redCircle : greenCircle;
        orderText += `${{symbol}} ${{item.name}} (x${{item.quantity}}) = ₹${{itemTotal}}\n`;
    }});

    // 4. GST aur Total Calculation
    const gst = Math.round(subtotal * 0.18);
    const grandTotal = subtotal + gst;

    orderText += `\n------------------\n`;
    orderText += `Subtotal: ₹${{subtotal}}\n`;
    orderText += `GST (18%): ₹${{gst}}\n`;
    orderText += `*Grand Total: ₹${{grandTotal}}*\n`;
    orderText += `------------------\n\n`;
    orderText += `Please confirm this order as soon as possible.`;

    // 5. WhatsApp Number
    const whatsappNumber = "919437752000";

    // 6. Message Encode
    const encodedText = encodeURIComponent(orderText);

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${{whatsappNumber}}&text=${{encodedText}}`;

    // 7. WhatsApp Open
    window.open(whatsappUrl, "_blank");
}}

// Process Table Booking
function processTableBooking() {{
    const bookName = document.getElementById("book-name").value.trim();
    const bookDate = document.getElementById("book-date").value;
    const bookTime = document.getElementById("book-time").value;
    const bookGuests = document.getElementById("book-guests").value;
    
    if (!bookName || !bookDate || !bookTime || !bookGuests) {{
        alert("Please fill in all details to book a table.");
        return;
    }}
    
    let bookingText = `*Puri Sand Hotel - Table Reservation* 🍽️\n\n`;
    bookingText += `*Name:* ${{bookName}}\n`;
    bookingText += `*Date:* ${{bookDate}}\n`;
    bookingText += `*Time:* ${{bookTime}}\n`;
    bookingText += `*Guests:* ${{bookGuests}} People\n\n`;
    bookingText += `Please confirm my table reservation.`;
    
    const whatsappNumber = "919437752000"; 
    
    const encodedText = encodeURIComponent(bookingText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${{whatsappNumber}}&text=${{encodedText}}`;
    
    window.open(whatsappUrl, '_blank');
}}

document.addEventListener("DOMContentLoaded", init);
"""

with open("food-script.js", "w", encoding="utf-8") as f:
    f.write(js_code)
