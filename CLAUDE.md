# CLAUDE.md

This file provides guidance to Claude Code when working with this React project.

## Project Overview

This is a React learning project focused on **refs** and **portals** - two important React concepts for DOM manipulation and component rendering.

## Tech Stack

- **React 19.0.0** - Latest React version
- **Vite 4.4.5** - Fast build tool and dev server
- **ESLint** - Code linting with React-specific rules

## Project Structure

```
src/
├── App.jsx              # Main application component
├── main.jsx            # React entry point
├── index.css           # Global styles
├── components/
│   ├── Player.jsx      # Player component (likely using refs)
│   └── TimerChallenge.jsx  # Timer challenge component
└── assets/             # Static assets
```

## Development

### Running the Project
```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Key Concepts in Use

**Refs** - Direct DOM access and managing non-state values
- Used for input manipulation, animations, or integrating third-party libraries
- Prefer `useRef` hook for functional components

**Portals** - Rendering children outside the parent DOM hierarchy
- Useful for modals, tooltips, and overlays
- Created with `ReactDOM.createPortal()`

## Coding Standards

- Use functional components with hooks
- Follow React 19 best practices
- ESLint enforces React hooks rules and refresh patterns
- Keep components focused and modular
- Avoid using refs when state would be more appropriate

## Notes

- This appears to be a learning/practice project
- Not currently a git repository (consider initializing if needed)
- Development server runs via Vite (typically on http://localhost:5173)
