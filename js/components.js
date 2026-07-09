/**
 * The Reading Elf – Shared Header & Footer Component
 *
 * Detects whether we're on the home page (index.html / root) or a sub-page,
 * and adjusts anchor links accordingly so every page gets the correct hrefs
 * without the need to copy-paste HTML.
 *
 * SEO notes:
 *  – The <title>, <meta description>, and <h1> remain in each individual HTML
 *    file so search engines always get page-specific metadata.
 *  – The <header> and <footer> content injected here is non-critical navigation
 *    chrome; it has no impact on on-page SEO signals.
 *  – The script uses DOMContentLoaded so content appears as fast as possible.
 */

(function () {
  'use strict';

  // ─── Detect page context ────────────────────────────────────────────────────
  const path = window.location.pathname;

  // Pages where the header should float (absolute) over a full-bleed hero/video
  const isAbsoluteHeader =
    path === '/' ||
    path === '' ||
    path.endsWith('/index.html') ||
    path.endsWith('/index') ||
    path.endsWith('/about.html') ||
    path.endsWith('/about') ||
    path.endsWith('/hungry-caterpillar.html') ||
    path.endsWith('/hungry-caterpillar');

  const isHome =
    path === '/' ||
    path === '' ||
    path.endsWith('/index.html') ||
    path.endsWith('/index');

  const isAbout =
    path.endsWith('/about.html') ||
    path.endsWith('/about');

  // Prefix for links that point to index.html sections
  const home = isHome ? '' : 'index.html';

  // ─── Header HTML ────────────────────────────────────────────────────────────
  const headerHTML = `
    <header class="w-full ${isAbsoluteHeader ? 'absolute' : 'relative'} top-0 left-0 z-50">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <!-- Logo -->
        <a href="${home || '/'}" class="flex items-center gap-2">
          <img src="/assets/images/logo.webp" alt="The Reading Elf logo" class="w-[50px] lg:w-[127px] object-contain">
        </a>

        <!-- Desktop Navigation -->
        <nav aria-label="Main navigation" class="hidden lg:flex items-center bg-white py-3 px-4 xl:py-4 xl:px-6 rounded-full lg:gap-[16px] xl:gap-[32px] lg:text-[14px] xl:text-[16px] font-bold">
          <a href="/"       class="hover:text-orange-500">Home</a>  
        <a href="${home}#book"       class="hover:text-orange-500">Discover Books</a>
          <a href="${home}#story"      class="hover:text-orange-500">Our Story</a>
          <a href="${home}#experience" class="hover:text-orange-500">Experiences</a>
          <a href="${home}#gallery"    class="hover:text-orange-500">Our Gallery</a>
          <a href="about.html"    class="hover:text-orange-500">About Us</a>
          <a href="${home}#events"     class="hover:text-orange-500">Events</a>
        </nav>

        <!-- CTA Button -->
        <div class="hidden lg:block">
          <a href="${home}#contact" class="btn-primary">VISIT STORE</a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button id="menuBtn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobileMenu" 
                class="lg:hidden text-2xl ${isAbout || path.includes('hungry-caterpillar') ? 'text-[#2F6B4F]' : 'text-[#2F6B4F]'}">
          ☰
        </button>
      </div>

      <!-- Mobile Slide-in Menu -->
      <div id="mobileMenu" role="dialog" aria-label="Mobile navigation"
           class="fixed inset-y-0 left-0 w-3/4 max-w-sm bg-white shadow-lg z-50 transform -translate-x-full transition-transform duration-300 lg:hidden px-6 py-6 space-y-4 overflow-y-auto">
        <!-- Logo inside mobile menu -->
        <a href="${home || '/'}" class="flex items-center gap-2 mb-6">
          <img src="/assets/images/logo.webp" alt="The Reading Elf logo" class="w-[50px] object-contain">
        </a>
        <a href="${home || '/'}"       class="block">Home</a>
        <a href="${home}#book"       class="block">Discover Books</a>
        <a href="${home}#story"      class="block">Our Story</a>
        <a href="${home}#experience" class="block">Experiences</a>
        <a href="${home}#gallery"    class="block">Our Gallery</a>
        <a href="about.html"    class="block">About Us</a>
        <a href="${home}#events"     class="block">Events</a>
        <a href="${home}#contact"    class="btn-primary">VISIT STORE</a>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div id="mobileMenuOverlay" class="fixed inset-0 bg-black opacity-50 z-40 hidden lg:hidden"></div>
  `;

  // ─── Footer HTML ────────────────────────────────────────────────────────────
  const footerHTML = `
    <footer class="relative bg-[#2F6B4F] text-white pt-16 pb-16 overflow-hidden">

      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">

        <!-- LEFT -->
        <div>
          <h2 class="text-xl font-semibold mb-4">The Reading Elf</h2>
          <p class="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            A magical space where kids discover the joy of books,
            stories, and imagination.
          </p>
        </div>

        <!-- CENTER -->
        <div>
          <h3 class="font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="${home}#book"       class="block hover:text-orange-300">Discover Books</a></li>
            <li><a href="${home}#story"      class="block hover:text-orange-300">Our Story</a></li>
            <li><a href="${home}#experience" class="block hover:text-orange-300">Experiences</a></li>
            <li><a href="${home}#gallery"    class="block hover:text-orange-300">Our Gallery</a></li>
            <li><a href="${home}#events"     class="block hover:text-orange-300">Events</a></li>
          </ul>
        </div>

        <!-- RIGHT -->
        <div>
          <h3 class="font-semibold mb-4">Reach Us</h3>
          <!-- Social Icons -->
          <div class="flex justify-center md:justify-start gap-4 mb-4">
            <a href="https://www.instagram.com/thereadingelf_hub/" target="_blank" rel="noopener noreferrer"
               aria-label="The Reading Elf on Instagram"
               class="w-10 h-10 flex items-center justify-center rounded-full">
              <img src="/assets/images/instagram.svg" alt="Instagram logo">
            </a>
            <a href="https://www.facebook.com/people/The-Reading-Elf-Hub/61583765232952/" target="_blank" rel="noopener noreferrer"
               aria-label="The Reading Elf on Facebook"
               class="w-10 h-10 flex items-center justify-center rounded-full">
              <img src="/assets/images/facebook.svg" alt="Facebook logo">
            </a>
          </div>
          <!-- Phone -->
          <p class="text-sm">
            📞 <a href="tel:+919500056482" class="hover:underline">+91 9500056482</a>
          </p>
        </div>

      </div>

      <!-- Divider -->
      <div class="max-w-7xl mx-auto mt-10 border-t border-white/40"></div>

      <!-- Copyright -->
      <p class="text-center text-sm mt-6">
        © 2026 The Reading Elf. All rights reserved.
        <br class="md:hidden">
        <span class="hidden md:inline mx-2 text-white/50">|</span>
        <a href="/privacy-policy.html" class="hover:text-orange-300 ml-2 md:ml-0">Privacy Policy</a>
        <span class="mx-2 text-white/50">•</span>
        <a href="/terms-conditions.html" class="hover:text-orange-300">Terms &amp; Conditions</a>
      </p>
      <p class="text-center text-sm mt-2 text-white/80">
        Built by <a href="https://www.easttheory.com/" target="_blank" rel="nofollow noopener noreferrer" class="hover:text-orange-300">EastTheory.com</a>
      </p>

    </footer>
  `;

  // ─── Book of the Month widget HTML (always visible, fixed bottom-right) ────
  const botmWidget = `
    <style>
      #botm-widget {
        position: fixed;
        bottom: 28px;
        right: 24px;
        z-index: 9999;
        font-family: 'Nunito', sans-serif;
        animation: botm-slidein 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
      }
      @keyframes botm-slidein {
        from { opacity: 0; transform: translateY(20px) scale(0.92); }
        to   { opacity: 1; transform: translateY(0) scale(1); }
      }

      #botm-card {
        background: #1e4d38;
        border: 1.5px solid rgba(255,255,255,0.15);
        border-radius: 18px;
        padding: 14px 16px;
        width: 230px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.18);
        backdrop-filter: blur(8px);
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      #botm-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 14px 40px rgba(0,0,0,0.35), 0 4px 12px rgba(0,0,0,0.2);
      }

      #botm-card-label {
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.13em;
        color: #f5a623;
        text-transform: uppercase;
        margin-bottom: 10px;
      }

      #botm-card-body {
        display: flex;
        align-items: flex-start;
        gap: 12px;
      }

      #botm-book-img {
        width: 44px;
        height: 44px;
        object-fit: contain;
        border-radius: 8px;
        flex-shrink: 0;
        margin-top: 2px;
      }

      #botm-book-fallback {
        font-size: 36px;
        line-height: 1;
        flex-shrink: 0;
        margin-top: 2px;
        img{
          width: 44px;
          height: 44px;
          object-fit: contain;
          border-radius: 8px;
          flex-shrink: 0;
          margin-top: 2px;
        }
      }

      #botm-card-text h4 {
        font-size: 14px;
        font-weight: 800;
        color: #ffffff;
        line-height: 1.35;
        margin: 0 0 4px;
      }

      #botm-card-text p {
        font-size: 11.5px;
        color: rgba(255,255,255,0.6);
        margin: 0;
        line-height: 1.4;
      }

      /* Close button */
      #botm-close {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: rgba(255,255,255,0.12);
        border: none;
        color: rgba(255,255,255,0.7);
        font-size: 13px;
        line-height: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.15s ease, color 0.15s ease, transform 0.15s ease;
        padding: 0;
      }
      #botm-close:hover {
        background: rgba(255,255,255,0.25);
        color: #fff;
        transform: scale(1.15);
      }

      /* Hide animation */
      #botm-widget.botm-hiding {
        animation: botm-slideout 0.3s ease forwards;
      }
      @keyframes botm-slideout {
        to { opacity: 0; transform: translateY(16px) scale(0.92); }
      }
    </style>

   <div id="botm-widget">
  <div id="botm-card" role="region" aria-label="Book of the Month" style="position:relative;">
    
    <button id="botm-close" aria-label="Close Book of the Month widget" title="Close">✕</button>

    <div id="botm-card-label">📚 Book of the Month</div>
    <div id="botm-card-body">
      <img id="botm-book-img" src="" alt="Book cover" style="display:none;">
      <span id="botm-book-fallback">
        <img src="/assets/images/frances/book.jpeg" alt="Book cover">
      </span>
      <div id="botm-card-text">
        <h4 style="font-size: 12.5px;">The Secret Garden</h4>
        <p>Book by Frances Hodgson Burnett</p>
      </div>
    </div>

  </div>
</div>
  `;

  // ─── Inject on DOM ready ─────────────────────────────────────────────────────
  function inject() {
    // Header
    const headerSlot = document.getElementById('site-header');
    if (headerSlot) {
      headerSlot.outerHTML = headerHTML;
    }

    // Footer
    const footerSlot = document.getElementById('site-footer');
    if (footerSlot) {
      footerSlot.outerHTML = footerHTML;
    }

    // ─── Book of the Month floating widget ───────────────────────────────────
    // Widget shows on every page load/refresh. Closing only hides for the
    // current view — JS variables reset on every load so no storage needed.
    if (!document.getElementById('botm-widget')) {
      document.body.insertAdjacentHTML('beforeend', botmWidget);

      const closeBtn = document.getElementById('botm-close');
      const widget = document.getElementById('botm-widget');
      const card = document.getElementById('botm-card');

      if (closeBtn && widget && card) {
        // Navigate on card click
        card.addEventListener('click', (e) => {
          // Don't navigate if clicking the close button
          if (e.target.id === 'botm-close') return;
          window.location.href = '/the-secret-garden.html';
        });

        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent card click
          widget.classList.add('botm-hiding');
          widget.addEventListener('animationend', () => {
            widget.style.display = 'none';
          }, { once: true });
        });
      }
    }

    // ─── Mobile menu interaction ─────────────────────────────────────────────
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileMenuOverlay');

    if (menuBtn && mobileMenu && mobileOverlay) {
      menuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('-translate-x-full');
        mobileMenu.classList.toggle('-translate-x-full');
        mobileMenu.classList.toggle('translate-x-0');
        mobileOverlay.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', String(!isOpen));
      });

      mobileOverlay.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        mobileOverlay.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
