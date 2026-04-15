# Night Shift Jäynä

Small application for Night Shift Jäynä by International and Masters students of Aalto University.

Built with React and deployed via GitHub Pages.

## Quick start

```bash
npm install
npm run dev         # start dev server
npm run build       # production build
npm run deploy      # deploy to GitHub Pages (requires gh-pages and homepage set)
```

## Notes

- Set `"homepage": "https://USERNAME.github.io/REPO"` in `package.json` (replace USERNAME and REPO).
- Ensure `gh-pages` is installed and `predeploy`/`deploy` scripts are present:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
