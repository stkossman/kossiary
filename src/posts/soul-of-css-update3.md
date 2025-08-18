---
title: "Soul of CSS: Update #3"
date: "2025-08-19"
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

**Soul of CSS** update! Here we go.
This release brings new elements, new effects and animations!

---

## What's New?

### New Element

- **Badge** elements. These are small labels that can be used to display additional information or status.
```html
<span class="soc-badge soc-badge--lg is-primary">Primary</span>
<span class="soc-badge soc-badge--lg is-success">Success</span>
<span class="soc-badge soc-badge--lg is-warning">Warning</span>
<span class="soc-badge soc-badge--lg is-error">Error</span>
<span class="soc-badge soc-badge--lg is-info">Info</span>
<span class="soc-badge soc-badge--lg is-disabled">Disabled</span>

<span class="soc-badge soc-badge--lg is-ember">Ember</span>
<span class="soc-badge soc-badge--lg is-bonfire">Bonfire</span>
<span class="soc-badge soc-badge--lg is-death">Death</span>
```

Here's how it looks now.

![New Badge Element](https://i.ibb.co/3n6WqSn/image-2025-08-19-011257398.png)

- **Button** effects. This small effect is used to make buttons more interactive.
```scss
&:active {
    transform: scale(0.97);
}
```

- **Animations** mixins. New flickering and *whispering shadows* animations are added to the framework. 
*Currently not used/shown in the demo.*
```scss
@mixin flicker-animation() {
  animation: flicker 2s infinite;
}

@keyframes flicker {
  0%, 19%, 21%, 60%, 62%, 100% { opacity: 1; }
  20%, 61% { opacity: 0.7; }
}

@mixin ghostly-flicker() {
  animation: ghostly-flicker 4s infinite;
}

@keyframes ghostly-flicker {
  0%, 15%, 25%, 35%, 50%, 65%, 75%, 85%, 100% { opacity: 0.8; }
  20%, 30%, 60%, 70%, 90% { opacity: 0.3; }
}

@mixin whispering-shadows() {
  animation: whispering-shadows 4s infinite ease-in-out;
}

@keyframes whispering-shadows {
  0%, 100% { box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(70, 0, 70, 0.3); }
}
```

- **New Text Preset**. A new text preset called `is-soul`.
```scss
&.is-soul {
    color: map-get($info-colors, "normal"); // #4169e1
}
```

You can check out the full code on [GitHub](https://github.com/stkossman/soul-of-css) and see live demo and docs on [Soul of CSS](https://soul-of-css.vercel.app).

---
Check out the project on [GitHub](https://github.com/stkossman/soul-of-css) and [NPM](https://www.npmjs.com/package/soul-of-css).
As I said on Github readme of this project, I do not ask for any help and contributions, but if you want to help me, please share this project with your friends and colleagues.