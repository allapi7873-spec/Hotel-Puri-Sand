// =========================================
// NAWABI THALI - MAIN SCRIPT (MULTI-PAGE)
// =========================================

// Full Menu Data
const products = [
    { id: 1, category: "Nawabi Breakfast", name: "Berad Toast with Butter & Jam", type: 'veg', price: 70 },
    { id: 2, category: "Nawabi Breakfast", name: "Veg Sandwich", type: 'veg', price: 80 },
    { id: 3, category: "Nawabi Breakfast", name: "Chicken Sandwich", type: 'non-veg', price: 90 },
    { id: 4, category: "Nawabi Breakfast", name: "Cheese Sandwich", type: 'veg', price: 100 },
    { id: 5, category: "Nawabi Breakfast", name: "Veg Club Sandwich", type: 'veg', price: 100 },
    { id: 6, category: "Nawabi Breakfast", name: "Non-Veg Club Sandwich", type: 'non-veg', price: 120 },
    { id: 7, category: "Nawabi Breakfast", name: "Poori Bhaji", type: 'veg', price: 70 },
    { id: 8, category: "Nawabi Breakfast", name: "Chole Bhature", type: 'veg', price: 70 },
    { id: 9, category: "Nawabi Breakfast", name: "Aloo Paratha (Served with Curd & Pickle)", type: 'veg', price: 70 },
    { id: 10, category: "Nawabi Breakfast", name: "Gobi Paratha (Served with Curd & Pickle)", type: 'veg', price: 70 },
    { id: 11, category: "Nawabi Breakfast", name: "Paneer Paratha (Served with Curd & Pickle)", type: 'veg', price: 90 },
    { id: 12, category: "Nawabi Breakfast", name: "Plain Paratha with Aloo Dum", type: 'veg', price: 80 },
    { id: 13, category: "Nawabi Breakfast", name: "Idly/Upma/Poha/Vada/Uttapam", type: 'veg', price: 70 },
    { id: 14, category: "Nawabi Breakfast", name: "Masala Dosa", type: 'veg', price: 70 },
    { id: 15, category: "Nawabi Breakfast", name: "Plain Dosa", type: 'veg', price: 90 },
    { id: 16, category: "Nawabi Breakfast", name: "Onion Dosa", type: 'veg', price: 120 },
    { id: 17, category: "Nawabi Breakfast", name: "Cheese Dosa", type: 'veg', price: 140 },
    { id: 18, category: "Nawabi Breakfast", name: "Cereals with Hot & Cold Milk", type: 'veg', price: 80 },
    { id: 19, category: "Nawabi Breakfast", name: "Fresh Cut Fruits", type: 'veg', price: 110 },
    { id: 20, category: "Nawabi Breakfast", name: "Eggs to Order (Poached/Omlete/Boiled/Scrambled/Bread Omlete)", type: 'non-veg', price: 70 },
    { id: 21, category: "Nawabi Breakfast", name: "Saute Vegetable", type: 'veg', price: 100 },
    { id: 22, category: "Nawabi Breakfast", name: "Vada Pav", type: 'veg', price: 70 },
    { id: 23, category: "Soup", name: "Cream of Tomato Soup", type: 'veg', price: 90 },
    { id: 24, category: "Soup", name: "Cream of Mushroom Soup", type: 'veg', price: 100 },
    { id: 25, category: "Soup", name: "Cream of Chicken Soup", type: 'non-veg', price: 110 },
    { id: 26, category: "Soup", name: "Veg Manchow Soup", type: 'veg', price: 90 },
    { id: 27, category: "Soup", name: "Non Veg Manchow Soup", type: 'non-veg', price: 100 },
    { id: 28, category: "Soup", name: "Veg Clear Soup", type: 'veg', price: 90 },
    { id: 29, category: "Soup", name: "Non Veg Clear Soup", type: 'non-veg', price: 100 },
    { id: 30, category: "Soup", name: "Veg Hot & Sour Soup", type: 'veg', price: 90 },
    { id: 31, category: "Soup", name: "Non Veg Hot & Sour Soup", type: 'non-veg', price: 100 },
    { id: 32, category: "Soup", name: "Veg Noodle Soup", type: 'veg', price: 90 },
    { id: 33, category: "Soup", name: "Non Veg Noodle Soup", type: 'non-veg', price: 100 },
    { id: 34, category: "Soup", name: "Veg Sweet Corn Soup", type: 'veg', price: 90 },
    { id: 35, category: "Soup", name: "Non Veg Sweet Corn Soup", type: 'non-veg', price: 100 },
    { id: 36, category: "Soup", name: "Veg Brunt Garlic Soup", type: 'veg', price: 90 },
    { id: 37, category: "Soup", name: "Non Veg Brunt Garlic Soup", type: 'non-veg', price: 100 },
    { id: 38, category: "Soup", name: "Veg Lemon Coriander Soup", type: 'veg', price: 90 },
    { id: 39, category: "Soup", name: "Non Veg Lemon Coriander Soup", type: 'non-veg', price: 100 },
    { id: 40, category: "Beverages", name: "Ready Made Tea", type: 'veg', price: 25 },
    { id: 41, category: "Beverages", name: "Coffee", type: 'veg', price: 30 },
    { id: 42, category: "Beverages", name: "Black Coffee", type: 'veg', price: 20 },
    { id: 43, category: "Beverages", name: "Instant Tea", type: 'veg', price: 10 },
    { id: 44, category: "Beverages", name: "Instant Coffee", type: 'veg', price: 15 },
    { id: 45, category: "Beverages", name: "Hot/Cold Milk", type: 'veg', price: 50 },
    { id: 46, category: "Beverages", name: "Milk Shake", type: 'veg', price: 80 },
    { id: 47, category: "Beverages", name: "Cold Coffee", type: 'veg', price: 80 },
    { id: 48, category: "Beverages", name: "Cold Coffee with Ice Cream", type: 'veg', price: 100 },
    { id: 49, category: "Beverages", name: "Hot Chocolate", type: 'veg', price: 100 },
    { id: 50, category: "Beverages", name: "Horlicks", type: 'veg', price: 100 },
    { id: 51, category: "Beverages", name: "Bournvita", type: 'veg', price: 100 },
    { id: 52, category: "Beverages", name: "Mocktail (As per your choice)", type: 'veg', price: 40 },
    { id: 53, category: "Beverages", name: "Cold Drink", type: 'veg', price: "MRP" },
    { id: 54, category: "Beverages", name: "Butter Milk", type: 'veg', price: 30 },
    { id: 55, category: "Beverages", name: "Jal Jeera/Lemon Water", type: 'veg', price: 20 },
    { id: 56, category: "Beverages", name: "Fresh Lime Soda/Water", type: 'veg', price: 40 },
    { id: 57, category: "Beverages", name: "Lassi (Salt/Sweet)", type: 'veg', price: 60 },
    { id: 58, category: "Beverages", name: "Juice (Canned/Fresh)", type: 'veg', price: 70 },
    { id: 59, category: "Beverages", name: "Mineral Water", type: 'veg', price: "MRP" },
    { id: 60, category: "Salad & Raita", name: "Garden Fresh Green Salad", type: 'veg', price: 50 },
    { id: 61, category: "Salad & Raita", name: "Onion Salad", type: 'veg', price: 30 },
    { id: 62, category: "Salad & Raita", name: "Cuchumbar Salad", type: 'veg', price: 50 },
    { id: 63, category: "Salad & Raita", name: "Chicken Salad", type: 'non-veg', price: 120 },
    { id: 64, category: "Salad & Raita", name: "Tossed Salad", type: 'veg', price: 100 },
    { id: 65, category: "Salad & Raita", name: "Russian Salad", type: 'veg', price: 100 },
    { id: 66, category: "Salad & Raita", name: "Kimichi Salad", type: 'veg', price: 70 },
    { id: 67, category: "Salad & Raita", name: "Mix Raita", type: 'veg', price: 50 },
    { id: 68, category: "Salad & Raita", name: "Onion Raita", type: 'veg', price: 50 },
    { id: 69, category: "Salad & Raita", name: "Boondi Raita", type: 'veg', price: 50 },
    { id: 70, category: "Salad & Raita", name: "Pineapple Raita", type: 'veg', price: 60 },
    { id: 71, category: "Salad & Raita", name: "Aloo Raita", type: 'veg', price: 50 },
    { id: 72, category: "Snacks/Quick Bites", name: "Assorted/Gobi/Onion Veg Pakoda", type: 'veg', price: 120 },
    { id: 73, category: "Snacks/Quick Bites", name: "Mushroom/Paneer Veg Pakoda", type: 'veg', price: 150 },
    { id: 74, category: "Snacks/Quick Bites", name: "Egg Non Veg Pakoda", type: 'non-veg', price: 120 },
    { id: 75, category: "Snacks/Quick Bites", name: "Chicken Non Veg Pakoda", type: 'non-veg', price: 200 },
    { id: 76, category: "Snacks/Quick Bites", name: "Prawn Non Veg Pakoda", type: 'non-veg', price: 300 },
    { id: 77, category: "Snacks/Quick Bites", name: "Bread Pokoda", type: 'veg', price: 80 },
    { id: 78, category: "Snacks/Quick Bites", name: "Finger Chips", type: 'veg', price: 120 },
    { id: 79, category: "Snacks/Quick Bites", name: "Dry Chana", type: 'veg', price: 150 },
    { id: 80, category: "Snacks/Quick Bites", name: "Peanuts Masal", type: 'veg', price: 120 },
    { id: 81, category: "Snacks/Quick Bites", name: "Paneer 65", type: 'veg', price: 180 },
    { id: 82, category: "Snacks/Quick Bites", name: "Boil Corn Chat", type: 'veg', price: 120 },
    { id: 83, category: "Snacks/Quick Bites", name: "Fish Finger", type: 'non-veg', price: 200 },
    { id: 84, category: "Snacks/Quick Bites", name: "Fish & Chips", type: 'non-veg', price: 220 },
    { id: 85, category: "Snacks/Quick Bites", name: "Barly Prawn", type: 'non-veg', price: 400 },
    { id: 86, category: "Snacks/Quick Bites", name: "Crunchy Mustard Chicken", type: 'non-veg', price: 250 },
    { id: 87, category: "Snacks/Quick Bites", name: "Fish Fry (Bone)", type: 'non-veg', price: 150 },
    { id: 88, category: "Snacks/Quick Bites", name: "Fish Fry (Boneless)", type: 'non-veg', price: 180 },
    { id: 89, category: "Snacks/Quick Bites", name: "Veg Roll", type: 'veg', price: 120 },
    { id: 90, category: "Snacks/Quick Bites", name: "Non Veg Roll", type: 'non-veg', price: 140 },
    { id: 91, category: "Snacks/Quick Bites", name: "Dry Papad", type: 'veg', price: 25 },
    { id: 92, category: "Snacks/Quick Bites", name: "Fry Papad", type: 'veg', price: 30 },
    { id: 93, category: "Snacks/Quick Bites", name: "Masala Papad", type: 'veg', price: 35 },
    { id: 94, category: "Snacks/Quick Bites", name: "Veg Cutlet", type: 'veg', price: 160 },
    { id: 95, category: "Snacks/Quick Bites", name: "Chicken Cutlet", type: 'non-veg', price: 200 },
    { id: 96, category: "Vegetable Stater", name: "Veg Manchurian", type: 'veg', price: 170 },
    { id: 97, category: "Vegetable Stater", name: "Chilli/Crispy/Schezwan Potato", type: 'veg', price: 140 },
    { id: 98, category: "Vegetable Stater", name: "Chilli/Crispy/Schezwan Baby Corn", type: 'veg', price: 170 },
    { id: 99, category: "Vegetable Stater", name: "Salt & Pepper Baby Corn", type: 'veg', price: 170 },
    { id: 100, category: "Vegetable Stater", name: "Chilli Gobi", type: 'veg', price: 170 },
    { id: 101, category: "Vegetable Stater", name: "Gobi 65", type: 'veg', price: 150 },
    { id: 102, category: "Vegetable Stater", name: "American Corn Salt & Pepper", type: 'veg', price: 150 },
    { id: 103, category: "Vegetable Stater", name: "Chilli Chana", type: 'veg', price: 120 },
    { id: 104, category: "Mashroom/Paneer", name: "Chilli/Manchurian/Schezwan Mushroom", type: 'veg', price: 180 },
    { id: 105, category: "Mashroom/Paneer", name: "Salt & Pepper Mushroom", type: 'veg', price: 180 },
    { id: 106, category: "Mashroom/Paneer", name: "Chilli/Manchurian/Schezwan Paneer", type: 'veg', price: 170 },
    { id: 107, category: "Mashroom/Paneer", name: "Chatpata/Paneer 65", type: 'veg', price: 170 },
    { id: 108, category: "Nonveg Stater", name: "Chili/Manchurian/65 Prawn", type: 'non-veg', price: 380 },
    { id: 109, category: "Nonveg Stater", name: "Crispy/Schezwan/Chatpata Prawn", type: 'non-veg', price: 380 },
    { id: 110, category: "Nonveg Stater", name: "Salt & Pepper Prawn", type: 'non-veg', price: 380 },
    { id: 111, category: "Nonveg Stater", name: "Golden Fry Prawn", type: 'non-veg', price: 400 },
    { id: 112, category: "Nonveg Stater", name: "Chili/Manchurian/65 Fish", type: 'non-veg', price: 200 },
    { id: 113, category: "Nonveg Stater", name: "Schezwan/Chatpata Fish", type: 'non-veg', price: 200 },
    { id: 114, category: "Nonveg Stater", name: "Salt & Pepper Fish", type: 'non-veg', price: 200 },
    { id: 115, category: "Nonveg Stater", name: "Chili/Manchurian/65 Chicken", type: 'non-veg', price: 240 },
    { id: 116, category: "Nonveg Stater", name: "Crispy/Schezwan/Chatpata Chicken", type: 'non-veg', price: 240 },
    { id: 117, category: "Nonveg Stater", name: "Salt & Pepper Chicken", type: 'non-veg', price: 240 },
    { id: 118, category: "Nonveg Stater", name: "Chicken Lollipop / Drums of Heaven", type: 'non-veg', price: 250 },
    { id: 119, category: "Nonveg Stater", name: "Chicken Tai Pai", type: 'non-veg', price: 250 },
    { id: 120, category: "Nonveg Stater", name: "Egg Chili", type: 'non-veg', price: 150 },
    { id: 121, category: "Tandoor Khazana", name: "Tandoori Chicken (Half)", type: 'non-veg', price: 250 },
    { id: 122, category: "Tandoor Khazana", name: "Tandoori Chicken (Full)", type: 'non-veg', price: 400 },
    { id: 123, category: "Tandoor Khazana", name: "Tangri Kabab", type: 'non-veg', price: 250 },
    { id: 124, category: "Tandoor Khazana", name: "Chicken Seekh Kabab", type: 'non-veg', price: 220 },
    { id: 125, category: "Tandoor Khazana", name: "Chicken Hariyali Kabab", type: 'non-veg', price: 220 },
    { id: 126, category: "Tandoor Khazana", name: "Chicken Tikka", type: 'non-veg', price: 220 },
    { id: 127, category: "Tandoor Khazana", name: "Chicken Malai Tikka", type: 'non-veg', price: 250 },
    { id: 128, category: "Tandoor Khazana", name: "Fish Tikka", type: 'non-veg', price: 220 },
    { id: 129, category: "Tandoor Khazana", name: "Prawn Tikka", type: 'non-veg', price: 350 },
    { id: 130, category: "Tandoor Khazana", name: "Prawn Malai Tikka", type: 'non-veg', price: 350 },
    { id: 131, category: "Tandoor Khazana", name: "Mutton Seekh Kabab", type: 'non-veg', price: 349 },
    { id: 132, category: "Tandoor Khazana", name: "Tandoori Pomfret", type: 'non-veg', price: 450 },
    { id: 133, category: "Tandoor Khazana", name: "Paneer Achari Tikka", type: 'veg', price: 180 },
    { id: 134, category: "Tandoor Khazana", name: "Hara Bara Kabab", type: 'veg', price: 150 },
    { id: 135, category: "Tandoor Khazana", name: "Paneer Tikka", type: 'veg', price: 180 },
    { id: 136, category: "Tandoor Khazana", name: "Aloo Banjara", type: 'veg', price: 130 },
    { id: 137, category: "Tandoor Khazana", name: "Veg Seek Kabab", type: 'veg', price: 150 },
    { id: 138, category: "Chinese Delicate Main Course", name: "Paneer (Chili/Manchurian/Schezwan/Hot Garlic)", type: 'veg', price: 200 },
    { id: 139, category: "Chinese Delicate Main Course", name: "Paneer (Garlic/Ginger)", type: 'veg', price: 200 },
    { id: 140, category: "Chinese Delicate Main Course", name: "Mushroom (Chili/Manchurian/Schezwan/Hot Garlic)", type: 'veg', price: 200 },
    { id: 141, category: "Chinese Delicate Main Course", name: "Mushroom (Garlic/Ginger)", type: 'veg', price: 200 },
    { id: 142, category: "Chinese Delicate Main Course", name: "Stire Fried Vegetable", type: 'veg', price: 170 },
    { id: 143, category: "Nonveg (Main)", name: "Chicken Sauce (Chili/Manchurian/Schezwan/Hot Garlic)", type: 'non-veg', price: 240 },
    { id: 144, category: "Nonveg (Main)", name: "Chicken Sauce (Garlic/Ginger)", type: 'non-veg', price: 240 },
    { id: 145, category: "Nonveg (Main)", name: "Fish Sauce (Chili/Manchurian/Schezwan/Hot Garlic)", type: 'non-veg', price: 200 },
    { id: 146, category: "Nonveg (Main)", name: "Fish Sauce (Garlic/Ginger)", type: 'non-veg', price: 200 },
    { id: 147, category: "Nonveg (Main)", name: "Stire Fried Chicken", type: 'non-veg', price: 240 },
    { id: 148, category: "Odia/Bengali Special (Veg)", name: "Aloo Phoolkobi Tarkari", type: 'veg', price: 150 },
    { id: 149, category: "Odia/Bengali Special (Veg)", name: "Chhena Tarkari", type: 'veg', price: 180 },
    { id: 150, category: "Odia/Bengali Special (Veg)", name: "Chhatu Besara", type: 'veg', price: 180 },
    { id: 151, category: "Odia/Bengali Special (Veg)", name: "Aloo Potal Rassa (Seasonal)", type: 'veg', price: 150 },
    { id: 152, category: "Odia/Bengali Special (Veg)", name: "Manja Rai", type: 'veg', price: 150 },
    { id: 153, category: "Odia/Bengali Special (Veg)", name: "Poi Ghanta", type: 'veg', price: 150 },
    { id: 154, category: "Odia/Bengali Special (Veg)", name: "Janhi Posta", type: 'veg', price: 180 },
    { id: 155, category: "Odia/Bengali Special (Veg)", name: "Dahi Baigan / Bhindi / Bundi", type: 'veg', price: 120 },
    { id: 156, category: "Odia/Bengali Special (Veg)", name: "Ghanta", type: 'veg', price: 150 },
    { id: 157, category: "Odia/Bengali Special (Veg)", name: "Saga Muga", type: 'veg', price: 120 },
    { id: 158, category: "Odia/Bengali Special (Veg)", name: "Santula", type: 'veg', price: 150 },
    { id: 159, category: "Odia/Bengali Special (Veg)", name: "Chhuin Aloo Badi Besara", type: 'veg', price: 150 },
    { id: 160, category: "Odia/Bengali Special (Veg)", name: "Dalma", type: 'veg', price: 150 },
    { id: 161, category: "Odia/Bengali Special (Veg)", name: "Chana Masala", type: 'veg', price: 130 },
    { id: 162, category: "Odia/Bengali Special (Veg)", name: "Sadha Tadaka", type: 'veg', price: 120 },
    { id: 163, category: "Odia/Bengali Special (Veg)", name: "Kalara Chips", type: 'veg', price: 150 },
    { id: 164, category: "Odia/Bengali Special (Veg)", name: "Sorisa Potal", type: 'veg', price: 150 },
    { id: 165, category: "Odia/Bengali Special (Veg)", name: "Sorisa Baigan", type: 'veg', price: 150 },
    { id: 166, category: "Odia/Bengali Special (Veg)", name: "Aloo Bharta", type: 'veg', price: 70 },
    { id: 167, category: "Odia/Bengali Special (Veg)", name: "Badichura", type: 'veg', price: 80 },
    { id: 168, category: "Odia/Bengali Special (Veg)", name: "Manji Badi", type: 'veg', price: 90 },
    { id: 169, category: "Odia/Bengali Special (Veg)", name: "Tomato Chutney", type: 'veg', price: 70 },
    { id: 170, category: "Odia/Bengali Special (Veg)", name: "Dahi Pakhala", type: 'veg', price: 90 },
    { id: 171, category: "Odia/Bengali Special (Veg)", name: "Choler Dal", type: 'veg', price: 100 },
    { id: 172, category: "Odia/Bengali Special (Veg)", name: "Moong Dal", type: 'veg', price: 100 },
    { id: 173, category: "Odia/Bengali Special (Veg)", name: "Aloo Jhuri", type: 'veg', price: 100 },
    { id: 174, category: "Odia/Bengali Special (Veg)", name: "Aloo Posto", type: 'veg', price: 180 },
    { id: 175, category: "Non-Veg Curry", name: "Mansa Kassa / Tarkari", type: 'non-veg', price: 350 },
    { id: 176, category: "Non-Veg Curry", name: "Kukuda Mansa Kassa / Tarkari", type: 'non-veg', price: 240 },
    { id: 177, category: "Non-Veg Curry", name: "Rohi Machha Besara/ Bhaja", type: 'non-veg', price: 180 },
    { id: 178, category: "Non-Veg Curry", name: "Pohala Machha Besara/ Bhaja", type: 'non-veg', price: 220 },
    { id: 179, category: "Non-Veg Curry", name: "Kankada Tarkari", type: 'non-veg', price: 349 },
    { id: 180, category: "Non-Veg Curry", name: "Mahurali Besara / Bhaja", type: 'non-veg', price: 180 },
    { id: 181, category: "Non-Veg Curry", name: "Pomfret Tawa Bhaja", type: 'non-veg', price: 299 },
    { id: 182, category: "Non-Veg Curry", name: "Chingudi Dalma", type: 'non-veg', price: 180 },
    { id: 183, category: "Non-Veg Curry", name: "Chingudi Rasa", type: 'non-veg', price: 180 },
    { id: 184, category: "Non-Veg Curry", name: "Anda Kassa", type: 'non-veg', price: 150 },
    { id: 185, category: "Non-Veg Curry", name: "Mudhi Ghanta", type: 'non-veg', price: 180 },
    { id: 186, category: "Non-Veg Curry", name: "Chingudi Checha", type: 'non-veg', price: 299 },
    { id: 187, category: "Non-Veg Curry", name: "Machha Chhecha", type: 'non-veg', price: 199 },
    { id: 188, category: "Non-Veg Curry", name: "Chuna Machha Patrapoda", type: 'non-veg', price: 170 },
    { id: 189, category: "Non-Veg Curry", name: "Poi Chingudi", type: 'non-veg', price: 220 },
    { id: 190, category: "Non-Veg Curry", name: "Egg Curry", type: 'non-veg', price: 120 },
    { id: 191, category: "Rice", name: "Veg Fride Rice (Chili Garlic/Schezwan)", type: 'veg', price: 160 },
    { id: 192, category: "Rice", name: "Mix Fride Rice Veg", type: 'veg', price: 180 },
    { id: 193, category: "Rice", name: "Chicken Fride Rice (Chili Garlic/Schezwan)", type: 'non-veg', price: 200 },
    { id: 194, category: "Rice", name: "Egg Fride Rice (Chili Garlic/Schezwan)", type: 'non-veg', price: 180 },
    { id: 195, category: "Rice", name: "Prawn Fride Rice (Chili Garlic/Schezwan)", type: 'non-veg', price: 220 },
    { id: 196, category: "Rice", name: "Mix Fride Rice Non Veg (Chili Garlic/Schezwan)", type: 'non-veg', price: 220 },
    { id: 197, category: "Combo Special", name: "Chinese Combo Veg", type: 'veg', price: 129 },
    { id: 198, category: "Combo Special", name: "Chinese Combo Non Veg", type: 'non-veg', price: 149 },
    { id: 199, category: "Combo Special", name: "Chilli Chicken & Lachha Paratha", type: 'non-veg', price: 199 },
    { id: 200, category: "Combo Special", name: "Jeera Rice & Dal Tadka", type: 'veg', price: 99 },
    { id: 201, category: "Combo Special", name: "Kolkata Veg Biryani", type: 'veg', price: 129 },
    { id: 202, category: "Combo Special", name: "Kolkata Non Veg Biryani", type: 'non-veg', price: 169 },
    { id: 203, category: "Combo Special", name: "Matka Dum Veg Biryani", type: 'veg', price: 179 },
    { id: 204, category: "Combo Special", name: "Matka Dum Chicken Biryani", type: 'non-veg', price: 219 },
    { id: 205, category: "Combo Special", name: "Matka Dum Mutton Biryani", type: 'non-veg', price: 319 },
    { id: 206, category: "Nawabi Thali", name: "Nawabi Special Veg Thali", type: 'veg', price: 249 },
    { id: 207, category: "Nawabi Thali", name: "Nawabi Special Non Veg Thali", type: 'non-veg', price: 299 },
    { id: 208, category: "Nawabi Thali", name: "Veg Thali", type: 'veg', price: 149 },
    { id: 209, category: "Nawabi Thali", name: "Fish Thali", type: 'non-veg', price: 179 },
    { id: 210, category: "Nawabi Thali", name: "Prawn Thali", type: 'non-veg', price: 249 },
    { id: 211, category: "Nawabi Thali", name: "Chicken Thali", type: 'non-veg', price: 199 },
    { id: 212, category: "Nawabi Thali", name: "Mutton Thali", type: 'non-veg', price: 249 },
    { id: 213, category: "Nawabi Thali", name: "Pakhala Veg", type: 'veg', price: 149 },
    { id: 214, category: "Nawabi Thali", name: "Pakhala Non Veg", type: 'non-veg', price: 219 },
    { id: 215, category: "Nawabi Thali", name: "Ghee Arna Chicken", type: 'non-veg', price: 199 },
    { id: 216, category: "Nawabi Thali", name: "Ghee Arna Mutton", type: 'non-veg', price: 249 },
    { id: 217, category: "Nawabi Thali", name: "Usuna Bhat with Chicken", type: 'non-veg', price: 199 },
    { id: 218, category: "Nawabi Thali", name: "Usuna Bhata with Mutton", type: 'non-veg', price: 249 },
    { id: 219, category: "Nawabi Thali", name: "Mudi Mansa Tarkari", type: 'non-veg', price: 249 },
    { id: 220, category: "Nawabi Thali", name: "Mutton Chakuli", type: 'non-veg', price: 249 },
    { id: 221, category: "Nawabi Thali", name: "Bamboo Mutton", type: 'non-veg', price: 349 }
];


// State
let cart = [];
let currentCategory = "breakfast-snacks";
let currentSubCategory = "Nawabi Breakfast";

// DOM Elements
const productContainer = document.getElementById("product-container");
const cartOverlay = document.getElementById("cart-overlay");
const cartSidebar = document.getElementById("cart-sidebar");
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartBadge = document.getElementById("cart-badge");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalPrice = document.getElementById("cart-total-price");
const checkoutBtn = document.getElementById("checkout-btn");
const bookWhatsappBtn = document.getElementById("book-whatsapp-btn");
const categoryTabs = document.querySelectorAll(".tab-btn");
const navbar = document.querySelector(".navbar");

// Initialize App
function init() {
    handlePreloader();
    handleNavbarScroll();
    
    // Only render menu if on menu.html
    if(productContainer) {
        renderProducts(currentCategory, currentSubCategory);
        setupMenuListeners();
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
    // Trigger once on load to set initial state correctly
    const subCatContainer = document.getElementById("sub-category-tabs");
    if(subCatContainer && currentCategory === "breakfast-snacks") {
        subCatContainer.innerHTML = `
            <button class="sub-tab-btn active" data-sub-category="Nawabi Breakfast">Nawabi Breakfast</button>
            <button class="sub-tab-btn" data-sub-category="Snacks/Quick Bites">Snacks/Quick Bites</button>
            <button class="sub-tab-btn" data-sub-category="Salad & Raita">Salad & Raita</button>
        `;
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
    window.dispatchEvent(new Event('scroll'));
}

// Menu Specific Listeners
// Menu Specific Listeners
function setupMenuListeners() {
    const subCategoryTabs = document.querySelectorAll(".sub-tab-btn");
    const subCategoryContainer = document.getElementById("sub-category-tabs");
    const searchInput = document.getElementById("menu-search");

    function updateSubTabs(category) {
        if(!subCategoryContainer) return;
        
        if (category === 'breakfast-snacks') {
            subCategoryContainer.innerHTML = `
                <button class="sub-tab-btn active" data-sub-category="Nawabi Breakfast">Nawabi Breakfast</button>
                <button class="sub-tab-btn" data-sub-category="Snacks/Quick Bites">Snacks/Quick Bites</button>
                <button class="sub-tab-btn" data-sub-category="Salad & Raita">Salad & Raita</button>
            `;
            currentSubCategory = 'Nawabi Breakfast';
        } else if (category === 'soups-beverages') {
            subCategoryContainer.innerHTML = `
                <button class="sub-tab-btn active" data-sub-category="Soup">Soup</button>
                <button class="sub-tab-btn" data-sub-category="Beverages">Beverages</button>
            `;
            currentSubCategory = 'Soup';
        } else if (category === 'pure-veg') {
            subCategoryContainer.innerHTML = `
                <button class="sub-tab-btn active" data-sub-category="Vegetable Stater">Vegetable Stater</button>
                <button class="sub-tab-btn" data-sub-category="Mashroom/Paneer">Mashroom/Paneer</button>
                <button class="sub-tab-btn" data-sub-category="Chinese Delicate Main Course">Chinese Delicate</button>
                <button class="sub-tab-btn" data-sub-category="Odia/Bengali Special (Veg)">Odia/Bengali Special</button>
                <button class="sub-tab-btn" data-sub-category="Tandoor Khazana">Tandoor Khazana (Veg)</button>
            `;
            currentSubCategory = 'Vegetable Stater';
        } else if (category === 'non-veg') {
            subCategoryContainer.innerHTML = `
                <button class="sub-tab-btn active" data-sub-category="Nonveg Stater">Nonveg Stater</button>
                <button class="sub-tab-btn" data-sub-category="Nonveg (Main)">Nonveg (Main)</button>
                <button class="sub-tab-btn" data-sub-category="Non-Veg Curry">Non-Veg Curry</button>
                <button class="sub-tab-btn" data-sub-category="Tandoor Khazana">Tandoor Khazana (Non-Veg)</button>
            `;
            currentSubCategory = 'Nonveg Stater';
        } else if (category === 'rice-thali') {
            subCategoryContainer.innerHTML = `
                <button class="sub-tab-btn active" data-sub-category="Rice">Rice</button>
                <button class="sub-tab-btn" data-sub-category="Combo Special">Combo Special</button>
                <button class="sub-tab-btn" data-sub-category="Nawabi Thali">Nawabi Thali</button>
            `;
            currentSubCategory = 'Rice';
        }
        
        // Re-attach listeners to new sub-tabs
        const newSubTabs = document.querySelectorAll(".sub-tab-btn");
        newSubTabs.forEach(tab => {
            tab.addEventListener("click", (e) => {
                newSubTabs.forEach(t => t.classList.remove("active"));
                e.target.classList.add("active");
                currentSubCategory = e.target.getAttribute("data-sub-category");
                renderProducts(currentCategory, currentSubCategory, searchInput ? searchInput.value : "");
            });
        });
    }

    categoryTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            categoryTabs.forEach(t => t.classList.remove("active"));
            e.target.classList.add("active");
            currentCategory = e.target.getAttribute("data-main-category");
            
            if(subCategoryContainer) {
                subCategoryContainer.style.display = 'flex';
                updateSubTabs(currentCategory);
            }
            
            renderProducts(currentCategory, currentSubCategory, searchInput ? searchInput.value : "");
        });
    });

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
    
    if (mainCategory === 'pure-veg' && subCategory === 'Tandoor Khazana') {
        itemsToRender = products.filter(p => p.category === 'Tandoor Khazana' && !p.name.match(/Chicken|Mutton|Fish|Prawn|Egg|Tangri|Pomfret/i));
    } else if (mainCategory === 'non-veg' && subCategory === 'Tandoor Khazana') {
        itemsToRender = products.filter(p => p.category === 'Tandoor Khazana' && p.name.match(/Chicken|Mutton|Fish|Prawn|Egg|Tangri|Pomfret/i));
    } else {
        itemsToRender = products.filter(p => p.category === subCategory);
    }

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

        const cartItem = cart.find(i => i.id === product.id);
        
        let actionHTML = '';
        if (cartItem) {
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
        productEl.innerHTML = `
            <div class="item-details">
                <h4 style="display:flex; align-items:flex-start; margin-bottom:5px; margin-top:0;">${dietMark}<span style="white-space: normal; overflow-wrap: anywhere; word-break: break-word; flex: 1; min-width: 0;">${product.name}</span></h4>
                <div class="item-price">${product.price === "MRP" ? "MRP" : "₹" + product.price}</div>
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
    cartSidebar.classList.toggle("active");
    cartOverlay.classList.toggle("active");
}

// Add to Cart
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
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
    const cartItemsContainer = document.getElementById("cart-items");
    const cartSubtotalPrice = document.getElementById("cart-subtotal-price");
    const cartGstPrice = document.getElementById("cart-gst-price");
    const cartTotalPrice = document.getElementById("cart-total-price");
    const stickyCartFooter = document.getElementById("sticky-cart-footer");
    const stickyCartCount = document.getElementById("sticky-cart-count");
    const stickyCartPrice = document.getElementById("sticky-cart-price");

    if(!cartBadge || !cartItemsContainer) return;
    
    // Update Badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    
    // Update List
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Aapka cart abhi khaali hai! Kuch swadisht add karein.</div>';
        if(cartSubtotalPrice) cartSubtotalPrice.textContent = "0";
        if(cartGstPrice) cartGstPrice.textContent = "0";
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
                <p>\u20B9${item.price} x ${item.quantity}</p>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });
    
    // Calculate GST
    const gstAmount = Math.round(subtotalAmount * 0.18);
    const grandTotal = subtotalAmount + gstAmount;

    // Update Totals
    if(cartSubtotalPrice) cartSubtotalPrice.textContent = subtotalAmount;
    if(cartGstPrice) cartGstPrice.textContent = gstAmount;
    if(cartTotalPrice) cartTotalPrice.textContent = grandTotal;

    // Update Sticky Footer
    if(stickyCartFooter) {
        stickyCartFooter.style.display = "flex";
        stickyCartCount.textContent = totalItems + (totalItems > 1 ? " Items" : " Item");
        stickyCartPrice.textContent = "\u20B9" + grandTotal;
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

    // 1. Message ka Text banana
    const crownEmoji = String.fromCodePoint(0x1F451);

    let orderText = `*Puri Sand Hotel Room Service* ${crownEmoji}\n\n`;

    orderText += `*Customer Details:*\n`;
    orderText += `- Name: ${custName}\n`;
    orderText += `- Room Number: ${custRoom}\n`;
    orderText += `- Phone: ${custAltPhone}\n`;

    orderText += `\n*Order Items:*\n`;


    // 3. Cart Items
    let subtotal = 0;

    // Emoji Unicode
    const redCircle = String.fromCodePoint(0x1F534);   // ðŸ”´
    const greenCircle = String.fromCodePoint(0x1F7E2); // ðŸŸ¢

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;

        subtotal += itemTotal;


        // -----------------------------------------
        // VEG / NON-VEG DETECTION
        // -----------------------------------------

        const category = String(item.category || "")
            .toLowerCase()
            .replace(/[\s_-]/g, "");

        const itemName = String(item.name || "").toLowerCase();


        // Non-Veg keywords
        const nonVegKeywords = [
            "nonveg",
            "nonvegetarian",
            "chicken",
            "mutton",
            "egg",
            "prawn",
            "prawns",
            "fish",
            "seafood",
            "biryani"
        ];


        // Check category
        let isNonVeg = category.includes("nonveg");


        // Check item name
        if (!isNonVeg) {
            isNonVeg = nonVegKeywords.some(keyword =>
                itemName.includes(keyword)
            );
        }


        // -----------------------------------------
        // RED / GREEN SYMBOL
        // -----------------------------------------

        const symbol = isNonVeg
            ? redCircle
            : greenCircle;


        // Add item to WhatsApp message
        orderText += `${symbol} ${item.name} (x${item.quantity}) = \u20B9${itemTotal}\n`;
    });


    // 4. GST aur Total Calculation
    const gst = Math.round(subtotal * 0.18);
    const grandTotal = subtotal + gst;


    orderText += `\n------------------\n`;

    orderText += `Subtotal: \u20B9${subtotal}\n`;

    orderText += `GST (18%): \u20B9${gst}\n`;

    orderText += `*Grand Total: \u20B9${grandTotal}*\n`;

    orderText += `------------------\n\n`;

    orderText += `Please confirm this order as soon as possible.`;


    // 5. WhatsApp Number
    const whatsappNumber = "919437752000";


    // 6. Message Encode
    const encodedText = encodeURIComponent(orderText);


    // IMPORTANT:
    // wa.me ki jagah api.whatsapp.com use karo
    const whatsappUrl =
        `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;


    // 7. WhatsApp Open
    window.open(whatsappUrl, "_blank");
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
    
    let bookingText = `*Puri Sand Hotel - Table Reservation* \uD83C\uDF7D\uFE0F\n\n`;
    bookingText += `*Name:* ${bookName}\n`;
    bookingText += `*Date:* ${bookDate}\n`;
    bookingText += `*Time:* ${bookTime}\n`;
    bookingText += `*Guests:* ${bookGuests} People\n\n`;
    bookingText += `Please confirm my table reservation.`;
    
    const whatsappNumber = "919437752000"; 
    
    const encodedText = encodeURIComponent(bookingText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
}

document.addEventListener("DOMContentLoaded", init);



