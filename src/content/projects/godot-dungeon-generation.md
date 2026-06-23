---
title: Godot Dungeon Generation
description: Cellular automata cave-generation system implemented first in GDScript and then ported to a C++ GDExtension for stronger runtime performance and larger grid support.
category: Game development
status: Performance-focused system
featured: true
order: 3
tags:
  - Godot
  - C++
  - GDExtension
  - GDScript
  - Procedural generation
  - Cellular automata
links:
  repo: https://github.com/Crystonix/CaveGen-GDExtension
highlights:
  - Cellular automata erosion rules for cave and dungeon generation.
  - Godot-facing C++ class exposed through GDExtension bindings.
  - Clear comparison story between a GDScript implementation and a native extension.
---

## Project context

This project explores procedural cave and dungeon generation in Godot. The core idea is to generate noisy grid data and repeatedly apply cellular automata erosion rules until the result becomes usable level geometry.

## Technical focus

The project started with a GDScript implementation and then moved the generation logic into a C++ GDExtension. That makes the project a strong technical case study because it is not only about the algorithm, but also about moving expensive logic across a runtime boundary when the project needs more performance headroom.

## Why it belongs here

This is one of the clearest portfolio stories: a gameplay/system problem, an initial high-level implementation, and a lower-level implementation path that exposes the system back to Godot.
