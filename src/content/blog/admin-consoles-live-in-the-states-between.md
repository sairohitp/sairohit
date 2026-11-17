---
title: Admin consoles live in the states between
description: "The learning platform's admin side has 139 frames. Most are not pages but states, such as drafts, pending approval, errors and emails."
date: 2026-11-17
tags: [Enterprise UX, Design systems]
art: table
related: learning-management-system
---

When people picture an admin console, they picture a dashboard and a table. When I designed the admin side of the TrainingMug learning platform, the Admin page of the Figma file ended up with 139 frames, and only a handful were "pages". The rest were states. That is where admin design actually lives.

## Content has a lifecycle

Courses, chapters, topics, quizzes, coding exercises and capstone projects all move through the same stages, so the console treats them the same way. There are separate views for Courses (Drafts) and Courses (Pending), and for Quizzes (Drafts) and Quizzes (Pending). A draft is yours to finish; pending means it is waiting for someone else's approval.

Making those two states visibly different answers the most common question in any content tool: "I saved it, why can learners not see it?"

## The same verbs everywhere

Every content type gets the same set of actions: create, view, update and delete, plus preview where learners will see it. There are frames for Create Course, Update Topic, Delete Quiz, Preview Exercise and so on, all built from the same components. Once an instructor has edited one type, they know how to edit all of them.

Delete has its own designed frame for every content type. In an admin tool, the destructive action deserves a designed moment, not a browser alert.

## Errors and edge cases are screens too

The file has Login and Login (Error), two-step verification by mail and by phone, the error state and a "code resent" message, password reset and its confirmation, a 404 page and a "Still under construction" page. Each one was designed with the same care as the happy path, because those are the moments people remember.

## Emails are part of the console

A surprising share of the admin experience happens in the inbox, so the emails and notices were designed in the same file: confirm your email, password reset, approval request, approval rejected, support request received, user registered, course completion and new instructor created. Each email has one clear action and matches the product's look, so it feels like the same system.

## Prototypes that hold together

Across the two learning platform files there are 627 prototype links. Wiring states together in the prototype is how you find missing ones: if a button has nowhere to go, a state is missing.

## Lessons

- **Design the lifecycle, not just the page.** Draft, pending and live need to look different.
- **Reuse the verbs.** One pattern for create, view, update and delete.
- **Give destructive actions a real screen.**
- **Design the emails in the same file** as the product they belong to.
