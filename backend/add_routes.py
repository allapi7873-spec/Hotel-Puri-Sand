import re

with open("server.js", "r", encoding="utf-8") as f:
    js = f.read()

new_routes = """// Get all Food Orders (for Admin Panel)
app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, orders });
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch orders.' });
    }
});

// Get all Room Bookings (for Admin Panel)
app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, bookings });
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch bookings.' });
    }
});

// Start Server"""

old_regex = re.compile(r'// Start Server')
if old_regex.search(js):
    js = old_regex.sub(new_routes, js)
    with open("server.js", "w", encoding="utf-8") as f:
        f.write(js)
    print("Updated server.js")
else:
    print("// Start Server not found!")
