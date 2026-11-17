---
title: Designing trust into automation for mainframe operators
description: At Progull we are building agentic AI for mainframe batch abends. The product question is not what the AI can fix, but when an operator lets it.
date: 2026-11-17
tags: [Enterprise UX, AI]
art: terminal
---

I co-founded Progull, which is building an agentic AI layer for mainframe batch operations. When a batch job fails on z/OS, it ends with an abnormal termination, an abend, often in the middle of the night. Today an operator gets paged, reads logs, works out the cause and fixes it by hand. Progull aims to detect, diagnose, remediate and close those incidents inside ServiceNow.

The engineering is hard. The design problem is harder: operators run payroll, payments and flight systems on these jobs. Why would they let software touch them?

## Autonomy is earned, one abend family at a time

Every new type of abend starts in an advisory mode. Progull diagnoses the failure and proposes a fix, and a person approves it. Only after a family of incidents has a track record does automation take a bigger role. The design-partner pilot runs in advisory mode only.

That changes the interface. The most important screen is not a dashboard of things the AI did. It is a clear proposal: what failed, why, what the fix is, and what will happen if you approve it.

## Show the reasoning, in the operator's language

Operators think in job names, return codes and datasets, not in AI terms. A good proposal reads like a colleague's note: the job, the abend code (for example S0C7, a data exception), the evidence from the logs, and the playbook it wants to run. If the explanation needs a glossary, it is not ready.

## Keep everything inside the tools they trust

Incidents open, update and close in ServiceNow, where the team already works, and every action is audited. Governance is a feature people can see: which job classes are off-limits, who approved what, and when.

## Label targets as targets

Progull is pre-revenue, and the website says so. Its figures, such as auto-resolution rates and recovery times, are design targets, and the simulations are representative traces from a test harness. Enterprise buyers can tell when a startup is overclaiming. Being precise about what is real is part of earning trust before the product has a single customer.

## Lessons for designing any automation

- **Make autonomy gradual and visible.** Start with suggestions; earn the right to act.
- **Explain in the user's vocabulary.** Trust comes from understanding.
- **Meet users in their system of record.** Do not ask them to watch a new screen at 3 a.m.
- **Separate targets from results.** Credibility compounds; so does overclaiming.
