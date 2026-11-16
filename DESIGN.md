---
name: Jareer Zeenam
description: A full-stack engineer's career laid out as a console level-select overworld, at dusk.
colors:
  sky: "#141C2B"
  sky-deep: "#0F1522"
  sky-raised: "#1B2537"
  sky-line: "#2C3850"
  bone: "#ECE3CF"
  bone-dim: "#B9B2A2"
  bone-mute: "#8F8A7E"
  ochre: "#E3A93B"
  ochre-hover: "#EDB952"
  moss: "#6E9A73"
  clay: "#C8553D"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "4.75rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.9rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 118"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "'ss01'"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 72"
    fontFeature: "'tnum'"
rounded:
  none: "0px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "40px"
  wrap: "76rem"
  section: "8rem"
  section-sm: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.sky}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ochre-hover}"
    textColor: "{colors.sky}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  stage-plate:
    backgroundColor: "{colors.sky-deep}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "24px"
  level-key:
    backgroundColor: "{colors.sky-deep}"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    size: "44px"
  level-key-active:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.sky}"
  tool-tag:
    backgroundColor: "transparent"
    textColor: "{colors.bone-dim}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
---

# Design System: Jareer Zeenam

## Overview

**Creative North Star: "The Level-Select Overworld"**

The career is a console world map at dusk. Every role is a floating, toon-shaded diorama island on one dotted ochre path from 2018 to now, and choosing a level springs the camera to that island. The rest of the page reads like the pause menu of that game: square plates, condensed HUD labels, stretched stage titles, and four flat inks on a dark sky. Nothing is glossy; depth comes from the 3D world and from scroll-linked perspective, never from shadows or blur haze.

Density is low and editorial: one idea per section, one content edge, long dark fields between sections. The world is the only place colour gets loud; HTML surfaces stay bone on sky with ochre reserved for the path, selection and the single primary action.

Motion belongs to the camera. As you scroll, content arrives from depth along a perspective, scrubbed to scroll position and reversible, as if the camera were travelling over the map. Everything renders at rest before mount and under reduced motion.

**Key Characteristics:**
- Dusk sky ground with four flat inks (bone, moss, ochre, clay).
- One family, Archivo, used across its width axis: stretched for titles, normal for reading, condensed for HUD.
- Square corners everywhere; 1px bone hairlines; an ochre corner notch marks a stage plate.
- Toon-shaded low-poly 3D: a signature overworld hero and one smaller flag island at the close.
- Scroll-scrubbed perspective motion on every section, transform and opacity only.

## Colors

A dusk sky and four flat inks, the way a hand-painted world map is coloured: few hues, no gradients on UI, saturation spent only where the player should look.

### Primary
- **Path Ochre** (`ochre`): the dotted path, the selected level, the primary button, focus rings, selection highlight, HUD dates and the corner notch. It means "here" or "go". Hover lifts to **Lit Ochre** (`ochre-hover`).

### Secondary
- **Moss** (`moss`): status and confirmation only: the "Open to work" square, bullet pips in level lists, the copied-check. In 3D it is the grass on every island.

### Tertiary
- **Clay** (`clay`): 3D only (roofs, beacons, accents on islands). At 3.9:1 on sky it never carries HTML text.

### Neutral
- **Dusk Sky** (`sky`): page ground, header when scrolled, text on ochre.
- **Deep Sky** (`sky-deep`): plate fills, level keys, the Recommendations band.
- **Raised Sky** (`sky-raised`): the backing behind project screenshots while they load.
- **Sky Line** (`sky-line`): scrollbar thumb; the dark rule colour.
- **Bone** (`bone`): primary text, display type, hairlines at 10 to 40% alpha, icon ink.
- **Dim Bone** (`bone-dim`): body paragraphs and secondary copy (8.1:1 on sky).
- **Mute Bone** (`bone-mute`): metadata, separators, captions (5.0:1 on sky; the floor for text).

### Named Rules
**The Four Inks Rule.** Every surface, HTML or 3D, is drawn in sky plus bone, moss, ochre and clay. A new hue needs a world reason, not a section reason.

**The Ochre Means Here Rule.** Ochre marks position, selection or the one primary action in view. Never use it for decoration or for a second competing button.

**The Clay Stays In The World Rule.** Clay lives on the islands. HTML text and controls do not use it.

## Typography

**Display Font:** Archivo, variable width axis (with system-ui, sans-serif)
**Body Font:** Archivo at normal width
**Label Font:** Archivo condensed

**Character:** One grotesque played across its width axis like a game's type system: stretched heavy caps-height titles for stage names, a plain readable width for prose, and narrow tracked caps for the HUD.

### Hierarchy
- **Display** (800, wdth 118, 3.1rem phone to 5.2rem; 4.75rem in the hero plate at xl; contact close reaches 6rem; line-height 0.95, -0.025em, balanced wrap): the name in the hero and the closing "Next level" headline.
- **Headline** (800, wdth 118, 2.5rem / 3.75rem / 4.5rem by breakpoint, 0.95): section h2s, kept to about 14ch.
- **Title** (800, wdth 118, 1.9rem to 2.4rem; 1.7rem in the stage card): company names, project titles, stage titles.
- **Body** (400, 1rem to 1.125rem, line-height 1.625): paragraphs in bone-dim, capped near 38rem or 65ch. Lead lines under a heading run at 1.125rem.
- **Label / HUD** (600, wdth 72, 0.75rem to 0.85rem, 0.08em tracking, uppercase, tabular figures): dates, level numbers, status line, tool tags, skill group names.

### Named Rules
**The One Family Rule.** Archivo is the only face. Contrast comes from the width axis and weight, never from a second family.

**The Width Means Role Rule.** Stretched is a name (a stage, a section, a company). Condensed is data (a date, a number, a status). Normal width is for reading.

## Layout

One content edge for every section: a centred column with a 76rem maximum and side gutters of 16px, 24px from small screens and 40px from large. Sections stack with 6rem vertical padding, 8rem from small screens, separated by a bone hairline at 10% alpha. The Recommendations band drops to deep sky to break the rhythm once.

The hero is full-bleed and at least one small viewport tall. On wide screens (wider than 1.1x height) the camera is side-on so the path reads left (2018) to right (the flag); copy sits on a stage plate lower-left and the stage card plus level selector sit lower-right in a 23rem column. On portrait screens the camera looks top-down, the map sits in the upper part of the frame, and the copy stacks below it over a sky fade; the picked level replaces the paragraph inline so nothing shifts.

Long-form sections use asymmetric two- and three-column grids: the levels list is a 44px node rail, a 13rem date column and the content; projects alternate screenshot and text across a 7/5 split; skills sit in three columns. Everything collapses to one column on phones.

## Elevation & Depth

The HTML layer is flat. There are no box shadows and no backdrop blur. Depth is carried by three things: the real 3D world (toon ramp of three hard steps, fog into the sky colour, warm key light and cool rim), tonal layering (deep sky plates over sky, sky-raised behind images), and scroll-linked perspective, where elements travel in from negative Z and tilt or swing into place.

### Named Rules
**The No Shadow Rule.** Separation is a hairline or a tonal step, never a drop shadow. Plates float because the world behind them moves, not because they cast anything.

**The Toon Not Gloss Rule.** 3D materials are toon-shaded with a three-step ramp or flat unlit ochre. No PBR gloss, no bloom, no glow haze.

## Shapes

Everything is square: buttons, plates, level keys, tool tags, screenshots, portraits and the avatar all have 0 radius (the only rounding is the 2px on the focus outline and the scrollbar thumb). Borders are 1px bone hairlines at 15% for frames, 30 to 40% for interactive outlines. The recurring silhouette is the **corner notch**: an ochre L, 12px long and 3px thick, sitting on the top-left corner of a stage plate. Small square pips (5px moss squares, 8px status squares) stand in for bullets and dots. The dotted path appears in HTML as a 1px-dot ochre dash along the level selector and down the levels rail.

## Components

### Buttons
Tactile and decisive: one solid ochre action, one hairline alternative.
- **Shape:** square (0px), at least 48px tall, 24px horizontal padding, semibold 0.95rem at normal width.
- **Primary:** ochre fill with sky text. Only one primary per view: "Email me" in the hero and at the close, "Download the PDF" on the resume page.
- **Secondary:** transparent with a bone hairline at 40% and bone text; hover brings the border to full bone and a 5% bone wash.
- **Hover / Active:** lift 2px over 200ms on the strong ease-out; press drops back and scales to 0.97 in 80ms. Reduced motion removes the movement.
- **Focus:** 2px ochre outline offset 3px, shared by every focusable element.

### Stage Plate
The signature container: a deep-sky panel at 90% over the world, bone hairline at 15%, square, 20 to 32px padding, ochre corner notch. It holds the hero copy on wide screens and the stage card (company, HUD "L3 / 2021-23", role, one achievement, "Read this level" link). Stage content swaps in from the path direction (10px slide, 320ms).

### Level Selector
A row of square HUD keys (44px tall, 36 to 44px wide) on a dotted ochre rule. Default: deep sky, bone 30% hairline, bone numeral. Hover and focus: ochre border and numeral, 2px lift. Selected: solid ochre with sky numeral. The last key is the flag (next level). Arrow keys move between levels, Escape clears; the 3D scene mirrors the selection and the camera springs to the island.

### Tool Tags
Condensed HUD caps at 0.75rem in bone-dim inside a square 15% bone hairline, 4px by 10px. Used for each level's stack; projects list their stack as slash-separated HUD text instead.

### Links
Bone text with an underline drawn from the left on hover (1px, 300ms, strong ease-out) and a shift to ochre. Arrow and external icons trail the label and nudge right on hover.

### Navigation
Fixed header 64px tall, transparent over the hero, turning sky at 95% with a bone 10% hairline after 24px of scroll. Square photo avatar, link nav in bone-dim at 0.875rem, a compact secondary "Resume" button. On phones a full-height sky sheet lists sections in display type at 1.875rem on 64px rows, ending in a full-width primary button.

### Levels Rail
The levels section repeats the map as a vertical list: a dim dotted bone rail with an ochre dotted rail drawn over it as you scroll, a 44px square node per level that fills ochre when the path reaches it, HUD dates beside it, and the content tilting up off the map plane.

### Tool Logos
Third-party logos render as one monochrome set in bone ink so the skill grid reads as a single icon family; items without a logo get a 5px mute square. Product icons (arrow, external, flag, copy, check, menu) are one authored set of 1.5px strokes on a 16px grid with square caps.

## Do's and Don'ts

### Do:
- **Do** keep every surface in sky plus the four inks; check new text against the 4.5:1 floor (bone-mute is the dimmest text colour allowed).
- **Do** use the width axis for role: stretched 800 for names and headings, condensed 600 uppercase tracked for dates, numbers and status.
- **Do** keep corners square and frames to 1px bone hairlines; mark a featured panel with the ochre corner notch.
- **Do** scrub scroll motion to position with transform and opacity, let it reverse on scroll-up, and render at rest before mount and under reduced motion.
- **Do** give 3D a still fallback (reduced motion, low memory) and an HTML-only fallback (no WebGL, save-data), and pause rendering when it is off screen.
- **Do** keep every fact that appears in 3D also present in HTML.

### Don't:
- **Don't** add box shadows, glows, glassmorphism or backdrop blur to HTML surfaces.
- **Don't** round corners on buttons, plates, images or tags.
- **Don't** introduce a second typeface or a new accent hue.
- **Don't** use clay for text or controls, or ochre for decoration.
- **Don't** add gloss, bloom or PBR materials to the world; keep the three-step toon ramp.
- **Don't** add a third real-time 3D scene; the overworld and the flag island are the budget.
