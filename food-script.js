// =========================================
// NAWABI THALI - MAIN SCRIPT (MULTI-PAGE)
// =========================================

// Full Menu Data
const products = [
    {
        "name": "Bread Toast with Butter & Jam",
        "price": 50,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Breakfast",
        "id": 1
    },
    {
        "name": "Veg Sandwich",
        "price": 60,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Breakfast",
        "id": 2
    },
    {
        "name": "Chicken Sandwich",
        "price": 70,
        "type": "non-veg",
        "category": "breakfast-snacks",
        "subCategory": "Breakfast",
        "id": 3
    },
    {
        "name": "Cheese Sandwich",
        "price": 80,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Breakfast",
        "id": 4
    },
    {
        "name": "Poori Bhaji",
        "price": 70,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Breakfast",
        "id": 5
    },
    {
        "name": "Aloo Paratha (Served with Curd & Pickle)",
        "price": 70,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Breakfast",
        "id": 6
    },
    {
        "name": "Gobi Paratha (Served with Curd & Pickle)",
        "price": 70,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Breakfast",
        "id": 7
    },
    {
        "name": "Paneer Paratha (Served with Curd & Pickle)",
        "price": 90,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Breakfast",
        "id": 8
    },
    {
        "name": "Plain Paratha with Aloo Dum",
        "price": 80,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Breakfast",
        "id": 9
    },
    {
        "name": "Idly / Poha (Served with Sambar & Chutney)",
        "price": 70,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Breakfast",
        "id": 10
    },
    {
        "name": "Cereals with Hot & Cold Milk",
        "price": 80,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Breakfast",
        "id": 11
    },
    {
        "name": "Eggs to Order (Omlete/Boiled/Bread Omlete)",
        "price": 80,
        "type": "non-veg",
        "category": "breakfast-snacks",
        "subCategory": "Breakfast",
        "id": 12
    },
    {
        "name": "Paneer Chilli",
        "price": 180,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 13
    },
    {
        "name": "Mushroom Chilli",
        "price": 180,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 14
    },
    {
        "name": "Chicken Chilli",
        "price": 220,
        "type": "non-veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 15
    },
    {
        "name": "Assorted Veg Pakoda",
        "price": 120,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 16
    },
    {
        "name": "Gobi/Onion/Mushroom/Paneer Pakoda",
        "price": 150,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 17
    },
    {
        "name": "Egg Pakoda",
        "price": 100,
        "type": "non-veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 18
    },
    {
        "name": "Chicken Pakoda",
        "price": 180,
        "type": "non-veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 19
    },
    {
        "name": "Prawn Pakoda",
        "price": 280,
        "type": "non-veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 20
    },
    {
        "name": "Finger Chips",
        "price": 100,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 21
    },
    {
        "name": "Dry Chana",
        "price": 130,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 22
    },
    {
        "name": "Peanuts Masala",
        "price": 100,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 23
    },
    {
        "name": "Paneer 65",
        "price": 170,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 24
    },
    {
        "name": "Boil Corn Chaat",
        "price": 100,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 25
    },
    {
        "name": "Dry Papad",
        "price": 25,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 26
    },
    {
        "name": "Fry Papad",
        "price": 30,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 27
    },
    {
        "name": "Masala Papad",
        "price": 35,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 28
    },
    {
        "name": "Fish Fry",
        "price": 130,
        "type": "non-veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 29
    },
    {
        "name": "Veg Roll",
        "price": 110,
        "type": "veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 30
    },
    {
        "name": "Non-Veg Roll",
        "price": 149,
        "type": "non-veg",
        "category": "breakfast-snacks",
        "subCategory": "Snacks",
        "id": 31
    },
    {
        "name": "Ready Made Tea",
        "price": 20,
        "type": "veg",
        "category": "soup-beverage",
        "subCategory": "Beverages",
        "id": 32
    },
    {
        "name": "Masala/Black/Lemon/Green Tea",
        "price": 20,
        "type": "veg",
        "category": "soup-beverage",
        "subCategory": "Beverages",
        "id": 33
    },
    {
        "name": "Coffee",
        "price": 25,
        "type": "veg",
        "category": "soup-beverage",
        "subCategory": "Beverages",
        "id": 34
    },
    {
        "name": "Black Coffee",
        "price": 30,
        "type": "veg",
        "category": "soup-beverage",
        "subCategory": "Beverages",
        "id": 35
    },
    {
        "name": "Hot Milk / Cold Milk",
        "price": 50,
        "type": "veg",
        "category": "soup-beverage",
        "subCategory": "Beverages",
        "id": 36
    },
    {
        "name": "Hot Chocolate / Horlicks / Bournvita",
        "price": 100,
        "type": "veg",
        "category": "soup-beverage",
        "subCategory": "Beverages",
        "id": 37
    },
    {
        "name": "Plain Cold Drink",
        "price": 30,
        "type": "veg",
        "category": "soup-beverage",
        "subCategory": "Beverages",
        "id": 38
    },
    {
        "name": "Masala Cold Drink",
        "price": 40,
        "type": "veg",
        "category": "soup-beverage",
        "subCategory": "Beverages",
        "id": 39
    },
    {
        "name": "Juice (Canned / Fresh)",
        "price": 70,
        "type": "veg",
        "category": "soup-beverage",
        "subCategory": "Beverages",
        "id": 40
    },
    {
        "name": "Mineral Water",
        "price": 20,
        "type": "veg",
        "category": "soup-beverage",
        "subCategory": "Beverages",
        "id": 41
    },
    {
        "name": "Veg Manchow Soup",
        "price": 70,
        "type": "veg",
        "category": "soup-beverage",
        "subCategory": "Soup",
        "id": 42
    },
    {
        "name": "Non-Veg Manchow Soup",
        "price": 90,
        "type": "non-veg",
        "category": "soup-beverage",
        "subCategory": "Soup",
        "id": 43
    },
    {
        "name": "Veg Noodle Soup",
        "price": 70,
        "type": "veg",
        "category": "soup-beverage",
        "subCategory": "Soup",
        "id": 44
    },
    {
        "name": "Non-Veg Noodle Soup",
        "price": 90,
        "type": "non-veg",
        "category": "soup-beverage",
        "subCategory": "Soup",
        "id": 45
    },
    {
        "name": "Veg Hot & Sour Soup",
        "price": 70,
        "type": "veg",
        "category": "soup-beverage",
        "subCategory": "Soup",
        "id": 46
    },
    {
        "name": "Non-Veg Hot & Sour Soup",
        "price": 90,
        "type": "non-veg",
        "category": "soup-beverage",
        "subCategory": "Soup",
        "id": 47
    },
    {
        "name": "Veg Sweet Corn Soup",
        "price": 70,
        "type": "veg",
        "category": "soup-beverage",
        "subCategory": "Soup",
        "id": 48
    },
    {
        "name": "Non-Veg Sweet Corn Soup",
        "price": 90,
        "type": "non-veg",
        "category": "soup-beverage",
        "subCategory": "Soup",
        "id": 49
    },
    {
        "name": "Garden Fresh Green Salad",
        "price": 50,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Salad & Raita",
        "id": 50
    },
    {
        "name": "Onion Salad",
        "price": 25,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Salad & Raita",
        "id": 51
    },
    {
        "name": "Cuchumbar Salad",
        "price": 50,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Salad & Raita",
        "id": 52
    },
    {
        "name": "Chicken Salad",
        "price": 100,
        "type": "non-veg",
        "category": "non-veg-course",
        "subCategory": "Salad & Raita",
        "id": 53
    },
    {
        "name": "Mix Raita",
        "price": 50,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Salad & Raita",
        "id": 54
    },
    {
        "name": "Onion Raita",
        "price": 50,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Salad & Raita",
        "id": 55
    },
    {
        "name": "Boondi Raita",
        "price": 50,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Salad & Raita",
        "id": 56
    },
    {
        "name": "Mix Vegetable",
        "price": 160,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 57
    },
    {
        "name": "Mushroom (Masala/Kadhai/Dopiyaza/Chilli)",
        "price": 180,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 58
    },
    {
        "name": "Paneer (Masala/Kadhai/Dopiyaza/Chilli)",
        "price": 180,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 59
    },
    {
        "name": "Veg Manchurian",
        "price": 150,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 60
    },
    {
        "name": "Aloo Gobi Masala",
        "price": 159,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 61
    },
    {
        "name": "Bhindi Masala / Dopiyaza / Kurkure",
        "price": 150,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 62
    },
    {
        "name": "Aloo Bhaji / Mix Bhaji",
        "price": 120,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 63
    },
    {
        "name": "Aloo Jeera",
        "price": 130,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 64
    },
    {
        "name": "Kalara / Aloo Chips",
        "price": 120,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 65
    },
    {
        "name": "Dalma / Santula",
        "price": 150,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 66
    },
    {
        "name": "Chana Masala",
        "price": 150,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 67
    },
    {
        "name": "Sorisa Baigan",
        "price": 140,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 68
    },
    {
        "name": "Dahi Baingan",
        "price": 120,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 69
    },
    {
        "name": "Aloo Bharta",
        "price": 60,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 70
    },
    {
        "name": "Badi Chura",
        "price": 60,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 71
    },
    {
        "name": "Tomato Chutney",
        "price": 70,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 72
    },
    {
        "name": "Dahi Pakhala",
        "price": 90,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 73
    },
    {
        "name": "Moong Dal",
        "price": 100,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 74
    },
    {
        "name": "Aloo Jhuri",
        "price": 110,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Veg Curry",
        "id": 75
    },
    {
        "name": "Mutton Curry / Kassa",
        "price": 300,
        "type": "non-veg",
        "category": "non-veg-course",
        "subCategory": "Non-Veg Curry",
        "id": 76
    },
    {
        "name": "Prawn Curry / Kassa",
        "price": 320,
        "type": "non-veg",
        "category": "non-veg-course",
        "subCategory": "Non-Veg Curry",
        "id": 77
    },
    {
        "name": "Chicken Curry / Kassa",
        "price": 240,
        "type": "non-veg",
        "category": "non-veg-course",
        "subCategory": "Non-Veg Curry",
        "id": 78
    },
    {
        "name": "Fish Curry / Tawa / Fry (Bone)",
        "price": 149,
        "type": "non-veg",
        "category": "non-veg-course",
        "subCategory": "Non-Veg Curry",
        "id": 79
    },
    {
        "name": "Fish Curry / Tawa / Fry (Boneless)",
        "price": 199,
        "type": "non-veg",
        "category": "non-veg-course",
        "subCategory": "Non-Veg Curry",
        "id": 80
    },
    {
        "name": "Machha Chhecha",
        "price": 149,
        "type": "non-veg",
        "category": "non-veg-course",
        "subCategory": "Non-Veg Curry",
        "id": 81
    },
    {
        "name": "Egg Masala / Curry / Kassa / Bhurji",
        "price": 130,
        "type": "non-veg",
        "category": "non-veg-course",
        "subCategory": "Non-Veg Curry",
        "id": 82
    },
    {
        "name": "Veg Fried Rice (Chili Garlic/Schezwan)",
        "price": 140,
        "type": "veg",
        "category": "rice-roti",
        "subCategory": "Rice & Noodles",
        "id": 83
    },
    {
        "name": "Veg Hakka Noodles (Chili Garlic/Schezwan)",
        "price": 140,
        "type": "veg",
        "category": "rice-roti",
        "subCategory": "Rice & Noodles",
        "id": 84
    },
    {
        "name": "Chicken Fried Rice (Chili Garlic/Schezwan)",
        "price": 180,
        "type": "non-veg",
        "category": "rice-roti",
        "subCategory": "Rice & Noodles",
        "id": 85
    },
    {
        "name": "Chicken Noodles (Chili Garlic/Schezwan)",
        "price": 180,
        "type": "non-veg",
        "category": "rice-roti",
        "subCategory": "Rice & Noodles",
        "id": 86
    },
    {
        "name": "Egg Fried Rice (Chili Garlic/Schezwan)",
        "price": 150,
        "type": "non-veg",
        "category": "rice-roti",
        "subCategory": "Rice & Noodles",
        "id": 87
    },
    {
        "name": "Egg Noodles (Chili Garlic/Schezwan)",
        "price": 150,
        "type": "non-veg",
        "category": "rice-roti",
        "subCategory": "Rice & Noodles",
        "id": 88
    },
    {
        "name": "Prawn Fried Rice (Chili Garlic/Schezwan)",
        "price": 200,
        "type": "non-veg",
        "category": "rice-roti",
        "subCategory": "Rice & Noodles",
        "id": 89
    },
    {
        "name": "Prawn Noodles (Chili Garlic/Schezwan)",
        "price": 200,
        "type": "non-veg",
        "category": "rice-roti",
        "subCategory": "Rice & Noodles",
        "id": 90
    },
    {
        "name": "Plain Dal",
        "price": 60,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Dal",
        "id": 91
    },
    {
        "name": "Dal Fry",
        "price": 80,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Dal",
        "id": 92
    },
    {
        "name": "Dal Tadka",
        "price": 80,
        "type": "veg",
        "category": "veg-course",
        "subCategory": "Dal",
        "id": 93
    },
    {
        "name": "Egg Dal Tadka",
        "price": 120,
        "type": "non-veg",
        "category": "non-veg-course",
        "subCategory": "Non-Veg Curry",
        "id": 94
    },
    {
        "name": "Plain Rice",
        "price": 60,
        "type": "veg",
        "category": "rice-roti",
        "subCategory": "Rice & Pulao",
        "id": 95
    },
    {
        "name": "Lemon Rice / Jeera Rice / Veg Pulao",
        "price": 80,
        "type": "veg",
        "category": "rice-roti",
        "subCategory": "Rice & Pulao",
        "id": 96
    },
    {
        "name": "Kashmiri Pulao",
        "price": 90,
        "type": "veg",
        "category": "rice-roti",
        "subCategory": "Rice & Pulao",
        "id": 97
    },
    {
        "name": "Green Peas Pulao",
        "price": 90,
        "type": "veg",
        "category": "rice-roti",
        "subCategory": "Rice & Pulao",
        "id": 98
    },
    {
        "name": "Curd Rice",
        "price": 80,
        "type": "veg",
        "category": "rice-roti",
        "subCategory": "Rice & Pulao",
        "id": 99
    },
    {
        "name": "Veg Biriyani",
        "price": 180,
        "type": "veg",
        "category": "rice-roti",
        "subCategory": "Biryani",
        "id": 100
    },
    {
        "name": "Chicken Biriyani",
        "price": 220,
        "type": "non-veg",
        "category": "rice-roti",
        "subCategory": "Biryani",
        "id": 101
    },
    {
        "name": "Mutton Biriyani",
        "price": 300,
        "type": "non-veg",
        "category": "rice-roti",
        "subCategory": "Biryani",
        "id": 102
    },
    {
        "name": "Egg Biriyani",
        "price": 190,
        "type": "non-veg",
        "category": "rice-roti",
        "subCategory": "Biryani",
        "id": 103
    },
    {
        "name": "Prawn Biriyani",
        "price": 380,
        "type": "non-veg",
        "category": "rice-roti",
        "subCategory": "Biryani",
        "id": 104
    },
    {
        "name": "Chapati",
        "price": 15,
        "type": "veg",
        "category": "rice-roti",
        "subCategory": "Roti",
        "id": 105
    },
    {
        "name": "Butter Chapati",
        "price": 20,
        "type": "veg",
        "category": "rice-roti",
        "subCategory": "Roti",
        "id": 106
    },
    {
        "name": "Plain Paratha",
        "price": 30,
        "type": "veg",
        "category": "rice-roti",
        "subCategory": "Roti",
        "id": 107
    },
    {
        "name": "Lachha Paratha",
        "price": 40,
        "type": "veg",
        "category": "rice-roti",
        "subCategory": "Roti",
        "id": 108
    },
    {
        "name": "Hot Gulab Jamun",
        "price": 50,
        "type": "veg",
        "category": "dessert",
        "subCategory": "Desserts",
        "id": 109
    },
    {
        "name": "Rassogola",
        "price": 50,
        "type": "veg",
        "category": "dessert",
        "subCategory": "Desserts",
        "id": 110
    },
    {
        "name": "Ice Cream (Vanilla/Strawberry)",
        "price": 70,
        "type": "veg",
        "category": "dessert",
        "subCategory": "Desserts",
        "id": 111
    },
    {
        "name": "Ice Cream (Butter Scotch/Pista/Chocolate)",
        "price": 90,
        "type": "veg",
        "category": "dessert",
        "subCategory": "Desserts",
        "id": 112
    }
];

const menuCategories = [
    {
        "id": "breakfast-snacks",
        "name": "\u2615 Breakfast & Snacks",
        "subs": [
            "Breakfast",
            "Snacks"
        ]
    },
    {
        "id": "soup-beverage",
        "name": "\ud83e\udd63 Soup & Beverages",
        "subs": [
            "Soup",
            "Beverages"
        ]
    },
    {
        "id": "veg-course",
        "name": "\ud83e\udd66 Veg Main Course",
        "subs": [
            "Salad & Raita",
            "Veg Curry",
            "Dal"
        ]
    },
    {
        "id": "non-veg-course",
        "name": "\ud83c\udf57 Non-Veg Main Course",
        "subs": [
            "Non-Veg Curry",
            "Salad & Raita"
        ]
    },
    {
        "id": "rice-roti",
        "name": "\ud83c\udf5a Rice, Biryani & Roti",
        "subs": [
            "Rice & Noodles",
            "Rice & Pulao",
            "Biryani",
            "Roti"
        ]
    },
    {
        "id": "dessert",
        "name": "\ud83c\udf68 Dessert",
        "subs": [
            "Desserts"
        ]
    }
];

// State
let cart = [];
let currentCategory = "breakfast-snacks";
let currentSubCategory = "Breakfast";
let productAvailability = {}; // { productId: true/false } — from backend
let productPrices = {}; // { productId: price } — from backend

// Backend URL — change to Render URL after hosting
// const BACKEND_URL = 'https://hotel-puri-sand-backend.onrender.com';
const BACKEND_URL = 'http://localhost:5000';

// DOM Elements
const productContainer = document.getElementById("product-container");
const cartOverlay = document.getElementById("cart-overlay");
const cartSidebar = document.getElementById("cart-sidebar");
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartBadge = document.getElementById("cart-badge");
const mobileCartBadge = document.getElementById("mobile-cart-badge");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalPrice = document.getElementById("cart-total-price");
const checkoutBtn = document.getElementById("checkout-btn");
const bookWhatsappBtn = document.getElementById("book-whatsapp-btn");
const navbar = document.querySelector(".navbar");

// Initialize App
async function init() {
    handlePreloader();
    handleNavbarScroll();

    // Only run menu logic on food.html
    if(productContainer) {
        // 1. Load from localStorage FIRST (instant, works offline)
        try {
            const saved = localStorage.getItem('puriSandMenuStatus');
            if (saved) productAvailability = JSON.parse(saved);
            const savedPrices = localStorage.getItem('puriSandMenuPrices');
            if (savedPrices) productPrices = JSON.parse(savedPrices);
        } catch(e) {}

        // 2. Try backend (if online, overrides localStorage)
        try {
            const controller = new AbortController();
            setTimeout(() => controller.abort(), 3000);
            const res = await fetch(`${BACKEND_URL}/api/product-status`, { signal: controller.signal });
            const data = await res.json();
            if (data.success) {
                productAvailability = { ...productAvailability, ...data.statuses };
                if (data.prices) productPrices = { ...productPrices, ...data.prices };
                // Keep localStorage in sync
                localStorage.setItem('puriSandMenuStatus', JSON.stringify(productAvailability));
                localStorage.setItem('puriSandMenuPrices', JSON.stringify(productPrices));
            }
        } catch(e) {
            console.warn('Backend offline — using localStorage data.');
        }

        renderCategories();
        setupMenuListeners();
        renderProducts(currentCategory, currentSubCategory);

        // 3. Listen to localStorage changes (cross-tab: admin changes reflect here instantly!)
        window.addEventListener('storage', (e) => {
            let changed = false;
            if (e.key === 'puriSandMenuStatus' && e.newValue) {
                try {
                    productAvailability = JSON.parse(e.newValue);
                    changed = true;
                } catch(ex) {}
            }
            if (e.key === 'puriSandMenuPrices' && e.newValue) {
                try {
                    productPrices = JSON.parse(e.newValue);
                    // Update cart prices
                    cart.forEach(item => {
                        if (productPrices[item.id] !== undefined) {
                            item.price = productPrices[item.id];
                        }
                    });
                    changed = true;
                } catch(ex) {}
            }
            if (changed) {
                renderProducts(currentCategory, currentSubCategory, document.getElementById('menu-search') ? document.getElementById('menu-search').value : '');
                updateCartUI();
            }
        });

        // 4. Try SSE for real-time (when backend is online)
        connectSSE();
    }

    // Global Listeners
    if(openCartBtn && cartSidebar) {
        openCartBtn.addEventListener("click", toggleCart);
        closeCartBtn.addEventListener("click", toggleCart);
        cartOverlay.addEventListener("click", toggleCart);
        if(checkoutBtn) checkoutBtn.addEventListener("click", processCheckout);
    }

    if(bookWhatsappBtn) {
        bookWhatsappBtn.addEventListener("click", processTableBooking);
    }
}

// Connect to SSE (Server-Sent Events) for live updates (backend must be online)
function connectSSE() {
    try {
        const eventSource = new EventSource(`${BACKEND_URL}/api/events`);

        eventSource.onmessage = (event) => {
            try {
                const msg = JSON.parse(event.data);
                if (msg.type === 'PRODUCT_STATUS_CHANGE') {
                    productAvailability[msg.productId] = msg.isAvailable;
                    // Also sync to localStorage
                    localStorage.setItem('puriSandMenuStatus', JSON.stringify(productAvailability));
                    renderProducts(currentCategory, currentSubCategory,
                        document.getElementById('menu-search') ? document.getElementById('menu-search').value : '');
                } else if (msg.type === 'PRODUCT_PRICE_CHANGE') {
                    productPrices[msg.productId] = msg.price;
                    localStorage.setItem('puriSandMenuPrices', JSON.stringify(productPrices));
                    
                    // Update cart if item is there
                    const cartItem = cart.find(i => i.id === msg.productId);
                    if (cartItem) cartItem.price = msg.price;
                    
                    renderProducts(currentCategory, currentSubCategory,
                        document.getElementById('menu-search') ? document.getElementById('menu-search').value : '');
                    updateCartUI();
                }
            } catch(e) {}
        };

        eventSource.onerror = () => {
            console.warn('SSE disconnected, will auto-retry...');
        };
    } catch(e) {
        console.warn('SSE not supported or backend offline.');
    }
}

function renderCategories() {
    const stickyContainer = document.getElementById("sticky-menu-tabs");
    if(!stickyContainer) return;

    let catHTML = '<div class="category-tabs" id="category-tabs">';
    menuCategories.forEach(cat => {
        catHTML += `<button class="tab-btn ${cat.id === currentCategory ? 'active' : ''}" data-main-category="${cat.id}">${cat.name}</button>`;
    });
    catHTML += '</div><div class="sub-category-tabs" id="sub-category-tabs"></div>';
    
    stickyContainer.innerHTML = catHTML;
    
    const categoryTabs = document.querySelectorAll(".tab-btn");
    categoryTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            categoryTabs.forEach(t => t.classList.remove("active"));
            e.target.classList.add("active");
            currentCategory = e.target.getAttribute("data-main-category");
            
            const catObj = menuCategories.find(c => c.id === currentCategory);
            currentSubCategory = catObj.subs[0];
            
            updateSubTabs();
            renderProducts(currentCategory, currentSubCategory, document.getElementById("menu-search") ? document.getElementById("menu-search").value : "");
            
            // scroll to products to avoid jumping confusion
            productContainer.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
    
    updateSubTabs();
}

function updateSubTabs() {
    const subContainer = document.getElementById("sub-category-tabs");
    if(!subContainer) return;
    const catObj = menuCategories.find(c => c.id === currentCategory);
    
    let subHTML = '';
    catObj.subs.forEach(sub => {
        subHTML += `<button class="sub-tab-btn ${sub === currentSubCategory ? 'active' : ''}" data-sub-category="${sub}">${sub}</button>`;
    });
    subContainer.innerHTML = subHTML;
    
    const newSubTabs = document.querySelectorAll(".sub-tab-btn");
    newSubTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            newSubTabs.forEach(t => t.classList.remove("active"));
            e.target.classList.add("active");
            currentSubCategory = e.target.getAttribute("data-sub-category");
            renderProducts(currentCategory, currentSubCategory, document.getElementById("menu-search") ? document.getElementById("menu-search").value : "");
        });
    });
}

// Preloader Logic
function handlePreloader() {
    const hidePreloader = () => {
        setTimeout(() => {
            document.body.classList.remove('loading');
        }, 500);
    };

    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
    }
}

// Navbar scroll effect
function handleNavbarScroll() {
    if(!navbar) return;
    window.addEventListener("scroll", () => {
        if(window.scrollY > 50) {
            navbar.style.padding = "10px 5%";
            navbar.style.background = "rgba(255, 255, 255, 0.98)";
            navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.05)";
        } else {
            navbar.style.padding = "15px 5%";
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
            navbar.style.boxShadow = "none";
        }
    });
    window.dispatchEvent(new Event('scroll'));
}

function setupMenuListeners() {
    const searchInput = document.getElementById("menu-search");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            renderProducts(currentCategory, currentSubCategory, e.target.value);
        });
    }
}

// Render Products Based on Main & Sub Category & Search
function renderProducts(mainCategory, subCategory, searchQuery = "") {
    if(!productContainer) return;
    productContainer.innerHTML = "";
    
    let itemsToRender = [];
    const query = searchQuery.toLowerCase().trim();
    
    itemsToRender = products.filter(p => p.category === mainCategory && p.subCategory === subCategory);

    if (query) {
        itemsToRender = itemsToRender.filter(p => p.name.toLowerCase().includes(query));
    }

    if (itemsToRender.length === 0) {
        productContainer.innerHTML = "<div style='grid-column: 1/-1; text-align: center; color: #888; padding: 40px;'>No dishes available in this category.</div>";
        return;
    }

    // Add Grid Container
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("menu-section-grid");
    
    // Make it span full width so grid works inside container
    const wrapper = document.createElement("div");
    wrapper.classList.add("menu-section-container");

    itemsToRender.forEach(product => {
        const isNonVeg = product.type === 'non-veg';
        const dietMark = isNonVeg ? '<span class="diet-mark non-veg" title="Non-Vegetarian"></span>' : '<span class="diet-mark veg" title="Vegetarian"></span>';

        // Check availability — default true if not set
        const isAvailable = productAvailability[product.id] !== false;
        const actualPrice = productPrices[product.id] !== undefined ? productPrices[product.id] : product.price;

        const cartItem = cart.find(i => i.id === product.id);

        let actionHTML = '';
        if (!isAvailable) {
            // Item OFF by admin — show unavailable badge
            actionHTML = `<span style="font-size:11px; color:#ff6b6b; border:1px solid #ff6b6b44; padding:4px 10px; border-radius:20px; background:rgba(255,107,107,0.08);">Not Available</span>`;
        } else if (cartItem) {
            actionHTML = `
                <div class="cart-item-controls in-menu">
                    <button class="qty-btn" onclick="updateQuantity(${product.id}, -1)">-</button>
                    <span>${cartItem.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
                </div>
            `;
        } else {
            actionHTML = `<button class="btn-add" onclick="addToCart(${product.id})">Add</button>`;
        }

        const productEl = document.createElement("div");
        productEl.classList.add("menu-list-item");
        if (!isAvailable) {
            productEl.style.opacity = '0.45';
            productEl.style.filter = 'grayscale(60%)';
        }
        productEl.innerHTML = `
            <div class="item-details">
                <h4 style="display:flex; align-items:flex-start; margin-bottom:5px; margin-top:0;">${dietMark}<span style="white-space: normal; overflow-wrap: anywhere; word-break: break-word; flex: 1; min-width: 0;">${product.name}</span></h4>
                <div class="item-price">${actualPrice === "MRP" ? "MRP" : "₹" + actualPrice}</div>
            </div>
            <div class="item-actions" data-id="${product.id}">
                ${actionHTML}
            </div>
        `;
        gridContainer.appendChild(productEl);
    });

    wrapper.appendChild(gridContainer);
    productContainer.appendChild(wrapper);
}

// Toggle Cart Sidebar
function toggleCart() {
    if(!cartSidebar) return;
    const isActive = cartSidebar.classList.contains("active");
    
    if (isActive) {
        // Closing cart
        cartSidebar.classList.remove("active");
        cartOverlay.classList.remove("active");
        
        const mobileNav = document.getElementById("mobile-bottom-nav");
        if (mobileNav) mobileNav.style.display = "flex";
        
        const stickyCart = document.getElementById("sticky-cart-footer");
        if (stickyCart && cart.length > 0) {
            stickyCart.style.zIndex = "990";
            stickyCart.style.display = "flex";
        }
    } else {
        // Opening cart
        cartSidebar.classList.add("active");
        cartOverlay.classList.add("active");
        
        const mobileNav = document.getElementById("mobile-bottom-nav");
        if (mobileNav) mobileNav.style.display = "none";
        
        const stickyCart = document.getElementById("sticky-cart-footer");
        if (stickyCart) {
            stickyCart.style.zIndex = "0";
            stickyCart.style.display = "none";
        }
    }
}

// Add to Cart
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    const actualPrice = productPrices[productId] !== undefined ? productPrices[productId] : product.price;
    
    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price = actualPrice; // Ensure price is up-to-date
    } else {
        cart.push({ ...product, price: actualPrice, quantity: 1 });
    }
    
    updateCartUI();
    
    // Tiny animation for button
    const btn = document.querySelector(`button[onclick="addToCart(${productId})"]`);
    if(btn) {
        btn.textContent = "Added!";
        btn.style.background = "var(--primary-gold)";
        btn.style.color = "var(--bg-dark)";
        setTimeout(() => {
            btn.textContent = "Add";
            btn.style.background = "transparent";
            btn.style.color = "var(--primary-gold)";
        }, 1000);
    }
}

// Update Cart Quantity
window.updateQuantity = function(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }
    
    updateCartUI();
}

// Update Menu Buttons Sync
function updateMenuButtons() {
    const allActions = document.querySelectorAll('.item-actions');
    allActions.forEach(actionDiv => {
        const productId = parseInt(actionDiv.getAttribute('data-id'));
        if(!productId) return;
        
        const cartItem = cart.find(i => i.id === productId);
        if (cartItem) {
            actionDiv.innerHTML = `
                <div class="cart-item-controls in-menu">
                    <button class="qty-btn" onclick="updateQuantity(${productId}, -1)">-</button>
                    <span>${cartItem.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${productId}, 1)">+</button>
                </div>
            `;
        } else {
            actionDiv.innerHTML = `<button class="btn-add" onclick="addToCart(${productId})">Add</button>`;
        }
    });
}

// Update UI
function updateCartUI() {
    updateMenuButtons();

    const cartBadge = document.getElementById("cart-badge");
const mobileCartBadge = document.getElementById("mobile-cart-badge");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalPrice = document.getElementById("cart-total-price");
    const stickyCartFooter = document.getElementById("sticky-cart-footer");
    const stickyCartCount = document.getElementById("sticky-cart-count");
    const stickyCartPrice = document.getElementById("sticky-cart-price");

    if(!cartBadge || !cartItemsContainer) return;
    
    // Update Badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if(cartBadge) cartBadge.textContent = totalItems;
    if(mobileCartBadge) mobileCartBadge.textContent = totalItems;
    
    // Update List
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Aapka cart abhi khaali hai! Kuch swadisht add karein.</div>';
        if(cartTotalPrice) cartTotalPrice.textContent = "0";
        if(stickyCartFooter) stickyCartFooter.style.display = "none";
        
        // Reset slider if cart is emptied
        const cartSlider = document.getElementById("cart-slider");
        if(cartSlider) cartSlider.style.transform = "translateX(0)";
        return;
    }
    
    cartItemsContainer.innerHTML = "";
    let subtotalAmount = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotalAmount += itemTotal;
        
        const isNonVeg = item.type === 'non-veg';
        const dietMark = isNonVeg ? '<span class="diet-mark non-veg" title="Non-Vegetarian" style="margin-right: 5px;"></span>' : '<span class="diet-mark veg" title="Vegetarian" style="margin-right: 5px;"></span>';

        const cartItemEl = document.createElement("div");
        cartItemEl.classList.add("cart-item");
        cartItemEl.innerHTML = `
            <div class="cart-item-info">
                <h4 style="display:flex; align-items:flex-start;"><span style="margin-top: 4px;">${dietMark}</span><span style="white-space: normal; overflow-wrap: anywhere; word-break: break-word; flex: 1; min-width: 0;">${item.name}</span></h4>
                <p>₹${item.price} x ${item.quantity}</p>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });
    
    // Total = item prices only (no GST)
    const grandTotal = subtotalAmount;

    // Update Total
    if(cartTotalPrice) cartTotalPrice.textContent = grandTotal;

    // Update Sticky Footer
    if(stickyCartFooter) {
        stickyCartFooter.style.display = "flex";
        stickyCartCount.textContent = totalItems + (totalItems > 1 ? " Items" : " Item");
        stickyCartPrice.textContent = "\u20b9" + grandTotal;
    }
}

// Proceed to Checkout Button Logic
document.addEventListener("DOMContentLoaded", () => {
    const proceedBtn = document.getElementById("proceed-checkout-btn");
    const backBtn = document.getElementById("back-to-cart-btn");
    const cartSlider = document.getElementById("cart-slider");
    
    if (proceedBtn && cartSlider) {
        proceedBtn.addEventListener("click", () => {
            cartSlider.style.transform = "translateX(-50%)";
        });
    }
    
    if (backBtn && cartSlider) {
        backBtn.addEventListener("click", () => {
            cartSlider.style.transform = "translateX(0)";
        });
    }
    
    const checkoutFinalBtn = document.getElementById("checkout-btn");
    if (checkoutFinalBtn) {
        checkoutFinalBtn.addEventListener("click", processCheckout);
    }
});

// Process WhatsApp Checkout
async function processCheckout() {
    if (cart.length === 0) {
        alert("Bhai, cart khaali hai. Pehle kuch items add karein!");
        return;
    }
    
    const custName = document.getElementById("cust-name").value.trim();
    const custAltPhone = document.getElementById("cust-alt-phone").value.trim();
    const custRoom = document.getElementById("cust-room").value.trim();
    const errorDiv = document.getElementById("checkout-error");
    
    if (errorDiv) errorDiv.style.display = "none";
    
    if (!custName || !custAltPhone || !custRoom) {
        if (errorDiv) {
            errorDiv.textContent = "Please fill in all the details including Room Number to proceed.";
            errorDiv.style.display = "block";
        } else {
            alert("Please fill in all the details including Room Number to proceed.");
        }
        return;
    }

    const orderButton = document.getElementById("checkout-btn");
    let originalText = "Place Order via WhatsApp";
    if (orderButton) {
        originalText = orderButton.innerHTML;
        orderButton.innerHTML = "<i class='fa-solid fa-spinner fa-spin'></i> Processing...";
        orderButton.disabled = true;
    }

    // Calculate total amount
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // 1. Send Order to Backend
    try {
        const orderData = {
            customerName: custName,
            contactNumber: custAltPhone,
            deliveryAddress: custRoom,
            items: cart.map(item => ({
                name: item.name,
                price: item.price,
                quantity: item.quantity
            })),
            totalAmount: totalAmount
        };

        // Note: Change this URL to your Render/Vercel URL once hosted
        // Example: const BACKEND_URL = "https://hotel-puri-sand-backend.onrender.com";
        const BACKEND_URL = "http://localhost:5000"; 
        
        const response = await fetch(`${BACKEND_URL}/api/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });
        
        const result = await response.json();
        
        if (!response.ok || !result.success) {
            console.error("Backend Error:", result);
            // Optionally show error but still send WhatsApp
        }
    } catch (err) {
        console.error("Failed to save order to database. Proceeding to WhatsApp.", err);
    }

    // 2. Message ka Text banana (WhatsApp Redirect)
    let orderText = `*PURI SAND HOTEL* 👑
_Room Service Order_
━━━━━━━━━━━━━━━━━━━━━
👤 *GUEST INFORMATION*
🔹 *Name:* ${custName}
🔹 *Room No:* ${custRoom}
🔹 *Contact:* ${custAltPhone}
━━━━━━━━━━━━━━━━━━━━━
🍽️ *ORDER DETAILS*
`;

    cart.forEach((item, index) => {
        orderText += `
▪️ *${item.name}*
   Qty: ${item.quantity}  |  Price: ₹${item.price}
   *Subtotal: ₹${item.quantity * item.price}*
`;
    });

    orderText += `
━━━━━━━━━━━━━━━━━━━━━
💰 *GRAND TOTAL: ₹${totalAmount}*
━━━━━━━━━━━━━━━━━━━━━
⏳ _Please confirm this order._
🙏 _Thank you!_`;

    // 3. Link Encode karna (Encode URL properly)
    const encodedText = encodeURIComponent(orderText);
    
    // 4. WhatsApp Number (Your Hotel number)
    const hotelNumber = "919437752000";
    
    // Use deep link to force opening the app directly without intermediate web page
    const whatsappUrl = `whatsapp://send?phone=${hotelNumber}&text=${encodedText}`;

    // Mobile fallback handling for popups
    setTimeout(() => {
        if (orderButton) {
            orderButton.innerHTML = originalText;
            orderButton.disabled = false;
        }
        toggleCart();
        cart = [];
        updateCartUI();
    }, 1000);
    
    // Switch to current window location href for mobile compatibility
    window.location.href = whatsappUrl;
}

// Process Table Booking
function processTableBooking() {
    const bookName = document.getElementById("book-name").value.trim();
    const bookDate = document.getElementById("book-date").value;
    const bookTime = document.getElementById("book-time").value;
    const bookGuests = document.getElementById("book-guests").value;
    
    if (!bookName || !bookDate || !bookTime || !bookGuests) {
        alert("Please fill in all details to book a table.");
        return;
    }
    
    let bookingText = `*PURI SAND HOTEL* 👑
_Table Reservation Request_
━━━━━━━━━━━━━━━━━━━━━
📅 *BOOKING DETAILS*
🔹 *Name:* ${bookName}
🔹 *Date:* ${bookDate}
🔹 *Time:* ${bookTime}
🔹 *Guests:* ${bookGuests} People
━━━━━━━━━━━━━━━━━━━━━
⏳ _Please confirm my table reservation._
🙏 _Thank you!_`;
    
    const whatsappNumber = "919437752000"; 
    
    const encodedText = encodeURIComponent(bookingText);
    // Use deep link to force opening the app directly without intermediate web page
    const whatsappUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encodedText}`;
    
    window.location.href = whatsappUrl;
}

document.addEventListener("DOMContentLoaded", init);
