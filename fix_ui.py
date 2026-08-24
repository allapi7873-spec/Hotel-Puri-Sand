import re

def main():
    # 1. Read rooms.html to get the shell
    with open("rooms.html", "r", encoding="utf-8") as f:
        rooms_content = f.read()

    # Extract head + preloader + header + mobile menu
    # Split by <!-- Page Header -->
    parts = rooms_content.split('<!-- Page Header -->')
    shell_top = parts[0]
    
    # We also need a page header for food
    page_header = """
  <!-- Page Header -->
  <section class="relative bg-[#050508] py-8 md:py-20 border-b border-gold/25 overflow-hidden">
    <div class="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-gold/10 blur-3xl"></div>
    <div class="max-w-7xl mx-auto px-4 text-center space-y-4 sm:px-6 lg:px-8 relative z-10">
      <img src="./main logo.png" alt="Puri Sand Logo" class="h-16 w-auto object-contain mx-auto mb-2 md:hidden" />
      <h1 class="font-title text-4xl md:text-5xl font-extrabold tracking-widest text-gold-gradient uppercase" data-aos="fade-down">Food Menu</h1>
      <p class="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold" data-aos="fade-up">Royal Room Service & Dining</p>
      <div class="w-16 h-0.5 bg-gold mx-auto rounded-full"></div>
    </div>
  </section>
  
  <div id="food-menu-wrapper" style="min-height: 70vh;">
"""

    # Extract Footer from rooms.html
    footer_split = rooms_content.split('<!-- Footer -->')
    shell_bottom = '</div>\n\n  <!-- Footer -->' + footer_split[1]

    # Fix the active class in nav in shell_top
    shell_top = shell_top.replace('<a href="rooms" class="nav-link-underline hover:text-gold transition-colors duration-300">Rooms</a>', '<a href="rooms" class="nav-link-underline hover:text-gold transition-colors duration-300">Rooms</a>')
    
    # Replace the <title> and meta
    shell_top = re.sub(r'<title>.*?</title>', '<title>Food Menu & Room Service | Puri Sand Resort & Hotel</title>', shell_top)
    
    # Add food-style.css link to head
    shell_top = shell_top.replace('</head>', '  <link rel="stylesheet" href="food-style.css" />\n</head>')

    # 2. Read food.html to get the menu content
    with open("food.html", "r", encoding="utf-8") as f:
        food_content = f.read()

    # Extract everything between <main id="menu" and the end of the cart sidebar
    main_match = re.search(r'(<main id="menu".*?</div>\s*</div>\s*</div>\s*</div>)', food_content, re.DOTALL)
    if not main_match:
        # fallback, just try to get body content roughly
        menu_content = food_content
    else:
        menu_content = main_match.group(1)
        
    # We also need the sticky cart footer and cart overlay
    cart_overlay_match = re.search(r'(<!-- Sticky Cart Footer.*?</div>\s*</div>)', food_content, re.DOTALL)
    if cart_overlay_match:
        menu_content += "\n" + cart_overlay_match.group(1)

    # 3. Read food-script.js link
    script_tag = '<script src="food-script.js"></script>'
    
    # Assembly
    final_html = shell_top + page_header + menu_content + '\n' + script_tag + '\n' + shell_bottom
    
    with open("food.html", "w", encoding="utf-8") as f:
        f.write(final_html)
        
    # 4. Clean up food-style.css to remove global styles that conflict with Tailwind
    with open("food-style.css", "r", encoding="utf-8") as f:
        css = f.read()
        
    # Remove body {...}
    css = re.sub(r'body\s*{[^}]+}', '', css)
    # Remove header / navbar / preloader styles
    css = re.sub(r'\.navbar\s*{[^}]+}', '', css)
    css = re.sub(r'\.page-header\s*{[^}]+}', '', css)
    css = re.sub(r'\#preloader\s*{[^}]+}', '', css)
    
    # scope the rest to #food-menu-wrapper to avoid conflicts, or just leave it if it uses specific classes
    # Because there are many classes like .menu-list-container, we can just save it.
    
    with open("food-style.css", "w", encoding="utf-8") as f:
        f.write(css)

main()
