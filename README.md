# The Reading Elf

Frontend website for **The Reading Elf**, built with React and Vite.

## Prerequisites

Install the following before running the project:

- **Node.js:** `20.19+` or `22.12+`
- **npm**
- **Git**

You can check your installed versions with:

```bash
node -v
npm -v
git --version
```

## Clone the Repository

```bash
git clone https://github.com/enlivo/remap-reading-elf.git
cd remap-reading-elf
```

## Install Dependencies

The project includes a `package-lock.json`, so use:

```bash
npm ci
```

If you are actively changing dependencies, use `npm install` instead.

## Run the Project Locally

Start the Vite development server:

```bash
npm run dev
```

Vite will print the local development URL in the terminal. By default it is usually:

```text
http://localhost:5173
```

Open that URL in your browser.

## Available Pages

The site includes the following routes:

```text
/
 /books
 /story-box
 /experience
 /events
 /our-story
 /blog
```

## Build for Production

Create an optimized production build:

```bash
npm run build
```

The generated production files will be placed in:

```text
dist/
```

## Preview the Production Build

After building, preview the production version locally:

```bash
npm run preview
```

Vite will print the preview URL in the terminal.

## Run Lint Checks

```bash
npm run lint
```

## Recommended Validation Before Pushing Changes

Run:

```bash
npm run build
npm run lint
```

Both commands should complete successfully before changes are pushed.

## Tech Stack

- React 19
- Vite 8
- Motion
- Oxlint

## Environment Variables

The current project does **not require any environment variables** to run locally.

No `.env` file is required for the current frontend build.

## Quick Start

If Node.js and Git are already installed:

```bash
git clone https://github.com/enlivo/remap-reading-elf.git
cd remap-reading-elf
npm ci
npm run dev
```

Then open the local URL shown by Vite in your browser.

## Production Build Quick Start

```bash
npm ci
npm run build
npm run preview
```

---

Repository: `enlivo/remap-reading-elf`
