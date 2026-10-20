/**
 * ES-CR — Brandguide Interactive Portal Controller
 * Standards.site / Brandguide.io Corporate Frontend Architecture
 */

(function () {
  'use strict';

  // 1. Toast Notification Helper
  const toast = document.createElement('div');
  toast.className = 'copy-toast';
  toast.id = 'copyToast';
  document.body.appendChild(toast);

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }

  // 2. Swatch Click-to-Copy HEX
  document.querySelectorAll('.color-swatch-block, .color-swatch-card, .web-palette-cell, .color-row-card, .color-row-tile, [data-hex]').forEach((swatch) => {
    swatch.addEventListener('click', (e) => {
      // Don't trigger copy if clicking a download link or button inside the card
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.color-row-formats')) return;
      const hex = swatch.getAttribute('data-hex') || swatch.closest('[data-hex]')?.getAttribute('data-hex');
      if (hex) {
        navigator.clipboard.writeText(hex).then(() => {
          showToast(`Copied ${hex} to clipboard`);
        }).catch(() => {
          showToast(`Color: ${hex}`);
        });
      }
    });
  });

  // 2b. Copy Code Snippet Helper
  document.querySelectorAll('.btn-copy-code, .ui-copy-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      let text = '';
      if (targetId) {
        const el = document.getElementById(targetId);
        text = el ? el.textContent.trim() : '';
      } else {
        const container = btn.closest('.ui-code-block, .ui-code-container');
        const codeBlock = container ? container.querySelector('.ui-code-pre, pre') : null;
        text = codeBlock ? codeBlock.textContent.trim() : '';
      }
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          const span = btn.querySelector('span');
          const origHTML = btn.innerHTML;
          btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> <span>Copied!</span>`;
          btn.classList.add('copied');
          setTimeout(() => {
            btn.innerHTML = origHTML;
            btn.classList.remove('copied');
          }, 2000);
          showToast('Code copied to clipboard');
        }).catch(() => {
          showToast('Failed to copy code');
        });
      }
    });
  });

  // 3. Tab Switching (e.g., Logo | Brandmark)
  document.querySelectorAll('.brandguide-tabs').forEach((tabBar) => {
    const tabs = tabBar.querySelectorAll('.brandguide-tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        const targetGroup = tab.getAttribute('data-tab-target');
        const container = tabBar.nextElementSibling;
        if (container) {
          const views = container.querySelectorAll('.tab-view');
          views.forEach((view) => {
            if (view.getAttribute('data-tab-id') === targetGroup) {
              view.style.display = 'grid';
            } else {
              view.style.display = 'none';
            }
          });
        }
      });
    });
  });

  // 4. ScrollSpy: Highlight Active Sidebar Link as user scrolls
  const sections = document.querySelectorAll('section.section-block');
  const navLinks = document.querySelectorAll('.sidebar-nav a');

  function updateActiveNav() {
    let currentId = '';
    const scrollPos = window.scrollY + 180;
    const isBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 60;

    if (isBottom && sections.length > 0) {
      currentId = sections[sections.length - 1].getAttribute('id');
    } else {
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentId = section.getAttribute('id');
        }
      });
    }
    if (['about', 'mission-vision', 'personality', 'voice'].includes(currentId)) {
      currentId = 'about';
    }

    if (currentId) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentId) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // 5. Curtain & Zoom Scroll Reveal (matching About page)
  const curtainWrappers = document.querySelectorAll('.about-hero-curtain-wrapper');
  if (curtainWrappers.length > 0 && 'IntersectionObserver' in window) {
    const curtainObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            curtainObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    curtainWrappers.forEach((el) => curtainObserver.observe(el));
  }

  // 6. Dynamic Mockup Image Checker
  function checkMockups() {
    document.querySelectorAll('[data-mockup-src]').forEach((el) => {
      const src = el.getAttribute('data-mockup-src');
      if (!src) return;

      const img = new Image();
      img.onload = () => {
        el.innerHTML = '';
        img.className = 'w-full h-auto object-contain';
        img.style.maxHeight = '340px';
        img.style.borderRadius = '4px';
        el.appendChild(img);
      };
      img.src = src;
    });
  }

  checkMockups();


  // ─── Floating Scroll Navigation (Exact 1:1 match with site ScrollNav) ───
  function initFloatingScroll() {
    const scrollNav = document.getElementById('scrollNav');
    const btnTop = document.getElementById('btnScrollTop');
    const btnBottom = document.getElementById('btnScrollBottom');

    if (btnTop) {
      btnTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    if (btnBottom) {
      btnBottom.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      });
    }

    function handleFloatingScroll() {
      const nav = document.getElementById('scrollNav');
      if (!nav) return;
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Exact boundaries from site's ScrollNav.tsx:
      // Header: top 600px
      // Footer: bottom 250px
      const isInHeader = scrollY < 600;
      const isInFooter = (scrollY + windowHeight) > (fullHeight - 250);

      if (isInHeader || isInFooter) {
        nav.classList.remove('is-visible');
      } else {
        nav.classList.add('is-visible');
      }
    }

    window.addEventListener('scroll', handleFloatingScroll, { passive: true });
    window.addEventListener('resize', handleFloatingScroll, { passive: true });
    handleFloatingScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingScroll);
  } else {
    initFloatingScroll();
  }


})();

// ─── Global: Code Accordion Toggle ──────────────────────────────────────────
function toggleCode(header) {
  const chevron = header.querySelector('.ui-code-accordion-chevron');
  const collapsible = header.nextElementSibling;
  if (!collapsible) return;

  const isOpen = collapsible.classList.contains('open');

  if (isOpen) {
    collapsible.classList.remove('open');
    if (chevron) chevron.classList.remove('open');
    const label = header.querySelector('.ui-code-accordion-label');
    if (label) {
      const svg = label.querySelector('svg');
      const svgHtml = svg ? svg.outerHTML : '';
      label.innerHTML = svgHtml + ' View Code';
    }
  } else {
    collapsible.classList.add('open');
    if (chevron) chevron.classList.add('open');
    const label = header.querySelector('.ui-code-accordion-label');
    if (label) {
      const svg = label.querySelector('svg');
      const svgHtml = svg ? svg.outerHTML : '';
      label.innerHTML = svgHtml + ' Hide Code';
    }
  }
}

// ─── Global: Copy Signature HTML to Clipboard (rich text for Gmail/Outlook) ──
async function copySignatureHTML() {
  const btn = document.querySelector('[onclick="copySignatureHTML()"]');
  const origText = btn ? btn.innerHTML : '';

  try {
    const response = await fetch('/brandbook/downloads/Signature Email ES-CR.html');
    if (!response.ok) throw new Error('Fetch failed: ' + response.status);
    const htmlContent = await response.text();

    // Write as rich HTML so Gmail/Outlook paste it as formatted content
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const data = new ClipboardItem({ 'text/html': blob });
    await navigator.clipboard.write([data]);

    if (btn) {
      btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
      setTimeout(() => { btn.innerHTML = origText; }, 2500);
    }
    // Show toast
    const toast = document.getElementById('copyToast');
    if (toast) {
      toast.textContent = 'Signature copied — paste into Gmail or Outlook';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    }
  } catch (err) {
    console.error('Copy signature failed:', err);
    // Fallback: open in new tab
    window.open('/brandbook/downloads/Signature Email ES-CR.html', '_blank');
    if (btn) {
      btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Opened in new tab`;
      setTimeout(() => { btn.innerHTML = origText; }, 2500);
    }
  }
}

