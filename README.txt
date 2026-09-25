webnwillow website
==================

A static multi-page site. There is no build step.
Open index.html in a browser, or serve the folder:  python -m http.server 8000
Everything (fonts included) is stored locally, so the site works offline.

Pages
- index.html              Home (overview of all four services + marketing plans)
- web-development.html    Shopify, single page, custom, e-commerce, classifieds, maintenance
- app-development.html    Android, iOS, Flutter, desktop, app maintenance
- digital-marketing.html  Sprout / Bloom / Canopy plans + comparison table
- it-support.html         Hosting, troubleshooting, security, domain & email, consultation
- about.html              About us: studio story, values, team
- blog.html               Blog: post list + full posts on one page
- contact.html            Enquiry form (opens the visitor's email app) + socials

Shared files
- assets/css/site.css   all styles
- assets/js/site.js     header, footer, icon set, shapes, contact form
- assets/img/         photos (.jpg) and background-removed cut-outs (.png)

Edit before going live (all at the top of assets/js/site.js):
- email:   SITE.email
- socials: SITE.social.instagram / facebook / linkedin / pinterest
           (currently point to the network home pages; replace with your profile URLs)

Brand colours
- Lime        #B5F800   (outer background + accents)
- Bright blue #0036FF   (outer background + accents)
- Indigo  #363B96   (deep #262A73, light #5B60C4, ink #17193F)
- Butter  #F2F29A
- Tints:  periwinkle #B8BBEE, mist #E8E9FA, paper #FFFEF4

Fonts (assets/fonts, SIL Open Font License, free for commercial use)
- Bricolage Grotesque     body text, big headings, wordmark
- Big Shoulders Display   condensed poster headlines and labels
- DM Serif Display italic accent words and the "n" in webnwillow

Logo
- Traced from the official 4500px logo files (exact shapes, indigo #363B96):
  assets/webnwillow-logo-full.svg   W icon + wordmark (header, footer)
  assets/webnwillow-logo.svg        wordmark only (home hero, About heading)
  assets/webnwillow-mark.svg        W icon (favicon), plus -icon-butter / -icon-indigo tiles
- The same shapes are built into assets/js/site.js as symbols "logo-full", "logo"
  and "wmark"; their colour follows CSS "color".

Icons
- Service, package and feature icons are multi-colour "sticker" SVGs,
  defined in STICKERS in assets/js/site.js (ids s-bag, s-sprout, ...).
- Small UI icons (arrows, checks, socials) are line icons in ICONS (ids i-...).

To publish: upload this folder to any static host
(Netlify drop, Vercel, GitHub Pages, cPanel public_html).
The _old/ folder holds the previous one-page version and does not need uploading.

Caching (vercel.json)
- Images and logo SVGs are cached by browsers for 30 days, fonts for 1 year.
- When you REPLACE an image file with the same name, bump its version in the HTML
  (e.g. team-askar.webp?v=1 -> ?v=2) so visitors get the new one immediately.
- HTML, CSS and JS are always re-checked, so page edits show up right away.
