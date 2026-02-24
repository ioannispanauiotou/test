(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const backToTop = document.querySelector('.back-to-top');
  const form = document.querySelector('#quote-form');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (nav && nav.classList.contains('open')) {
            nav.classList.remove('open');
            navToggle?.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  });

  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('show', window.scrollY > 380);
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  if (form) {
    form.addEventListener('submit', e => {
      const consent = form.querySelector('#gdpr');
      const phone = form.querySelector('#phone');
      let valid = true;

      if (phone && phone.value.trim().length < 8) {
        valid = false;
        phone.setCustomValidity('Παρακαλούμε εισάγετε έγκυρο τηλέφωνο.');
      } else {
        phone?.setCustomValidity('');
      }

      if (consent && !consent.checked) {
        valid = false;
        consent.setCustomValidity('Απαιτείται συγκατάθεση για αποστολή φόρμας.');
      } else {
        consent?.setCustomValidity('');
      }

      if (!valid) {
        e.preventDefault();
        form.reportValidity();
      }
    });
  }
})();
