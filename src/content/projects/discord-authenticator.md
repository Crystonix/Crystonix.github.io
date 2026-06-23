---
title: Discord Authenticator
description: A study project exploring login flows with a SvelteKit interface, a Rust service, Discord OAuth, Redis sessions, and PostgreSQL-backed data.
category: Web products
status: Study project
featured: true
order: 2
tags:
  - Rust
  - Axum
  - SvelteKit
  - OAuth2
  - Redis
  - PostgreSQL
  - Docker
links:
  repo: https://github.com/Crystonix/Auth
highlights:
  - Separates the user-facing SvelteKit app from the Rust service handling the login flow.
  - Uses Redis for session storage and PostgreSQL for application data.
  - Runs as a Docker-based local service setup.
---

## Overview

Discord Authenticator is a study project about understanding how login systems work beneath the interface. It uses Discord OAuth for the login flow and separates the browser-facing application from the service that handles the backend responsibilities.

## My focus

The project combines a SvelteKit frontend with a Rust service. The backend work includes routing, session handling, database access, service composition, and local infrastructure through Docker.

## Why it matters

This project belongs in the portfolio because it shows backend and frontend work together in one focused application. It is not presented as a product launch; it is a technical study with a clear purpose and a working service structure.
