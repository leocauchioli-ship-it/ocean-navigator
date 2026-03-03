

## Plan: KA8 Site Final Adjustments (Feedback 27/02/2026)

This is a large batch of content, copy, image, and structural changes across the entire site. Here is the consolidated plan organized by task.

---

### Task 1: Copy Assets to Project

Copy all 10 uploaded images into `src/assets/`:
- `device-cameras.png`
- `device-rastreador-satelite-solar.png`
- `device-sensor-combustivel.png`
- `faq-contratos.png`
- `faq-devices.png`
- `faq-suporte.png`
- `integracao-sensores.png`
- `painel-unificado.png`
- `rastreador-satelite.png`
- `sensor-combustivel.png`

---

### Task 2: Content/Copy Fixes (across multiple files)

**Problem.tsx:**
- Title: "A realidade de quem opera no mar" → "A realidade de quem opera no ambiente aquatico"
- Replace "capitao" → "tripulacao": "Voce depende da versao do capitao" → "Voce depende exclusivamente do relato de quem esta a bordo"

**Metrics.tsx:**
- Remove "100% Satelital. Sem GSM." metric → Replace with "99,9%" / "Alta disponibilidade" / "Comunicacao satelital com redundancia, garantindo continuidade operacional"

**Features.tsx:**
- Line 48: "sem precisar ligar para o capitao" → "sem precisar ligar para quem esta a bordo"

**Hero.tsx:**
- Badge "Cobertura Satelital 24/7" stays (no "100%" claim)

**Footer.tsx:**
- "Cobertura Satelital Global" badge stays (no "100%")
- Remove "Segunda a sexta, das 8h as 18h"
- Change phone to "+55 (15) 99798-7632"
- Add "WhatsApp" label to phone

**WhyKA8.tsx:**
- "alto-mar, rios, canais e areas remotas" → "hidrovias, alto-mar e areas remotas"

**FAQ.tsx:**
- Remove "Qual o periodo dos planos?" question
- "Preciso de internet no local?" → "Preciso de internet para o rastreamento?" (keep answer)
- Update GSM vs Satellite answer with new longer text from client
- "A KA8 suporta quantas embarcacoes ao mesmo tempo?" → "A KA8 possui limitacoes para o tamanho da frota ou complexidade da operacao?" + new answer
- Simplify "alto-mar, rios, canais, hidrovias e areas remotas" → "hidrovias, alto-mar e areas remotas"
- Add FAQ category illustrations (faq-contratos, faq-devices, faq-suporte) as small icons next to category titles

**AISensor.tsx:**
- Title: "Sensor de Combustivel com IA" → "Sensor de Combustivel Omnicomm com Alta Precisao"
- Update subtitle and body text with new technical copy (capacitive technology, <1% margin)
- Replace "multiplos tanques" → "multiplos ativos" in differentials
- Update differentials bullets to match new specs
- Replace Unsplash image with `sensor-combustivel.png`
- Update Omnicom → Omnicomm badge text

**HowItWorks.tsx:**
- Step 01 image: replace Unsplash with `device-rastreador-satelite-solar.png` (imported)
- Step 02 image: replace Unsplash with `rastreador-satelite.png`
- Step 03 image: replace Unsplash with `painel-unificado.png`

**Comparison.tsx (optional but recommended):**
- Keep current SVG infographic (no `com-e-sem_a_KA8.png` was uploaded)

---

### Task 3: Create New "Sobre a KA8" Section

Create `src/components/AboutKA8.tsx` with:
- Section id="quem-somos" (replaces WhyKA8's id or coexists)
- Two cards side-by-side: "Quem Somos" and "Nosso Proposito"
- Light background, teal left-border accent on cards
- Content from client's brief
- Responsive: 2-col desktop, stacked mobile

---

### Task 4: Update Page Structure

**Index.tsx:**
- Add `AboutKA8` component import
- Insert it between `UseCases` and `WhyKA8` (or replace WhyKA8's `id` and keep both sections)
- Move `id="quem-somos"` to the new AboutKA8 section

**WhyKA8.tsx:**
- Remove `id="quem-somos"` (moved to AboutKA8)
- Update copy to be inclusive ("mar" → "ambiente aquatico" where relevant)

**Navbar.tsx:**
- No changes needed (logo logic and scroll behavior already correct from previous edits)

---

### Task 5: ContactCTA.tsx

- "operacao maritima" → "operacao" or "operacao maritima e fluvial"

---

### Summary of Files Modified

| File | Changes |
|---|---|
| `src/components/Problem.tsx` | Title + "capitao" fix |
| `src/components/Metrics.tsx` | Remove "100% Satelital" |
| `src/components/Features.tsx` | "capitao" fix |
| `src/components/Footer.tsx` | Phone, WhatsApp, remove hours |
| `src/components/WhyKA8.tsx` | Simplify environments, remove id |
| `src/components/FAQ.tsx` | 4 question changes + category icons |
| `src/components/AISensor.tsx` | Full rewrite of copy + image |
| `src/components/HowItWorks.tsx` | 3 images replaced |
| `src/components/ContactCTA.tsx` | Inclusive terminology |
| `src/components/Hero.tsx` | No changes needed |
| `src/components/AboutKA8.tsx` | **NEW** - Sobre a KA8 section |
| `src/pages/Index.tsx` | Add AboutKA8 import |

10 images copied to `src/assets/`.

