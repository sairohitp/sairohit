---
title: A booking flow that ends in a WhatsApp chat
description: Dhobermans collects everything a laundry pickup needs on the web, then hands the order to WhatsApp. Why that works in Bengaluru, and how the flow is designed.
date: 2026-11-17
tags: [Product design]
art: flow
---

Dhobermans is a laundry and dry-cleaning pickup service in HSR Layout, Bengaluru. Its promise fits in one line: "Laundry, delivered like magic." The interesting design decision is where the booking ends. There is no checkout and no account. The site collects everything a pickup needs, then opens WhatsApp with the order already written.

## Why WhatsApp

For a neighbourhood service in India, WhatsApp is where customers already talk to the businesses they trust. It handles confirmations, rescheduling and questions in one thread, and the team can reply like people, not like a ticket queue. Building a full account system would have added friction for no gain.

So the web does what the web is good at, structured input and clear information, and WhatsApp does the conversation.

## The booking sheet

The booking sheet asks for one thing at a time:

1. **Service:** Wash and Fold, Steam Ironing or Dry Cleaning up front, with five more one tap away.
2. **Load size:** optional, from about 3 kg to 10 kg or more.
3. **Plan, detergent and softener:** sensible defaults, so skipping is fine.
4. **Pickup time and repeat:** just once, every week or every two weeks.
5. **Location:** device GPS or a pin on the map, then address and notes.
6. **Review**, and "Add to my calendar" if you want a reminder.

The last button says exactly what happens next: "Open WhatsApp". No surprises.

Details are saved on the device, which powers the button I like most: "Repeat my last order". For a weekly chore, the second booking should take one tap.

## Answering the questions before they are asked

Most laundry questions are about distance, time and price, so the page answers them in the open. Free pickup within 5 km, with a "Check my distance" button. Back within 24 hours. Pickups in morning or evening windows. Each status card in the hero repeats one of these promises.

## Designing for the moment after booking

The tracking screens on the site show the journey, from "Pickup en route" to delivery, and the service sends SMS updates at each step. Waiting is less stressful when you know where your clothes are.

## What I would reuse

- **Use the channel people already live in.** Hand off to it instead of rebuilding it.
- **Make the next step explicit.** A button that says "Open WhatsApp" beats one that says "Submit".
- **Design for the second order.** Repeat bookings are where convenience becomes loyalty.
