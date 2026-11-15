# CampusCare — Campus Cleanliness Feedback Portal

A clean, responsive, frontend-only website created with **semantic HTML5**, **pure CSS**, and **minimal, easy-to-understand JavaScript**.

---

## How to Run

1. Make sure `index.html`, `styles.css`, and `app.js` are in the same folder.
2. Double-click or open `index.html` in any web browser (Chrome, Edge, Firefox, Safari).
3. No server, node packages, or build tools are required.

---

## File Structure & Overview

| File | Purpose | Key Details |
|---|---|---|
| `index.html` | Page structure | Clean semantic layout with Navbar, Summary Stats, Report Form, and Recent Reports list. |
| `styles.css` | Styling & Layout | Modern responsive design using Flexbox, CSS Grid, and custom color variables. |
| `app.js` | Minimal interactivity | Handles report list rendering, live summary count updates, form submission, status toggle, and filter. (~60 lines). |

---

## Features

- **Live Counter Cards**: Displays Total Reports, Pending, and Resolved counts in real time.
- **Submit Report Form**: Allows users to input an issue title, category, building/location, and description.
- **Dynamic Report Feed**: Displays reported issues with category badges and status tags.
- **Status Toggle**: One-click button to switch issue status between *Pending* and *Resolved*.
- **Filter**: Filter reports by status (*All*, *Pending*, *Resolved*).
- **Fully Responsive**: Adapts smoothly to mobile screens, tablets, and desktop displays.
