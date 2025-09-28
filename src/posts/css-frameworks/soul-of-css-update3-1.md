---
title: "Soul of CSS: Tiny Update 1.4.1"
date: "2025-08-19"
author: "Kossman"
description: "Small updates to the Soul of CSS."
tags:
    - css
    - scss
    - framework
    - souls-like
    - design
    - opensource
---

## Introduction

**Soul of CSS** small update - mainly for docs page.
This release only brings new documentation page using htmx. Also, tiny animations class change.

---

## What's New?

### `is-whispering` animation rename 

- `is-whispering-shadow` animation is now `is-whispering`. 
```html
<button class="soc-btn soc-btn--sm is-primary is-whispering">.is-whispering</button>
```

### New Documentation Page
I refactor documentation page using [htmx](https://htmx.org/) to make it more easier to navigate between 2 pages (*wOoOoW! right?*).
Here is a quick preview what I mainly did:

```html
<a
   hx-get="index.html" hx-select="main" hx-target="#main-content" hx-push-url="true"
   class="soc-btn soc-btn--sm is-ghost" style="color: #f4f1e8;">Home
</a>
<a
   hx-get="components.html" hx-target="#main-content" hx-push-url="true"
   class="soc-btn soc-btn--sm is-ghost" style="color: #f4f1e8;">Components
</a>
```

So basically, I just used `hx-get` to load the content of the page into the `#main-content` div, and `hx-push-url` to update the URL in the browser without reloading the page.
`components.html` now is not separate full html page, but just a part of the main page with all the components.

Worth noting, I am totally new to htmx, and maybe it is not the best way to do it, but it works for me and I like it.

---
Check out the project on [GitHub](https://github.com/stkossman/soul-of-css) and [NPM](https://www.npmjs.com/package/soul-of-css).
As I said on Github readme of this project, I do not ask for any help and contributions, but if you want to help me, please share this project with your friends and colleagues.