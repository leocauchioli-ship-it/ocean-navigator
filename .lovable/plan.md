

## Plan: Mobile Optimization

After reviewing all components, here are the issues to fix:

### 1. Solution.tsx - Table text overflow
The before/after table uses `grid-cols-2` with no responsive text sizing. Long strings like *"Foi aqui, nesse horário, com esse consumo"* will cramp on 375px screens.
- Reduce cell padding on mobile (`p-3 md:p-4`)
- Smaller font on mobile (`text-xs md:text-sm`)

### 2. Metrics.tsx - Large numbers overflow
`text-5xl` metric numbers in a 2-col grid on mobile can overflow containers.
- Reduce to `text-3xl md:text-5xl`
- Reduce card padding: `p-5 md:p-8`

### 3. Hero.tsx - Title and button sizing
Title at `text-4xl` is fine but buttons could benefit from full-width stacking on mobile.
- Make CTA buttons full-width on mobile: `w-full sm:w-auto`
- Reduce hero min-height on mobile: `min-h-[75vh] md:min-h-[88vh]`

### 4. AISensor.tsx - Differentials grid
`grid-cols-2` for the 4 differentials is tight on small screens.
- Change to `grid-cols-1 sm:grid-cols-2`

### 5. FAQ.tsx - Long answer truncation
`maxHeight: 300px` is too small for the GSM vs Satellite answer (very long text).
- Increase to `500px` or use auto-height with CSS transition on a wrapper

### 6. ContactCTA.tsx - Button stacking
Buttons should stack on mobile.
- Add `w-full sm:w-auto` and `flex-col sm:flex-row` to button container

### 7. Footer.tsx - Contact info wrapping
The bottom copyright bar text can overflow.
- Add `text-center md:text-left` alignment

### 8. General padding consistency
Ensure all sections use consistent mobile padding via `px-4` (already in `section-padding` but some inner containers may need it).

---

**Files modified**: Hero.tsx, Solution.tsx, Metrics.tsx, AISensor.tsx, FAQ.tsx, ContactCTA.tsx, Footer.tsx (all small targeted edits)

