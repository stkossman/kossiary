---
title: "Soul of CSS: Update 1.5.1 and Documentation"
date: "2025-08-24"
author: "Kossman"
description: "Latest updates to the Soul of CSS."
tags:
    - css
    - scss
    - framework
    - souls-like
    - design
    - opensource
---

## Introduction

**Soul of CSS** latest tiny update (patch) - changes in `reboot.scss` and documentation.
---

## What's New?

### `reboot.scss`
I changed base `color` and `background-color`.

How it was:
```scss
color: $base-color; // #0d0d0d - basically black
background-color: $background-color; // #0a0a0a - basically also black
```
And now:
```scss
color: $color-white; // now it's white
background-color: $color-black; // and now it's black
```
Impressive, innit?

### Documentation
I refactored documentation and added some more examples for `buttons`.

- Changed header links from `button` to `a` with light styles.
- Changed navigations tabs on components page to `a` with light styles also. (tried to do it more user-friendly overall)
- Added `buttons` size examples.

```html
<button class="soc-btn soc-btn--sm is-ghost">Small</button>
<button class="soc-btn soc-btn--md is-ghost">Medium</button>
<button class="soc-btn soc-btn--lg is-ghost">Large</button>
<button class="soc-btn soc-btn--xl is-ghost">XLarge</button>
```

Check docs on [Soul of CSS](https://soul-of-css.vercel.app).

---
Check out the project on [GitHub](https://github.com/stkossman/soul-of-css) and [NPM](https://www.npmjs.com/package/soul-of-css).
As I said on Github readme of this project, I do not ask for any help and contributions, but if you want to help me, please share this project with your friends and colleagues.