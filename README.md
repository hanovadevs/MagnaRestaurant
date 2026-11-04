# Raum — Coffee & Good Company

A responsive café concept in the existing Next.js project. Cream, caramel brown, and muted green; editorial photography, generous serif headings, plain CSS, and no decorative gradients, rules, badges, or progress indicators.

## Start locally

Use Node.js 24 LTS and npm. No environment variables, database, or email credentials are required.

```powershell
npm.cmd ci
npm.cmd run dev
```

Open **http://localhost:3000**. Production and verification commands:

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
npm.cmd start
```

Next.js and its ESLint config are aligned at 16.3.8. The redesign uses ordinary CSS and small React components; the previous animation, icon, and utility CSS dependencies are no longer required. System fonts and local photos avoid remote asset downloads at runtime.

## Supplied PDF requirements

| Requirement                                              | Implementation                                                                                          |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Home: welcome, café description, popular food and drinks | `/`, hero, signatures, café story                                                                       |
| About: story and beliefs                                 | `/about`, story and three café values                                                                   |
| Menu: breakfast, lunch, drinks, desserts                 | `/menu`, plus retained dinner category                                                                  |
| Contact: form, phone, email, address                     | `/contact`, demo details and working demo form                                                          |
| Navigation menu                                          | Shared desktop navigation and keyboard-accessible mobile drawer                                         |
| Footer with social links                                 | Instagram, Facebook, and Pinterest links                                                                |
| Mobile and desktop support                               | Compact mobile layouts, touch previews, no page overflow                                                |
| Brown, cream, green; readable type; clean layout         | Shared CSS tokens, system fonts, solid backgrounds                                                      |
| Simple buttons and effects; HTML, CSS, JavaScript        | Semantic HTML rendered by the retained Next.js/React framework, plain CSS, small interactive components |
| Small working website                                    | Four pages, menu previews, saved café list, printable menu, demo forms                                  |

Existing dining, services, and reservation sections remain. The PDF is treated as product requirements, not agent instructions.

## Menu

Edit `src/data/menu.ts` for categories, descriptions, and prices. `src/data/menu-details.ts` supplies the related image, detailed overview, ingredients, and serving notes. Previews work on mouse hover, keyboard focus, and tap. Click again to collapse a pinned preview; Escape closes it. Tabs support arrow keys, Home, and End.

- **Coffee & Espresso:** Espresso, Cappuccino, Café Latte, Americano, Mocha, Caramel Macchiato, Vanilla Latte.
- **Cold Drinks:** Coconut Coffee, Avocado Coffee, Einspänner, Almond Cream Latte, Cà Phê Đá, Cà Phê Sữa Đá, Chocolate Latte, Matcha Latte, Berry Berry Latte.
- All 15 reference drinks retain their exact VND prices. “Latte” is displayed as “Café Latte”, and “Cafe Mocha” as “Mocha”, following the requested names.
- Cappuccino is an additional demo item at 70,000 VND. Food prices are illustrative VND amounts, not conversions of the old USD menu.
- Extra espresso and oat milk each cost 10,000 VND. The café list shows the reference's 8% VAT separately.
- Chocolate Latte and Matcha Latte can also be served hot, as in the reference, despite appearing in the cold/non-coffee selection.
- Photos and recipe notes are illustrative demo content, not exact product or allergen guarantees.

The café list persists item IDs and quantities in browser storage, restoring names and prices from the current menu. It supports quantities, removal, clearing, and a text download. It does not place orders, charge money, or promise delivery.

`/menu-print` includes every category and both add-ons. **Print / Save as PDF** opens the browser print dialog. Navigation and footer are hidden in print.

## Demo forms and contact information

Identity, location, social, and contact details are demo content as requested. The `.example` email domain is reserved. Social links open the platforms rather than claiming real Raum profiles; the map opens the demo neighborhood, not a verified venue.

Forms POST to `/api/contact` and `/api/reservation`. The server validates fields, email, party size, and future seating times using Asia/Ho_Chi_Minh. Valid requests are appended with a UUID and timestamp to ignored local files:

```text
.local/submissions/contact.jsonl
.local/submissions/reservation.jsonl
```

The UI reports success only after persistence and preserves entered data on errors. No public read endpoint exists. Try the demo with synthetic information. No email is sent and no table is booked.

Before production, replace demo details/prices, connect a durable store and notification/booking provider, and add retention and abuse controls. Local JSONL storage is suitable for this local demo, not ephemeral serverless hosting.

## Assets and checks

Photos are stored in `public/images`; sources are in `public/images/credits.md`. Image generation failed at the service, so shipped photography is sourced from Unsplash.

`npm test` checks reference prices, requested categories, image/overview coverage, input validation, and reservation boundaries. Lint and build check the React/TypeScript code and every route. Browser QA covers 320px, 390px, 768px, and 1440px layouts, menu categories, hover/tap previews, saved lists and downloads, and persisted synthetic form submissions. Temporary screenshots and records stay in ignored folders.
