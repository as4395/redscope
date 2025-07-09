# Contributing to RedScope

Thank you for your interest in contributing to **RedScope**!

## Getting Started

1. Fork this repo
2. Clone your fork:
   ```bash
   git clone https://github.com/as4395/redscope.git
   cd redscope
   ```

Install dependencies:
```bash
npm install
```
Run the app:
```bash
npm run dev
```

## Code Guidelines

- Follow consistent formatting via Prettier (optional, but recommended).
- TypeScript is enforced with strict mode.
- UI components live in `src/renderer/components/`.
- All network logic is under `src/main/scan/`.

## Submitting Pull Requests

- All PRs should be rebased on the latest `main`.
- Keep PRs focused and minimal.
- Reference related issues if applicable.

## Reporting Bugs or Requesting Features

Open a new issue with the template provided in `.github/ISSUE_TEMPLATE.md`.
