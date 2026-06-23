---
title: Godot Dungeon Generation
description: A Godot project for generating cave-like dungeon layouts from simple rules, first explored in GDScript and later through a C++ extension.
category: Game Systems
status: Procedural system
featured: true
order: 3
cover:
  type: image
  src: /projects/dungeon-generation/card.svg
  alt: Stylized thumbnail for the Godot dungeon generation project.
  position: center
heroCover:
  type: image
  src: /projects/dungeon-generation/hero.svg
  alt: Wide hero thumbnail for the Godot dungeon generation project.
  position: center
media:
  - type: youtube
    src: https://www.youtube.com/embed/Y8MgzyOL0tg
    title: Dungeon generation demo video.
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
  - Restores the original dungeon generation video from the old portfolio.
  - Generates cave-like layouts from noisy grid data.
  - Uses repeated erosion passes to shape more natural spaces.
  - Explores a C++ extension path for heavier generation work.
---

## About

Godot Dungeon Generation explores how cave and dungeon shapes can come from simple rules. The project starts with noisy grid data and repeatedly changes the cells until the result becomes a more usable level shape.

## What I worked on

I worked on the generation behavior: setting up the grid, creating noise, checking neighbors, running erosion passes, and bringing the generated result back into Godot.

## What I like about it

I like this project because the result is visual and immediate. It also shows a natural progression from a GDScript prototype toward a C++ extension for heavier generation work.
