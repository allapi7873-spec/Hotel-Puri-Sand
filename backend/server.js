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

// --- API Routes ---

// Health Check Route
app.get('/', (req, res) => {
    res.send('Hotel Puri Sand Backend is running!');
});

// Create a Food Order
app.post('/api/orders', async (req, res) => {
    try {
        const { customerName, contactNumber, deliveryAddress, items, totalAmount } = req.body;
        
        const newOrder = new Order({
            customerName,
            contactNumber,
            deliveryAddress,
            items,
            totalAmount
        });

        await newOrder.save();
        res.status(201).json({ success: true, message: 'Order placed successfully!', order: newOrder });
    } catch (error) {
        console.error('Order Error:', error);
        res.status(500).json({ success: false, message: 'Failed to place order.' });
    }
});

// Create a Room Booking
app.post('/api/bookings', async (req, res) => {
    try {
        const { customerName, checkIn, checkOut, roomCategory, bookingDesk } = req.body;
        
        const newBooking = new Booking({
            customerName,
            checkIn,
            checkOut,
            roomCategory,
            bookingDesk
        });

        await newBooking.save();
        res.status(201).json({ success: true, message: 'Booking requested successfully!', booking: newBooking });
    } catch (error) {
        console.error('Booking Error:', error);
        res.status(500).json({ success: false, message: 'Failed to request booking.' });
    }
});

// Get all Food Orders (for Admin Panel)
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

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
