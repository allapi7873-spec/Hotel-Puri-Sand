import re

with open("food-style.css", "r", encoding="utf-8") as f:
    css = f.read()

replacements = [
    (r"\.cart-sidebar {\s*position: fixed;.*?background: #FFFFFF;", 
     r".cart-sidebar {\n    position: fixed; top: 0; right: -400px; width: 100%; max-width: 400px;\n    height: 100vh; background: var(--bg-dark); /* DARK BG */"),
    
    (r"\.cart-item {\s*display: flex;.*?border-bottom: 1px solid #EEEEEE;", 
     r".cart-item {\n    display: flex; justify-content: space-between; align-items: center;\n    padding-bottom: 15px; border-bottom: 1px solid rgba(212, 175, 55, 0.2);"),
    
    (r"\.cart-item-controls {\s*display: flex;.*?background: #FDFBF7;\s*border: 1px solid #EEEEEE;",
     r".cart-item-controls {\n    display: flex; align-items: center; gap: 10px;\n    background: var(--bg-card); border: 1px solid rgba(212, 175, 55, 0.3);"),
    
    (r"\.qty-btn {\s*background: #FFFFFF;\s*border: 1px solid rgba\(212, 175, 55, 0\.3\);",
     r".qty-btn {\n    background: transparent; border: 1px solid rgba(212, 175, 55, 0.3); color: var(--text-light);"),
    
    (r"\.cart-footer {\s*padding: 20px;\s*background: #FDFBF7;\s*border-top: 1px solid #EEEEEE;\s*}",
     r".cart-footer { padding: 20px; background: var(--bg-card); border-top: 1px solid rgba(212, 175, 55, 0.2); }"),
    
    (r"\.total-row {\s*display: flex;\s*justify-content: space-between;\s*margin-bottom: 10px;\s*font-weight: 500;\s*}",
     r".total-row { display: flex; justify-content: space-between; margin-bottom: 10px; font-weight: 500; color: var(--text-light); }"),
     
    (r"border-top: 1px dashed #CCC;", 
     r"border-top: 1px dashed rgba(212, 175, 55, 0.4);"),
     
    (r"\.checkout-form input, \.checkout-form textarea {\s*width: 100%;\s*padding: 12px;\s*margin-bottom: 15px;\s*border: 1px solid rgba\(212, 175, 55, 0\.3\);",
     r".checkout-form input, .checkout-form textarea {\n    width: 100%; padding: 12px; margin-bottom: 15px;\n    background: var(--bg-card); color: var(--text-light);\n    border: 1px solid rgba(212, 175, 55, 0.3);"),
     
    (r"color: #666;", 
     r"color: var(--text-muted);")
]

for old, new in replacements:
    css = re.sub(old, new, css, flags=re.DOTALL)

with open("food-style.css", "w", encoding="utf-8") as f:
    f.write(css)

print("Dark theme for cart applied!")
