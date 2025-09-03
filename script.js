/* ===== Mobile Menu Toggle ===== */
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('show');
  });
}

/* ===== Smooth Scroll ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // auto-close mobile menu
      navLinks?.classList.remove('show');
      toggleBtn?.setAttribute('aria-expanded', 'false');
    }
  });
});

/* ===== Project PDF Popup ===== */
const pdfModal = document.getElementById('pdfModal');
const pdfViewer = document.getElementById('pdfViewer');

document.querySelectorAll('.open-project').forEach(btn => {
  btn.addEventListener('click', () => {
    const src = btn.getAttribute('data-pdf');
    if (!src) return;
    pdfViewer.src = src;
    pdfModal.classList.add('show');
    pdfModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

/* Close PDF modal */
pdfModal?.addEventListener('click', (e) => {
  if (e.target === pdfModal || e.target.classList.contains('modal-close')) {
    pdfModal.classList.remove('show');
    pdfModal.setAttribute('aria-hidden', 'true');
    pdfViewer.src = '';
    document.body.style.overflow = '';
  }
});

/* ===== Certificate Image Popup ===== */
const imgModal = document.getElementById('imgModal');
const imgViewer = document.getElementById('imgViewer');

document.querySelectorAll('.cert-thumb').forEach(img => {
  img.addEventListener('click', () => {
    imgViewer.src = img.src;
    imgModal.classList.add('show');
    imgModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

/* Close image modal */
imgModal?.addEventListener('click', (e) => {
  if (e.target === imgModal || e.target.classList.contains('modal-close')) {
    imgModal.classList.remove('show');
    imgModal.setAttribute('aria-hidden', 'true');
    imgViewer.src = '';
    document.body.style.overflow = '';
  }
});

/* ===== Optional: robust Download CV handler (fallback if browser ignores download attr) ===== */
document.getElementById('downloadCV')?.addEventListener('click', (e) => {
  // keep default <a download> behavior; this is just a defensive fallback if needed
  // e.preventDefault();
  // const a = document.createElement('a');
  // a.href = 'assets/CV.pdf';
  // a.download = 'CV.pdf';
  // document.body.appendChild(a);
  // a.click();
  // a.remove();
});
