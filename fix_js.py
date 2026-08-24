import re

with open("food-script.js", "r", encoding="utf-8") as f:
    js = f.read()

# Add mobileCartBadge to the DOM elements and update logic
js = js.replace('const cartBadge = document.getElementById("cart-badge");', 
                'const cartBadge = document.getElementById("cart-badge");\nconst mobileCartBadge = document.getElementById("mobile-cart-badge");')

js = js.replace('cartBadge.textContent = totalItems;', 
                'if(cartBadge) cartBadge.textContent = totalItems;\n    if(mobileCartBadge) mobileCartBadge.textContent = totalItems;')

with open("food-script.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Done JS")
