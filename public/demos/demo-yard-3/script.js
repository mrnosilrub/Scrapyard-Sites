(() => {
  const open = document.getElementById('demo-nav-toggle');
  const banner = document.getElementById('demo-top-banner');
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
  // Active nav highlight (handles trailing slashes)
  const pathLast = location.pathname.replace(/\/$/, '').split('/').pop();
  document.querySelectorAll('nav a').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href) return;
    const last = href.replace(/\/$/, '').split('/').pop();
    if (last && last === pathLast) a.classList.add('text-[var(--brand-orange)]');
  });
  document.querySelectorAll('[data-aos]').forEach((el) => io.observe(el));
  // Deep-link open on Accepted Materials
  const onAccepted = /\/demos\/demo-yard-3\/accepted-materials\/?$/.test(location.pathname);
  if (onAccepted && location.hash) {
    const id = decodeURIComponent(location.hash.slice(1));
    const details = document.getElementById(id);
    if (details && details.tagName && details.tagName.toLowerCase() === 'details') {
      details.setAttribute('open', '');
      details.setAttribute('aria-expanded', 'true');
      details.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  // Simple mobile carousel for grids
  const mq = window.matchMedia('(max-width: 640px)');
  const enableCarousel = (container) => {
    if (!container) return;
    if (container.dataset && container.dataset.carousel) return;
    if (container.dataset) container.dataset.carousel = '1';
    container.style.scrollSnapType = 'x mandatory';
    container.style.overflowX = 'auto';
    Array.from(container.children).forEach((el) => { el.style.scrollSnapAlign = 'start'; el.style.minWidth = '80%'; el.style.flex = '0 0 auto'; });
    const dots = document.createElement('div');
    dots.style.display = 'flex'; dots.style.gap = '6px'; dots.style.justifyContent = 'center'; dots.style.marginTop = '8px';
    const items = Array.from(container.children);
    items.forEach((_, i) => { const b = document.createElement('button'); b.style.width='8px'; b.style.height='8px'; b.style.borderRadius='50%'; b.style.background='#d4d4d8'; if (i===0) b.style.background='var(--brand-orange)'; b.addEventListener('click', () => items[i].scrollIntoView({ behavior: 'smooth', inline: 'start' })); dots.appendChild(b); });
    container.parentElement.appendChild(dots);
    const update = () => {
      const left = container.getBoundingClientRect().left;
      let idx = 0, mind = Infinity;
      items.forEach((it, i) => { const d = Math.abs(it.getBoundingClientRect().left - left); if (d < mind) { mind = d; idx = i; } });
      Array.from(dots.children).forEach((d, i) => d.style.background = i===idx ? 'var(--brand-orange)' : '#d4d4d8');
    };
    container.addEventListener('scroll', () => window.requestAnimationFrame(update), { passive: true });
    update();
  };
  const apply = () => {
    if (!mq.matches) return;
    const grids = document.querySelectorAll('#materials .grid');
    grids.forEach(enableCarousel);
  };
  mq.addEventListener ? mq.addEventListener('change', apply) : mq.addListener(apply);
  apply();
})();


