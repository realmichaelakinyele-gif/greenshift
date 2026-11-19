/**
 * GREENSHIFT BIO DIGESTER - MAIN APPLICATION SCRIPTS
 * Comprehensive Interactive Features & UI Controllers
 * Strictly Professional: Pure Vector SVG Graphics, Zero Emojis
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // ==========================================
  // 1. Automatic Dynamic Modal Injection
  // Ensures booking & spec modals function on all subpages
  // ==========================================
  ensureModalsExist();

  // ==========================================
  // 2. Mobile Navigation Drawer Controller
  // ==========================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      syncNavigationState();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        syncNavigationState();
      }
    });

    // Close menu when clicking navigation link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        syncNavigationState();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        syncNavigationState();
        mobileToggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1280 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        syncNavigationState();
      }
    });

    function syncNavigationState() {
      const isExpanded = navMenu.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', String(isExpanded));
    }
  }

  // ==========================================
  // 3. Sticky Header Scroll Shadow
  // ==========================================
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    }
  });

  // ==========================================
  // 4. FAQ Accordion Controller
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', function () {
        const isActive = item.classList.contains('active');
        
        // Close other FAQ items for clean single-view accordion
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });

        // Toggle current
        if (!isActive) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  });

  // ==========================================
  // 5. Modal System (Survey & Spec Sheets)
  // ==========================================
  attachModalEvents();

  // ==========================================
  // 6. Toast Notification Utility
  // ==========================================
  function showToast(message) {
    let toast = document.getElementById('toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notice';
      toast.className = 'toast-notice';
      toast.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span id="toast-text"></span>
      `;
      document.body.appendChild(toast);
    }

    const toastText = toast.querySelector('#toast-text');
    if (toastText) {
      toastText.textContent = message;
    }

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // ==========================================
  // 7. Form Submission Handlers
  // ==========================================
  attachFormSubmissions();

  // ==========================================
  // 8. Interactive Cutaway Hotspots (Hero Diagram)
  // ==========================================
  const hotspots = document.querySelectorAll('.hotspot-point');
  const hotspotDetails = document.getElementById('hotspot-details-panel');
  hotspots.forEach(hotspot => {
    hotspot.addEventListener('mouseenter', function () {
      const label = this.getAttribute('data-label');
      const desc = this.getAttribute('data-desc');
      if (hotspotDetails && label && desc) {
        hotspotDetails.innerHTML = `<strong>${label}</strong>: ${desc}`;
      }
    });
  });

  // ==========================================
  // Modal Helpers
  // ==========================================
  function ensureModalsExist() {
    if (!document.getElementById('modal-survey')) {
      const surveyModalHTML = `
        <div class="modal-overlay" id="modal-survey">
          <div class="modal-content">
            <div class="modal-header">
              <div style="display:flex; align-items:center; gap:0.6rem;">
                <svg viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:22px; height:22px;">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <h3>Schedule Technical Site Inspection</h3>
              </div>
              <button class="modal-close-btn" aria-label="Close modal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div class="modal-body">
              <form class="quote-inquiry-form" id="injected-survey-form">
                <div class="form-group">
                  <label class="form-label" for="inj-name">Client / Organization Name</label>
                  <input type="text" class="form-input" id="inj-name" required placeholder="Enter full name">
                </div>
                <div class="form-grid-2">
                  <div class="form-group">
                    <label class="form-label" for="inj-phone">Phone Number</label>
                    <input type="tel" class="form-input" id="inj-phone" required placeholder="Phone number">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="inj-location">Site Location / City</label>
                    <input type="text" class="form-input" id="inj-location" required placeholder="Project site area">
                  </div>
                </div>
                <div class="form-grid-2">
                  <div class="form-group">
                    <label class="form-label" for="inj-type">System Type</label>
                    <select class="form-select" id="inj-type">
                      <option value="residential">Residential Villa</option>
                      <option value="apartment">Apartment Complex</option>
                      <option value="commercial">Commercial / Institutional</option>
                      <option value="conversion">Existing Septic Conversion</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="inj-users">Estimated Occupancy</label>
                    <input type="number" class="form-input" id="inj-users" placeholder="e.g. 25" min="1" required>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block btn-lg" style="margin-top:0.5rem;">
                  <span>Confirm Inspection Appointment</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', surveyModalHTML);
    }

    if (!document.getElementById('modal-spec')) {
      const specModalHTML = `
        <div class="modal-overlay" id="modal-spec">
          <div class="modal-content">
            <div class="modal-header">
              <div style="display:flex; align-items:center; gap:0.6rem;">
                <svg viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:22px; height:22px;">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <h3>Engineering Specification Sheet</h3>
              </div>
              <button class="modal-close-btn" aria-label="Close modal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div class="modal-body">
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem; margin-bottom:1.5rem;">
                <div style="font-size:0.75rem; text-transform:uppercase; color:#059669; font-weight:700; letter-spacing:0.06em; margin-bottom:0.25rem;">SELECTED MODEL SPECIFICATION</div>
                <h4 id="modal-spec-model" style="font-size:1.3rem; margin-bottom:0.75rem;">GL-35 Deluxe Residential</h4>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; font-size:0.88rem;">
                  <div>Estimated Cost: <strong id="modal-spec-cost">$1,850</strong></div>
                  <div>Daily Flow: <strong id="modal-spec-flow">2,100 L/Day</strong></div>
                  <div style="grid-column: span 2;">Dimensions: <strong id="modal-spec-dims">2.8m (L) x 1.5m (W) x 1.8m (D)</strong></div>
                </div>
              </div>

              <p style="font-size:0.92rem; color:#475569; margin-bottom:1.5rem;">
                This is an indicative estimate, not a final design or quotation. Print or save the current specification for discussion.
              </p>

              <button type="button" class="btn btn-primary btn-block btn-lg" id="btn-spec-download-confirm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Print or save specification</span>
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', specModalHTML);
    }
  }

  function attachModalEvents() {
    const modalSurvey = document.getElementById('modal-survey');
    const modalSpec = document.getElementById('modal-spec');
    const closeBtns = document.querySelectorAll('.modal-close-btn');

    // Open Survey Modal
    const openSurveyBtns = document.querySelectorAll('[data-open-survey]');
    openSurveyBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        if (modalSurvey) {
          e.preventDefault();
          modalSurvey.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    // Open Spec Modal
    const openSpecBtns = document.querySelectorAll('[data-open-spec]');
    openSpecBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        
        const model = this.getAttribute('data-model') || 'GL-35 Deluxe Residential';
        const cost = this.getAttribute('data-cost') || '$1,850';
        const flow = this.getAttribute('data-flow') || '2,100 L/Day';
        const dims = this.getAttribute('data-dims') || '2.8m (L) x 1.5m (W) x 1.8m (D)';

        const specModelTarget = document.getElementById('modal-spec-model');
        const specCostTarget = document.getElementById('modal-spec-cost');
        const specFlowTarget = document.getElementById('modal-spec-flow');
        const specDimsTarget = document.getElementById('modal-spec-dims');

        if (specModelTarget) specModelTarget.textContent = model;
        if (specCostTarget) specCostTarget.textContent = cost;
        if (specFlowTarget) specFlowTarget.textContent = flow;
        if (specDimsTarget) specDimsTarget.textContent = dims;

        if (modalSpec) {
          modalSpec.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    function closeAllModals() {
      if (modalSurvey) modalSurvey.classList.remove('active');
      if (modalSpec) modalSpec.classList.remove('active');
      document.body.style.overflow = '';
    }

    closeBtns.forEach(btn => {
      btn.addEventListener('click', closeAllModals);
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', function (e) {
        if (e.target === this) {
          closeAllModals();
        }
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeAllModals();
      }
    });

    const downloadSpecSubmitBtn = document.getElementById('btn-spec-download-confirm');
    if (downloadSpecSubmitBtn) {
      downloadSpecSubmitBtn.addEventListener('click', function () {
        const printWindow = window.open('', '_blank');
        if (!printWindow) {
          showToast('Allow the print window in your browser, then try again.');
          return;
        }

        const readText = id => document.getElementById(id)?.textContent.trim() || '—';
        const escapeHTML = value => value.replace(/[&<>"']/g, character => ({
          '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[character]);
        const model = escapeHTML(readText('modal-spec-model'));
        const cost = escapeHTML(readText('modal-spec-cost'));
        const flow = escapeHTML(readText('modal-spec-flow'));
        const dimensions = escapeHTML(readText('modal-spec-dims'));

        printWindow.document.open();
        printWindow.document.write(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Greenshift sizing estimate</title><style>
          *{box-sizing:border-box}body{margin:0;padding:48px;font:16px/1.55 Arial,sans-serif;color:#24342b;background:#fff}main{max-width:720px;margin:auto;border:1px solid #dfe6de;border-radius:18px;padding:36px}header{padding-bottom:22px;border-bottom:1px solid #dfe6de}small{color:#80572e;font-weight:700;letter-spacing:.12em;text-transform:uppercase}h1{margin:10px 0;font-size:32px;line-height:1.1;color:#193b2d}p{color:#536258}.spec{display:grid;grid-template-columns:1fr 1fr;gap:0;margin:24px 0}.spec div{padding:14px;border-bottom:1px solid #e6ebe5}.spec div:nth-child(odd){padding-left:0}.label{display:block;color:#6d7b71;font-size:12px;text-transform:uppercase;letter-spacing:.07em}.value{font-weight:700}.note{padding:14px;border-radius:10px;background:#f6f2ea;font-size:13px}button{margin-top:22px;padding:12px 18px;border:0;border-radius:24px;background:#1b4b39;color:#fff;font-weight:700;cursor:pointer}@media print{body{padding:0}main{border:0;padding:12px}button{display:none}}
        </style></head><body><main><header><small>Greenshift · sizing estimate</small><h1>${model}</h1><p>Preliminary sizing information for discussion. Confirm dimensions, installation requirements and price through a site assessment.</p></header><section class="spec"><div><span class="label">Daily flow</span><span class="value">${flow}</span></div><div><span class="label">Indicative cost (USD)</span><span class="value">${cost}</span></div><div style="grid-column:1/-1"><span class="label">Dimensions</span><span class="value">${dimensions}</span></div></section><p class="note">Illustrative estimate only. This is not a quotation or final design. Actual cost and system requirements vary by site and location.</p><button onclick="window.print()">Print or save as PDF</button></main></body></html>`);
        printWindow.document.close();
      });
    }
  }

  function attachFormSubmissions() {
    const consultationForms = document.querySelectorAll('.quote-inquiry-form');
    consultationForms.forEach(form => {
      if (!form.querySelector('[data-form-note]')) {
        const note = document.createElement('p');
        note.dataset.formNote = 'true';
        note.className = 'form-status';
        note.textContent = 'Preview only: this form is not connected to an inquiry service, so details entered here will not be sent.';
        form.insertBefore(note, form.firstChild);
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        let status = form.querySelector('[data-form-status]');
        if (!status) {
          status = document.createElement('p');
          status.dataset.formStatus = 'true';
          status.setAttribute('role', 'status');
          status.className = 'form-status';
          form.appendChild(status);
        }
        status.textContent = 'This preview is not connected to an inquiry service, so your details have not been sent.';
      });
    });
  }

  window.GreenshiftUI = {
    showToast: showToast
  };
});
