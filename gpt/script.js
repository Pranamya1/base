/* ==========================================================================
   Kalambe Devs — International Software & Web Development Studio
   Pure CSS3 Design Token System & Responsive Layout Architecture
   ========================================================================== */

:root {
  /* Core Color Tokens */
  --bg-primary: #030406;
  --bg-alternate: #05070B;
  --bg-elevated: #080A0F;
  --bg-surface: #0C0F17;
  --bg-surface-hover: #121722;

  /* Text Tokens */
  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;

  /* Accent Tokens (Restrained Cyan / Electric Blue) */
  --accent-primary: #22D3EE;
  --accent-secondary: #79EDFF;
  --accent-subtle: rgba(34, 211, 238, 0.12);
  --accent-border: rgba(34, 211, 238, 0.35);

  /* Semantic Status Tokens */
  --status-success: #10B981;
  --status-warning: #F59E0B;

  /* Border Tokens */
  --border-subtle: rgba(255, 255, 255, 0.07);
  --border-default: rgba(255, 255, 255, 0.09);
  --border-strong: rgba(255, 255, 255, 0.16);

  /* Typography Tokens */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Layout & Spacing Tokens */
  --container-max: 1200px;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --header-height: 64px;
  --transition-fast: 150ms cubic-bezier(0.22, 1, 0.36, 1);
}

/* ==========================================================================
   1. Base Reset & Typography
   ========================================================================== */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0.005em;
  scroll-behavior: smooth;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

::selection {
  background-color: rgba(34, 211, 238, 0.2);
  color: var(--accent-secondary);
}

h1,
h2,
h3,
h4,
h5,
.font-display {
  font-family: var(--font-display);
  color: var(--text-primary);
  letter-spacing: -0.025em;
  line-height: 1.18;
  text-wrap: balance;
}

.font-mono-num {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-fast);
}

ul,
ol {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: none;
  border: none;
}

button {
  cursor: pointer;
}

/* Focus Accessibility */
:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

/* Skip Link for Keyboard Users */
.skip-link {
  position: fixed;
  top: -100px;
  left: 16px;
  z-index: 100;
  background-color: var(--accent-primary);
  color: var(--bg-primary);
  font-weight: 600;
  font-size: 0.75rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  transition: top var(--transition-fast);
}

.skip-link:focus {
  top: 12px;
}

/* Utility Helpers */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

@media (min-width: 640px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.hidden {
  display: none !important;
}

.text-accent {
  color: var(--accent-primary);
}

.text-secondary {
  color: var(--text-secondary);
}

.text-muted {
  color: var(--text-muted);
}

.text-primary {
  color: var(--text-primary);
}

.dot-sep {
  color: rgba(255, 255, 255, 0.2);
  margin: 0 0.35rem;
}

/* ==========================================================================
   2. Buttons
   ========================================================================== */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  white-space: nowrap;
  flex-shrink: 0;
  user-select: none;
  text-decoration: none;
}

.btn-sm {
  min-height: 40px;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
}

.btn-md {
  min-height: 44px;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
}

.btn-lg {
  min-height: 48px;
  padding: 0.75rem 1.5rem;
  font-size: 0.9375rem;
}

.btn-primary {
  background-color: var(--accent-primary);
  color: var(--bg-primary);
  font-weight: 600;
}

.btn-primary:hover {
  background-color: var(--accent-secondary);
}

.btn-secondary {
  background-color: var(--bg-surface);
  color: var(--text-primary);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.btn-secondary:hover {
  background-color: var(--bg-surface-hover);
  border-color: rgba(255, 255, 255, 0.24);
}

.btn-ghost {
  background-color: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-default);
}

.btn-ghost:hover {
  color: var(--text-primary);
  border-color: var(--accent-border);
}

.btn-full {
  width: 100%;
}

.icon-sm {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.icon-md {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* ==========================================================================
   3. Sticky Navigation
   ========================================================================== */

.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  height: var(--header-height);
  background-color: rgba(3, 4, 6, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
  transition: background-color var(--transition-fast), border-color var(--transition-fast);
}

.site-header.scrolled {
  background-color: rgba(3, 4, 6, 0.96);
  border-bottom-color: var(--border-default);
}

.navbar-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand-logo {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  white-space: nowrap;
}

.brand-logo:hover {
  color: var(--accent-secondary);
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 1.75rem;
}

.desktop-nav a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.25rem 0;
  white-space: nowrap;
}

.desktop-nav a:hover {
  color: var(--text-primary);
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-color: rgba(34, 211, 238, 0.6);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.nav-cta-desktop {
  display: none;
}

.mobile-menu-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  color: var(--text-primary);
}

.mobile-menu-toggle:hover {
  background-color: rgba(255, 255, 255, 0.06);
}

.mobile-nav-drawer {
  background-color: var(--bg-elevated);
  border-bottom: 1px solid var(--border-strong);
  padding: 0.75rem 1.25rem 1.5rem;
}

.mobile-nav-list {
  display: flex;
  flex-direction: column;
}

.mobile-nav-list li {
  border-bottom: 1px solid var(--border-subtle);
}

.mobile-nav-list a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 48px;
  padding: 0.75rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
}

.mobile-nav-list a:hover {
  color: var(--accent-primary);
}

.mobile-nav-footer {
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

@media (min-width: 640px) {
  .nav-cta-desktop {
    display: inline-flex;
  }
}

@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }
  .mobile-menu-toggle {
    display: none;
  }
  .mobile-nav-drawer {
    display: none !important;
  }
}

/* ==========================================================================
   4. Section Architecture
   ========================================================================== */

.section {
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;
  border-top: 1px solid var(--border-subtle);
}

.section-alt {
  background-color: var(--bg-alternate);
}

@media (min-width: 640px) {
  .section {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

@media (min-width: 1024px) {
  .section {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }
}

.section-header {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .section-header {
    margin-bottom: 4rem;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
}

.section-header-text {
  max-width: 42rem;
}

.section-kicker {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--accent-primary);
  margin-bottom: 0.75rem;
  letter-spacing: 0.02em;
}

.section-title {
  font-size: clamp(1.5rem, 2.8vw, 2.125rem);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.2;
}

.section-description {
  margin-top: 1rem;
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

/* Segmented Tab Controls */
.segmented-tabs {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem;
  border-radius: var(--radius-md);
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-default);
}

.segmented-tabs.bg-darker {
  background-color: var(--bg-primary);
}

.tab-btn {
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  border: 1px solid transparent;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.tab-btn:hover {
  color: var(--text-primary);
}

.tab-btn.active {
  background-color: var(--bg-surface);
  color: var(--accent-primary);
  border-color: rgba(255, 255, 255, 0.1);
}

/* ==========================================================================
   5. Hero Section
   ========================================================================== */

.hero {
  position: relative;
  padding-top: 3rem;
  padding-bottom: 5rem;
  overflow: hidden;
}

@media (min-width: 640px) {
  .hero {
    padding-top: 5rem;
    padding-bottom: 7rem;
  }
}

@media (min-width: 1024px) {
  .hero {
    padding-top: 6rem;
    padding-bottom: 8rem;
  }
}

.hero-glow {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 820px;
  height: 340px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.055) 0%, rgba(3, 4, 6, 0) 70%);
  filter: blur(60px);
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 2.5rem;
  }
  .hero-left {
    grid-column: span 7 / span 7;
  }
  .hero-right {
    grid-column: span 5 / span 5;
  }
}

.hero-kicker {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: clamp(2rem, 4.2vw, 3.25rem);
  font-weight: 600;
  line-height: 1.12;
  letter-spacing: -0.03em;
  max-width: 42rem;
}

.hero-subtitle {
  margin-top: 1.5rem;
  font-size: clamp(1rem, 1.4vw, 1.125rem);
  color: var(--text-secondary);
  line-height: 1.65;
  max-width: 36rem;
}

.hero-cta-group {
  margin-top: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

@media (min-width: 640px) {
  .hero-cta-group {
    flex-direction: row;
    align-items: center;
  }
}

.hero-pillars {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .hero-pillars {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.hero-pillar-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-primary);
}

.hero-pillar-desc {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

/* Craftsmanship Inspector Card */
.inspector-card {
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
}

@media (min-width: 640px) {
  .inspector-card {
    padding: 1.5rem;
  }
}

.inspector-top {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-subtle);
}

@media (min-width: 640px) {
  .inspector-top {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.inspector-viewport {
  margin-top: 1rem;
  position: relative;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  background-color: var(--bg-primary);
  overflow: hidden;
  min-height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.inspector-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.32;
}

.inspector-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #030406 10%, rgba(3, 4, 6, 0.78) 60%, rgba(3, 4, 6, 0.45) 100%);
}

.inspector-overlay {
  position: relative;
  z-index: 2;
  padding: 1.125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 0.875rem;
}

.lens-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.625rem;
  border-bottom: 1px solid var(--border-default);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-primary);
}

.lens-step-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.lens-step-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-sm);
  background-color: rgba(8, 10, 15, 0.92);
  border: 1px solid var(--border-subtle);
}

.lens-step-item.highlight {
  border-color: var(--accent-border);
}

.lens-responsive-grid {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 0.625rem;
}

.lens-device-box {
  background-color: rgba(8, 10, 15, 0.92);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
}

.lens-device-box.highlight {
  border-color: var(--accent-border);
}

.wireframe-bar {
  height: 8px;
  width: 75%;
  background-color: rgba(255, 255, 255, 0.16);
  border-radius: 2px;
}

.wireframe-bar.cyan {
  width: 85%;
  background-color: rgba(34, 211, 238, 0.4);
}

.wireframe-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.375rem;
  margin-top: 0.375rem;
}

.wireframe-cell {
  height: 32px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
  border-radius: 2px;
}

.inspector-footer {
  padding-top: 0.625rem;
  border-top: 1px solid var(--border-default);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.6875rem;
  color: var(--text-secondary);
}

.inspector-bottom-bar {
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
}

/* ==========================================================================
   6. International Trust & Market Alignment Section
   ========================================================================== */

.trust-top-grid {
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--border-subtle);
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .trust-top-grid {
    grid-template-columns: 5fr 7fr;
  }
}

.market-card {
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
}

.market-tabs-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.375rem;
  padding: 0.25rem;
  border-radius: var(--radius-md);
  background-color: var(--bg-primary);
  border: 1px solid var(--border-subtle);
}

@media (min-width: 640px) {
  .market-tabs-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.market-details-grid {
  margin-top: 1rem;
  padding-top: 0.875rem;
  border-top: 1px solid var(--border-subtle);
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .market-details-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.capabilities-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.25rem 2rem;
}

@media (min-width: 640px) {
  .capabilities-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .capabilities-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.capability-item {
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}

.capability-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 0.625rem;
}

/* ==========================================================================
   7. Services Grid & Cards
   ========================================================================== */

.cards-grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .cards-grid-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .cards-grid-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.service-card {
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color var(--transition-fast);
}

.service-card:hover {
  border-color: var(--border-strong);
}

.card-meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-secondary);
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-subtle);
}

.service-card-title {
  margin-top: 1.25rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
}

.service-card-desc {
  margin-top: 0.625rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

.service-subblock {
  margin-top: 1.125rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}

.bullet-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.625rem;
}

.bullet-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

.bullet-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--accent-primary);
  margin-top: 0.45rem;
  flex-shrink: 0;
}

.service-card-footer {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-default);
}

.service-action-btn {
  width: 100%;
  min-height: 40px;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  background-color: var(--bg-surface);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all var(--transition-fast);
}

.service-action-btn:hover {
  border-color: var(--accent-border);
  color: var(--accent-secondary);
}

/* ==========================================================================
   8. Why Kalambe Devs (Principles Grid)
   ========================================================================== */

.cards-grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .cards-grid-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.principle-card {
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.comparison-pair {
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  font-size: 0.75rem;
}

@media (min-width: 640px) {
  .comparison-pair {
    grid-template-columns: 1fr 1fr;
  }
}

.comparison-box {
  padding: 0.75rem;
  border-radius: var(--radius-md);
  background-color: var(--bg-primary);
  border: 1px solid var(--border-subtle);
}

.comparison-box.studio {
  border-color: rgba(34, 211, 238, 0.22);
}

/* ==========================================================================
   9. Process Section
   ========================================================================== */

.process-grid-4 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .process-grid-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .process-grid-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.process-step-card {
  text-align: left;
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all var(--transition-fast);
}

.process-step-card:hover {
  border-color: var(--border-strong);
}

.process-step-card.active {
  background-color: var(--bg-surface);
  border-color: rgba(34, 211, 238, 0.6);
}

.process-detail-panel {
  margin-top: 2rem;
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
}

@media (min-width: 640px) {
  .process-detail-panel {
    padding: 2rem;
  }
}

.process-detail-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .process-detail-grid {
    grid-template-columns: 5fr 7fr;
  }
  .process-detail-right {
    padding-left: 1.5rem;
    border-left: 1px solid var(--border-subtle);
  }
}

.deliverable-row {
  padding: 0.875rem;
  border-radius: var(--radius-md);
  background-color: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

/* ==========================================================================
   10. Selected Work & Case Study Architecture
   ========================================================================== */

.project-showcase-card {
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.project-card-grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
  .project-card-grid {
    grid-template-columns: 7fr 5fr;
  }
}

.project-preview-col {
  background-color: var(--bg-primary);
  padding: 1.25rem;
  border-bottom: 1px solid var(--border-default);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 640px) {
  .project-preview-col {
    padding: 1.75rem;
  }
}

@media (min-width: 1024px) {
  .project-preview-col {
    border-bottom: none;
    border-right: 1px solid var(--border-default);
  }
}

.project-frame {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: var(--bg-elevated);
  aspect-ratio: 16 / 10;
}

.project-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-frame-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 0.875rem 0.75rem;
  background: linear-gradient(to top, rgba(3, 4, 6, 0.88), transparent);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
}

.project-info-col {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 640px) {
  .project-info-col {
    padding: 2rem;
  }
}

.case-study-box {
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
}

@media (min-width: 640px) {
  .case-study-box {
    padding: 2.25rem;
  }
}

.case-chapter-grid {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .case-chapter-grid {
    grid-template-columns: 7fr 5fr;
  }
}

.outcome-banner {
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: var(--radius-md);
  background-color: var(--bg-primary);
  border: 1px solid rgba(34, 211, 238, 0.25);
}

/* Modal Overlay */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(3, 4, 6, 0.92);
  backdrop-filter: blur(12px);
  overflow-y: auto;
  padding: 1rem;
}

@media (min-width: 640px) {
  .modal-backdrop {
    padding: 2rem;
  }
}

.modal-container {
  max-width: 1100px;
  margin: 0 auto;
}

.modal-sticky-bar {
  position: sticky;
  top: 0.5rem;
  z-index: 10;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(12, 15, 23, 0.96);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-lg);
  padding: 0.75rem 1.25rem;
}

/* ==========================================================================
   11. Pricing Section
   ========================================================================== */

.pricing-card {
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color var(--transition-fast);
}

.pricing-card:hover {
  border-color: var(--border-strong);
}

.price-figure {
  font-family: var(--font-mono);
  font-size: clamp(1.5rem, 2.4vw, 1.875rem);
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

/* ==========================================================================
   12. FAQ Accordion
   ========================================================================== */

.faq-container {
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
}

.faq-item {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--border-subtle);
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-trigger {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  text-align: left;
}

.faq-question-title {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
  transition: color var(--transition-fast);
}

.faq-trigger:hover .faq-question-title {
  color: var(--accent-secondary);
}

.faq-icon-box {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-sm);
  background-color: rgba(255, 255, 255, 0.04);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.faq-answer {
  margin-top: 1rem;
  padding-left: 2rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

/* ==========================================================================
   13. About & International Contact Form
   ========================================================================== */

.about-contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .about-contact-grid {
    grid-template-columns: 5fr 7fr;
  }
  .about-grid-reverse {
    grid-template-columns: 7fr 5fr;
  }
}

.form-card {
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
}

@media (min-width: 640px) {
  .form-card {
    padding: 2rem;
  }
}

.form-row-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

@media (min-width: 640px) {
  .form-row-2 {
    grid-template-columns: 1fr 1fr;
  }
}

.form-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  min-height: 44px;
  border-radius: var(--radius-md);
  background-color: var(--bg-primary);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  color: var(--text-primary);
  transition: border-color var(--transition-fast);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--text-muted);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
}

.form-select option {
  background-color: var(--bg-elevated);
  color: var(--text-primary);
}

.form-error {
  margin-top: 0.375rem;
  font-size: 0.75rem;
  color: var(--status-warning);
}

/* ==========================================================================
   14. Footer
   ========================================================================== */

.site-footer {
  border-top: 1px solid var(--border-default);
  background-color: var(--bg-primary);
  color: var(--text-secondary);
  padding: 4rem 0 3rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid var(--border-subtle);
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: 4fr 3fr 2fr 3fr;
  }
}

.footer-heading {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  font-size: 0.75rem;
}

.footer-links a:hover {
  color: var(--text-primary);
}

.footer-bottom {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.75rem;
  color: var(--text-muted);
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

/* Code Export / HTML+CSS Viewer Block */
.code-viewer-pre {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 1rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-secondary);
  overflow-x: auto;
  max-height: 420px;
  white-space: pre;
  line-height: 1.55;
}

/* Respect Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
