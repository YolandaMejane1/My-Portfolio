# Portfolio update: what to change

Only new and changed files are in this zip. Work from your `My-Portfolio` folder.

## Step 1: copy the files in
Copy everything in this zip into your project. The folder paths match, so `src/...`, `public/...` and the two files at the top (`README.md`, `tailwind.config.js`) drop straight onto your existing ones. Say yes to replacing.

## Step 2: delete the files that are no longer used
From your project folder (Mac Terminal):
```bash
cd ~/path/to/My-Portfolio
git rm -f src/App.css src/App.test.js src/logo.svg \
  "src/assets/Diamond Tech.png" "src/assets/E-commerce Dashboard.png" "src/assets/E-commerce Store.png" \
  "src/assets/Easy Tickets.png" "src/assets/FitnessTracker.png" "src/assets/Kodemor.png" \
  "src/assets/ProfileImage.png" "src/assets/Tic Tac Toe.png" "src/assets/Untitled design (1).png" \
  "src/assets/Weather App.png" "src/assets/Yolanda. (1).png" "src/assets/Yolanda..png" \
  "src/assets/profile picture.jpeg" src/assets/s.gif src/assets/s.mp4 src/assets/s.png \
  "public/Yolanda Sivuyile Mejane Resume (2).pdf" "public/Yolanda Sivuyile Mejane Resume (3).pdf"
```
(If one file is "not found", it's already gone. Carry on.)

## Step 3: remove the packages the new site doesn't use
```bash
npm uninstall bootstrap cra-template react-bootstrap react-intersection-observer react-router-dom react-scroll react-simple-typewriter swiper
```

## Step 4: put your new CV in place
Export your updated resume as a PDF and save it as `public/Yolanda_Mejane_Resume.pdf` (replace the old file). The "Download CV" button opens that file.

## Step 5: add your Kandhgroup work
Open `src/data/content.js`, find `experience`, and fill in `highlights` for Kandhgroup, for example:
```js
highlights: [
  'Built [what] with [tools] that [result].',
  'Another achievement, ideally with a number.',
],
```
They appear on the site as soon as you add them. Until then the card shows only the role and dates.

## Step 6: check it locally, then publish
```bash
npm install
npm start
```
Look through the site in both light and dark mode, on your phone too if you can (`npm start` prints a network address). Then:
```bash
CI=true npm run build
git add -A && git commit -m "Redesign portfolio" && git push
```
Render redeploys on its own after the push.

## Still to do by hand
- Replace `src/assets/projects/techblog.webp` with a real screenshot of your blog (keep the file name, around 960 px wide).
- In the EmailJS dashboard, restrict the allowed domains to your site and set a send limit.
- Check that the Live and Code links on every project card open correctly.
