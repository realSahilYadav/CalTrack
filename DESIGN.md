# Design System Document: High-Tech Vitality

## 1. Overview & Creative North Star: "The Obsidian Lab"
This design system moves away from the "friendly fitness" tropes of soft pastels and rounded icons. Instead, we embrace **The Obsidian Lab**—a creative North Star that treats the user’s health data with the reverence of a high-end medical terminal, softened by the elegance of editorial dark-mode aesthetics. 

The system breaks the "template" look by favoring **intentional asymmetry** and **tonal depth**. Rather than a rigid grid of boxes, we use overlapping glass layers and dramatic shifts in typography scale to create a "Living Dashboard" feel. It is high-tech, medical-grade, and unapologetically premium.

---

## 2. Colors: The Luminescent Spectrum
The palette is rooted in a deep charcoal foundation to minimize eye strain and maximize the "pop" of data indicators.

### Surface Hierarchy & Nesting
We do not use flat backgrounds. Depth is achieved through "Tonal Stacking."
- **Base Layer:** `surface` (#131313) is the infinite void.
- **Sectioning:** Use `surface_container_low` (#1C1B1B) for large content areas.
- **Focus Elements:** Use `surface_container_high` (#2A2A2A) for interactive cards.
- **Nesting:** An inner data point should sit on `surface_container_highest` (#353534) to create a natural, physical "lift."

### The "No-Line" & "Glass" Rules
*   **The No-Line Rule:** Explicitly prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts or subtle tonal transitions.
*   **The Glass & Gradient Rule:** Use semi-transparent versions of `surface_variant` with a 20px–40px backdrop blur for floating navigation or top-level alerts. 
*   **Signature Textures:** For high-value actions (e.g., "Goal Reached"), use a linear gradient from `primary_fixed_dim` (#00E639) to `primary_container` (#00FF41) at a 45-degree angle.

| Role | Token | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Vitality (Progress)** | `primary_container` | #00FF41 | Positive health trends, step counts. |
| **Hydration** | `secondary_fixed` | #00FBFB | Water tracking, electrolyte balance. |
| **Energy/Alert** | `tertiary_fixed_dim` | #FFB59C | Calorie intake, hunger alerts, warnings. |
| **Background** | `surface` | #131313 | The primary canvas. |

---

## 3. Typography: The Editorial Data-Scale
We use **Inter** for its mathematical precision and readability at small scales. The hierarchy is designed to highlight numbers over labels.

*   **Display (Data Focus):** `display-lg` (3.5rem) is reserved for the primary daily metric (e.g., 2,400 kcal). Use tight letter-spacing (-0.02em) for a high-tech feel.
*   **Headline (Context):** `headline-md` (1.75rem) defines clear sections without needing dividers.
*   **Title (Information):** `title-md` (1.125rem) uses Medium weight for card titles to ensure authority.
*   **Labels (The "Metadata"):** `label-sm` (0.6875rem) should always be in All-Caps with +0.05em letter-spacing when used for axis labels in charts.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "web 2.0." This system uses light and transparency to define space.

*   **The Layering Principle:** Instead of a shadow, place a `surface_container_lowest` (#0E0E0E) element inside a `surface_container` (#201F1F) to create a "sunken" field for data entry.
*   **Ambient Shadows:** For floating action buttons or modal sheets, use an extra-diffused shadow: `box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.4)`. The shadow should never look "grey"; it should look like a void.
*   **The Ghost Border:** If accessibility requires a stroke (e.g., input fields), use `outline_variant` at **15% opacity**. High-contrast borders are strictly forbidden as they clutter the medical-grade aesthetic.
*   **Glassmorphism:** Primary cards use `surface_container_highest` at 60% opacity with a `backdrop-filter: blur(20px)`. This makes the data feel like it’s floating on a sophisticated glass HUD.

---

## 5. Components: Precision Elements

### Buttons & Selection
*   **Primary Action:** Roundedness `lg` (2rem). Background: `primary_container` (#00FF41). Text: `on_primary` (#003907). Bold, authoritative, and impossible to miss.
*   **Secondary Action:** "Ghost" style. No fill. Use the Ghost Border (15% `outline_variant`) and `title-sm` typography.

### Data Visualization (The Hero)
*   **Progress Rings:** Use a 12px stroke width. The "Track" is `surface_container_highest`. The "Fill" is the accent color (`primary`, `secondary`, or `tertiary`).
*   **Micro-Charts:** Forbid dividers. Use `surface_container_low` as the chart area background to subtly set it apart from the page body.

### Inputs & Cards
*   **The 24px Rule:** All main dashboard cards must use `md` (1.5rem/24px) or `lg` (2rem/32px) rounded corners. This creates an "approachable" feel to balance the dark, high-tech colors.
*   **Cards:** Forbid divider lines. Use vertical white space (`spacing.8` / 2rem) to separate internal card content.
*   **Input Fields:** Use `surface_container_lowest` for the field background to create a "well" effect. Labels sit above the field in `label-md` using `on_surface_variant`.

---

## 6. Do’s and Don’ts

### Do
*   **DO** use "Electric Green" (#00FF41) sparingly. It is a high-energy signal; if everything is green, nothing is important.
*   **DO** lean into "Breathing Room." Use `spacing.12` and `spacing.16` between major data modules to prevent the UI from feeling "cramped" or "medical-cluttered."
*   **DO** use asymmetrical layouts for headers (e.g., Daily Summary on the left, "Edit" button tucked in the bottom right of the header area).

### Don't
*   **DON’T** use 1px solid white or grey borders. They break the immersion of the Obsidian Lab.
*   **DON’T** use standard "Material Design" blue. Stick to the Cyan/Coral/Green triad for all semantic meaning.
*   **DON’T** use pure black (#000000) for backgrounds. It kills the depth of the glassmorphism. Always use `surface` (#131313).
*   **DON’T** use icons with fill. Use "Light" or "Thin" weight stroke icons (1.5pt) to maintain the high-tech, precise look.