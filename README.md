# Krunal Akbari portfolio

Run `npm run build` to generate the static website in `dist/`. No dependencies need installing.
Run `npm start` to preview the build at http://localhost:5173.

`index.html` is the homepage; `work.html` contains the full six-project portfolio. Both pages use `styles.css`, and project screenshots are in `work/`. The build validates image references across both pages and the shared stylesheet before copying them to `dist/`.

The website is plain HTML, CSS, and JavaScript with local images. `vercel.json` configures Vercel to build and serve `dist/` as a static website. Connect this repository's `main` branch to the existing Vercel project with the repository root as the Root Directory.

The contact section links to the GitHub profile. Add a public email, booking link, or other social profiles in `index.html` when available.
