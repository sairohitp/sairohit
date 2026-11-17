---
title: Why I design in Figma and build in React
description: Designing and building the same product keeps the design honest. Notes from OrgGrid, FundLookup and Handl.
date: 2026-11-17
tags: [Design engineering]
art: code
---

I design data-heavy products in Figma and build them in React, so designs reach engineering ready to ship. That sentence is in my resume, and it is the most useful habit I have picked up as a designer.

## Where designs usually break

A design file is a promise. It shows how a screen should look when the data is tidy, the network is fast and every name fits on one line. Real products are messier. Lists are empty, names are long, a request fails halfway, and a status changes while you are looking at it.

At TrainingMug, I reviewed built screens with engineers against the designs to close those gaps before release. That review loop taught me how many decisions only appear when the design meets real code.

## Building closes the loop

So on my own projects I build what I design:

- **OrgGrid**, a deal flow CRM for startup, corporate and investor teams, follows each deal from first conversation to success story, with status tracking and an activity timeline for every deal.
- **FundLookup**, a search tool for grants, funds and government schemes, turns a typed question into a shortlist of matching funds.
- **Handl**, a username availability checker, checks one name across social and developer platforms and suggests alternatives when it is taken.

All three are built with React and TypeScript. Building them changed how I design them.

## What building teaches the design

**States become real.** Loading, empty, error and partial states stop being an afterthought, because the code will not run without them.

**Content becomes real.** Long organisation names, missing fields and odd search queries show up on day one, not at launch.

**Components become real.** A design system in Figma and a component library in code are the same idea. When I build both, the variants in the file match the props in the code.

**Trade-offs become visible.** Some ideas are cheap to draw and expensive to build. Some are the other way round. Knowing which is which makes better conversations with engineers.

## Not instead of engineers

Building my own projects is not about replacing engineering. It is about speaking the same language. When I hand off a design now, I can explain how a state works, why a component has the props it has, and where the edge cases are, and that makes the whole team faster.
