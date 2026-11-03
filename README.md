# Portfolio

Static site: push it to GitHub and enable Pages (Settings > Pages > Source: GitHub Actions).

- **Text:** everything lives in `js/content.js`. Anything starting with `[` is a placeholder and shows highlighted until you replace it.
- **Colors and fonts:** the variables at the top of `css/style.css`.
- **Images** (a missing file shows a striped placeholder with the expected name):
  - `assets/photo.jpg` profile photo
  - `assets/projects/<id>.png` (phis, barn, iot, soc) shown in the project story
  - `assets/certs/<id>.png` (cyberops, aws-cloudops, next) badge images
  - `assets/activities/<id>.jpg` (securinets, ctf, workshops, platforms)
- To add a project, certification or activity, copy an existing entry in `content.js`.
- Preview locally: `python3 -m http.server` in this folder.
