import re

# 1. Fix style.css
with open("style.css", "r", encoding="utf-8") as f:
    css = f.read()

css = css.replace("overflow-x: hidden;", "overflow-x: clip;")

with open("style.css", "w", encoding="utf-8") as f:
    f.write(css)

# 2. Fix food-style.css
with open("food-style.css", "r", encoding="utf-8") as f:
    f_css = f.read()

f_css = f_css.replace("html, \n\nimg {", "html, body { overflow-x: clip; }\n\nimg {")

f_css = f_css.replace(""".sticky-menu-tabs {
    position: sticky;
    top: 65px; /* Matches navbar height after scroll */""",
""".sticky-menu-tabs {
    position: sticky;
    top: 0; /* Mobile sticks to top */""")

# Add desktop top for sticky-menu-tabs
desktop_media = """@media (min-width: 769px) {
    .sticky-menu-tabs {
        top: 65px;
    }
}"""
f_css = f_css.replace(".category-tabs {", desktop_media + "\n.category-tabs {")

with open("food-style.css", "w", encoding="utf-8") as f:
    f_css = f_css.replace("top: 65px; /* Matches navbar height after scroll */", "top: 0; /* Mobile sticks to top */")
    f.write(f_css)

print("Fixed stickiness!")
