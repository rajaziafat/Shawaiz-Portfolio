# Shawaiz — Portfolio

A static, dependency-free portfolio site: three pages, one stylesheet, one script.
No build step, no framework, no package manager. Open `index.html` and it runs.

---

## Run it

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 4321
```

Then visit `http://localhost:4321`. A server is only needed for the case-study
pages, which read a `?p=` query string.

---

## Files

```
portfolio/
├── index.html          Home — hero, about, experience, services, tools,
│                       projects, process, testimonials, socials, CTA
├── contact.html        Enquiry form + contact details
├── project.html        Case-study template (renders any project via ?p=slug)
├── styles.css          Design tokens + every component
├── main.js             Theme, nav, project data, case rendering, form, marquee
└── assets/
    ├── portrait.jpg            About photo (original)
    ├── portrait-cutout.png     Hero photo, background removed (alpha)
    └── projects/
        ├── meridian.jpg  arcadia.jpg  vellum.jpg
        ├── kestrel.jpg   foundry.jpg  lumen.jpg
        └── CREDITS.txt   Unsplash sources for the placeholder thumbnails
```

---

## Design system

Everything is driven by custom properties at the top of `styles.css`.
Change a token there and the whole site follows.

### Colour — [Color Hunt palette](https://colorhunt.co/palette/222831393e46ffd369eeeeee)

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--bg` | `#eeeeee` | `#1a1f26` | Page ground |
| `--surface` | `#f7f7f8` | `#222831` | Cards, inputs, tinted sections |
| `--surface-2` | `#e4e6ea` | `#2b323d` | Sunk areas, image placeholders |
| `--ink` | `#222831` | `#eeeeee` | Body text |
| `--ink-2` / `--ink-3` | — | — | Secondary / tertiary text |
| `--amber` | `#ffd369` | `#ffd369` | The accent, at full strength |
| `--accent` | `#7d5a0b` | `#ffd369` | Accent **text and rules** |
| `--cta-bg` / `--cta-fg` | ink / bg | amber / ink | Primary buttons |

`--amber` on `#eeeeee` is roughly 1.5:1 — far below readable — so light mode uses
the darkened `--accent` for anything text-sized, and keeps true amber for fills,
highlights and buttons. Dark mode uses `#ffd369` directly.

### Type

**Nunito** (variable, 300–900) throughout. Weight and letter-spacing separate the
roles, not different families:

| Role | Weight | Tracking |
|---|---|---|
| Headings | 800 | −.025em |
| Body | 400 | normal |
| Eyebrows, badges, labels | 800 | +.14em, uppercase |
| Large display numbers | 800 | −.03em, tabular figures |

Scale: `--t--1` through `--t-4`, all `clamp()`-based — no font-size media queries.

### Spacing

An eight-step scale, `--sp-1` (.5rem) to `--sp-8` (6rem), plus `--section-y`
for vertical section rhythm and `--gutter` for page margins. Nothing in the
stylesheet uses an off-scale value.

---

## Theming

Three states are handled explicitly:

1. `:root` — the complete light palette
2. `@media (prefers-color-scheme: dark)` guarded by `:root:not([data-theme="light"])`
3. `:root[data-theme="dark"]` — so the manual toggle wins in both directions

The toggle in the nav writes to `localStorage` and is read before first paint.
Never define a colour only inside a media or `[data-theme]` block — the default
"system" setting stamps no attribute, so such a colour would never apply.

---

## Editing content

### Projects

All six live in the `PROJECTS` array at the top of `main.js`. Cards on the home
page and the entire case-study page are generated from it. Each entry needs:

```js
{
  slug, title, badge, tagline, summary,
  stack: [],                 // chips
  role, timeline, team, year,
  problem, approach, outcome, // case-study prose
  pull,                       // the pull-quote
  steps: [],                  // method list
  results: [['+34%', 'Weekly active use'], ...]   // three metrics
}
```

Adding an entry adds a card, a case-study page at `project.html?p=slug`, and a
stop in the prev/next pager. Its thumbnail is looked up at
`assets/projects/<slug>.jpg`.

### Images

| File | Notes |
|---|---|
| `assets/portrait.jpg` | About photo. Any portrait crop; CSS handles framing. |
| `assets/portrait-cutout.png` | Hero photo, **transparent background required**. |
| `assets/projects/*.jpg` | ~1600×1040, under 400 KB, named after the slug. |

The cutout was produced on-device with macOS Vision
(`VNGenerateForegroundInstanceMaskRequest`). To redo it from a new photo, the
Swift source is in the session notes — or use any background-removal tool and
save as PNG with alpha.

### Contact form

`contact.html` validates Full name, Email, Project type, Budget and Message
client-side, then shows a confirmation. **It does not send anything.** To make
it live, point the `<form>` at an endpoint (Formspree, Netlify Forms, your own
API) and remove the `e.preventDefault()` branch in `main.js`.

---

## Responsive

Breakpoints: **1200 / 960 / 900 / 820 / 768 / 720 / 640 / 520 / 480 / 400 / 340**,
plus a landscape rule for short screens. Notes worth keeping in mind:

- Every grid track uses `minmax(0, …)`. A bare `fr` has a `min-content` floor and
  will overflow — this bit the hero once already.
- Viewport heights use `svh`, not `vh`, so mobile browser chrome is accounted for.
- Form inputs are 16px below 480px, or iOS Safari zooms on focus.
- Below 768px the Tools row becomes an auto-scrolling marquee (paused on hover
  and focus, swipeable under `prefers-reduced-motion`).

---

## Accessibility

- Skip link, visible focus rings, `aria-current` on the active nav item
- Colour contrast meets WCAG AA in both themes
- `prefers-reduced-motion` disables reveals, the marquee and all decoration
- Inline form errors announced via `role="alert"`, focus moves to the first
  invalid field
- The marquee's duplicated items are `aria-hidden`

---

## Before going live

- [ ] Replace the placeholder copy — Northline Studio, Arcadia Health, Vellum,
      the testimonials, and every stat are invented
- [ ] Swap the Unsplash thumbnails for real project work (see `CREDITS.txt`)
- [ ] Update `hello@shawaiz.design`, `+92 300 123 4567`, and the social URLs
- [ ] Wire the contact form to a real endpoint
- [ ] Convert `portrait-cutout.png` (1.1 MB) to WebP with a PNG fallback
- [ ] Add an `og:image` for link previews

---

## Licence

Code: yours to use. Placeholder photography: [Unsplash License](https://unsplash.com/license).
