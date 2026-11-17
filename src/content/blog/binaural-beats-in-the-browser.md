---
title: Generating binaural beats in the browser
description: How All is All builds calming soundscapes live with the Web Audio API, from two sine waves to rain and city ambience, with no audio files at all.
date: 2026-11-17
tags: [Design engineering, Audio]
art: waves
---

All is All is a calm-and-focus space I designed and built. One of its rooms, Frequencies, plays binaural beats and ambient soundscapes. None of it is a recording. Every sound is generated in the browser with the Web Audio API, which keeps the app light and lets the sound respond instantly to the interface.

## Two tones, one difference

A binaural beat is made of two pure tones, one in each ear, a few hertz apart. All is All uses a 200 Hz carrier. The left ear hears 200 Hz and the right ear hears 200 Hz plus the beat frequency. Each mode maps to a band:

- **Delta (sleep):** 2.5 Hz
- **Theta (meditation):** 6 Hz
- **Alpha (relaxation):** 10 Hz
- **Beta (focus):** 20 Hz

In code, that is two oscillators, each routed through a stereo panner pushed fully left or right, then into a shared gain node for volume. Changing the mode only changes one oscillator's frequency, so switching feels seamless.

A note on claims: research on what binaural beats do for the mind is mixed. I treat them as a pleasant, focusing texture, and the interface never promises a health outcome.

## Soundscapes from noise

The ambient layer is built from generated noise and filters:

- **Forest:** noise through a high-pass filter at 800 Hz, keeping the airy rustle.
- **Ocean:** noise through a low-pass filter at 600 Hz, with a slow 0.15 Hz oscillator swelling the volume like waves.
- **Wind:** a band-pass filter at 400 Hz whose frequency is pushed around by a 0.2 Hz oscillator, which gives the gusts.
- **City:** a low brown-noise rumble under 150 Hz plus a faint pink-noise hiss above 2,000 Hz.
- **Rain:** pink noise on its own, looped, which already sounds like steady rain.

Each soundscape has its own volume, separate from the beats, so people can mix the two.

## Designing the controls around the sound

Audio state lives at the top of the app, not inside the Frequencies screen. That decision shaped the interface: a side panel called Active Context shows what is playing on every screen, with play, pause and a "close session" button that stops everything at once. You can open the Scenes room or write a reflection without losing your sound.

When nothing is playing, the panel says "Silence is the canvas". Empty states are part of the mood too.

## What I would tell another designer

- **Generate, do not record.** No downloads, no loading spinners, and every parameter becomes a design control.
- **Lift shared state early.** If something should keep running across screens, design and build it as a layer above them.
- **Be careful with promises.** Calm is a fine goal; medical claims are not yours to make.
