/* =========================================================================
   ANAND PHOTOGRAPHY — interactions
   ========================================================================= */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const page = document.body.dataset.page;
  const isHome = page === 'home';
  const home = isHome ? '' : 'index.html';
  const params = new URLSearchParams(location.search);
  const catOf = (k) => CATEGORIES.find((c) => c.key === k);
  const catName = (k) => (catOf(k) || {}).short || k;
  const pad = (n) => String(n).padStart(2, '0');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ICON = {
    ig: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    fb: '<svg viewBox="0 0 24 24"><path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6v3.5h3V21h3.5v-7.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z"/></svg>',
    yt: '<svg viewBox="0 0 24 24"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor"/></svg>',
    wa: '<svg viewBox="0 0 32 32"><path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7a10.7 10.7 0 0 1-5.5-1.5l-.4-.2-3.9 1 1-3.8-.2-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.1-.8 1-1 1.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.6 3.6 0 0 0-1.1 2.7 6.3 6.3 0 0 0 1.3 3.3 14.4 14.4 0 0 0 5.5 4.9c2 .9 2.8.9 3.9.8a3.3 3.3 0 0 0 2.2-1.5 2.7 2.7 0 0 0 .2-1.5c-.1-.2-.3-.3-.6-.4z"/></svg>',
  };

  /* ---------------- Reveal on scroll ---------------- */
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); revealIO.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
  const observeReveals = (root = document) => $$('.reveal:not(.in)', root).forEach((el) => revealIO.observe(el));

  /* ---------------- Header / footer ---------------- */
  const links = [
    ['Home', isHome ? '#home' : 'index.html', 'home'],
    ['Our Work', 'portfolio.html', 'work'],
    ['Services', `${home}#services`, 'services'],
    ['About Us', `${home}#about`, 'about'],
    ['Contact', `${home}#contact`, 'contact'],
  ];
  const activeKey = { portfolio: 'work', events: 'work', event: 'work', service: 'services' }[page];
  const brand = `<a href="${isHome ? '#home' : 'index.html'}" class="brand" aria-label="Anand Photography — home">
      <img class="brand__mark" src="assets/logo/anand-mark.svg" alt="" />
      <span class="brand__text"><span class="brand__name">ANAND</span><span class="brand__sub">Photography</span></span></a>`;

  const headerHost = $('#site-header');
  if (headerHost) {
    headerHost.outerHTML = `
    <header class="header" id="header">
      <div class="container header__inner">
        ${brand}
        <nav class="nav" aria-label="Primary">
          ${links.map(([t, h, k]) => `<a href="${h}" data-k="${k}" class="${k === activeKey ? 'active' : ''}">${t}</a>`).join('')}
          <a href="${home}#contact" class="btn btn--gold">Enquire Now</a>
        </nav>
        <button class="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
      </div>
    </header>
    <div class="mobile-menu">
      <nav>${links.map(([t, h]) => `<a href="${h}">${t}</a>`).join('')}</nav>
      <div class="mobile-menu__foot">
        <a href="tel:${SITE.phoneRaw}">${SITE.phone}</a>
        <a href="${home}#contact" class="btn btn--gold">Enquire Now</a>
      </div>
    </div>`;
  }

  const footerHost = $('#site-footer');
  if (footerHost) {
    footerHost.outerHTML = `
    <footer class="footer">
      <div class="container">
        ${isHome ? '' : `<div class="footer__cta">
          <h2 class="h2 reveal">Have a moment worth <em>remembering?</em></h2>
          <a href="index.html#contact" class="btn btn--gold reveal">Enquire Now <i class="arr"></i></a>
        </div>`}
        <div class="footer__grid">
          <div class="footer__brand">${brand}<p>Capturing beautiful moments, one photograph at a time.</p></div>
          <div><h4>Quick Links</h4><ul>${links.map(([t, h]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>
          <div><h4>Our Services</h4><ul>
            <li><a href="service.html?s=weddings">Wedding Photography</a></li>
            <li><a href="service.html?s=events">Event Photography</a></li>
            <li><a href="service.html?s=maternity">Maternity &amp; Newborn</a></li>
            <li><a href="service.html?s=family">Family Photography</a></li>
            <li><a href="service.html?s=portraits">Portrait Photography</a></li></ul></div>
          <div><h4>Contact</h4><ul>
            <li><a href="tel:${SITE.phoneRaw}">${SITE.phone}</a></li>
            <li><a href="${SITE.directionsUrl}" target="_blank" rel="noopener">Visakhapatnam, Andhra Pradesh</a></li>
            <li><a href="${SITE.whatsapp}" target="_blank" rel="noopener">WhatsApp Us</a></li></ul></div>
          <div><h4>Follow Us</h4><div class="socials">
            <a href="${SITE.instagram}" aria-label="Instagram" target="_blank" rel="noopener">${ICON.ig}</a>
            <a href="${SITE.facebook}" aria-label="Facebook" target="_blank" rel="noopener">${ICON.fb}</a>
            <a href="${SITE.youtube}" aria-label="YouTube" target="_blank" rel="noopener">${ICON.yt}</a></div></div>
        </div>
        <div class="footer__bottom">
          <span>Copyright © 2026 Anand Photography. All Rights Reserved.</span>
          <a href="#" class="to-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
    <a class="fab" href="${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ICON.wa}</a>`;
  }

  /* ---------------- Global wiring ---------------- */
  $$('[data-reviews]').forEach((a) => (a.href = SITE.reviewsUrl));
  $$('[data-whatsapp]').forEach((a) => (a.href = SITE.whatsapp));
  $$('[data-directions]').forEach((a) => (a.href = SITE.directionsUrl));
  $$('[data-instagram]').forEach((a) => (a.href = SITE.instagram));
  $$('img[data-p]').forEach((i) => (i.src = img(P[i.dataset.p], +i.dataset.w || 1200)));
  $$('.to-top').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }); }));

  /* ---------------- Header behaviour ---------------- */
  const header = $('#header');
  const fab = $('.fab');
  let lastY = 0;
  const onScroll = () => {
    const y = scrollY;
    header?.classList.toggle('scrolled', y > 40);
    header?.classList.toggle('hidden', y > 500 && y > lastY && !document.body.classList.contains('menu-open'));
    fab?.classList.toggle('show', y > 500);
    lastY = y;
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = $('.burger');
  const toggleMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    document.body.classList.toggle('is-locked', open);
    burger?.setAttribute('aria-expanded', open);
  };
  burger?.addEventListener('click', () => toggleMenu(!document.body.classList.contains('menu-open')));
  $$('.mobile-menu a').forEach((a) => a.addEventListener('click', () => toggleMenu(false)));

  if (isHome) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) $$('.nav a[data-k]').forEach((a) => a.classList.toggle('active', a.dataset.k === en.target.id)); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['home', 'services', 'about', 'contact'].forEach((id) => { const s = document.getElementById(id); s && io.observe(s); });
  }

  /* ---------------- Builders ---------------- */
  const eventCard = (ev, i) => `
    <a class="event reveal" href="event.html?e=${ev.slug}" style="--d:${(i % 4) * 0.08}s">
      <div class="event__media">
        <img src="${img(ev.cover, 800)}" alt="${ev.title} — ${ev.category}" loading="lazy" />
        <span class="event__count">${ev.photos.length} photos</span>
      </div>
      <span class="event__cat">${ev.category}</span>
      <h3 class="event__title">${ev.title}</h3>
      <p class="event__info">${ev.location}${ev.date ? ` · ${ev.date}` : ''}</p>
    </a>`;

  const tile = (t, i, animate) => `
    <button class="tile tile--${t.shape} ${animate ? 'pop' : 'reveal'}" style="${animate ? `animation-delay:${i * 0.04}s` : `--d:${(i % 4) * 0.06}s`}" data-i="${i}" aria-label="Open ${t.caption}">
      <img src="${img(t.src, t.shape === 's' ? 700 : 1000)}" alt="${t.caption}" loading="lazy" />
      ${t.label ? `<span class="tile__cap"><strong>${t.caption}</strong><small>${t.label}</small></span>` : ''}
    </button>`;

  /* Categories → service pages */
  const cats = $('#cats');
  if (cats) {
    cats.innerHTML = CATEGORIES.map((c, i) => `
      <a class="cat reveal" href="service.html?s=${c.key}" style="--d:${(i % 3) * 0.08}s">
        <img src="${img(c.cover, 900)}" alt="${c.title}" loading="lazy" />
        <div class="cat__body">
          <span class="cat__num">${pad(i + 1)}</span>
          <h3 class="cat__title">${c.title}</h3>
          <span class="cat__more">Explore <i class="arr"></i></span>
        </div>
      </a>`).join('');
  }

  const recent = $('#recentEvents');
  if (recent) recent.innerHTML = EVENTS.slice(0, 4).map(eventCard).join('');
  const allEvents = $('#allEvents');
  if (allEvents) allEvents.innerHTML = EVENTS.map(eventCard).join('');

  /* Testimonials carousel */
  const qs = $('#quoteSlides');
  if (qs) {
    qs.innerHTML = REVIEWS.map((r, i) => `<blockquote class="quote__item ${i ? '' : 'active'}">“${r.text}”</blockquote>`).join('');
    const items = $$('.quote__item', qs);
    let qi = 0, qt;
    const show = (n) => {
      items[qi].classList.remove('active');
      qi = (n + items.length) % items.length;
      items[qi].classList.add('active');
      $('#qCount').textContent = `${pad(qi + 1)} / ${pad(items.length)}`;
      clearTimeout(qt); qt = setTimeout(() => show(qi + 1), 7000);
    };
    $('#qPrev').onclick = () => show(qi - 1);
    $('#qNext').onclick = () => show(qi + 1);
    show(0);
  }

  /* FAQ */
  const faq = $('#faqList');
  if (faq) {
    faq.innerHTML = FAQS.map((f, i) => `
      <div class="acc ${i === 0 ? 'open' : ''}">
        <button class="acc__q" aria-expanded="${i === 0}" aria-controls="faq-${i}"><span>${f.q}</span><span class="acc__i" aria-hidden="true"></span></button>
        <div class="acc__a" id="faq-${i}" role="region"><div><p>${f.a}</p></div></div>
      </div>`).join('');
    faq.addEventListener('click', (e) => {
      const btn = e.target.closest('.acc__q'); if (!btn) return;
      const item = btn.parentElement; const open = !item.classList.contains('open');
      $$('.acc', faq).forEach((a) => { a.classList.remove('open'); $('.acc__q', a).setAttribute('aria-expanded', 'false'); });
      if (open) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
    });
  }

  /* Instagram */
  const ig = $('#instaGrid');
  if (ig) ig.innerHTML = INSTAGRAM.map((p, i) => `<a class="insta__item reveal" style="--d:${i * 0.05}s" href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="View on Instagram"><img src="${img(p, 500)}" alt="" loading="lazy" />${ICON.ig}</a>`).join('');

  /* ---------------- Lightbox ---------------- */
  let lbItems = [], lb, lbIdx = 0;
  const buildLB = () => {
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.innerHTML = `
      <div class="lb__top"><span class="lb__count"></span><button class="lb__close" aria-label="Close"></button></div>
      <div class="lb__stage"><img alt="" /><button class="lb__btn lb__prev" aria-label="Previous"><i class="arr arr--left"></i></button><button class="lb__btn lb__next" aria-label="Next"><i class="arr"></i></button></div>
      <div class="lb__bottom"><div class="lb__cap"></div><small class="lb__sub"></small></div>`;
    document.body.appendChild(lb);
    $('.lb__close', lb).onclick = closeLB;
    $('.lb__prev', lb).onclick = () => showLB(lbIdx - 1);
    $('.lb__next', lb).onclick = () => showLB(lbIdx + 1);
    lb.addEventListener('click', (e) => { if (e.target === lb || e.target.classList.contains('lb__stage')) closeLB(); });
    let sx = 0;
    lb.addEventListener('touchstart', (e) => (sx = e.touches[0].clientX), { passive: true });
    lb.addEventListener('touchend', (e) => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) showLB(lbIdx + (dx < 0 ? 1 : -1)); });
    addEventListener('keydown', (e) => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLB();
      if (e.key === 'ArrowRight') showLB(lbIdx + 1);
      if (e.key === 'ArrowLeft') showLB(lbIdx - 1);
    });
  };
  function showLB(i) {
    lbIdx = (i + lbItems.length) % lbItems.length;
    const it = lbItems[lbIdx];
    const im = $('.lb__stage img', lb);
    im.classList.add('swap');
    const pre = new Image();
    pre.onload = pre.onerror = () => { im.src = pre.src; im.alt = it.caption; requestAnimationFrame(() => im.classList.remove('swap')); };
    pre.src = img(it.src, 2000);
    $('.lb__count', lb).textContent = `${pad(lbIdx + 1)} / ${pad(lbItems.length)}`;
    $('.lb__cap', lb).textContent = it.caption;
    $('.lb__sub', lb).textContent = it.label || '';
  }
  function openLB(items, i) {
    lbItems = items;
    if (!lb) buildLB();
    showLB(i);
    lb.classList.add('open');
    document.body.classList.add('is-locked');
  }
  function closeLB() { lb.classList.remove('open'); document.body.classList.remove('is-locked'); }

  const mountGallery = (el, items) => {
    el.innerHTML = items.map((t, i) => tile(t, i, false)).join('');
    el.onclick = (e) => { const t = e.target.closest('.tile'); if (t) openLB(items, +t.dataset.i); };
  };

  /* ---------------- Portfolio with filters ---------------- */
  const grid = $('#portfolio');
  if (grid) {
    const limit = +grid.dataset.limit || Infinity;
    const keys = ['all', ...CATEGORIES.map((c) => c.key)];
    let current = keys.includes(params.get('cat')) ? params.get('cat') : 'all';
    const filters = $('#filters');
    const count = (k) => (k === 'all' ? PORTFOLIO.length : PORTFOLIO.filter((p) => p.cat === k).length);
    filters.innerHTML = keys.map((k) => `<button class="filter ${k === current ? 'active' : ''}" data-f="${k}" role="tab" aria-selected="${k === current}">${k === 'all' ? 'All' : catName(k)}${isHome ? '' : `<sup>${count(k)}</sup>`}</button>`).join('');

    const render = (animate) => {
      const items = PORTFOLIO.filter((p) => current === 'all' || p.cat === current).slice(0, limit).map((p) => ({ ...p, label: catName(p.cat) }));
      grid.innerHTML = items.map((t, i) => tile(t, i, animate)).join('');
      grid.onclick = (e) => { const t = e.target.closest('.tile'); if (t) openLB(items, +t.dataset.i); };
      if (!animate) observeReveals(grid);
    };
    render(false);
    filters.addEventListener('click', (e) => {
      const b = e.target.closest('.filter'); if (!b || b.dataset.f === current) return;
      current = b.dataset.f;
      $$('.filter', filters).forEach((f) => { f.classList.toggle('active', f === b); f.setAttribute('aria-selected', f === b); });
      if (page === 'portfolio') {
        history.replaceState(null, '', current === 'all' ? 'portfolio.html' : `?cat=${current}`);
        const c = catOf(current); const t = $('#pfTitle');
        if (t) t.innerHTML = c ? c.title.replace(/(\S+)$/, '<em>$1</em>') : 'A Collection of <em>Beautiful Moments</em>';
      }
      render(true);
    });
    if (page === 'portfolio') {
      const c = catOf(current);
      if (c) { $('#pfTitle').innerHTML = c.title.replace(/(\S+)$/, '<em>$1</em>'); $('#pfBg').src = img(c.hero, 2000); }
    }
  }

  /* ---------------- Service page ---------------- */
  if (page === 'service') {
    const c = catOf(params.get('s')) || CATEGORIES[0];
    document.title = `${c.tagline} in Visakhapatnam · Anand Photography`;
    $('#svBg').src = img(c.hero, 2200);
    $('#svCrumb').textContent = c.title;
    $('#svTitle').innerHTML = c.tagline.replace(/(\S+)$/, '<em>$1</em>');
    $('#svIntro').textContent = c.intro;
    $('#svEyebrow').textContent = c.title;
    $('#svBody').textContent = c.body;
    $('#svFeature').src = img(c.feature, 1100);
    $('#svFeature').alt = c.title;
    $('#svHighlights').innerHTML = c.highlights.map((h) => `<li>${h}</li>`).join('');
    $('#svCtaBg').src = img(c.cover, 2000);
    $('#svPortfolioLink').href = `portfolio.html?cat=${c.key}`;

    const typeMap = { weddings: 'Wedding / Engagement', events: 'Event / Party', maternity: 'Maternity / Newborn', family: 'Family / Group', portraits: 'Portrait / Headshot', school: 'School Photography' };
    $('#svEnquire').href = `index.html?type=${encodeURIComponent(typeMap[c.key])}#contact`;

    // gallery: portfolio items + event photos (dedupe)
    const seen = new Set();
    const shapes = ['t', 's', 's', 'w', 't', 's', 'w', 's', 't', 's'];
    const items = [];
    PORTFOLIO.filter((p) => p.cat === c.key).forEach((p) => { if (!seen.has(p.src)) { seen.add(p.src); items.push({ ...p, label: c.short }); } });
    EVENTS.filter((e) => e.cat === c.key).forEach((e) => e.photos.forEach((ph) => { if (!seen.has(ph)) { seen.add(ph); items.push({ src: ph, caption: e.title, label: e.category, shape: shapes[items.length % shapes.length] }); } }));
    mountGallery($('#svGallery'), items.slice(0, 12));

    const stories = EVENTS.filter((e) => e.cat === c.key);
    if (stories.length) $('#svStories').innerHTML = stories.slice(0, 3).map(eventCard).join('');
    else $('#svStoriesWrap').remove();

    $('#svOthers').innerHTML = CATEGORIES.filter((x) => x.key !== c.key).map((x) => `
      <a class="other reveal" href="service.html?s=${x.key}"><img src="${img(x.cover, 600)}" alt="" loading="lazy" /><span>${x.title}</span></a>`).join('');
  }

  /* ---------------- Event page ---------------- */
  if (page === 'event') {
    const idx = Math.max(0, EVENTS.findIndex((e) => e.slug === params.get('e')));
    const ev = EVENTS[idx];
    document.title = `${ev.title} — ${ev.category} · Anand Photography`;
    $('#evBg').src = img(ev.cover, 2200);
    $('#evTitle').textContent = ev.title;
    $('#evCrumb').textContent = ev.title;
    $('#evIntro').textContent = ev.intro || '';
    $('#evMeta').innerHTML = [['Category', ev.category], ['Location', ev.location], ['Date', ev.date], ['Photographs', ev.photos.length]]
      .filter(([, v]) => v).map(([k, v]) => `<div><b>${k}</b>${v}</div>`).join('');
    const shapes = ['t', 's', 's', 'w', 't', 's', 'w', 's', 't'];
    mountGallery($('#evGallery'), ev.photos.map((p, i) => ({ src: p, caption: ev.title, label: `${ev.category} · ${pad(i + 1)}`, shape: shapes[i % shapes.length] })));
    const prev = EVENTS[(idx - 1 + EVENTS.length) % EVENTS.length];
    const next = EVENTS[(idx + 1) % EVENTS.length];
    $('#evNav').innerHTML = `
      <a href="event.html?e=${prev.slug}"><small>← Previous Story</small><strong>${prev.title}</strong></a>
      <a href="event.html?e=${next.slug}"><small>Next Story →</small><strong>${next.title}</strong></a>`;
  }

  /* ---------------- Hero slider ---------------- */
  const slidesHost = $('#heroSlides');
  if (slidesHost) {
    const DUR = 6000;
    slidesHost.innerHTML = HERO_SLIDES.map((s, i) => `<div class="hero__slide ${i === 0 ? 'active' : ''}"><img src="${img(s.src, 2400)}" alt="${s.label}" style="object-position:${s.pos}" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} /></div>`).join('');
    const dots = $('#heroDots');
    dots.innerHTML = HERO_SLIDES.map((s, i) => `<button class="hero__thumb" style="--dur:${DUR}ms" aria-label="Show ${s.label}" data-i="${i}"><img src="${img(s.src, 160)}" alt="" style="object-position:${s.pos}" /><i></i></button>`).join('');
    $('#heroTotal').textContent = pad(HERO_SLIDES.length);
    const slides = $$('.hero__slide', slidesHost);
    const dotEls = $$('.hero__thumb', dots);
    let cur = 0, timer;
    const go = (n) => {
      slides[cur].classList.remove('active');
      cur = (n + slides.length) % slides.length;
      slides[cur].classList.add('active');
      dotEls.forEach((d, i) => { d.classList.remove('active', 'done'); void d.offsetWidth; if (i < cur) d.classList.add('done'); });
      dotEls[cur].classList.add('active');
      $('#heroIdx').textContent = pad(cur + 1);
      $('#heroLabel').textContent = HERO_SLIDES[cur].label;
      clearTimeout(timer);
      timer = setTimeout(() => go(cur + 1), DUR);
    };
    dots.addEventListener('click', (e) => { const d = e.target.closest('.hero__thumb'); if (d) go(+d.dataset.i); });
    window.__startHero = () => go(0);
  }

  /* ---------------- Counters ---------------- */
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target; const to = parseFloat(el.dataset.count); const dec = +el.dataset.dec || 0;
      if (reduced) { el.textContent = to.toFixed(dec); return; }
      const t0 = performance.now();
      const step = (t) => { const p = Math.min((t - t0) / 1800, 1); el.textContent = (to * (1 - Math.pow(1 - p, 4))).toFixed(dec); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
      countIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  $$('[data-count]').forEach((el) => countIO.observe(el));

  /* ---------------- Enquiry form ---------------- */
  const form = $('#enquiryForm');
  if (form) {
    const pre = params.get('type');
    if (pre) form.eventType.value = pre;
    const success = $('#formSuccess');
    const setErr = (field, msg) => {
      const wrap = field.closest('.field'); wrap.classList.toggle('error', !!msg);
      let e = $('.err', wrap);
      if (msg && !e) { e = document.createElement('span'); e.className = 'err'; wrap.appendChild(e); }
      if (e) e.textContent = msg || '';
    };
    const validate = () => {
      let ok = true;
      const n = form.name, p = form.phone, t = form.eventType;
      if (n.value.trim().length < 2) { setErr(n, 'Please enter your name'); ok = false; } else setErr(n);
      const digits = p.value.replace(/\D/g, '');
      if (digits.length < 10 || digits.length > 13) { setErr(p, 'Please enter a valid phone number'); ok = false; } else setErr(p);
      if (!t.value) { setErr(t, 'Please choose an occasion'); ok = false; } else setErr(t);
      return ok;
    };
    form.addEventListener('input', (e) => { if (e.target.closest('.field.error')) validate(); });
    form.addEventListener('change', (e) => { if (e.target.closest('.field.error')) validate(); });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validate()) { $('.field.error input, .field.error select', form)?.focus(); return; }
      const btn = $('button[type="submit"]', form);
      btn.classList.add('is-loading');
      const data = Object.fromEntries(new FormData(form));
      try {
        if (SITE.formEndpoint) {
          const res = await fetch(SITE.formEndpoint, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
          if (!res.ok) throw new Error('Request failed');
        } else {
          await new Promise((r) => setTimeout(r, 800)); // demo mode
        }
        const msg = `Hello Anand Photography!\n\nName: ${data.name}\nPhone: ${data.phone}\nOccasion: ${data.eventType}${data.eventDate ? `\nDate: ${data.eventDate}` : ''}${data.message ? `\n\n${data.message}` : ''}`;
        $('#successWa').href = `${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
        $('#successName').textContent = data.name.trim().split(' ')[0];
        form.hidden = true; success.hidden = false;
      } catch {
        setErr(form.message, `Sorry, something went wrong. Please call or WhatsApp us on ${SITE.phone}.`);
      } finally { btn.classList.remove('is-loading'); }
    });
    $('#successReset').addEventListener('click', () => { form.reset(); success.hidden = true; form.hidden = false; });
  }

  /* ---------------- Start ---------------- */
  const loader = $('.loader');
  let started = false;
  const start = () => {
    if (started) return; started = true;
    document.body.classList.add('loaded');
    loader?.classList.add('done');
    setTimeout(() => loader?.remove(), 900);
    window.__startHero?.();
    observeReveals();
  };
  if (loader && !reduced) {
    const t0 = performance.now();
    const finish = () => setTimeout(start, Math.max(0, 900 - (performance.now() - t0)));
    const first = $('.hero__slide img');
    if (first && !first.complete) { first.addEventListener('load', finish, { once: true }); first.addEventListener('error', finish, { once: true }); setTimeout(start, 3000); }
    else finish();
  } else start();
})();
