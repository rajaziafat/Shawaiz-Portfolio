/* ============================================================
   Shawaiz — portfolio behaviour
   theme · nav · reveal · project data · case study · form
   ============================================================ */
(function () {
  var root = document.documentElement;

  /* ---------------- project data ---------------- */
  var PROJECTS = [
    {
      slug: 'meridian',
      pull: "Support tickets were dominated by “what does this number mean?” rather than genuine platform faults.",
      steps: ["Eleven interviews with lapsed users, coded into four decision moments", "A plain-language content model agreed with compliance", "Three progressive layers: position, movement, then detail", "A calm data language — one accent, no red-green reliance"], title: 'Meridian', badge: 'Fintech',
      tagline: 'A wealth dashboard for people who find investing intimidating.',
      summary: 'Rebuilt a retail investing platform around progressive disclosure and plain language, lifting weekly active use by 34%.',
      stack: ['Figma', 'UX Research', 'Design System', 'Prototyping'],
      role: 'Lead Product Designer', timeline: '14 weeks', team: '2 designers, 6 engineers', year: '2025',
      problem: 'Meridian had strong returns and weak retention. New investors opened the app, met a wall of tickers, percentages and jargon, and left. Support tickets were dominated by "what does this number mean?" rather than genuine platform problems.',
      approach: 'I ran eleven interviews with lapsed users and built a plain-language content model with the compliance team. The dashboard was restructured into three progressive layers — position, movement, then detail — so the first screen answers "am I okay?" before it answers anything else. Every metric gained a one-line explanation written for a first-time investor.',
      outcome: 'Weekly active use rose 34% in the first quarter after launch, and explanation-related support tickets fell by more than half. The content model became the house style for all new features.',
      results: [['+34%', 'Weekly active use'], ['−58%', 'Explainer support tickets'], ['4.6', 'App store rating, up from 3.8']]
    },
    {
      slug: 'arcadia',
      pull: "Clinicians described rounds planning as “fighting the calendar” — eleven interactions across three screens.",
      steps: ["Three weeks shadowing staff across three clinics, timing real tasks", "Triage-first information architecture, admin moved to a secondary surface", "WCAG 2.1 AA from the first wireframe, not a late audit", "Handoff specs covering every empty, loading and error state"], title: 'Arcadia Health', badge: 'Healthcare',
      tagline: 'Scheduling for 9,000 clinicians who were losing an hour a day to it.',
      summary: 'Field research in three clinics produced a triage-first redesign that removed eleven steps from the daily rounds workflow.',
      stack: ['Figma', 'Field research', 'Wireframing', 'Accessibility'],
      role: 'Senior Product Designer', timeline: '20 weeks', team: '1 designer, 2 researchers, 8 engineers', year: '2023',
      problem: 'The scheduling suite had grown feature by feature for six years. Clinicians described rounds planning as "fighting the calendar" — the critical daily task took eleven interactions and three screens, while rarely used admin tools occupied the primary navigation.',
      approach: 'I spent three weeks shadowing staff across three clinics, timing real tasks rather than asking about them. That produced a triage-first information architecture: the day\'s urgent list leads, the calendar supports it, and admin moved behind a secondary surface. Everything was designed to WCAG 2.1 AA from the first wireframe, since much of the work happens on shared low-brightness screens.',
      outcome: 'Rounds planning dropped from eleven steps to four. Average time-to-schedule fell 41%, and the pattern was adopted by two adjacent product teams.',
      results: [['−41%', 'Time to schedule'], ['11 → 4', 'Steps in daily rounds'], ['AA', 'WCAG 2.1 conformance']]
    },
    {
      slug: 'vellum',
      pull: "The same button existed in nine variations, and every brand tweak cost weeks of manual cleanup.",
      steps: ["Three-tier token architecture: primitive, semantic, component", "Figma Variables mirrored one-to-one in code", "Documentation written before components shipped", "A contribution process so squads could propose instead of fork"], title: 'Vellum', badge: 'Design system',
      tagline: 'A token-driven library spanning web and iOS, adopted by four squads.',
      summary: 'Documentation-first component library with contribution rules that kept drift near zero through two brand refreshes.',
      stack: ['Figma Variables', 'Tokens', 'Documentation', 'Storybook'],
      role: 'Product Designer', timeline: 'Ongoing, 9 months to v1', team: '2 designers, 4 engineers', year: '2022',
      problem: 'Four squads shipped four visual languages. The same button existed in nine variations, and every brand tweak triggered weeks of manual cleanup across platforms.',
      approach: 'I built a three-tier token architecture — primitive, semantic, component — in Figma Variables, mirrored one-to-one in code. Documentation came before components: each pattern shipped with usage rules, states, accessibility notes and a "when not to use this" section. A contribution process gave squads a real path to propose changes instead of forking.',
      outcome: 'Adopted by all four squads within a quarter. Two full brand refreshes shipped by editing tokens alone, with no component rewrites.',
      results: [['4/4', 'Squads adopted'], ['2', 'Brand refreshes, token-only'], ['~0', 'Measured visual drift']]
    },
    {
      slug: 'kestrel',
      pull: "Most travellers do not have exact dates on step one — they have a rough window and a budget.",
      steps: ["Flow reordered around real planning behaviour", "A price landscape across a flexible date range", "Eight moderated usability sessions across two rounds", "Motion specs so the calendar felt loose, not vague"], title: 'Kestrel', badge: 'Mobile app',
      tagline: 'Trip planning built around how people actually plan.',
      summary: 'Rough dates first, prices second, commitment last — removing the fixed-date requirement cut checkout drop-off by a third.',
      stack: ['Figma', 'Usability testing', 'iOS & Android', 'Motion'],
      role: 'Product Designer', timeline: '10 weeks', team: '1 designer, 5 engineers', year: '2024',
      problem: 'Kestrel\'s booking funnel demanded exact dates on step one. Most travellers do not have exact dates on step one — they have a rough window and a budget. Two-thirds abandoned before seeing a single price.',
      approach: 'I reordered the flow around real planning behaviour: a flexible date range, then a price landscape across that range, then commitment. Eight moderated usability sessions across two rounds shaped the calendar interaction, which needed to feel loose without feeling vague.',
      outcome: 'Checkout drop-off fell 33%. Average session length rose because people were exploring rather than bouncing off a required field.',
      results: [['−33%', 'Checkout drop-off'], ['+22%', 'Session length'], ['8', 'Usability sessions run']]
    },
    {
      slug: 'foundry',
      pull: "Setup exposed every configuration option at once, with no defaults and no sense of order.",
      steps: ["Service blueprint mapped with the CS team over two workshops", "A guided checklist with opinionated defaults", "Advanced settings deferred behind a clear promise: change it later", "Interaction specs for every state, including failure"], title: 'Foundry', badge: 'B2B SaaS',
      tagline: 'Enterprise onboarding, from eleven days to under two hours.',
      summary: 'Configuration split into a guided checklist with sane defaults, replacing a manual setup that needed four support calls.',
      stack: ['Figma', 'Service design', 'Workshops', 'Handoff specs'],
      role: 'Lead Product Designer', timeline: '12 weeks', team: '1 designer, 1 PM, 5 engineers', year: '2025',
      problem: 'New enterprise teams took eleven days and an average of four support calls to reach their first deployment. Setup exposed every configuration option at once, with no defaults and no sense of order.',
      approach: 'I mapped the real onboarding service — including the support calls — with the CS team in two workshops. The result was a guided checklist with opinionated defaults, deferred advanced settings, and an explicit "you can change this later" promise at each step. Handoff included interaction specs for every empty, loading and error state.',
      outcome: 'First successful deployment now happens in under two hours, unassisted. Onboarding support calls dropped by 70%.',
      results: [['11d → 2h', 'Time to first deploy'], ['−70%', 'Onboarding support calls'], ['+18%', 'Trial-to-paid conversion']]
    },
    {
      slug: 'lumen',
      pull: "A single missed day zeroed weeks of progress — the mechanic punished the users it needed to keep.",
      steps: ["Four-week diary study with twenty participants", "Streaks replaced with a weekly rhythm view", "Watch face rebuilt around one glanceable ring", "Copy shifted from guilt language to progress language"], title: 'Lumen', badge: 'Wearable',
      tagline: 'Habit tracking for people who quit every other habit tracker.',
      summary: 'Weekly rhythms replaced daily streaks, and a missed day stopped resetting progress — retention rose from 19% to 44%.',
      stack: ['Figma', 'Diary study', 'Data viz', 'watchOS'],
      role: 'Product Designer', timeline: '16 weeks', team: '2 designers, 4 engineers', year: '2024',
      problem: 'Lumen\'s streak mechanic punished exactly the users it needed to keep. A single missed day zeroed weeks of progress, and thirty-day retention sat at 19%.',
      approach: 'A four-week diary study with twenty participants showed people think in weeks, not days. I replaced the streak with a weekly rhythm view: consistency is measured as days-per-week over time, so one missed day is visible but not fatal. The watch face was redesigned around a single glanceable ring rather than three competing metrics.',
      outcome: 'Thirty-day retention more than doubled to 44%, and qualitative feedback shifted from guilt language to progress language.',
      results: [['19% → 44%', 'Thirty-day retention'], ['20', 'Diary study participants'], ['+2.1×', 'Weekly check-ins']]
    }
  ];

  function img(slug) { return 'assets/projects/' + slug + '.jpg'; }

  /* ---------------- theme ---------------- */
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  // dark is the default; only an explicit 'light' choice changes it
  if (stored === 'light') root.setAttribute('data-theme', 'light');
  else root.removeAttribute('data-theme');

  var themeBtn = document.querySelector('[data-theme-toggle]');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var isLight = root.getAttribute('data-theme') === 'light';
      if (isLight) root.removeAttribute('data-theme');
      else root.setAttribute('data-theme', 'light');
      try { localStorage.setItem('theme', isLight ? 'dark' : 'light'); } catch (e) {}
    });
  }

  /* ---------------- nav ---------------- */
  var nav = document.querySelector('.nav');
  function onScroll() {
    if (!nav || document.body.classList.contains('menu-open')) return;
    nav.classList.toggle('is-stuck', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var toggle = document.querySelector('[data-nav-toggle]');
  var menu = document.getElementById('primary-menu');
  if (toggle && menu) {
    var scrollY = 0;

    function openMenu() {
      scrollY = window.scrollY;
      // paint the menu first; pinning the body forces a full-document reflow, and doing
      // that in the same frame stalls the open by however long the page takes to relayout
      document.body.classList.add('menu-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          if (!isOpen()) return;
          // iOS Safari ignores body{overflow:hidden}; pin the body instead
          document.body.style.top = -scrollY + 'px';
          document.body.classList.add('is-pinned');
          var first = menu.querySelector('a');
          if (first) first.focus({ preventScroll: true });
        });
      });
    }

    function closeMenu(refocus) {
      document.body.classList.remove('menu-open', 'is-pinned');
      document.body.style.top = '';
      window.scrollTo(0, scrollY);
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      if (refocus) toggle.focus({ preventScroll: true });
    }

    function isOpen() { return document.body.classList.contains('menu-open'); }

    toggle.addEventListener('click', function () { isOpen() ? closeMenu(true) : openMenu(); });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { if (isOpen()) closeMenu(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) closeMenu(true);
    });

    // keep the menu shut when the layout crosses back to the desktop breakpoint
    var wide = window.matchMedia('(min-width: 1025px)');
    var onWide = function (e) { if (e.matches && isOpen()) closeMenu(false); };
    wide.addEventListener ? wide.addEventListener('change', onWide) : wide.addListener(onWide);
  }

  /* ---------------- project cards ---------------- */
  function cardHTML(p, delay) {
    return '<article class="proj" data-reveal data-delay="' + delay + '">' +
      '<div class="proj-thumb"><span class="proj-badge">' + p.badge + '</span>' +
      '<img src="' + img(p.slug) + '" alt="' + p.title + ' — project thumbnail" loading="lazy" decoding="async"></div>' +
      '<div class="proj-body">' +
        '<h3>' + p.title + '</h3>' +
        '<p>' + p.summary + '</p>' +
        '<ul class="stack">' + p.stack.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul>' +
        '<a class="proj-btn" href="project.html?p=' + p.slug + '">View project <span class="arw">&rarr;</span></a>' +
      '</div></article>';
  }

  document.querySelectorAll('[data-projects]').forEach(function (host) {
    var limit = parseInt(host.dataset.limit || '0', 10);
    var here = new URLSearchParams(location.search).get('p');
    var list = PROJECTS.filter(function (p) { return p.slug !== here; });
    if (limit) list = list.slice(0, limit);
    host.innerHTML = list.map(function (p, i) { return cardHTML(p, i * 60); }).join('');
  });

  /* ---------------- case study page ---------------- */
  var caseTitle = document.querySelector('[data-case="title"]');
  if (caseTitle) {
    var slug = new URLSearchParams(location.search).get('p');
    var p = PROJECTS.filter(function (x) { return x.slug === slug; })[0] || PROJECTS[0];

    function set(key, value) {
      var el = document.querySelector('[data-case="' + key + '"]');
      if (el) el.textContent = value;
    }
    set('title', p.title);
    set('crumb', p.title);
    set('badge', p.badge);
    set('pull', p.pull || p.tagline);
    set('covercap', p.title + ' — ' + p.tagline);
    set('tagline', p.tagline);
    set('role', p.role);
    set('timeline', p.timeline);
    set('team', p.team);
    set('year', p.year);
    set('problem', p.problem);
    set('approach', p.approach);
    set('outcome', p.outcome);

    var cover = document.querySelector('[data-case="cover"]');
    if (cover) { cover.src = img(p.slug); cover.alt = p.title + ' — project cover'; }

    var stepsEl = document.querySelector('[data-case="steps"]');
    if (stepsEl && p.steps) stepsEl.innerHTML = p.steps.map(function (t) { return '<li>' + t + '</li>'; }).join('');

    var pagerEl = document.querySelector('[data-case="pager"]');
    if (pagerEl) {
      var idx = PROJECTS.indexOf(p);
      var prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
      var next = PROJECTS[(idx + 1) % PROJECTS.length];
      pagerEl.innerHTML =
        '<a href="project.html?p=' + prev.slug + '"><span>&larr; Previous</span><b>' + prev.title + '</b></a>' +
        '<a class="next" href="project.html?p=' + next.slug + '"><span>Next &rarr;</span><b>' + next.title + '</b></a>';
    }

    var stackEl = document.querySelector('[data-case="stack"]');
    if (stackEl) stackEl.innerHTML = p.stack.map(function (s) { return '<li>' + s + '</li>'; }).join('');

    var resEl = document.querySelector('[data-case="results"]');
    if (resEl) resEl.innerHTML = p.results.map(function (r) {
      return '<li><b>' + r[0] + '</b><span>' + r[1] + '</span></li>';
    }).join('');

    document.title = p.title + ' — Shawaiz';
  }

  /* ---------------- tools marquee on small screens ---------------- */
  var toolsHost = document.querySelector('.tools');
  if (toolsHost) {
    var mq = window.matchMedia('(max-width: 768px)');
    var original = toolsHost.innerHTML;
    var viewport = null;

    function buildMarquee() {
      if (viewport) return;
      viewport = document.createElement('div');
      viewport.className = 'tools-vp';
      toolsHost.parentNode.insertBefore(viewport, toolsHost);
      viewport.appendChild(toolsHost);
      toolsHost.classList.add('tools--marquee');
      toolsHost.setAttribute('aria-label', 'Tools I work with');
      // duplicate the row so translateX(-50%) loops seamlessly
      toolsHost.innerHTML = original + original;
      toolsHost.querySelectorAll('.tool').forEach(function (el, i, all) {
        if (i >= all.length / 2) el.setAttribute('aria-hidden', 'true');
      });
    }

    function teardownMarquee() {
      if (!viewport) return;
      viewport.parentNode.insertBefore(toolsHost, viewport);
      viewport.remove();
      viewport = null;
      toolsHost.classList.remove('tools--marquee');
      toolsHost.removeAttribute('aria-label');
      toolsHost.innerHTML = original;
    }

    function syncMarquee() { mq.matches ? buildMarquee() : teardownMarquee(); }
    syncMarquee();
    (mq.addEventListener ? mq.addEventListener('change', syncMarquee) : mq.addListener(syncMarquee));
  }

  /* ---------------- reveal + skill bars ---------------- */
  var reveals = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
    document.querySelectorAll('.bar-fill').forEach(function (b) { b.style.width = b.dataset.level + '%'; });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.style.transitionDelay = (parseFloat(el.dataset.delay || 0)) + 'ms';
        el.classList.add('in');
        el.querySelectorAll('.bar-fill').forEach(function (b, i) {
          setTimeout(function () { b.style.width = b.dataset.level + '%'; }, 150 * i);
        });
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- contact form ---------------- */
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    var ok = form.querySelector('.form-ok');
    var rules = {
      fullname: function (v) { return v.trim().length >= 2 || 'Please enter your full name.'; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter a valid email address.'; },
      ptype: function (v) { return v !== '' || 'Choose a project type.'; },
      budget: function (v) { return v !== '' || 'Choose a budget range.'; },
      message: function (v) { return v.trim().length >= 12 || 'A little more detail helps (12+ characters).'; }
    };
    function validate(field) {
      var rule = rules[field.name];
      if (!rule) return true;
      var res = rule(field.value);
      var slot = field.parentElement.querySelector('.err');
      if (slot) slot.textContent = res === true ? '' : res;
      field.setAttribute('aria-invalid', res === true ? 'false' : 'true');
      return res === true;
    }
    form.querySelectorAll('input, select, textarea').forEach(function (f) {
      f.addEventListener('blur', function () { validate(f); });
      f.addEventListener('change', function () { validate(f); });
      f.addEventListener('input', function () {
        if (f.getAttribute('aria-invalid') === 'true') validate(f);
      });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true, first = null;
      form.querySelectorAll('[name]').forEach(function (f) {
        if (!validate(f) && !first) { valid = false; first = f; }
        else if (!validate(f)) valid = false;
      });
      if (!valid) { if (first) first.focus(); return; }
      if (ok) {
        ok.textContent = "Thanks for reaching out — I'll reply within two working days.";
        ok.classList.add('show');
      }
      form.reset();
    });
  }

  /* ---------------- footer year ---------------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
