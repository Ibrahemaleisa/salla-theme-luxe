// ============================================================
// Luxe Theme - Main JavaScript
// Salla Twilight Engine
// ============================================================

import Alpine from 'alpinejs';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade, A11y } from 'swiper/modules';

// Register Swiper modules
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, A11y]);

// ---- Theme Init ----
window.LuxeTheme = {
  init() {
    this.applySettings();
    this.initComponents();
    this.initAccessibility();
    this.initLazyLoad();
    this.initScrollEffects();
  },

  applySettings() {
    const html = document.documentElement;
    const body = document.body;

    const primaryColor = body.dataset.primaryColor;
    const secondaryColor = body.dataset.secondaryColor;
    const accentColor = body.dataset.accentColor;
    const textColor = body.dataset.textColor;
    const bgColor = body.dataset.bgColor;
    const fontFamily = body.dataset.font;
    const borderRadius = body.dataset.radius;
    const darkMode = body.dataset.darkMode === 'true';

    if (primaryColor) html.style.setProperty('--color-primary', primaryColor);
    if (secondaryColor) html.style.setProperty('--color-secondary', secondaryColor);
    if (accentColor) html.style.setProperty('--color-accent', accentColor);
    if (textColor) html.style.setProperty('--color-text', textColor);
    if (bgColor) html.style.setProperty('--color-bg', bgColor);
    if (fontFamily) html.dataset.font = fontFamily;
    if (borderRadius) html.dataset.radius = borderRadius;
    if (darkMode) html.classList.add('dark');
  },

  initComponents() {
    this.initSwipers();
    this.initHeader();
    this.initMobileMenu();
    this.initSearch();
    this.initCartDrawer();
    this.initCountdown();
    this.initProductActions();
    this.initFilters();
    this.initBackToTop();
    this.initDarkModeToggle();
    this.initToasts();
  },

  // ---- Swiper Initialization ----
  initSwipers() {
    // Hero Slider
    document.querySelectorAll('[data-swiper="hero"]').forEach(el => {
      new Swiper(el, {
        loop: true,
        speed: 800,
        autoplay: el.dataset.autoplay !== 'false' ? { delay: (parseInt(el.dataset.speed) || 5) * 1000, disableOnInteraction: false } : false,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
        navigation: {
          nextEl: el.querySelector('.swiper-button-next'),
          prevEl: el.querySelector('.swiper-button-prev'),
        },
        a11y: { prevSlideMessage: 'الشريحة السابقة', nextSlideMessage: 'الشريحة التالية' },
      });
    });

    // Products Slider
    document.querySelectorAll('[data-swiper="products"]').forEach(el => {
      new Swiper(el, {
        slidesPerView: 1.2,
        spaceBetween: 16,
        grabCursor: true,
        breakpoints: {
          480: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
          1280: { slidesPerView: parseInt(el.dataset.perView) || 4, spaceBetween: 24 },
        },
        pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
        navigation: {
          nextEl: el.querySelector('.swiper-button-next'),
          prevEl: el.querySelector('.swiper-button-prev'),
        },
      });
    });

    // Brands Slider
    document.querySelectorAll('[data-swiper="brands"]').forEach(el => {
      new Swiper(el, {
        slidesPerView: 2,
        spaceBetween: 24,
        loop: true,
        autoplay: { delay: 2500, disableOnInteraction: false },
        breakpoints: {
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 7 },
        },
      });
    });

    // Photo Gallery Slider
    document.querySelectorAll('[data-swiper="gallery"]').forEach(el => {
      new Swiper(el, {
        loop: true,
        spaceBetween: 8,
        grabCursor: true,
        breakpoints: {
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
        navigation: {
          nextEl: el.querySelector('.swiper-button-next'),
          prevEl: el.querySelector('.swiper-button-prev'),
        },
      });
    });

    // Product Images Slider (Single Product)
    document.querySelectorAll('[data-swiper="product-images"]').forEach(el => {
      const thumbsEl = document.querySelector('[data-swiper="product-thumbs"]');
      let thumbsSwiper = null;

      if (thumbsEl) {
        thumbsSwiper = new Swiper(thumbsEl, {
          slidesPerView: 4,
          spaceBetween: 8,
          freeMode: true,
          watchSlidesProgress: true,
        });
      }

      new Swiper(el, {
        loop: false,
        spaceBetween: 0,
        navigation: {
          nextEl: el.querySelector('.swiper-button-next'),
          prevEl: el.querySelector('.swiper-button-prev'),
        },
        thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : {},
      });
    });

    // Testimonials Slider
    document.querySelectorAll('[data-swiper="testimonials"]').forEach(el => {
      new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
        pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
      });
    });

    // Categories Slider
    document.querySelectorAll('[data-swiper="categories"]').forEach(el => {
      new Swiper(el, {
        slidesPerView: 2.2,
        spaceBetween: 12,
        grabCursor: true,
        breakpoints: {
          480: { slidesPerView: 3, spaceBetween: 16 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 24 },
        },
      });
    });
  },

  // ---- Header ----
  initHeader() {
    const header = document.querySelector('#site-header');
    if (!header) return;

    const isSticky = header.dataset.sticky === 'true';
    const isTransparent = header.dataset.transparent === 'true';

    if (!isSticky) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 80) {
        header.classList.add('is-scrolled');
        if (isTransparent) header.classList.remove('is-transparent');
      } else {
        header.classList.remove('is-scrolled');
        if (isTransparent) header.classList.add('is-transparent');
      }

      // Hide on scroll down, show on scroll up
      if (currentScroll > lastScroll && currentScroll > 300) {
        header.classList.add('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }

      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    }, { passive: true });
  },

  // ---- Mobile Menu ----
  initMobileMenu() {
    const trigger = document.querySelector('[data-mobile-menu-toggle]');
    const menu = document.querySelector('[data-mobile-menu]');
    const overlay = document.querySelector('[data-mobile-menu-overlay]');
    const close = document.querySelector('[data-mobile-menu-close]');

    if (!trigger || !menu) return;

    const open = () => {
      menu.classList.remove('is-closed');
      overlay?.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      trigger.setAttribute('aria-expanded', 'true');
    };

    const closeFn = () => {
      menu.classList.add('is-closed');
      overlay?.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      trigger.setAttribute('aria-expanded', 'false');
    };

    trigger.addEventListener('click', open);
    close?.addEventListener('click', closeFn);
    overlay?.addEventListener('click', closeFn);

    // Submenu toggles
    document.querySelectorAll('[data-submenu-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const submenu = btn.nextElementSibling;
        const isOpen = !submenu.classList.contains('hidden');
        submenu?.classList.toggle('hidden', isOpen);
        btn.querySelector('[data-chevron]')?.classList.toggle('rotate-180', !isOpen);
      });
    });
  },

  // ---- Search ----
  initSearch() {
    const searchToggle = document.querySelectorAll('[data-search-toggle]');
    const searchBox = document.querySelector('[data-search-box]');
    const searchClose = document.querySelector('[data-search-close]');
    const searchInput = searchBox?.querySelector('input');

    searchToggle.forEach(btn => {
      btn.addEventListener('click', () => {
        searchBox?.classList.toggle('hidden');
        if (!searchBox?.classList.contains('hidden')) {
          setTimeout(() => searchInput?.focus(), 100);
        }
      });
    });

    searchClose?.addEventListener('click', () => searchBox?.classList.add('hidden'));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') searchBox?.classList.add('hidden');
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchBox?.classList.toggle('hidden');
        if (!searchBox?.classList.contains('hidden')) setTimeout(() => searchInput?.focus(), 100);
      }
    });
  },

  // ---- Cart Drawer ----
  initCartDrawer() {
    const triggers = document.querySelectorAll('[data-cart-toggle]');
    const drawer = document.querySelector('[data-cart-drawer]');
    const overlay = document.querySelector('[data-cart-overlay]');
    const close = document.querySelector('[data-cart-close]');

    if (!drawer) return;

    const open = () => {
      drawer.classList.remove('drawer--closed');
      overlay?.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    };

    const closeFn = () => {
      drawer.classList.add('drawer--closed');
      overlay?.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    };

    triggers.forEach(t => t.addEventListener('click', open));
    close?.addEventListener('click', closeFn);
    overlay?.addEventListener('click', closeFn);
  },

  // ---- Countdown Timer ----
  initCountdown() {
    document.querySelectorAll('[data-countdown]').forEach(el => {
      const endDate = new Date(el.dataset.countdown).getTime();
      if (isNaN(endDate)) return;

      const days = el.querySelector('[data-countdown-days]');
      const hours = el.querySelector('[data-countdown-hours]');
      const minutes = el.querySelector('[data-countdown-minutes]');
      const seconds = el.querySelector('[data-countdown-seconds]');

      const pad = n => String(Math.max(0, n)).padStart(2, '0');

      const tick = () => {
        const now = Date.now();
        const diff = endDate - now;

        if (diff <= 0) {
          el.innerHTML = '<span class="text-sm opacity-60">انتهى العرض</span>';
          return;
        }

        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        if (days) days.textContent = pad(d);
        if (hours) hours.textContent = pad(h);
        if (minutes) minutes.textContent = pad(m);
        if (seconds) seconds.textContent = pad(s);
      };

      tick();
      setInterval(tick, 1000);
    });
  },

  // ---- Product Actions ----
  initProductActions() {
    // Quantity controls
    document.querySelectorAll('[data-qty-control]').forEach(wrap => {
      const input = wrap.querySelector('[data-qty-input]');
      const dec = wrap.querySelector('[data-qty-dec]');
      const inc = wrap.querySelector('[data-qty-inc]');

      if (!input) return;

      const min = parseInt(input.min) || 1;
      const max = parseInt(input.max) || 9999;

      dec?.addEventListener('click', () => {
        const val = parseInt(input.value) || min;
        if (val > min) { input.value = val - 1; input.dispatchEvent(new Event('change')); }
      });

      inc?.addEventListener('click', () => {
        const val = parseInt(input.value) || min;
        if (val < max) { input.value = val + 1; input.dispatchEvent(new Event('change')); }
      });
    });

    // Product image zoom
    document.querySelectorAll('[data-product-image]').forEach(img => {
      img.addEventListener('mousemove', e => {
        const rect = img.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
      });

      img.addEventListener('mouseenter', () => { img.style.transform = 'scale(1.5)'; });
      img.addEventListener('mouseleave', () => {
        img.style.transform = '';
        img.style.transformOrigin = '';
      });
    });

    // Product option tabs
    document.querySelectorAll('[data-options-tab]').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.optionsTab;
        tab.closest('[data-options-tabs]')?.querySelectorAll('[data-options-tab]').forEach(t => {
          t.classList.toggle('active', t === tab);
        });
        document.querySelectorAll('[data-options-panel]').forEach(panel => {
          panel.classList.toggle('hidden', panel.dataset.optionsPanel !== target);
        });
      });
    });
  },

  // ---- Filters ----
  initFilters() {
    const filterForm = document.querySelector('[data-filter-form]');
    if (!filterForm) return;

    // Auto-submit on change
    filterForm.querySelectorAll('select, input[type="checkbox"], input[type="radio"]').forEach(input => {
      input.addEventListener('change', () => {
        filterForm.submit();
      });
    });

    // Price range slider
    const priceMin = filterForm.querySelector('[data-price-min]');
    const priceMax = filterForm.querySelector('[data-price-max]');
    const priceTrack = filterForm.querySelector('[data-price-track]');

    if (priceMin && priceMax && priceTrack) {
      const updateTrack = () => {
        const min = parseInt(priceMin.min) || 0;
        const max = parseInt(priceMin.max) || 10000;
        const fromPct = ((parseInt(priceMin.value) - min) / (max - min)) * 100;
        const toPct = ((parseInt(priceMax.value) - min) / (max - min)) * 100;
        priceTrack.style.left = `${fromPct}%`;
        priceTrack.style.right = `${100 - toPct}%`;
      };

      priceMin.addEventListener('input', updateTrack);
      priceMax.addEventListener('input', updateTrack);
      updateTrack();
    }

    // Mobile filter toggle
    const filterToggle = document.querySelector('[data-filter-toggle]');
    const filterSidebar = document.querySelector('[data-filter-sidebar]');

    filterToggle?.addEventListener('click', () => {
      filterSidebar?.classList.toggle('hidden');
    });
  },

  // ---- Back to Top ----
  initBackToTop() {
    const btn = document.querySelector('[data-back-to-top]');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('is-visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  },

  // ---- Dark Mode ----
  initDarkModeToggle() {
    const toggle = document.querySelector('[data-dark-toggle]');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('luxe-dark-mode', isDark ? '1' : '0');
      toggle.querySelector('[data-dark-icon]')?.classList.toggle('hidden', isDark);
      toggle.querySelector('[data-light-icon]')?.classList.toggle('hidden', !isDark);
    });

    // Restore preference
    if (localStorage.getItem('luxe-dark-mode') === '1') {
      document.documentElement.classList.add('dark');
    }
  },

  // ---- Toasts ----
  initToasts() {
    window.LuxeToast = {
      container: null,
      init() {
        this.container = document.querySelector('.toast-container');
        if (!this.container) {
          this.container = document.createElement('div');
          this.container.className = 'toast-container';
          document.body.appendChild(this.container);
        }
      },
      show(message, type = 'info', duration = 4000) {
        const icons = {
          success: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>',
          error: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>',
          warning: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>',
          info: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
        };

        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        toast.innerHTML = `${icons[type] || icons.info}<p class="flex-1">${message}</p>`;

        this.container.appendChild(toast);

        setTimeout(() => {
          toast.style.opacity = '0';
          toast.style.transform = 'translateX(100%)';
          toast.style.transition = 'all 0.3s ease';
          setTimeout(() => toast.remove(), 300);
        }, duration);
      },
    };

    window.LuxeToast.init();
  },

  // ---- Accessibility ----
  initAccessibility() {
    // Skip to main content
    document.querySelector('[data-skip-to-main]')?.addEventListener('click', () => {
      document.querySelector('main')?.focus();
    });

    // Trap focus in modals/drawers
    document.addEventListener('keydown', e => {
      if (e.key !== 'Tab') return;
      const activeModal = document.querySelector('[data-modal]:not(.hidden), [data-cart-drawer]:not(.drawer--closed)');
      if (!activeModal) return;

      const focusable = activeModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    });
  },

  // ---- Lazy Load ----
  initLazyLoad() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) { img.src = img.dataset.src; delete img.dataset.src; }
            if (img.dataset.srcset) { img.srcset = img.dataset.srcset; delete img.dataset.srcset; }
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      }, { rootMargin: '200px 0px' });

      document.querySelectorAll('img[data-src], img.lazy').forEach(img => observer.observe(img));
    } else {
      document.querySelectorAll('img[data-src]').forEach(img => {
        if (img.dataset.src) img.src = img.dataset.src;
      });
    }
  },

  // ---- Scroll Effects ----
  initScrollEffects() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('[data-animate]').forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  },
};

// ---- Alpine.js Global Store ----
document.addEventListener('alpine:init', () => {
  Alpine.store('cart', {
    count: 0,
    items: [],
    setCount(n) { this.count = n; },
  });

  Alpine.store('wishlist', {
    ids: new Set(JSON.parse(localStorage.getItem('luxe-wishlist') || '[]')),
    toggle(id) {
      if (this.ids.has(id)) {
        this.ids.delete(id);
      } else {
        this.ids.add(id);
        window.LuxeToast?.show('تمت الإضافة إلى المفضلة', 'success');
      }
      localStorage.setItem('luxe-wishlist', JSON.stringify([...this.ids]));
    },
    has(id) { return this.ids.has(id); },
  });
});

// ---- Start Alpine ----
window.Alpine = Alpine;
Alpine.start();

// ---- DOM Ready ----
document.addEventListener('DOMContentLoaded', () => {
  window.LuxeTheme.init();
});
