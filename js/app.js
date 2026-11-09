/**
 * MAIN INTERACTIVITY & AMBIENT UI ENGINE
 * Micro-interactions, spotlight mouse glow, settings modal, smooth navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initSpotlightGlow();
  initSettingsModal();
  initContactForm();
  initSmoothScroll();
});

// Navbar background blur enhancement on scroll
function initNavbarScroll() {
  const nav = document.querySelector('.glass-nav');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    if (scrollY > 50) {
      nav.style.background = 'rgba(7, 10, 18, 0.88)';
      nav.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(99, 102, 241, 0.15)';
    } else {
      nav.style.background = 'rgba(10, 15, 26, 0.75)';
      nav.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.35)';
    }

    // ScrollSpy active state
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// Subtle spotlight cursor glow across cards
function initSpotlightGlow() {
  const cards = document.querySelectorAll('.glass-panel');

  window.addEventListener('mousemove', (e) => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= -50 && x <= rect.width + 50 && y >= -50 && y <= rect.height + 50) {
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    });
  });
}

// GitHub Settings & Customization Modal
function initSettingsModal() {
  const openBtn = document.getElementById('openSettingsBtn');
  const closeBtn = document.getElementById('closeSettingsBtn');
  const modal = document.getElementById('settingsModalOverlay');
  const saveBtn = document.getElementById('saveSettingsBtn');
  const usernameInput = document.getElementById('settingGhUsername');
  const tokenInput = document.getElementById('settingGhToken');

  if (!modal) return;

  // Pre-fill existing config
  if (usernameInput) {
    usernameInput.value = localStorage.getItem('tuffy_gh_username') || 'Tuffy420';
  }
  if (tokenInput) {
    tokenInput.value = localStorage.getItem('tuffy_gh_token') || '';
  }

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const newUsername = (usernameInput.value || '').trim() || 'Tuffy420';
      const newToken = (tokenInput.value || '').trim();

      localStorage.setItem('tuffy_gh_username', newUsername);
      localStorage.setItem('tuffy_gh_token', newToken);

      // Invalidate cache for new username
      localStorage.removeItem(`tuffy_gh_cache_${newUsername}`);

      if (window.gitSync) {
        window.gitSync.username = newUsername;
        window.gitSync.token = newToken;
        window.gitSync.init(true);
      }

      modal.classList.remove('active');
      if (window.gitSync) {
        window.gitSync.showToast(`✨ Settings updated! Synced to GitHub user: ${newUsername}`);
      }
    });
  }
}

// Interactive Contact Form Handling
function initContactForm() {
  const form = document.getElementById('portfolioContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value || 'Friend';
    const email = document.getElementById('contactEmail')?.value;
    const message = document.getElementById('contactMessage')?.value;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Preparing message...`;
    submitBtn.disabled = true;

    setTimeout(() => {
      // Create mailto fallback with prefilled content
      const subject = encodeURIComponent(`Portfolio Message from ${name}`);
      const body = encodeURIComponent(`Hi Tuffy,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:tuffytuffy64@gmail.com?subject=${subject}&body=${body}`;

      submitBtn.innerHTML = `<i class="fas fa-check"></i> Sent!`;
      submitBtn.classList.add('btn-sync-glass');

      if (window.gitSync) {
        window.gitSync.showToast(`📩 Thanks ${name}! Mail client opened for tuffytuffy64@gmail.com`);
      }

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-sync-glass');
        form.reset();
      }, 3000);
    }, 600);
  });
}

// Smooth scrolling for navigation anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

