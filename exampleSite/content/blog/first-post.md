---
title: "Building a Custom Split Keyboard: A Deep Dive"
date: 2026-06-17
tags: ["hardware", "ergonomics", "diy"]
pinned: true
description: "Why I abandoned traditional staggered keyboards and spent three months sourcing, soldering, and programming my own split ortholinear mechanical keyboard from scratch."
---

The transition from a standard staggered layout to a split, ortholinear keyboard is not for the faint of heart. But after experiencing chronic wrist pain during long coding sessions, I decided it was time to take matters into my own hands. 

This post details the entire journey: from choosing the right PCB and sourcing components, to the tedious hours of soldering, and finally, programming the custom firmware that makes the whole thing work.

## The Problem with Standard Keyboards

Most modern keyboards still use a staggered column layout—a design artifact inherited from mechanical typewriters to prevent physical metal arms from jamming. We no longer use physical arms, yet our wrists are still forced into unnatural outward angles (ulnar deviation) just to type.

### Ulnar Deviation
When your hands rest on a standard keyboard, your wrists naturally bend outward. Over time, this constant strain can lead to repetitive strain injuries (RSI).

### Pronation
Standard keyboards force your hands to lie completely flat against the desk. Your natural resting position is actually slightly tilted, similar to holding a steering wheel.

## Designing the Solution

I knew I needed three things: a split design to open up my shoulders, an ortholinear (grid) layout to reduce finger travel, and tenting capabilities to address pronation.

### Choosing the PCB

After browsing various open-source designs, I settled on the **Corne (Crkbd)** layout. 

*   **Compact Form Factor:** It uses only 42 keys, heavily relying on layers to access numbers and symbols.
*   **Split Architecture:** Two separate halves connected by a TRRS cable.
*   **Open Source:** The PCB files are freely available on GitHub, allowing me to order custom manufactured boards directly from a fab house.

### Switches and Keycaps

For the switches, I went with **Gateron Milky Yellows**. They are linear switches with a medium actuation force—smooth enough for fast typing but heavy enough to prevent accidental keystrokes. I carefully hand-lubed each switch using Krytox 205g0 to eliminate any scratchiness.

For keycaps, I chose a simple blank PBT set with an XDA profile. The uniform height of the XDA profile makes it incredibly easy to swap keys around while experimenting with different layouts.

## The Build Process

With the components sourced from three different continents, it was time to warm up the soldering iron.

### Diodes First

The most tedious part of the build is soldering the 42 surface-mount (SMD) diodes. These tiny components ensure that the keyboard matrix can detect multiple keypresses simultaneously without "ghosting."

Using tweezers and a magnifying glass, I carefully placed and soldered each diode, ensuring the polarity markings were aligned perfectly.

### Microcontrollers

The brains of the operation are two Pro Micro controllers—one for each half. I opted to use hotswap sockets for the microcontrollers. If one ever burns out or the USB port snaps off, I can easily replace it without having to desolder 24 pins.

### TRRS and Reset Jacks
Finally, I soldered the TRRS jacks (which allow the two halves to communicate) and the tiny reset buttons used to flash new firmware.

## Programming with QMK

Hardware is only half the battle. A 42-key keyboard is useless without complex firmware to manage layers, macros, and modifier keys. 

### The Base Layer

I stuck with a modified QWERTY layout for the base layer to retain some muscle memory, but moved the modifiers (Ctrl, Alt, Shift, GUI) to the "thumb cluster." This drastically reduces the need to stretch my pinky fingers.

### Mod-Tap Magic

The real power of QMK firmware lies in features like "Mod-Tap" and "Home Row Mods." 
Instead of dedicated modifier keys, I configured my home row keys (A, S, D, F) to act as standard letters when tapped quickly, but as Shift, Ctrl, Alt, and GUI when held down.

It takes a few weeks to get used to the timing, but once you do, your fingers literally never have to leave the home row.

## Final Thoughts

Building a custom keyboard from scratch was an incredible learning experience. While the first few weeks of re-learning how to type were frustrating, my typing speed has finally returned to normal, and more importantly, my wrist pain has completely disappeared.
