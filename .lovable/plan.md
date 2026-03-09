

## Plan: Visual Adjustments KA8

### 1. Copy uploaded boat image to assets
Copy `user-uploads://WhatsApp_Image_2026-03-04_at_10.35.01_1.jpeg` to `src/assets/embarcacao-instalacao.jpg` for use in HowItWorks step 1.

### 2. HowItWorks.tsx - Remove white frames + new step 1 image
- Replace `imgStep1` import with the new boat illustration
- Remove `bg-white p-4` from all step images (line 68), keeping just `rounded-2xl overflow-hidden` with transparent background
- Change `object-contain` to `object-cover` for proper fill

### 3. Hero.tsx - Video-ready with overlay
- Add a darker gradient overlay on top of the background image for better contrast and video-readiness
- Add a comment documenting how to swap the poster for a `<video>` element in the future

### 4. AISensor.tsx - Remove white frame from sensor image
- Remove the box-shadow from the image container (line 99)
- Ensure transparent background, no border, clean rounded corners

### 5. WhyKA8.tsx - Translucent background + copy update
- Change the "Satélite, não celular" card title to **"Operação projetada para disponibilidade contínua."**
- Change its description to **"Monitoramento com alta resiliência e redundância (99,9% de uptime)."**
- Add a background image with translucent overlay to the section (using the existing `fundo-escuro.png` or similar dark asset with rgba overlay)

### 6. FAQ.tsx - Icons without white background
- The FAQ category icons currently have `background: rgba(11,164,174,0.08)` with a white `rounded-full p-1` — remove the white-looking background styling so icons sit cleanly without a visible "frame"
- Keep the circular shape but make background fully transparent or very subtle

### 7. Features.tsx - Clean image containers
- Ensure the feature tab images have no white border/frame, just `rounded-2xl overflow-hidden`

### 8. Problem.tsx / UseCases.tsx - Card cleanup
- The `card-ka8` class already has white background + border + shadow on hover. These are content cards (not image cards), so they stay as-is. No changes needed.

---

**Files modified**: `Hero.tsx`, `HowItWorks.tsx`, `AISensor.tsx`, `WhyKA8.tsx`, `FAQ.tsx`, `Features.tsx` (+ copy 1 image asset)

