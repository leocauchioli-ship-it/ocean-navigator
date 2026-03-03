

## Plan: Logo swap on scroll (tied to glass effect)

Currently the logo and text colors use `pastHero` (85vh threshold) while the glass background uses `scrolled` (20px threshold). The user wants the logo to swap to dark as soon as the navbar turns white/glass.

### Change in `src/components/Navbar.tsx`

Replace all `pastHero` references with `scrolled` for logo, text colors, and button variants. This ties everything — logo, link colors, button styles, hamburger color — to the 20px scroll threshold, matching the glass background trigger.

The `pastHero` state and its scroll listener line can be removed entirely since it will no longer be used.

**Lines affected:**
- Line 22: Remove `setPastHero` line
- Line 16: Remove `pastHero` state
- Line 42: `pastHero` → `scrolled` (logo)
- Lines 52, 58, 61, 68: `pastHero` → `scrolled` (text/button colors)

