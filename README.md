# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.12.7 create --template minimal --no-types --add tailwindcss="plugins:none" --install npm ./
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## GitHub Pages

This project is configured for GitHub Pages with:

- `@sveltejs/adapter-static`
- static output in `docs/`
- automatic `BASE_PATH` handling (inferred from repo name for local builds)

To publish:

1. Run `npm run build` and commit the generated `docs/` files.
2. Push to the `main` branch.
3. In your repo settings, set Pages source to **Deploy from a branch** and select `main` + `/docs`.

If you use a custom domain and want root-relative output, build with `BASE_PATH= npm run build`.
