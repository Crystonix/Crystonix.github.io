---
title: Godot Dungeon Generation
description: A procedural cave and dungeon generation project for Godot, built around cellular automata and later explored through a native C++ extension.
category: Game systems
status: Procedural system
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
  - Generates cave-like dungeon layouts from noisy grid data.
  - Uses erosion rules to shape more natural-looking spaces.
  - Explores a C++ GDExtension path for heavier generation work.
---

## Overview

Godot Dungeon Generation explores how cave and dungeon layouts can be produced from simple rules. The project starts from noisy grid data and repeatedly applies cellular automata erosion until the result becomes a usable level shape.

## My focus

The main focus is the generation behavior: grid setup, noise, neighbor checks, erosion passes, and exposing the result back into Godot. The project was first explored in GDScript and then moved toward a C++ GDExtension for more demanding generation work.

## Why it matters

This is one of the clearest game-system pieces in the portfolio. It has a visible result, a concrete algorithmic idea, and a progression from prototype scripting toward a more performance-oriented implementation.
