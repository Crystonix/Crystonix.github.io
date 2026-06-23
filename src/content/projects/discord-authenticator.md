---
title: Discord Authenticator
description: Study project with a SvelteKit frontend and Rust service for a Discord OAuth login flow, session storage, and PostgreSQL-backed application data.
category: Web applications
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
  - Rust service built around Axum, SQLx, Redis, OAuth2, cookies, and tracing.
  - SvelteKit frontend for the browser-facing login flow.
  - Dockerized service composition for the application and backing services.
---

## Project context

Discord Authenticator is a study project focused on understanding how login and identity flows work below the surface. Instead of treating authentication as only a UI feature, the project separates the browser-facing application from the backend service that handles the flow.

## Technical focus

The backend is written in Rust and uses Axum, SQLx, Redis, OAuth2, cookies, Tokio, and tracing. The frontend is built with SvelteKit and provides the user-facing part of the application.

## Why it belongs here

This project is a good portfolio candidate because it demonstrates backend boundaries, service composition, typed database access, and the ability to reason about application infrastructure beyond a single frontend framework.
