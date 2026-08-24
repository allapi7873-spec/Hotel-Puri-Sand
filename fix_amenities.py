import re

with open("amenities.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replace prices and names in amenities.html according to actual menu data
replacements = [
    (r"Traditional Odia Dalma", r"Dalma / Santula"),
    (r"â‚¹160", r"₹150"),
    
    (r"Shahi Paneer Butter Masala", r"Paneer Masala / Kadhai"),
    (r"â‚¹240", r"₹180"),
    
    (r"Local Veg Thali \(Deluxe\)", r"Gobi / Mushroom / Paneer Pakoda"),
    (r"â‚¹280", r"₹150"),
    
    (r"Puri Beach Fresh Fish Curry", r"Fresh Fish Curry (Boneless)"),
    (r"â‚¹320", r"₹199"),
    
    (r"Premium Prawn Masala Fry", r"Prawn Curry / Kassa"),
    (r"â‚¹380", r"₹320"),
    
    (r"Handi Chicken Butter Masala", r"Chicken Curry / Kassa"),
    (r"â‚¹290", r"₹240"),
    
    # Catch any remaining broken rupee symbols
    (r"â‚¹", r"₹")
]

for old, new in replacements:
    html = re.sub(old, new, html)

with open("amenities.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Updated amenities.html")
