// =========================================
// NAWABI THALI - MAIN SCRIPT (MULTI-PAGE)
// =========================================

// Full Menu Data
const products = [];


// State
let cart = [];
let currentCategory = "breakfast-snacks";
let currentSubCategory = "Nawabi Breakfast";

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
const categoryTabs = document.querySelectorAll(".tab-btn");
const navbar = document.querySelector(".navbar");

// Initialize App
function init() {
    handlePreloader();
    handleNavbarScroll();
    
    // Only render menu if on menu.html
    if(productContainer) {
        renderProducts(currentCategory, currentSubCategory);
        setupMenuListeners();
    }
    
    // Global Listeners
    if(openCartBtn && cartSidebar) {
        openCartBtn.addEventListener("click", toggleCart);
        closeCartBtn.addEventListener("click", toggleCart);
        cartOverlay.addEventListener("click", toggleCart);
        if(checkoutBtn) checkoutBtn.addEventListener("click", processCheckout);
    }

    if(bookWhatsappBtn) {
        bookWhatsappBtn.addEventListener("click", processTableBooking);
    }
}

// Preloader Logic
function handlePreloader() {
    const hidePreloader = () => {
        setTimeout(() => {
            document.body.classList.remove('loading');
        }, 500);
    };

    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
    }
}

// Navbar scroll effect
function handleNavbarScroll() {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 50) {
            navbar.style.padding = "10px 5%";
            navbar.style.background = "rgba(255, 255, 255, 0.98)";
            navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.05)";
        } else {
            navbar.style.padding = "15px 5%";
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
            navbar.style.boxShadow = "none";
        }
    });
    // Trigger once on load to set initial state correctly
    const subCatContainer = document.getElementById("sub-category-tabs");
    if(subCatContainer && currentCategory === "breakfast-snacks") {
        subCatContainer.innerHTML = `
            <button class="sub-tab-btn active" data-sub-category="Nawabi Breakfast">Nawabi Breakfast</button>
            <button class="sub-tab-btn" data-sub-category="Snacks/Quick Bites">Snacks/Quick Bites</button>
            <button class="sub-tab-btn" data-sub-category="Salad & Raita">Salad & Raita</button>
        `;
        const newSubTabs = document.querySelectorAll(".sub-tab-btn");
        newSubTabs.forEach(tab => {
            tab.addEventListener("click", (e) => {
                newSubTabs.forEach(t => t.classList.remove("active"));
                e.target.classList.add("active");
                currentSubCategory = e.target.getAttribute("data-sub-category");
                renderProducts(currentCategory, currentSubCategory, document.getElementById("menu-search") ? document.getElementById("menu-search").value : "");
            });
        });
    }
    window.dispatchEvent(new Event('scroll'));
}

// Menu Specific Listeners
// Menu Specific Listeners
function setupMenuListeners() {
    const subCategoryTabs = document.querySelectorAll(".sub-tab-btn");
    const subCategoryContainer = document.getElementById("sub-category-tabs");
    const searchInput = document.getElementById("menu-search");

    function updateSubTabs(category) {
        if(!subCategoryContainer) return;
        
        if (category === 'breakfast-snacks') {
            subCategoryContainer.innerHTML = `
                <button class="sub-tab-btn active" data-sub-category="Nawabi Breakfast">Nawabi Breakfast</button>
                <button class="sub-tab-btn" data-sub-category="Snacks/Quick Bites">Snacks/Quick Bites</button>
                <button class="sub-tab-btn" data-sub-category="Salad & Raita">Salad & Raita</button>
            `;
            currentSubCategory = 'Nawabi Breakfast';
        } else if (category === 'soups-beverages') {
            subCategoryContainer.innerHTML = `
                <button class="sub-tab-btn active" data-sub-category="Soup">Soup</button>
                <button class="sub-tab-btn" data-sub-category="Beverages">Beverages</button>
            `;
            currentSubCategory = 'Soup';
        } else if (category === 'pure-veg') {
            subCategoryContainer.innerHTML = `
                <button class="sub-tab-btn active" data-sub-category="Vegetable Stater">Vegetable Stater</button>
                <button class="sub-tab-btn" data-sub-category="Mashroom/Paneer">Mashroom/Paneer</button>
                <button class="sub-tab-btn" data-sub-category="Chinese Delicate Main Course">Chinese Delicate</button>
                <button class="sub-tab-btn" data-sub-category="Odia/Bengali Special (Veg)">Odia/Bengali Special</button>
                <button class="sub-tab-btn" data-sub-category="Tandoor Khazana">Tandoor Khazana (Veg)</button>
            `;
            currentSubCategory = 'Vegetable Stater';
        } else if (category === 'non-veg') {
            subCategoryContainer.innerHTML = `
                <button class="sub-tab-btn active" data-sub-category="Nonveg Stater">Nonveg Stater</button>
                <button class="sub-tab-btn" data-sub-category="Nonveg (Main)">Nonveg (Main)</button>
                <button class="sub-tab-btn" data-sub-category="Non-Veg Curry">Non-Veg Curry</button>
                <button class="sub-tab-btn" data-sub-category="Tandoor Khazana">Tandoor Khazana (Non-Veg)</button>
            `;
            currentSubCategory = 'Nonveg Stater';
        } else if (category === 'rice-thali') {
            subCategoryContainer.innerHTML = `
                <button class="sub-tab-btn active" data-sub-category="Rice">Rice</button>
                <button class="sub-tab-btn" data-sub-category="Combo Special">Combo Special</button>
                <button class="sub-tab-btn" data-sub-category="Nawabi Thali">Nawabi Thali</button>
            `;
            currentSubCategory = 'Rice';
        }
        
        // Re-attach listeners to new sub-tabs
        const newSubTabs = document.querySelectorAll(".sub-tab-btn");
        newSubTabs.forEach(tab => {
            tab.addEventListener("click", (e) => {
                newSubTabs.forEach(t => t.classList.remove("active"));
                e.target.classList.add("active");
                currentSubCategory = e.target.getAttribute("data-sub-category");
                renderProducts(currentCategory, currentSubCategory, searchInput ? searchInput.value : "");
            });
        });
    }

    categoryTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            categoryTabs.forEach(t => t.classList.remove("active"));
            e.target.classList.add("active");
            currentCategory = e.target.getAttribute("data-main-category");
            
            if(subCategoryContainer) {
                subCategoryContainer.style.display = 'flex';
                updateSubTabs(currentCategory);
            }
            
            renderProducts(currentCategory, currentSubCategory, searchInput ? searchInput.value : "");
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            renderProducts(currentCategory, currentSubCategory, e.target.value);
        });
    }
}

// Render Products Based on Main & Sub Category & Search
function renderProducts(mainCategory, subCategory, searchQuery = "") {
    if(!productContainer) return;
    productContainer.innerHTML = "";
    
    let itemsToRender = [];
    const query = searchQuery.toLowerCase().trim();
    
    if (mainCategory === 'pure-veg' && subCategory === 'Tandoor Khazana') {
        itemsToRender = products.filter(p => p.category === 'Tandoor Khazana' && !p.name.match(/Chicken|Mutton|Fish|Prawn|Egg|Tangri|Pomfret/i));
    } else if (mainCategory === 'non-veg' && subCategory === 'Tandoor Khazana') {
        itemsToRender = products.filter(p => p.category === 'Tandoor Khazana' && p.name.match(/Chicken|Mutton|Fish|Prawn|Egg|Tangri|Pomfret/i));
    } else {
        itemsToRender = products.filter(p => p.category === subCategory);
    }

    if (query) {
        itemsToRender = itemsToRender.filter(p => p.name.toLowerCase().includes(query));
    }

    if (itemsToRender.length === 0) {
        productContainer.innerHTML = "<div style='grid-column: 1/-1; text-align: center; color: #888; padding: 40px;'>No dishes available in this category.</div>";
        return;
    }

    // Add Grid Container
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("menu-section-grid");
    
    // Make it span full width so grid works inside container
    const wrapper = document.createElement("div");
    wrapper.classList.add("menu-section-container");

    itemsToRender.forEach(product => {
        const isNonVeg = product.type === 'non-veg';
        const dietMark = isNonVeg ? '<span class="diet-mark non-veg" title="Non-Vegetarian"></span>' : '<span class="diet-mark veg" title="Vegetarian"></span>';

        const cartItem = cart.find(i => i.id === product.id);
        
        let actionHTML = '';
        if (cartItem) {
            actionHTML = `
                <div class="cart-item-controls in-menu">
                    <button class="qty-btn" onclick="updateQuantity(${product.id}, -1)">-</button>
                    <span>${cartItem.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
                </div>
            `;
        } else {
            actionHTML = `<button class="btn-add" onclick="addToCart(${product.id})">Add</button>`;
        }

        const productEl = document.createElement("div");
        productEl.classList.add("menu-list-item");
        productEl.innerHTML = `
            <div class="item-details">
                <h4 style="display:flex; align-items:flex-start; margin-bottom:5px; margin-top:0;">${dietMark}<span style="white-space: normal; overflow-wrap: anywhere; word-break: break-word; flex: 1; min-width: 0;">${product.name}</span></h4>
                <div class="item-price">${product.price === "MRP" ? "MRP" : "₹" + product.price}</div>
            </div>
            <div class="item-actions" data-id="${product.id}">
                ${actionHTML}
            </div>
        `;
        gridContainer.appendChild(productEl);
    });

    wrapper.appendChild(gridContainer);
    productContainer.appendChild(wrapper);
}

// Toggle Cart Sidebar
function toggleCart() {
    if(!cartSidebar) return;
    cartSidebar.classList.toggle("active");
    cartOverlay.classList.toggle("active");
}

// Add to Cart
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    
    // Tiny animation for button
    const btn = document.querySelector(`button[onclick="addToCart(${productId})"]`);
    if(btn) {
        btn.textContent = "Added!";
        btn.style.background = "var(--primary-gold)";
        btn.style.color = "var(--bg-dark)";
        setTimeout(() => {
            btn.textContent = "Add";
            btn.style.background = "transparent";
            btn.style.color = "var(--primary-gold)";
        }, 1000);
    }
}

// Update Cart Quantity
window.updateQuantity = function(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }
    
    updateCartUI();
}

// Update Menu Buttons Sync
function updateMenuButtons() {
    const allActions = document.querySelectorAll('.item-actions');
    allActions.forEach(actionDiv => {
        const productId = parseInt(actionDiv.getAttribute('data-id'));
        if(!productId) return;
        
        const cartItem = cart.find(i => i.id === productId);
        if (cartItem) {
            actionDiv.innerHTML = `
                <div class="cart-item-controls in-menu">
                    <button class="qty-btn" onclick="updateQuantity(${productId}, -1)">-</button>
                    <span>${cartItem.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${productId}, 1)">+</button>
                </div>
            `;
        } else {
            actionDiv.innerHTML = `<button class="btn-add" onclick="addToCart(${productId})">Add</button>`;
        }
    });
}

// Update UI
function updateCartUI() {
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
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Aapka cart abhi khaali hai! Kuch swadisht add karein.</div>';
        if(cartSubtotalPrice) cartSubtotalPrice.textContent = "0";
        if(cartGstPrice) cartGstPrice.textContent = "0";
        if(cartTotalPrice) cartTotalPrice.textContent = "0";
        if(stickyCartFooter) stickyCartFooter.style.display = "none";
        
        // Reset slider if cart is emptied
        const cartSlider = document.getElementById("cart-slider");
        if(cartSlider) cartSlider.style.transform = "translateX(0)";
        return;
    }
    
    cartItemsContainer.innerHTML = "";
    let subtotalAmount = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotalAmount += itemTotal;
        
        const isNonVeg = item.type === 'non-veg';
        const dietMark = isNonVeg ? '<span class="diet-mark non-veg" title="Non-Vegetarian" style="margin-right: 5px;"></span>' : '<span class="diet-mark veg" title="Vegetarian" style="margin-right: 5px;"></span>';

        const cartItemEl = document.createElement("div");
        cartItemEl.classList.add("cart-item");
        cartItemEl.innerHTML = `
            <div class="cart-item-info">
                <h4 style="display:flex; align-items:flex-start;"><span style="margin-top: 4px;">${dietMark}</span><span style="white-space: normal; overflow-wrap: anywhere; word-break: break-word; flex: 1; min-width: 0;">${item.name}</span></h4>
                <p>\u20B9${item.price} x ${item.quantity}</p>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });
    
    // Calculate GST
    const gstAmount = Math.round(subtotalAmount * 0.18);
    const grandTotal = subtotalAmount + gstAmount;

    // Update Totals
    if(cartSubtotalPrice) cartSubtotalPrice.textContent = subtotalAmount;
    if(cartGstPrice) cartGstPrice.textContent = gstAmount;
    if(cartTotalPrice) cartTotalPrice.textContent = grandTotal;

    // Update Sticky Footer
    if(stickyCartFooter) {
        stickyCartFooter.style.display = "flex";
        stickyCartCount.textContent = totalItems + (totalItems > 1 ? " Items" : " Item");
        stickyCartPrice.textContent = "\u20B9" + grandTotal;
    }
}

// Proceed to Checkout Button Logic
document.addEventListener("DOMContentLoaded", () => {
    const proceedBtn = document.getElementById("proceed-checkout-btn");
    const backBtn = document.getElementById("back-to-cart-btn");
    const cartSlider = document.getElementById("cart-slider");
    
    if (proceedBtn && cartSlider) {
        proceedBtn.addEventListener("click", () => {
            cartSlider.style.transform = "translateX(-50%)";
        });
    }
    
    if (backBtn && cartSlider) {
        backBtn.addEventListener("click", () => {
            cartSlider.style.transform = "translateX(0)";
        });
    }
});

// Process WhatsApp Checkout
async function processCheckout() {
    if (cart.length === 0) {
        alert("Bhai, cart khaali hai. Pehle kuch items add karein!");
        return;
    }
    
    const custName = document.getElementById("cust-name").value.trim();
    const custAltPhone = document.getElementById("cust-alt-phone").value.trim();
    const custRoom = document.getElementById("cust-room").value.trim();
    const errorDiv = document.getElementById("checkout-error");
    
    if (errorDiv) errorDiv.style.display = "none";
    
    if (!custName || !custAltPhone || !custRoom) {
        if (errorDiv) {
            errorDiv.textContent = "Please fill in all the details including Room Number to proceed.";
            errorDiv.style.display = "block";
        } else {
            alert("Please fill in all the details including Room Number to proceed.");
        }
        return;
    }

    // 1. Message ka Text banana
    const crownEmoji = String.fromCodePoint(0x1F451);

    let orderText = `*Puri Sand Hotel Room Service* ${crownEmoji}\n\n`;

    orderText += `*Customer Details:*\n`;
    orderText += `- Name: ${custName}\n`;
    orderText += `- Room Number: ${custRoom}\n`;
    orderText += `- Phone: ${custAltPhone}\n`;

    orderText += `\n*Order Items:*\n`;


    // 3. Cart Items
    let subtotal = 0;

    // Emoji Unicode
    const redCircle = String.fromCodePoint(0x1F534);   // ðŸ”´
    const greenCircle = String.fromCodePoint(0x1F7E2); // ðŸŸ¢

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;

        subtotal += itemTotal;


        // -----------------------------------------
        // VEG / NON-VEG DETECTION
        // -----------------------------------------

        const category = String(item.category || "")
            .toLowerCase()
            .replace(/[\s_-]/g, "");

        const itemName = String(item.name || "").toLowerCase();


        // Non-Veg keywords
        const nonVegKeywords = [
            "nonveg",
            "nonvegetarian",
            "chicken",
            "mutton",
            "egg",
            "prawn",
            "prawns",
            "fish",
            "seafood",
            "biryani"
        ];


        // Check category
        let isNonVeg = category.includes("nonveg");


        // Check item name
        if (!isNonVeg) {
            isNonVeg = nonVegKeywords.some(keyword =>
                itemName.includes(keyword)
            );
        }


        // -----------------------------------------
        // RED / GREEN SYMBOL
        // -----------------------------------------

        const symbol = isNonVeg
            ? redCircle
            : greenCircle;


        // Add item to WhatsApp message
        orderText += `${symbol} ${item.name} (x${item.quantity}) = \u20B9${itemTotal}\n`;
    });


    // 4. GST aur Total Calculation
    const gst = Math.round(subtotal * 0.18);
    const grandTotal = subtotal + gst;


    orderText += `\n------------------\n`;

    orderText += `Subtotal: \u20B9${subtotal}\n`;

    orderText += `GST (18%): \u20B9${gst}\n`;

    orderText += `*Grand Total: \u20B9${grandTotal}*\n`;

    orderText += `------------------\n\n`;

    orderText += `Please confirm this order as soon as possible.`;


    // 5. WhatsApp Number
    const whatsappNumber = "919437752000";


    // 6. Message Encode
    const encodedText = encodeURIComponent(orderText);


    // IMPORTANT:
    // wa.me ki jagah api.whatsapp.com use karo
    const whatsappUrl =
        `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;


    // 7. WhatsApp Open
    window.open(whatsappUrl, "_blank");
}

// Process Table Booking
function processTableBooking() {
    const bookName = document.getElementById("book-name").value.trim();
    const bookDate = document.getElementById("book-date").value;
    const bookTime = document.getElementById("book-time").value;
    const bookGuests = document.getElementById("book-guests").value;
    
    if (!bookName || !bookDate || !bookTime || !bookGuests) {
        alert("Please fill in all details to book a table.");
        return;
    }
    
    let bookingText = `*Puri Sand Hotel - Table Reservation* \uD83C\uDF7D\uFE0F\n\n`;
    bookingText += `*Name:* ${bookName}\n`;
    bookingText += `*Date:* ${bookDate}\n`;
    bookingText += `*Time:* ${bookTime}\n`;
    bookingText += `*Guests:* ${bookGuests} People\n\n`;
    bookingText += `Please confirm my table reservation.`;
    
    const whatsappNumber = "919437752000"; 
    
    const encodedText = encodeURIComponent(bookingText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
}

document.addEventListener("DOMContentLoaded", init);




