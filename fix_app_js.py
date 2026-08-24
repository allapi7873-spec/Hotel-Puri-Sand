import re

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

new_func = """async function sendWhatsAppBooking() {
  const nameInput = document.getElementById('booking-name');
  const checkinInput = document.getElementById('booking-checkin');
  const checkoutInput = document.getElementById('booking-checkout');
  const roomSelect = document.getElementById('booking-room-type');
  const adultsSelect = document.getElementById('booking-adults');
  const childrenSelect = document.getElementById('booking-children');
  const deskSelect = document.getElementById('booking-desk');

  const name = nameInput ? nameInput.value.trim() : '';
  const checkin = checkinInput ? checkinInput.value : '';
  const checkout = checkoutInput ? checkoutInput.value : '';
  const roomType = roomSelect ? roomSelect.value : '';
  const adults = adultsSelect ? adultsSelect.value : '';
  const children = childrenSelect ? childrenSelect.value : '';
  const bookingDesk = deskSelect ? deskSelect.value : '9437752000';

  // Basic verification
  if (!name) {
    alert("Please enter your name to proceed.");
    if (nameInput) nameInput.focus();
    return;
  }
  if (!checkin || !checkout) {
    alert("Please select both check-in and check-out dates.");
    return;
  }

  // Formatting dates for presentation
  const formatDateString = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const submitBtn = document.querySelector("#booking-modal button[onclick='sendWhatsAppBooking()']");
  const originalText = submitBtn ? submitBtn.innerHTML : "Confirm Booking";
  if (submitBtn) {
      submitBtn.innerHTML = "<i class='fa-solid fa-spinner fa-spin'></i> Processing...";
      submitBtn.disabled = true;
  }

  // 1. Send Booking to Backend
  try {
      const bookingData = {
          customerName: name,
          checkIn: checkin,
          checkOut: checkout,
          roomCategory: roomType,
          bookingDesk: bookingDesk
      };

      // Note: Change this URL to your Render/Vercel URL once hosted
      // Example: const BACKEND_URL = "https://hotel-puri-sand-backend.onrender.com";
      const BACKEND_URL = "http://localhost:5000"; 
      
      const response = await fetch(`${BACKEND_URL}/api/bookings`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookingData)
      });
      
      const result = await response.json();
      
      if (!response.ok || !result.success) {
          console.error("Backend Error:", result);
      }
  } catch (err) {
      console.error("Failed to save booking to database. Proceeding to WhatsApp.", err);
  }

  // Build WhatsApp template text
  const message = `✨ *LUXURY STAY RESERVATION REQUEST* ✨\\n\\n` +
                  `👤 *Name:* ${name}\\n` +
                  `📅 *Check-In:* ${formatDateString(checkin)}\\n` +
                  `📅 *Check-Out:* ${formatDateString(checkout)}\\n` +
                  `🛏 *Room Category:* ${roomType}\\n` +
                  `👥 *Guests:* ${adults} Adults | ${children} Children\\n\\n` +
                  `Please confirm room availability. Thank you!`;

  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/91${bookingDesk}?text=${encodedMsg}`;

  setTimeout(() => {
      if (submitBtn) {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
      }
      closeBookingModal();
  }, 1000);

  // Use window.location.href for better mobile support
  window.location.href = whatsappUrl;
}"""

# Try replacing the old function
old_regex = re.compile(r'function sendWhatsAppBooking\(\)\s*\{.*?closeBookingModal\(\);\s*\}', re.DOTALL)
if old_regex.search(js):
    js = old_regex.sub(new_func, js)
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(js)
    print("Updated app.js")
else:
    print("sendWhatsAppBooking not found with closeBookingModal!")
