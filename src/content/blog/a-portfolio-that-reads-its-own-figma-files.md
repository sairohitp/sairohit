---
title: A portfolio that reads its own Figma files
description: How this site decodes 74 Figma files at build time, and the design decisions behind its hover language, preferences and machine-readable pages.
date: 2026-11-17
tags: [Design engineering]
art: code
---

Most portfolios show a few polished screens and ask you to trust that the work behind them exists. I wanted mine to show the work behind them. So this site reads my Figma files.

## Decoding the files

A .fig file saved from Figma is a zip archive. Inside is a binary canvas file with a schema and the document data, compressed. Using an open-source decoder for Figma's binary format, I turned every file into structured data: pages, frames, sizes, text, fonts, colours, components, prototype links and notes on the canvas.

That data now powers the "Inside the files" section on every case study. Where a file already contains a full render of a screen, such as Behance boards or app screens, those images are pulled out and added to the project's gallery automatically.

## Frameworks for a site that keeps growing

Every page is static and fast, and the content is typed data:

- **Case studies** are made of blocks (text, exhibits, flows, palettes, FAQs), so new studies follow the same structure.
- **Images are discovered by name.** Drop a file named after a project and a screen into the right folder and it appears in that project's gallery.
- **Blog posts are Markdown,** each optionally linked to a case study.

## One hover language

Every tile on the site behaves the same way. It never moves. A soft light follows the cursor, the border brightens and a thin highlight traces the edge near the pointer. Project cards add one gesture: the screen inside slides up a little, like a phone out of a pocket. Consistency in motion is what makes a site feel designed rather than decorated.

## Preferences for everyone

The Preferences panel offers dark, light or system theme, reduced or full motion, larger text, higher contrast, underlined links and more spacious reading. Region changes date and number formats, and currency converts the rupee figures at a dated reference rate, marked as approximate. Theme and accessibility settings are applied before the page paints, so there is no flash of the wrong theme.

## Written for people and for machines

Every page has structured data describing who I am and what the page is, plus a sitemap, an RSS feed, and llms.txt files that give AI assistants a plain-text version of the whole portfolio. The file details are real HTML text, so search engines can read them too.

## What I learned

- **Show the source, not just the shine.** Real files are more convincing than mockups.
- **Make content typed.** Structure is what lets a site grow without decay.
- **Pick one motion language** and apply it everywhere.
- **Design for readers you cannot see,** including assistive technology and AI.
