---
title: A theme studio that hands users the design system
description: All is All lets people edit every colour and animated background live. What that taught me about tokens, contrast and safe defaults.
date: 2026-11-17
tags: [Design systems, Design engineering]
art: palette
---

All is All is built on a liquid-glass look: frosted panes floating over slow, blurred colour blobs. Instead of shipping one fixed theme, I gave people the controls I use as a designer. The Theme Studio edits the design system itself, live.

## Everything is a token

The whole interface reads from a small set of variables: main and muted text, accent, glass background and border, pane background, highlight, page background and gradient. The animated background has its own: three blob colours, opacity, blur, blend mode, speed and scale.

Because every component uses these tokens and nothing else, a theme is just a different set of values. Changing one updates the entire app instantly, with no reload.

## Five presets as starting points

People rarely want to start from nothing, so the Studio opens with presets: Liquid Zen (the default), Liquid Light for daytime, Vortex Void, California Sunset and Tokyo Cyber. Each is a complete, tested combination. Custom themes start from whichever preset you pick.

## Contrast without asking

The hardest part of letting people choose colours is that they can choose badly. The app checks the brightness of the main text colour using standard luminance weights (0.2126 red, 0.7152 green, 0.0722 blue). If the text is dark, it switches the whole interface into light-mode behaviour, so shadows, overlays and icons flip with it. Nobody has to find a "light mode" switch; the theme decides.

## Safe experiments

Entering the Studio saves a snapshot of your current theme. The header shows when you have unsaved changes, Reset returns you to the snapshot, and Done keeps your work. Your active theme is saved on the device, so it is there next time.

That snapshot pattern made people braver. When undo is one tap away, they try more.

## The same idea on this site

This portfolio has a smaller version of the same thinking. The Preferences panel switches theme, motion, text size, contrast and spacing, and every page reads from the same tokens, so the light theme works everywhere at once.

## Lessons

- **Tokenise before you theme.** If components use raw colours, theming becomes a rewrite.
- **Ship presets.** Good defaults are the best guidance.
- **Let the system protect contrast.** Do not rely on people to know accessibility rules.
- **Snapshot before editing.** Safe undo invites exploration.
