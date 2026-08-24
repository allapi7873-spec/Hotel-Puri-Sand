require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully!'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// --- Mongoose Models ---

// 1. Food Order Schema
const OrderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    deliveryAddress: { type: String, default: 'Room Delivery' },
    items: [{
        name: String,
        price: Number,
        quantity: Number
    }],
    totalAmount: { type: Number, required: true },
    orderStatus: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});
const Order = mongoose.model('Order', OrderSchema);

// 2. Room Booking Schema
const BookingSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    checkIn: { type: String, required: true },
    checkOut: { type: String, required: true },
    roomCategory: { type: String, required: true },
    bookingDesk: { type: String, default: 'Website' },
    bookingStatus: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});
const Booking = mongoose.model('Booking', BookingSchema);

// 3. Product Availability Schema
const ProductStatusSchema = new mongoose.Schema({
    productId: { type: Number, required: true, unique: true },
    isAvailable: { type: Boolean, default: true },
    updatedAt: { type: Date, default: Date.now }
});
const ProductStatus = mongoose.model('ProductStatus', ProductStatusSchema);

// --- SSE: Connected Clients List ---
let sseClients = [];

function broadcastToClients(data) {
    const msg = `data: ${JSON.stringify(data)}\n\n`;
    sseClients.forEach(client => {
        try { client.res.write(msg); } catch(e) {}
    });
    console.log(`📡 Broadcast to ${sseClients.length} client(s):`, data);
}

// --- API Routes ---

// Health Check
app.get('/', (req, res) => {
    res.send('Hotel Puri Sand Backend is running! 🚀');
});

// SSE: Real-time event stream
app.get('/api/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.flushHeaders();

    const clientId = Date.now();
    sseClients.push({ id: clientId, res });
    console.log(`🔌 SSE client connected: ${clientId} (total: ${sseClients.length})`);

    // Send heartbeat every 25s to keep connection alive
    const heartbeat = setInterval(() => {
        try { res.write(': heartbeat\n\n'); } catch(e) {}
    }, 25000);

    req.on('close', () => {
        clearInterval(heartbeat);
        sseClients = sseClients.filter(c => c.id !== clientId);
        console.log(`🔌 SSE client disconnected: ${clientId} (total: ${sseClients.length})`);
    });
});

// GET all product availability statuses
app.get('/api/product-status', async (req, res) => {
    try {
        const statuses = await ProductStatus.find();
        // Return as an object: { productId: isAvailable }
        const statusMap = {};
        statuses.forEach(s => { statusMap[s.productId] = s.isAvailable; });
        res.status(200).json({ success: true, statuses: statusMap });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch statuses.' });
    }
});

// PUT toggle product availability (Admin action)
app.put('/api/product-status/:id', async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const { isAvailable } = req.body;

        const updated = await ProductStatus.findOneAndUpdate(
            { productId },
            { isAvailable, updatedAt: new Date() },
            { upsert: true, new: true }
        );

        // Broadcast real-time update to all connected SSE clients
        broadcastToClients({ type: 'PRODUCT_STATUS_CHANGE', productId, isAvailable });

        res.status(200).json({ success: true, status: updated });
    } catch (error) {
        console.error('Toggle Error:', error);
        res.status(500).json({ success: false, message: 'Failed to update status.' });
    }
});

// POST: Create a Food Order
app.post('/api/orders', async (req, res) => {
    try {
        const { customerName, contactNumber, deliveryAddress, items, totalAmount } = req.body;
        const newOrder = new Order({ customerName, contactNumber, deliveryAddress, items, totalAmount });
        await newOrder.save();
        res.status(201).json({ success: true, message: 'Order placed successfully!', order: newOrder });
    } catch (error) {
        console.error('Order Error:', error);
        res.status(500).json({ success: false, message: 'Failed to place order.' });
    }
});

// POST: Create a Room Booking
app.post('/api/bookings', async (req, res) => {
    try {
        const { customerName, checkIn, checkOut, roomCategory, bookingDesk } = req.body;
        const newBooking = new Booking({ customerName, checkIn, checkOut, roomCategory, bookingDesk });
        await newBooking.save();
        res.status(201).json({ success: true, message: 'Booking requested successfully!', booking: newBooking });
    } catch (error) {
        console.error('Booking Error:', error);
        res.status(500).json({ success: false, message: 'Failed to request booking.' });
    }
});

// GET: All Food Orders (Admin)
app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch orders.' });
    }
});

// GET: All Bookings (Admin)
app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, bookings });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch bookings.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
