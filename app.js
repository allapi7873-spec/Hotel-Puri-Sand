

document.addEventListener('DOMContentLoaded', () => {

  // 1. Initialize AOS (Animate on Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      disable: window.innerWidth < 768,
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }

  // 2. Safely Initialize Swiper Carousels if elements exist
  // Hero Swiper (Main Home Banner Slider)
  if (document.querySelector('.hero-swiper')) {
    new Swiper('.hero-swiper', {
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 1200
    });
  }

  // Room Card Carousels
  if (document.querySelector('.room-swiper')) {
    new Swiper('.room-swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      nested: true,
      speed: 800
    });
  }

  // Gallery Swiper
  if (document.querySelector('.gallery-swiper')) {
    new Swiper('.gallery-swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      },
      speed: 1000
    });
  }

  // Testimonials/Reviews Swiper
  if (document.querySelector('.review-swiper')) {
    new Swiper('.review-swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      speed: 900
    });
  }

  // 3. Navbar scroll interaction
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('shadow-lg', 'py-1.5', 'bg-[#050508]/95');
        header.classList.remove('py-3', 'bg-[#050508]/85');
      } else {
        header.classList.remove('shadow-lg', 'py-1.5', 'bg-[#050508]/95');
        header.classList.add('py-3', 'bg-[#050508]/85');
      }
    });
  }

  // 4. Mobile hamburger menu toggler
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileMenu = (state) => {
    if (!mobileMenu) return;
    if (state) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      document.body.style.overflow = '';
    }
  };

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => toggleMobileMenu(true));
  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener('click', () => toggleMobileMenu(false));
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // 5. Active Link Indicator for Multi-Page layout
  const currentPath = window.location.pathname;
  let currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (currentPage === '' || currentPage === 'index.html') {
    currentPage = 'index.html';
  }

  const menuLinks = document.querySelectorAll('nav a, #mobile-menu a, .mobile-tab-btn');
  menuLinks.forEach(link => {
    let href = link.getAttribute('href');
    if (!href) return;
    
    // Normalize links
    if (href === '.' || href === './' || href === '/' || href === 'index.html') {
      href = 'index.html';
    }
    
    // Remove .html extensions for comparison
    const hrefClean = href.replace('.html', '').replace(/^\//, '');
    const pageClean = currentPage.replace('.html', '').replace(/^\//, '');

    if (hrefClean === pageClean) {
      if (link.classList.contains('mobile-tab-btn')) {
        link.classList.add('active-nav-tab');
        link.classList.remove('text-gray-500');
      } else {
        link.classList.add('text-gold');
        link.classList.remove('text-gray-700', 'text-luxury-charcoal');
      }
    } else {
      if (link.classList.contains('mobile-tab-btn')) {
        link.classList.remove('active-nav-tab');
        link.classList.add('text-gray-500');
      }
    }
  });

  // 6. Initialize input dates default (Today and Tomorrow)
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  const checkinInput = document.getElementById('hero-checkin');
  const checkoutInput = document.getElementById('hero-checkout');
  const modalCheckin = document.getElementById('booking-checkin');
  const modalCheckout = document.getElementById('booking-checkout');

  if (checkinInput) checkinInput.value = formatDate(today);
  if (checkoutInput) checkoutInput.value = formatDate(tomorrow);
  if (modalCheckin) modalCheckin.value = formatDate(today);
  if (modalCheckout) modalCheckout.value = formatDate(tomorrow);
});

// 7. Interactive Booking Redirector to RoomNexa
const BOOKING_ENGINE_URL = 'https://hotel-puri-sand.roomnexa.com/';

function openBookingModal(roomCategory = '') {
  window.location.href = BOOKING_ENGINE_URL;
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  const container = document.getElementById('modal-container');
  
  if (!modal || !container) return;
  container.classList.remove('scale-100');
  container.classList.add('scale-95');
  setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }, 200);
}

// Close modal on click outside content
window.onclick = function(event) {
  const modal = document.getElementById('booking-modal');
  if (event.target === modal) {
    closeBookingModal();
  }
}

// Hero Search Bar Direct Booking Redirector
function triggerDirectHeroBooking() {
  window.location.href = BOOKING_ENGINE_URL;
}

// Generate WhatsApp Pre-filled message and redirect / Redirect to Booking Engine
async function sendWhatsAppBooking() {
  window.location.href = BOOKING_ENGINE_URL;
}
