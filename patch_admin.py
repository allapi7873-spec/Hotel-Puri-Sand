import re

with open("admin.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Add toggle column header to menu table thead
old_thead = """                            <th class="px-4 py-3">#</th>
                                <th class="px-4 py-3">Item Name</th>
                                <th class="px-4 py-3">Category</th>
                                <th class="px-4 py-3">Sub-Category</th>
                                <th class="px-4 py-3">Type</th>
                                <th class="px-4 py-3">Price</th>"""

new_thead = """                            <th class="px-4 py-3">#</th>
                                <th class="px-4 py-3">Item Name</th>
                                <th class="px-4 py-3">Category</th>
                                <th class="px-4 py-3">Sub-Category</th>
                                <th class="px-4 py-3">Type</th>
                                <th class="px-4 py-3">Price</th>
                                <th class="px-4 py-3 text-center">Status</th>"""

html = html.replace(old_thead, new_thead, 1)

# 2. Add toggle switch styles
style_insert = """        /* Toggle Switch */
        .toggle-wrap { display:flex; align-items:center; justify-content:center; gap:6px; }
        .toggle { position:relative; display:inline-block; width:44px; height:24px; }
        .toggle input { opacity:0; width:0; height:0; }
        .slider { position:absolute; cursor:pointer; top:0; left:0; right:0; bottom:0; background:#333; border-radius:24px; transition:.3s; }
        .slider:before { position:absolute; content:""; height:18px; width:18px; left:3px; bottom:3px; background:white; border-radius:50%; transition:.3s; }
        input:checked + .slider { background: linear-gradient(135deg, #BF953F, #D4AF37); }
        input:checked + .slider:before { transform:translateX(20px); }
        .avail-label { font-size:10px; font-weight:700; min-width:40px; }
        .avail-on { color:#4ade80; }
        .avail-off { color:#f87171; }"""

html = html.replace("        input[type=search]::-webkit-search-cancel-button { cursor: pointer; }", 
                    "        input[type=search]::-webkit-search-cancel-button { cursor: pointer; }\n" + style_insert, 1)

print("HTML modified OK")
with open("admin.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Saved admin.html")
