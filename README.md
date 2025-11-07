# Naniku Visual Stories

A lightweight React single-page experience inspired by the provided wireframe. The layout highlights featured photography,
collection cards, and storytelling tiles using CDN-hosted React so it can run without a build step. All interactive code lives
in `public/src` so it can be edited without a bundler.

## Getting started

1. Start a simple static server from the project root:
   ```bash
   npm run dev
   ```
   This uses Python's built-in HTTP server to host the `public/` directory on port 8000.
2. Visit [http://localhost:8000](http://localhost:8000) in your browser.
3. Explore the responsive gallery-driven experience.

Static assets are delivered from the `public` directory, and Babel Standalone handles JSX transformation directly in the
browser.

Because the project relies on CDN builds of React, no package installation is required.
