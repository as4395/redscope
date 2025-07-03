# RedScope

**RedScope** is a cross-platform Electron application for red teamers and offensive security engineers to perform structured, session-based network reconnaissance with integrated support for Nmap and Masscan. RedScope helps visualize hosts, ports, and services through a persistent and interactive UI.

---

## Features

- Persistent recon sessions with encrypted local storage
- Native integration with Nmap and Masscan
- Target management: hosts, ports, protocols, services
- Structured scan output with filters and annotations
- Clean, responsive UI built with Tailwind CSS
- Keyboard-first navigation and dark mode support
- Plugin-ready architecture (planned extensibility)

---

## Tech Stack

- **Electron** — Desktop app framework
- **React** — Frontend UI
- **Tailwind CSS** — Styling system
- **Node.js** — Main process + scanning logic
- **Vite** — Lightning-fast build system
- **TypeScript** — Fully typed project structure

---

## Requirements

- Node.js v20+
- Nmap (installed and accessible via system PATH)
- Masscan (optional, for additional scan speed and depth)

---

## Getting Started

### Clone and Install

```bash
git clone https://github.com/as4395/redscope.git
cd redscope
npm install
```

## Run in Development Mode
```
npm run dev
```

## Build for Production
```
npm run build
```
