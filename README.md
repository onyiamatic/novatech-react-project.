# NOVATECH — React JS Web Development Project

A responsive technology-store concept built with React. This is a student project demonstration; product prices, contact details and business information are sample content.

## Features
- Home, About, Products and Contact pages
- Client-side navigation with React Router
- Reusable product cards rendered with `.map()`
- Product search and category filtering
- Add-to-cart counter saved in Local Storage
- Controlled contact form with required-field and email validation
- Responsive layout for mobile, tablet and desktop

## Technologies
- React
- JavaScript
- React Router
- Vite
- HTML and CSS

## Requirements
Install a current Node.js LTS version.

## Run locally
1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Open Terminal → New Terminal.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL printed in the terminal.

## Build for deployment
Run `npm run build`. Vite creates the production website in the `dist` folder.

## Deploy
You can import this repository into Netlify or Vercel. Use:
- Build command: `npm run build`
- Publish/output directory: `dist`

## GitHub
Do not upload `node_modules` or `dist`. The `.gitignore` file excludes them.

## Important project notes
- The contact form currently validates inputs in the browser and displays a demo success message. It does not send email or store messages on a server.
- The cart is a front-end demonstration and does not process payments or orders.
- Replace sample contact information and verify product details before presenting the site as a real business.
- Make sure you can explain the React code and features during your project demonstration.
