---
title: "Introducing Soul of CSS"
date: "2025-08-15"
author: "Kossman"
description: "A CSS framework inspired by Souls-like games, built with SCSS."
tags:
    - css
    - scss
    - framework
    - souls-like
    - design
    - opensource
---

## Introduction

I'm excited to share **Soul of CSS** - my first major front-end project! This is a CSS framework inspired by the dark, atmospheric aesthetics of Souls-like games, built entirely with SCSS.

---

## About the Project

### What is Soul of CSS?

**Soul of CSS** is a **styling component-based CSS framework** for web developers who love Souls-like aesthetics.
Built with **SCSS** for maintainability and customization. It features dark, medieval-inspired UI components.

### Technical Details
```scss
// Example from the framework
.soc-text {
  &.is-primary {
    color: map-get($primary-colors, "normal");
  }

  &.is-success {
    color: map-get($success-colors, "normal");
  }

  &.is-warning {
    color: map-get($warning-colors, "normal");
  }

  &.is-error {
    color: map-get($error-colors, "normal");
  }

  &.is-disabled {
    color: map-get($disabled-colors, "normal");
  }
}
```
You can check out the full code on [GitHub](https://github.com/stkossman/soul-of-css) and see live demo and docs on [Soul of CSS](https://soul-of-css.vercel.app).

### Acknowledgements
This framework would not exist without inspiration from:
- [NES.css](https://nostalgic-css.github.io/NES.css) - Showed me that a themed CSS framework could be fun and useful.
- The Soulsborne game series - For the incredible visual inspiration.

### Author's Reflection
This project represents several first for me:
- My first complete CSS framework.
- My first deep dive into SCSS.
- My first attempt at creating something truly thematic.

While I know it's not yet as polished as other CSS frameworks, the documentation needs a lot of work and of course it might not be practical in a traditional sense, I am proud of what I've accomplished.
It worth creating because **it helped me battle depression through creation**. I learned a little bit about SCSS and CSS architecture.

### What's Next?
I plan to continiue improving the framework, adding more components, and refining the documentation.
Ofc If I will give at least a little fuck about this project.

---
Check out the project on [GitHub](https://github.com/stkossman/soul-of-css) and [NPM](https://www.npmjs.com/package/soul-of-css).
As I said on Github readme of this project, I do not ask for any help and contributions, but if you want to help me, please share this project with your friends and colleagues.