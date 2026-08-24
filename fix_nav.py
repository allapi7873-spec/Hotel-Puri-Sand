import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replace the mobile bottom nav entirely for a clean update
old_nav_regex = re.compile(r'<!-- Mobile Only Bottom Navigation Bar -->.*?</div>\s*<!-- Booking Modal -->', re.DOTALL)

new_nav = """<!-- Mobile Only Bottom Navigation Bar -->
  <div class="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#050508] backdrop-blur-md border-t border-gold/20 shadow-2xl flex justify-around items-center py-2 px-1">
    <a href="./" class="mobile-tab-btn flex flex-col items-center justify-center text-[10px] text-gray-400 flex-1 py-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <span>Home</span>
    </a>
    <a href="rooms" class="mobile-tab-btn flex flex-col items-center justify-center text-[10px] text-gray-400 flex-1 py-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
      <span>Rooms</span>
    </a>
    
    <!-- Floating App Food Menu Button -->
    <a href="food" class="-mt-6 w-14 h-14 rounded-full bg-gold-gradient text-white flex items-center justify-center shadow-lg shadow-gold/40 border-4 border-luxury-white focus:outline-none flex-shrink-0 animate-bounce">
      <i class="fa-solid fa-utensils text-2xl"></i>
    </a>
    
    <!-- WhatsApp Booking replaced existing Menu/Services -->
    <button onclick="openBookingModal()" class="mobile-tab-btn flex flex-col items-center justify-center text-[10px] text-gray-400 flex-1 py-1">
      <i class="fa-brands fa-whatsapp text-lg mb-0.5" style="font-size: 1.1rem; margin-bottom: 2px;"></i>
      <span>WhatsApp</span>
    </button>
    
    <a href="location" class="mobile-tab-btn flex flex-col items-center justify-center text-[10px] text-gray-400 flex-1 py-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span>Map</span>
    </a>
  </div>

  <!-- Booking Modal -->"""

if old_nav_regex.search(html):
    html = old_nav_regex.sub(new_nav, html)
else:
    print("Could not find the navigation block in index.html!")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Updated index.html")
