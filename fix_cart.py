import re

with open("food.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Remove duplicated cart block
# The cart block starts with <!-- Sticky Cart Footer (Blinkit Style) -->
cart_marker = "<!-- Sticky Cart Footer (Blinkit Style) -->"
parts = html.split(cart_marker)
if len(parts) >= 3:
    # It appears multiple times. We keep the first one (parts[1]) and discard the second one (parts[2])
    # parts[0] is everything before the first marker.
    # parts[1] is the first cart block up to the second marker.
    # parts[2] is the second cart block up to... wait.
    # The block ends before <script src="food-script.js"></script>
    
    # Let's use regex to find and replace the second block.
    # The block ends with </div> just before <!-- Footer -->
    pass

# A safer way to deduplicate:
# Just find the exact string of the duplicated block and replace it with empty.
cart_block_regex = re.compile(r'<!-- Sticky Cart Footer \(Blinkit Style\).*?<div class="cart-step cart-step-2">.*?</div>\s*</div>\s*</div>\s*</div>', re.DOTALL)

matches = cart_block_regex.findall(html)
if len(matches) > 1:
    # Replace all but the first one
    for match in matches[1:]:
        html = html.replace(match, "")

# 2. Add Desktop Cart Button next to Book Now
book_now_btn = """<button onclick="openBookingModal()" class="px-5 py-2.5 rounded-full bg-gold-gradient text-white text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-gold-glow hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
          <i class="fa-brands fa-whatsapp text-sm"></i> Book Now
        </button>"""

desktop_cart_btn = """<button id="open-cart-btn" class="px-5 py-2.5 rounded-full border border-gold text-gold text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-gold-glow hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2" onclick="toggleCart()">
          <i class="fa-solid fa-cart-shopping text-sm"></i> Cart <span id="cart-badge" class="bg-gold text-[#050508] rounded-full px-1.5 py-0.5 text-[10px] font-bold">0</span>
        </button>"""

if 'id="open-cart-btn"' not in html:
    html = html.replace(book_now_btn, desktop_cart_btn + "\n        " + book_now_btn)

# 3. Fix Mobile Bottom Nav
# In food.html, the mobile bottom nav is at the end. It only has Home, Rooms, and a Book button.
# Let's add Menu and Cart.
# We will just replace the entire mobile bottom nav with a new one.

mobile_nav_start = "<!-- Mobile Only Bottom Navigation Bar -->"
mobile_nav_end = "<!-- Booking Modal (Full Screen with glassmorphism) -->"

if mobile_nav_start in html and mobile_nav_end in html:
    start_idx = html.find(mobile_nav_start)
    end_idx = html.find(mobile_nav_end)
    
    new_mobile_nav = """<!-- Mobile Only Bottom Navigation Bar -->
  <div class="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#050508] backdrop-blur-md border-t border-gold/20 shadow-2xl flex justify-around items-center py-2 px-1">
    <a href="./" class="mobile-tab-btn flex flex-col items-center justify-center text-[10px] text-gray-400 flex-1 py-1">
      <i class="fa-solid fa-home text-lg mb-1"></i>
      <span>Home</span>
    </a>
    <a href="rooms.html" class="mobile-tab-btn flex flex-col items-center justify-center text-[10px] text-gray-400 flex-1 py-1">
      <i class="fa-solid fa-bed text-lg mb-1"></i>
      <span>Rooms</span>
    </a>
    <a href="food.html" class="mobile-tab-btn flex flex-col items-center justify-center text-[10px] text-gold flex-1 py-1">
      <i class="fa-solid fa-utensils text-lg mb-1"></i>
      <span>Menu</span>
    </a>
    <button onclick="toggleCart()" class="mobile-tab-btn flex flex-col items-center justify-center text-[10px] text-gray-400 flex-1 py-1 relative">
      <i class="fa-solid fa-cart-shopping text-lg mb-1"></i>
      <span>Cart</span>
      <span id="mobile-cart-badge" class="absolute top-0 right-3 bg-red-600 text-white rounded-full h-4 w-4 flex items-center justify-center text-[9px] font-bold">0</span>
    </button>
  </div>

  """
    html = html[:start_idx] + new_mobile_nav + html[end_idx:]

with open("food.html", "w", encoding="utf-8") as f:
    f.write(html)

# Now fix CSS: remove .mobile-bottom-nav from food-style.css
with open("food-style.css", "r", encoding="utf-8") as f:
    css = f.read()

# The CSS block starts at .mobile-bottom-nav { and ends at .nav-item.active { ... }
# Let's just use regex to remove it
css = re.sub(r'\.mobile-bottom-nav\s*\{.*?\.nav-item\.active\s*\{.*?\}', '', css, flags=re.DOTALL)
# Also remove .nav-item { ... }
css = re.sub(r'\.nav-item\s*\{.*?\}', '', css, flags=re.DOTALL)

with open("food-style.css", "w", encoding="utf-8") as f:
    f.write(css)

print("Done")
