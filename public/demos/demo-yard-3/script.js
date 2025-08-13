(() => {
  const open = document.getElementById('demo-nav-toggle');
  const banner = document.querySelector('.w-full.bg-[var(--brand-orange)]');
  const isChecked = () => {
    const input = open;
    return input && 'checked' in input ? input.checked : false;
  };
  const toggleBody = () => {
    const openNow = isChecked();
    document.body.style.overflow = openNow ? 'hidden' : '';
    if (banner) banner.style.display = openNow ? 'none' : '';
  };
  if (open) open.addEventListener('change', toggleBody);
  toggleBody();
  document.querySelectorAll('details').forEach((d) => d.addEventListener('toggle', () => d.setAttribute('aria-expanded', (d).open ? 'true' : 'false')));
  const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { (e.target).classList.add('aos-in'); io.unobserve(e.target); } }), { threshold: 0.2 });
  document.querySelectorAll('[data-aos]').forEach((el) => io.observe(el));
})();


