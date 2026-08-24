import re

with open("food-style.css", "r", encoding="utf-8") as f:
    css = f.read()

# 1. Change sticky cart footer background to gold
css = css.replace('background: #00A65A; /* Green for action */', 'background: linear-gradient(135deg, #D4AF37, #AA8B2C);')
css = css.replace('color: #FFF;', 'color: #080912;')
css = css.replace('box-shadow: 0 4px 15px rgba(0, 166, 90, 0.4);', 'box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);')
css = css.replace('background: #25D366;', 'background: linear-gradient(135deg, #D4AF37, #AA8B2C); color: #080912;') # WhatsApp buttons in cart

# 2. Remove mobile bottom nav and hero styles completely (lines 867 to 952 roughly)
# I will use a regex to strip from .mobile-bottom-nav { down to .hero-buttons a { margin: 0 !important; width: 100%; }
css = re.sub(r'\.mobile-bottom-nav\s*\{.*\.hero-buttons a\s*\{[^}]+\}', '', css, flags=re.DOTALL)

with open("food-style.css", "w", encoding="utf-8") as f:
    f.write(css)
