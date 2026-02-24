# Λατομείο Θίσβης — Static Website (GitHub Pages)

Production-ready στατικό site (HTML/CSS/JS) για λατομείο αδρανών υλικών στη Θίσβη Βοιωτίας.

## Δομή φακέλων

```text
.
├── index.html
├── products.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── assets
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── main.js
│   └── img
│       ├── favicon.svg
│       ├── hero.svg
│       ├── quarry-1.svg
│       ├── quarry-2.svg
│       ├── quarry-3.svg
│       ├── quarry-4.svg
│       ├── quarry-5.svg
│       └── quarry-6.svg
└── README.md
```

## CHANGE HERE σημεία

Αναζήτησε στο project το σχόλιο `CHANGE HERE` και ενημέρωσε:
- Επωνυμία, διεύθυνση, τηλέφωνο, email.
- Canonical URLs, OpenGraph URLs/images.
- Προϊόντα/κλάσματα.
- Google Maps iframe coordinates.
- Formspree endpoint στο `contact.html` (`action="https://formspree.io/f/your-form-id"`).

## Formspree ενεργοποίηση

1. Δημιούργησε φόρμα στο Formspree.
2. Πάρε το endpoint τύπου `https://formspree.io/f/xxxxx`.
3. Αντικατάστησε το `your-form-id` στο `contact.html`.
4. Δοκίμασε submit από deployed site.

Fallback: οι χρήστες μπορούν να στείλουν email μέσω του `mailto:` link.

## Αλλαγή χρωμάτων / branding

Στο `assets/css/styles.css` άλλαξε τα CSS variables στην αρχή:
- `--primary`, `--secondary`, `--accent`, `--bg`.

## Αντικατάσταση φωτογραφιών

1. Βάλε δικές σου εικόνες στο `assets/img/` με τα ίδια ονόματα.
2. Προτεινόμενα μεγέθη:
   - `hero.svg`: 1600x900+
   - gallery: 1200x900+
3. Κράτα compressed αρχεία για ταχύτητα.

## GitHub Pages deployment

### Επιλογή A (root)
1. Push στο default branch (π.χ. `main`).
2. Στο GitHub: **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main` και folder `/ (root)`.

### Επιλογή B (`/docs`)
1. Μετέφερε τα αρχεία στο `/docs`.
2. Στο **Settings → Pages** επίλεξε `main /docs`.

## Τοπικός έλεγχος

```bash
python -m http.server 8000
```

Άνοιξε: `http://localhost:8000`

## Σημειώσεις

- Cookie-free by default (χωρίς analytics).
- Υπάρχει προαιρετικό Plausible snippet ως σχόλιο στο `contact.html`.
- Περιλαμβάνεται basic front-end validation στη φόρμα (`assets/js/main.js`).
