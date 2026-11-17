---
title: Accessibility on iOS starts in the design file
description: Dynamic Type, VoiceOver labels and colour contrast, from the Recycle and Donate app I designed in the Apple Developer Program.
date: 2026-11-17
tags: [Design systems]
art: a11y
related: recycle-and-donate-app
---

During the 11-month Apple Developer Program, I designed the Recycle and Donate app and built an interactive Figma prototype to Apple’s Human Interface Guidelines, with Dynamic Type, VoiceOver labels and colour contrast checked against accessibility standards.

The biggest lesson: accessibility is cheapest when it starts in the design file, not in the bug tracker.

## Design for the largest text size first

Dynamic Type lets people choose their preferred text size, and iOS apps should respect it. A layout that only works at the default size will break for the people who need it most.

In practice this means:

- Text styles instead of fixed sizes, so every label scales together.
- Layouts that can wrap and stack when text grows, instead of truncating.
- Checking key screens at the largest sizes before calling them done.

## Write the VoiceOver labels while you design

Every control needs a label that makes sense when it is read aloud without the screen. An icon that is obvious visually, like a leaderboard trophy or a pickup slot, can be meaningless to a screen reader user.

I treat labels as part of the content design: if I cannot write a clear label for a control, the control itself is probably unclear.

## Check contrast with numbers, not eyes

Contrast is easy to get wrong on a good screen in a bright room. The WCAG guideline for normal text is a contrast ratio of at least 4.5:1, and 3:1 for large text. Checking colour pairs against those numbers early keeps a palette usable for everyone.

## Fewer steps help everyone

Accessibility is not only about assistive technology. When I defined the core flows for listing an item, choosing to recycle or donate it, and scheduling a pickup, the goal was to keep each task to as few steps as possible. Shorter flows are easier with VoiceOver, easier with large text and easier for everyone else too.

<aside class="note">
<strong>Before handing off an iOS design</strong>
<ul>
<li>Does every screen still work at the largest Dynamic Type size?</li>
<li>Does every control have a clear VoiceOver label?</li>
<li>Does every text and background pair meet 4.5:1, or 3:1 for large text?</li>
<li>Could any flow lose a step?</li>
</ul>
</aside>
