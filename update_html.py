import json
import re

html_file = "food.html"
with open(html_file, "r", encoding="utf-8") as f:
    html = f.read()

# Insert the sticky-menu-tabs container
if 'id="sticky-menu-tabs"' not in html:
    html = html.replace('<div class="menu-list-container"', '<div class="sticky-menu-tabs" id="sticky-menu-tabs"></div>\n        <div class="menu-list-container"')
    with open(html_file, "w", encoding="utf-8") as f:
        f.write(html)
