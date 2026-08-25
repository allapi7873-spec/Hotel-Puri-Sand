const mongoose = require('mongoose');

const uri = "mongodb+srv://allapi7873_db_user:TTSSUlypQbfahoRw@cluster0.5vbsf5l.mongodb.net/hotel_puri_sand?retryWrites=true&w=majority&appName=Cluster0";

async function clearOrders() {
  try {
    await mongoose.connect(uri);
    const db = mongoose.connection.db;
    const result = await db.collection('orders').deleteMany({});
    console.log(`Deleted ${result.deletedCount} orders`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.disconnect();
  }
}

clearOrders();