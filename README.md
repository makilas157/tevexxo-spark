# Tevexxo Spark

Update the existing Tevexxo project. Do NOT redesign or change anything other than what is listed below.

LOGO Replace the current logo mark in the Navbar and Footer (the hexagon icon with the orange dot) with the uploaded logo image (the orange arrow/swoosh mark on a white circular background). Use it at a small circular size (~36px in the navbar, ~32px in the footer) with a subtle primary-color ring/glow around it. Keep the "TEVEXXO" wordmark text next to it exactly as it is now.

NAVBAR — ADD MISSING PAGES Add "Services" and "Products" as new links in the navbar, positioned between "Home" and "Projects". Final navbar order: Home, Services, Products, Projects, Why Tevexxo, Blog, Contact Also add these same two links to the Footer's "Navigate" column, in the same order as the navbar.

NEW PAGE — /services Create a dedicated Services page (same visual style/components as the existing Projects and Why-Tevexxo pages: PageHero + glow-card grid + Reveal animations). Show 6 services as cards, each with an icon, title, short description, and 3 bullet points:

AI & Intelligent Solutions

Web & Software Development

Digital Product Development

Data & Automation

UI/UX & Experience Design

Cloud & Scalable Technology End with a CTA section linking to Contact.

NEW PAGE — /products Create a dedicated Products page in the same visual style. Show 6 Tevexxo products in an asymmetric grid (2 large + 4 small cards), each with an icon, category label, product name, short description, and an "Explore" button linking to Contact:

Tevexxo Orbit — AI copilot orchestration platform (large)

Tevexxo Pulse — real-time analytics & automation dashboards

Tevexxo Grid — cloud infrastructure & scaling toolkit

Tevexxo Forge — internal tools & workflow builder

Tevexxo Lens — computer vision & document intelligence

Tevexxo Relay — integration & automation hub (large)

HOME PAGE — ROTATING ORBIT CIRCLE (replace the mascot on the right side of the hero ONLY) On the home page hero, right side, replace the current mascot image with a rotating circular "orbit" visual:

A center hub showing the Tevexxo logo inside a glowing circular badge.

A grid-textured circular disc behind it (same grid-line visual language used elsewhere on the site) with a dashed outer ring.

6 small project cards (icon + short name) placed evenly around the circle, continuously and smoothly rotating around the center (slow, ~40s per full rotation, linear, infinite loop). The cards themselves must stay upright/readable at all times while orbiting (not spinning with the ring).

Each orbiting card links to the Projects page.

Use these 6 project names on the orbit: Nebula Copilot, Orbit Ledger, Forge OS, Relay Grid, Aether Studio, Pulse Analytics (same names already used on the Projects page).

Respect prefers-reduced-motion (pause/slow the rotation for users who have that setting on). Do not change anything else on the home page — keep the headline, subtext, buttons, stats, services preview, process section and CTA exactly as they are.

CURSOR EFFECT — orange dot + connected grid lines (site-wide, desktop only) Add a subtle custom cursor effect layered on top of the whole site (all pages), on top of the normal OS cursor (don't hide the OS cursor):

A medium-sized glowing orange dot that follows the mouse position with a light smoothing/lag (not instant — should feel like it's gently trailing the real cursor).

As the cursor moves, draw thin orange lines connecting the dot to nearby points of an invisible grid (grid spacing matching the site's existing background grid, ~56px), with small dot markers at those grid points. Lines/points should fade based on distance from the cursor (closer = brighter).

Effect should fade in when the mouse is active and fade out when it leaves the window.

Only enable on devices with a fine pointer + hover support (desktop/mouse) — disable entirely on touch devices.

Must not block clicks on any button/link (pointer-events: none) and must respect prefers-reduced-motion (disable animation entirely for those users).

Do not touch: existing hero copy, existing Services shown inline on the home page, the Process/Approach section, the Blog/Contact/Projects/Why-Tevexxo page content, footer contact details, or any other section not mentioned above.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bf23716d-a92c-42db-ab26-b5325549e54d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
