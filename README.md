# Yolanda Mejane: Portfolio

Personal portfolio built with React and Tailwind CSS. Live at https://my-portfolio-83bb.onrender.com/

## Editing the content
All the text, links, projects and skills are in one file: `src/data/content.js`.
Change it there and the components in `src/components` update by themselves.

- Add what you did at Kandhgroup under `experience[0].highlights`
- Add a project: copy an object in the `projects` list and add a screenshot to `src/assets/projects/`
- Put your latest CV (PDF) at `public/Yolanda_Mejane_Resume.pdf`

## Run locally
```bash
npm install
npm start      # http://localhost:3000
```

## Build
```bash
CI=true npm run build
```

## Structure
```
src/
  data/content.js        all text, links and project info
  components/            Navbar, Homepage (hero), AboutMe, Experience, Skills, ProjectsPage, Contact, Footer, Section
  hooks/                 useTheme (light/dark), useActiveSection (navbar highlight)
  assets/                profile photo and project screenshots (WebP)
```

Features: light and dark mode (follows the visitor's system setting and remembers their choice), responsive layout, contact form via EmailJS, reduced-motion support, link-preview image for sharing.
