import re

with open("food-script.js", "r", encoding="utf-8") as f:
    js = f.read()

# Define the new processCheckout function
# It will send the order to the backend, then if successful, redirect to WhatsApp
new_checkout = """async function processCheckout() {
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

    const orderButton = document.querySelector("#checkout-form button");
    const originalText = orderButton.innerHTML;
    orderButton.innerHTML = "<i class='fa-solid fa-spinner fa-spin'></i> Processing...";
    orderButton.disabled = true;

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
            totalAmount: cartTotal
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
    const crownEmoji = String.fromCodePoint(0x1F451);
    let orderText = `*Puri Sand Hotel Room Service* ${crownEmoji}\\n\\n`;
    orderText += `*Customer Details:*\\n`;
    orderText += `- Name: ${custName}\\n`;
    orderText += `- Room Number: ${custRoom}\\n`;
    orderText += `- Alt Phone: ${custAltPhone}\\n\\n`;
    orderText += `*Order Items:*\\n`;

    cart.forEach((item, index) => {
        orderText += `${index + 1}. ${item.name}\\n   ${item.quantity} x ₹${item.price} = ₹${item.quantity * item.price}\\n`;
    });

    orderText += `\\n*Total Amount:* ₹${cartTotal}\\n`;
    orderText += `\\n_Please confirm my order ASAP._`;

    // 3. Link Encode karna (Encode URL properly)
    const encodedText = encodeURIComponent(orderText);
    
    // 4. WhatsApp Number (Your Hotel number)
    const hotelNumber = "919090623235";
    
    const whatsappUrl = `https://wa.me/${hotelNumber}?text=${encodedText}`;

    // Mobile fallback handling for popups
    setTimeout(() => {
        orderButton.innerHTML = originalText;
        orderButton.disabled = false;
        toggleCart();
        cart = [];
        updateCart();
    }, 1000);
    
    // Switch to current window location href for mobile compatibility
    window.location.href = whatsappUrl;
}"""

old_regex = re.compile(r'function processCheckout\(\)\s*\{.*?window\.location\.href = whatsappUrl;\s*\}', re.DOTALL)
if old_regex.search(js):
    js = old_regex.sub(new_checkout, js)
    with open("food-script.js", "w", encoding="utf-8") as f:
        f.write(js)
    print("Updated food-script.js")
else:
    print("processCheckout not found!")
