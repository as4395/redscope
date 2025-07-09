# RedScope Architecture Overview

RedScope is a session-based recon desktop application built with Electron, React, and Node.js.

## Architecture Diagram

    ┌─────────────┐
    │  Renderer   │  ← React + Tailwind (frontend)
    └────▲────────┘
         │ IPC (secure bridge)
    ┌────┴────────┐
    │  Preload    │  ← Controlled exposure of safe APIs
    └────▲────────┘
         │ IPCMain
    ┌────┴────────┐
    │  Electron   │  ← Main Process (Node.js context)
    └────▲────────┘
         │
    ┌────┴────────┐
    │  Scanner    │  ← Nmap, Masscan wrappers
    └────▲────────┘
         │
    ┌────┴────────┐
    │  Storage    │  ← JSON, filesystem persistence
    └─────────────┘


## Modules Breakdown

### 1. `src/main`
- Bootstraps the Electron app (`main.ts`)
- Handles all backend IPC logic
- Runs Nmap and Masscan via `child_process`

### 2. `src/renderer`
- All UI logic using React and Tailwind
- Contains pages, components, and shared logic

### 3. `src/preload.ts`
- Secures access to Node APIs via `contextBridge`
- Exposes limited functions like `scan`, `session` to the frontend

### 4. `config/`
- Vite, Tailwind, and TypeScript configuration

### 5. `public/`
- Static assets like `icon.png`, `index.html`

---

This modular structure ensures maintainability, separation of concerns, and strong cross-platform support.
