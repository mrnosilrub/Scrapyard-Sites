# Astro Blank Template

Minimal Astro starter with Tailwind CSS and MDX enabled out of the box. Uses pnpm for package management, Biome for formatting/linting, and Vitest for testing.

## Features

- Tailwind CSS via `@astrojs/tailwind`
- MDX via `@astrojs/mdx`
- Biome formatter/linter
- Vitest test runner
- Zero demo content — clean slate to build from

## Requirements

- Node.js 18+ (LTS recommended)
- pnpm installed globally (`npm i -g pnpm`)

## Quick start

```bash
pnpm install
pnpm dev
```

Open http://localhost:4321

## Scripts

- `pnpm dev`: Start the dev server
- `pnpm build`: Production build to `dist/`
- `pnpm preview`: Preview the production build locally
- `pnpm format`: Format with Biome
- `pnpm lint`: Lint with Biome
- `pnpm test`: Run tests with Vitest

## Project structure

```
├─ public/                # Static assets (copied as-is)
├─ src/
│  ├─ layouts/            # Shared page layouts
│  ├─ pages/              # Routes → `src/pages/*.astro|mdx`
│  ├─ styles/             # Global styles (Tailwind)
│  └─ components/         # Your components (empty)
├─ astro.config.mjs       # Astro config (Tailwind + MDX integrations)
├─ tailwind.config.js     # Tailwind config
├─ biome.json             # Biome (formatter/linter) config
└─ pnpm-lock.yaml         # Lockfile (managed by pnpm)
```

## Customization

- Page title/content: edit `src/pages/index.astro`
- Global styles: edit `src/styles/globals.css`
- Layout markup: edit `src/layouts/Base.astro`
- Tailwind: adjust `tailwind.config.js`
- MDX pages: create files in `src/pages/*.mdx` or `src/content/`

If you know your canonical site URL, set it in `astro.config.mjs` under `site`.

## Deploy

Build locally and deploy the `dist/` directory to your host.

```bash
pnpm build
```

### GitHub Pages

1. Create a new GitHub repository.
2. Push your code to the repo (see below).
3. Use your preferred deploy method:
   - GitHub Actions (Astro docs: `https://docs.astro.build/en/guides/deploy/github/`)
   - Any static hosting that serves the `dist/` directory

## Create and push to a new GitHub repo

With Git installed, run:

```bash
git init
git add -A
git commit -m "Initialize blank Astro template"
git branch -M main
# Create a new repo on GitHub, then replace the URL below
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

If you use GitHub CLI, you can create the repo non-interactively:

```bash
gh repo create <your-repo> --public --source . --remote origin --push
```

## License

MIT (or your choice)


