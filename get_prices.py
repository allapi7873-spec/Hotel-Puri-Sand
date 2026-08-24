import re

with open("food-script.js", "r", encoding="utf-8") as f:
    data = f.read()

items = re.findall(r'"name":\s*"([^"]+)".*?"price":\s*(\d+)', data, re.DOTALL)
filtered = [i for i in items if 'Thali' in i[0] or 'Chicken' in i[0]]

for name, price in filtered:
    print(f"{name}: {price}")
