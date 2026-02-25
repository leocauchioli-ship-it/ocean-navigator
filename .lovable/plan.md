

## Plan: Navbar Logo Swap & Early Glass Trigger

### Current Behavior
- `pastHero` triggers at `scrollY > 85vh` — only after leaving the Hero entirely.
- Logo: `logoNeg` (white/light) on Hero, `logoPos` (dark/colored) after scroll. This is **correct** direction already.
- Glass effect only appears after passing the Hero.

### Changes Required

**1. Earlier glass trigger** — Change the scroll threshold from `window.innerHeight * 0.85` to a small value like `20px` so any minimal scroll activates the glass navbar immediately, while still on the Hero.

**2. Logo swap logic** — Currently `logoNeg` is used on dark (Hero) and `logoPos` on light (scrolled). The user confirms: light logo on dark background, dark logo on light background. The current logic is already correct (`pastHero ? logoPos : logoNeg`). No change needed here.

**3. Smooth logo transition** — The `img` tag already has `transition-all duration-300`. To make the swap smoother, we can add opacity crossfade by rendering both logos and toggling their opacity, or simply keep the current instant swap which with `duration-500` on the nav background already feels smooth enough. A simple approach: add `duration-500` to the img transition to match the navbar transition timing.

### Technical Details

**File: `src/components/Navbar.tsx`**

- **Line 20-21**: Change threshold from `window.innerHeight * 0.85` to `20` (pixels). This means any small scroll triggers the glass effect immediately.
  ```tsx
  const onScroll = () => {
    setPastHero(window.scrollY > 20);
  };
  ```

- **Line 41**: Update transition duration on the logo image to match navbar transition:
  ```tsx
  <img src={pastHero ? logoPos : logoNeg} alt="KA8" className="h-9 transition-all duration-500" />
  ```

This keeps the logo swap direction as-is (already correct) and makes the glass effect appear with minimal scroll rather than waiting to leave the Hero section.

