import './style.css';
import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (headerPlaceholder) {
    headerPlaceholder.replaceWith(createHeader());
  }

  if (footerPlaceholder) {
    footerPlaceholder.replaceWith(createFooter());
  }

  // WhatsApp Button
  const whatsappBtn = document.createElement('a');
  whatsappBtn.href = 'https://wa.me/905550434743';
  whatsappBtn.target = '_blank';
  whatsappBtn.rel = 'noopener noreferrer';
  whatsappBtn.className = 'whatsapp-btn';
  whatsappBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    background-color: #25D366;
    color: white;
    padding: 12px 24px;
    border-radius: 50px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.3s ease;
  `;
  whatsappBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
    WhatsApp ile hızlı iletişim
  `;
  whatsappBtn.onmouseover = () => whatsappBtn.style.transform = 'translateY(-2px)';
  whatsappBtn.onmouseout = () => whatsappBtn.style.transform = 'translateY(0)';


  document.body.appendChild(whatsappBtn);

  // Scroll Animations
  const observerOptions = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-fade').forEach(el => {
    observer.observe(el);
  });
});

// Tab Switching Logic for Program Page
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabBtns.length > 0) {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Add active to clicked
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
}

// Lightbox Logic
document.addEventListener('DOMContentLoaded', () => {
  // Create Lightbox DOM Elements
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  
  const closeBtn = document.createElement('div');
  closeBtn.className = 'lightbox-close';
  closeBtn.innerHTML = '&times;';
  
  const prevBtn = document.createElement('div');
  prevBtn.className = 'lightbox-nav lightbox-prev';
  prevBtn.innerHTML = '&#10094;';

  const nextBtn = document.createElement('div');
  nextBtn.className = 'lightbox-nav lightbox-next';
  nextBtn.innerHTML = '&#10095;';

  // Container for image or video
  const contentContainer = document.createElement('div');
  contentContainer.style.width = '100%';
  contentContainer.style.height = '100%';
  contentContainer.style.display = 'flex';
  contentContainer.style.alignItems = 'center';
  contentContainer.style.justifyContent = 'center';

  lightbox.appendChild(closeBtn);
  lightbox.appendChild(prevBtn);
  lightbox.appendChild(nextBtn);
  lightbox.appendChild(contentContainer);
  document.body.appendChild(lightbox);

  let currentTriggers = [];
  let currentIndex = 0;

  const showItem = (index) => {
    if (index < 0) index = currentTriggers.length - 1;
    if (index >= currentTriggers.length) index = 0;
    currentIndex = index;

    const trigger = currentTriggers[currentIndex];
    let contentEl;
    if (trigger.tagName.toLowerCase() === 'img') {
      contentEl = document.createElement('img');
      contentEl.src = trigger.src;
    } else if (trigger.tagName.toLowerCase() === 'video') {
      contentEl = document.createElement('video');
      contentEl.src = trigger.src;
      contentEl.controls = true;
      contentEl.autoplay = true;
    }

    if (contentEl) {
      contentEl.className = 'lightbox-content';
      contentContainer.innerHTML = '';
      contentContainer.appendChild(contentEl);
    }
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    setTimeout(() => {
      contentContainer.innerHTML = ''; // Clear content
    }, 300);
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === contentContainer) {
      closeLightbox();
    }
  });

  prevBtn.addEventListener('click', () => showItem(currentIndex - 1));
  nextBtn.addEventListener('click', () => showItem(currentIndex + 1));

  // Determine galleries (so prev/next only loops within the same section)
  const triggers = document.querySelectorAll('.lightbox-trigger');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      // Find siblings within the same parent/section
      const parentBlock = trigger.closest('div') || document;
      currentTriggers = Array.from(parentBlock.querySelectorAll('.lightbox-trigger'));
      if (currentTriggers.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
      }
      const index = currentTriggers.indexOf(trigger);
      showItem(index);
      lightbox.classList.add('active');
    });
  });

  // Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;
  
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  const handleSwipe = () => {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swiped left -> next
      showItem(currentIndex + 1);
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      // Swiped right -> prev
      showItem(currentIndex - 1);
    }
  };
});
