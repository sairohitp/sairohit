---
title: Designing data-dense tables that people can actually scan
description: What library front desks and course admin consoles taught me about tables, filters, bulk actions and status.
date: 2026-11-17
tags: [Product design]
art: table
related: library-management-system
featured: true
---

Most of the products I design are, at their core, tables. A library system is a table of books, members and loans. A learning platform’s admin console is a table of courses, quizzes and exercises. The people using them are not browsing. They are working, often under time pressure, and every extra click repeats hundreds of times a day.

These are the principles I keep coming back to.

## Start with the workflow, not the grid

For the Library Management System I designed during my internship at Infosys, I started by speaking with librarians and front-desk staff. We mapped their daily workflows across cataloguing, issues, returns, renewals and fines, and looked for the moments where the existing process slowed them down.

That map decided what the tables needed to show. A table is the answer to a question someone asks over and over: *what is overdue*, *who has this book*, *what changed today*. If you know the question, you know the columns.

## Decide what the eye lands on first

In the TrainingMug admin console, each row shows the item, its course, its chapter, who modified it and when. Two small decisions made those rows much faster to read:

- **Ownership as avatars.** A row of faces is quicker to recognise than a column of names.
- **One clear selected state.** The active row gets an accent bar, so you never lose your place.

Density is not the enemy. Unclear hierarchy is. A dense table with one obvious focal point per row reads faster than a sparse one where everything has the same weight.

## Put the actions where the work is

Repetitive work needs repetitive actions to be cheap:

- **Sorting and filtering** that stay visible, so people can see what they are looking at.
- **Bulk actions** behind a checkbox on every row, so ten returns are one action, not ten.
- **Search one shortcut away.** The TrainingMug console puts search behind ⌘ + F, right next to the Create button.
- **Breadcrumbs** at the bottom, so going deep into a course never means getting lost.

## Give status a vocabulary

Overdue, available, reserved, draft, sent for approval: status is the most important thing in an operations tool, and the easiest to make inconsistent. I give every status one colour and one label, and I use them the same way on every screen. When colour means something, it should only ever mean that thing.

## Build it as a system

The last step is making it hold together. For the library system I built a reusable Figma component library with variants and auto layout, so tables, filters and status indicators stayed consistent across every view. Then I presented the design rationale to product and engineering leads and wrote detailed handoff documentation.

The table on screen is only as good as the table that ships.

<aside class="note">
<strong>A quick checklist</strong>
<ul>
<li>Which question does this table answer, and how often is it asked?</li>
<li>What should the eye land on first in each row?</li>
<li>Can people act on many rows at once?</li>
<li>Does every status have exactly one colour and one label?</li>
<li>Will the components survive the next ten screens?</li>
</ul>
</aside>
