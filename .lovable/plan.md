

## Plan: Smooth Scroll + Center Mobile Buttons

### 1. Global smooth scroll via CSS
Add `scroll-behavior: smooth` to `html` in `src/index.css` inside the `@layer base` block. This makes all anchor `href="#section"` links scroll smoothly without any JS changes.

### 2. Center mobile nav buttons
In `src/components/Navbar.tsx`, add `items-center` to the mobile menu's flex-col container (line 76) so the "Fale Conosco" and "Solicitar Demo" buttons are centered. Also add `justify-center` to the btn classes for consistency.

### 3. Center Hero mobile buttons
In `src/components/Hero.tsx`, the button container already has `items-stretch` on mobile which makes them full-width — this is fine and effectively centered.

**Files modified**: `src/index.css` (1 line), `src/components/Navbar.tsx` (minor class additions)

