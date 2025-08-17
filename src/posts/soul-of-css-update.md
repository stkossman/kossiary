---
title: "Soul of CSS: Update #1"
date: "2025-08-16"
author: "Kossman"
description: "Latest updates to the Soul of CSS, feat. new elements, colors."
tags:
    - css
    - scss
    - framework
    - souls-like
    - design
    - opensource
---

## Introduction

**Soul of CSS** update! Here we go.
This release brings new elements, refined colors and some mixin shit for legacy styling.

---

## What's New?

### New Elements & Features

- **Lists** element. A new component for stylized lists. The idea for lists came from target-lock dot from Dark Souls 3. [lists.scss](https://github.com/stkossman/soul-of-css/blob/main/scss/elements/lists.scss)

![Lists Demo](https://i.ibb.co/dw3XXbww/image.png)

- **Legacy** elements. Added classic UI components (at least I tried). Plan to add more legacy components along with my ideas for styling.

![Legacy Elements](https://i.ibb.co/JWcyZfKB/image-2025-08-16-224346228.png)

### Refinements

- **Brass replaces Gold**. The 'gold' color has been replaced with a classic 'brass' color.
```scss
//$color-gold: #ffd700;
$color-brass: #927548;
```
- **Legacy Colors Palette**. New set of legacy colors - brass is one of them.
```scss
// legacy colors
$color-ember: #f94b10; // "ember restored" text color
$color-bonfire: #fecb53; // "bonfire" text color
$color-heir: #fdf366; // "heir of fire destroyed" text color
$color-death: #5d0d0c; // "you died" text color
$color-progress: #422c00; // progress bar color
$color-button-hover: #a2551b; // button hover color
```

### Mixin for Legacy Styling
A mixin for legacy text glow effect. That's how I implemented it.
```scss
@mixin glow-text($color, $intensity: 0.8) {
  text-shadow:
    0 0 5px rgba($color, $intensity),
    0 0 10px rgba($color, $intensity * 0.7),
    0 0 20px rgba($color, $intensity * 0.5);
}
```

You can check out the full code on [GitHub](https://github.com/stkossman/soul-of-css) and see live demo and docs on [Soul of CSS](https://soul-of-css.vercel.app).

---
Check out the project on [GitHub](https://github.com/stkossman/soul-of-css) and [NPM](https://www.npmjs.com/package/soul-of-css).
As I said on Github readme of this project, I do not ask for any help and contributions, but if you want to help me, please share this project with your friends and colleagues.