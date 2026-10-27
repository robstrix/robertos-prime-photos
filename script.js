document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav ul');
  if (menuBtn) menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        item.style.display = (f === 'all' || item.dataset.cat === f) ? 'block' : 'none';
      });
    });
  });

  const service = document.getElementById('service');
  if (service) {
    service.addEventListener('change', () => {
      document.querySelectorAll('.conditional').forEach(el => el.style.display = 'none');
      const v = service.value;
      if (v === 'wedding') document.getElementById('wedding').style.display = 'block';
      if (v === 'family' || v === 'seasonal') document.getElementById('family').style.display = 'block';
      if (v === 'graduation') document.getElementById('grad').style.display = 'block';
      if (v === 'quince' || v === 'birthday') document.getElementById('event').style.display = 'block';
    });
  }

  const form = document.getElementById('form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you! Your inquiry has been received. I will respond within 1–2 business days.');
      form.reset();
      document.querySelectorAll('.conditional').forEach(el => el.style.display = 'none');
    });
  }
});
