## Demo Yard 3 — Comprehensive Wireframe and Full Copy

- **Scope**: `demos/demo-yard-3/`
- **Goal**: Provide an exhaustive wireframe for structure, layout, interactions, and include the site’s copy in full for all pages.

### URL map
- **Home**: `index.html`
- **Services**: `services.html`
- **Process**: `process.html`
- **Accepted Materials**: `accepted-materials.html`
- **About Us**: `about.html`
- **Our Team**: `our-team.html`
- **Contact**: `contact.html`
- **FAQ**: `faq.html`

### Shared elements
- **Top banner**: link back to ScrapyardSites
  - Copy: “Return to ScrapyardSites.com”
- **Header**: sticky, site mark and title
  - Logo: `assets/logo.svg`
  - Site title text: “Premium Demo”
  - Primary nav: Services · Process · Materials · About Us · Our Team · Contact · FAQ
  - Primary CTA: “Request a Quote” → `contact.html`
- **Mobile menu**: full-screen tray with same nav + CTA
  - CTA text: “Request a Quote” → `contact.html`
- **Footer**
  - Copy: “© [dynamic year] Scrapyard Sites — All rights reserved.”
- **Brand/Colors (tailwind config overrides in pages)**
  - `brand.orange` = `#4169e1`, `brand.steel` = `#5E6367`, `brand.charcoal` = `#2B2B2B`
- **SEO/Meta (present on all pages with variations)**
  - `og:image`: `assets/hero.jpg`
  - Favicon: `assets/logo.svg` and `assets/logo.png`
  - JSON‑LD `LocalBusiness` block with address and phone.
- **Key interactions (JS in `script.js`)**
  - Mobile menu open/close, body scroll lock, hide/show top banner
  - Active nav highlight based on `location.pathname`
  - `<details>` accessibility attributes (aria-expanded)
  - Animated counters for `.stat-number` on intersection
  - Simple AOS fade-in via `data-aos` + IntersectionObserver
  - Materials card deep-link opening corresponding accordion section
  - Mobile materials carousel indicators (on small screens)

---

## Home — `index.html`

### Hero section (`#top`)
- Background: `assets/hero.jpg` dimmed overlay
- Copy:
  - H1: “Top Dollar for Scrap Metal — Fast, Fair, & Reliable”
    - Exact lines:
      - “Top Dollar for”
      - “Scrap Metal”
      - “Fast, Fair, & Reliable”
  - Subcopy: “Serving the metro area with 24‑hour turnarounds and honest weights.”
  - CTAs:
    - Primary: “Request a Quote” → `contact.html`
    - Secondary: “Our Services ↓” → `#services`

### Our Core Services (`#services`)
- Section copy:
  - H2: “Our Core Services”
  - Subcopy: “Comprehensive scrap buying, container rental, and on-site demolition.”
- Cards (3):
  - “Ferrous & Non‑Ferrous Buying” — “Competitive pricing on steel, aluminum, copper, brass, and more.” → `services.html#buying`
  - “Industrial Container Service” — “Scheduled roll‑off swaps to keep your operation moving.” → `services.html#containers`
  - “Demolition & Clean‑Up” — “Safe, insured crews for on‑site dismantling and hauling.” → `services.html#demo`
- CTA: “View All” → `services.html`

### Rating/Client Logos Band (`#client-band`)
- Copy:
  - “★★★★★ 4.8 Google rating”
  - “City of Houston · XYZ Construction · Acme Manufacturing · MegaCorp”
  - “As seen in Recycling Today”

### Stats band (animated numbers)
- Items:
  - “50+ — Years Combined Experience”
  - “24h — Average Turnaround”
  - “100% — Satisfaction Guarantee”

### 3 Easy Steps
- Section copy:
  - H2: “Sell Your Scrap in 3 Easy Steps”
  - Subcopy: “(Total yard time: ~10 minutes—no appointment, no hassle.)”
- Steps:
  - “1 — Check Your Material”
    - “We accept Copper, Brass, Aluminum (sheet, cast & cans), Steel, Iron, Stainless Steel & High Temp, Catalytic Converters, Switch Gear, E-Scrap, Batteries, & more!”
    - Link: “Accepted Materials ↓” → `#materials`
  - “2 — Drive On & Unload”
    - “Roll onto our calibrated truck scale, grab a yard pass, and follow the clearly-marked lanes. Our crew will grade, sort, and unload for you—so you’re back on the road fast.”
  - “3 — Get Paid—Instantly”
    - “Watch your weight ticket print, then choose Cash, ACH, or Check on the spot. A live price ticker shows today’s top three metals while you wait.”
- CTA: “Request a Quote” → `contact.html`

### Roll‑Off Containers feature (`#containers`)
- H2: “Need a Roll-Off Tomorrow?”
- Subcopy: “Same-day drops, 20-60 yd³ bins, and GPS-tracked drivers who swap your box before your scrap bay backs up.”
- Bullets:
  - “4-hour average response inside 50 mi radius”
  - “No rental fees; freight only—metal value offsets the rest”
  - “E-mailed tonnage report before the truck leaves your dock”
- CTAs:
  - “Book a Container” → `#quote`
  - “Call Dispatch” → `tel:555123SCRAP`
- Media: `assets/rolloff.jpg`, `assets/bin20.jpg`, `assets/bin30.jpg`, `assets/bin60.jpg`

### Accepted Materials teaser (`#materials`)
- Copy:
  - H2: “Accepted Materials”
  - Subcopy: “These common items bring the best rates.”
- Cards (link to `accepted-materials.html` anchors):
  - “Copper & Brass” — “Highest copper prices in county” — `assets/copper.jpg`
  - “Aluminum” — “Clean extrusion & sheet” — `assets/aluminum.jpg`
  - “Steel & Iron” — “HMS, prepared plate & tin” — `assets/steel.jpg`
  - “Stainless Steel & High Temp” — “304/316 solids” — `assets/stainless.jpg`
  - “Catalytic Converters” — “OEM units” — `assets/catalytic.jpg`
  - “Switch Gear” — “Industrial electrical panels” — `assets/rolloff.jpg`
  - “E‑Scrap & Batteries” — “Boards and lead‑acid” — `assets/batteries.jpg`
- CTA: “View All” → `accepted-materials.html`

### Final CTA (`#cta-final`)
- Copy:
  - H2: “Ready to turn scrap into cash?”
  - Subcopy: “Pull in today—or lock a roll-off for tomorrow—and leave with money in your pocket in minutes.”
  - Small: “Phones answered 7 a – 6 p · Monday – Saturday”
- CTAs:
  - “Request a Quote” → `#quote`
  - “Call (555) 123-SCRAP” → `tel:555123SCRAP`
- Media: `assets/hero.jpg`

### Visit Us Today
- Map embed (Google Maps iframe)
- Copy (definition list):
  - “Hours: Mon–Fri 8am–5pm”
  - “Address: 123 Demo Road, Demo City, NY 12345”
  - “Phone: 555-123-4567” (link `tel:5551234567`)
  - “Email: info@demoyard.com” (link `mailto:info@demoyard.com`)

### Scrapyard Sites CTA (house ad)
- Copy: “If this digital experience matches the service you want on the scale deck, let’s launch yours next.”
- Buttons:
  - “Book a Demo” → `/#contact`
  - “Visit ScrapyardSites.com” → `/`

### Page SEO
- `<meta name="description">`: “Demo Yard offers top dollar for scrap metal with fast, reliable service in the metro area.”
- OG: `og:title` “Home | Demo Yard”, `og:description` same as description

---

## Services — `services.html`

### Hero (`#top`)
- Copy:
  - H1: “Five Ways We Turn Scrap Into Cash.”
  - Subcopy: “Choose the option that fits your haul, schedule, and job-site.”
  - CTA: “Request a Quote” → `contact.html`

### At‑a‑Glance Services Grid (`#glance`)
- Cards (front/back copy):
  - “Walk‑In” — “Fast cash” / back: “Drive on, unload, and get paid in minutes.” → `#buying`
  - “Roll‑Offs” — “Boxes on demand” / back: “20‑40 yd bins swapped on your schedule.” → `#containers`
  - “Demolition” — “Turn-key crews” / back: “Licensed teams dismantle and haul away.” → `#demo`
  - “Converters” — “Top payouts” / back: “On‑the‑spot grading and assay options.” → `#converters`
  - “E‑Scrap” — “Secure recycling” / back: “Certified data destruction and battery handling.” → `#escrap`

### Walk‑In Scrap Buying (`#buying`)
- H2: “Walk‑In Scrap Buying”
- Body: “Bring your loose metal, pull onto our certified scale, and get a printed weight ticket in under ten minutes. Our yard crew will sort, grade, and unload for you—so you’re back on the road fast with cash, ACH, or check in hand.”
- Bullets:
  - “Drive-through lanes for trucks and trailers”
  - “Sorting and unloading assistance”
  - “Instant payment options”
- CTA: “Request a Quote” → `contact.html`
- Media: `assets/steel.jpg`

### What Customers Say
- Slides:
  - “No wait and friendly crew. In and out in minutes.” — “– Google Review”
  - “Quick in-and-out, best prices around.” — “– Google Review”
  - “Fast service, no appointment needed.” — “– Google Review”

### Roll‑Off Container Program (`#containers`)
- H2: “Roll‑Off Container Program”
- Body: “Running a manufacturing line, demo job, or clean‑out? We stage 20‑, 30‑, and 40‑yard boxes at your site, swap them on a schedule you set, and send detailed weight reports with every pickup. No hidden fees—just honest tonnage rates.”
- Bullets:
  - “20–40 yd³ containers”
  - “GPS-tracked drivers”
  - “Email tonnage report on pickup”
- CTA: “Request a Quote” → `contact.html`
- Media: `assets/rolloff.jpg`

### On‑Site Demolition & Clean‑Up (`#demo`)
- H2: “On‑Site Demolition & Clean‑Up”
- Body: “Licensed, insured crews with shears, torches, and loaders can dismantle tanks, silos, or entire facilities. We handle the permits, environmental paperwork, and trucking, and we credit the value of the recovered metal against your demo cost.”
- Bullets:
  - “Full-service tear-down”
  - “Safety and permit compliance”
  - “Metal value offset”
- CTA: “Request a Quote” → `contact.html`
- Media: `assets/bin30.jpg`

### Catalytic Converter Recycling (`#converters`)
- H2: “Catalytic Converter Recycling”
- Body: “We accurately identify OEM and aftermarket units with an industry database and pay on the spot. For high volumes we offer assay‑based settlements with transparent sampling procedures.”
- Bullets:
  - “OEM and aftermarket grading”
  - “Assay-based payouts”
  - “Secure chain of custody”
- CTA: “Request a Quote” → `contact.html`
- Media: `assets/catalytic.jpg`

### E‑Scrap & Battery Solutions (`#escrap`)
- H2: “E‑Scrap & Battery Solutions”
- Body: “Secure downstreams for servers, telecom hardware, lithium‑ion, and lead‑acid batteries. Certificates of recycling and data‑destruction available upon request.”
- Bullets:
  - “Server and telecom recycling”
  - “Lead & lithium battery handling”
  - “Certificates upon request”
- CTA: “Request a Quote” → `contact.html`
- Media: `assets/batteries.jpg`

### Scrapyard Sites CTA
- Copy: “If this digital experience matches the service you want on the scale deck, let’s launch yours next.”
- Buttons: “Book a Demo” → `/#contact`, “Visit ScrapyardSites.com” → `/`

### Page SEO
- `<meta name="description">`: “Discover Demo Yard's comprehensive services including container rental and demolition.”
- OG: `og:title` “Services | Demo Yard”

---

## Process — `process.html`

### Hero
- Copy:
  - H1: “From Pull-Up to Payout in 3 Easy Steps”
  - Subcopy: “Average yard time: 10 minutes — no appointment needed.”
  - CTA: “Request a Quote” → `contact.html`

### What Customers Say
- Slides:
  - “No wait and friendly crew. In and out in minutes.” — “– Google Review”
  - “Quick in-and-out, best prices around.” — “– Google Review”
  - “Fast service, no appointment needed.” — “– Google Review”

### Orange metrics stripe
- “10 min – Avg. yard time” · “5 min – Clean profits” · “0 – Appointments needed”

### How It Works timeline
- Step 1 (front): “Check Your Material” — “Browse Accepted Materials or text us a photo.”
  - Back: “Haz‑mat? Liquids? Give us a call first.”
- Step 2 (front): “Drive On & Unload” — “Roll onto the calibrated scale, get a yard pass; crew grades & unloads.”
  - Back: “Leave batteries & copper up front for quickest check‑out.”
- Step 3 (front): “Get Paid” — “Weight ticket prints; California law requires a check for non‑ferrous payouts, mailed after a three‑day hold.”
  - Back: “Opt‑in for weekly ACH if you’re an industrial account.”

### Quick FAQ
- Q: “Do I need an ID?” — A: “Yes—state law requires a valid photo ID for non-ferrous transactions.”
- Q: “How often do prices change?” — A: “Markets update daily. Call us for the latest numbers.”
- Q: “Hazardous materials?” — A: “We cannot accept fuel, oil, or other haz‑mat items.”
- Q: “Large profits?” — A: “Call ahead so we can direct you to the right lane on arrival.”
- Q: “Price updates?” — A: “Sign up for alerts or watch the ticker above for today’s top metals.”

### Scrapyard Sites CTA
- Copy: “If this digital experience matches the service you want on the scale deck, let’s launch yours next.”
- Buttons: “Book a Demo” → `/#contact`, “Visit ScrapyardSites.com” → `/`

### Page SEO
- `<meta name="description">`: “Understand Demo Yard's scrap metal recycling process from drop-off to payment.”
- OG: `og:title` “Process | Demo Yard”

---

## Accepted Materials — `accepted-materials.html`

### Hero (`#top`)
- Copy:
  - H1: “Accepted Materials”
  - Subcopy: “Top prices for copper, aluminum, steel and more—zero hidden fees.”
  - CTAs: “Request a Quote” → `contact.html`, “View Details” → `#details`

### Quick Select Grid (`#materials`)
- Cards:
  - “Copper & Brass” — “Highest copper prices in county”
  - “Aluminum” — “Clean extrusion & sheet”
  - “Steel & Iron” — “HMS, prepared plate & tin”
  - “Stainless Steel & High Temp” — “304/316 solids”
  - “Catalytic Converters” — “OEM units”
  - “Switch Gear” — “Industrial electrical panels”
  - “E‑Scrap & Batteries” — “Boards and lead‑acid”

### Details accordion (`#details`)
- Copper & Brass (`#copper`)
  - “We pay top dollar for:” — “#1 Bright & Shiny wire; Insulated copper cable; Yellow brass solids; Range brass”
  - “We can’t accept:” — “Air-conditioning coils with freon”
- Aluminum (`#aluminum`)
  - “We pay top dollar for:” — “Extrusion and sheet; Cast wheels and blocks”
  - “We can’t accept:” — “Foil pans”
- Steel & Iron (`#steel`)
  - “We pay top dollar for:” — “HMS and prepared plate; Cast iron machinery; Lathes; Tin”
  - “We can’t accept:” — “Pressurized tanks; Paint cans”
- Stainless Steel & High Temp (`#stainless`)
  - “We pay top dollar for:” — “304/316 solids; Food-grade tanks”
- Catalytic Converters (`#cats`)
  - “We pay top dollar for:” — “OEM units”
  - “We can’t accept:” — “Empty or punched shells”
- Switch Gear (`#switchgear`)
  - “We pay top dollar for:” — “Industrial switchgear”
- E‑Scrap & Batteries (`#escrap`)
  - “We pay top dollar for:” — “Server boards; Lead-acid & Li‑ion packs”
  - “We can’t accept:” — “CRT monitors; Alkaline batteries”

### Compliance stripe
- Copy: “State law reminder: A valid photo ID is required for non‑ferrous sales. No fuel, oil, or refrigerants may remain in scrap items.”

### Scrapyard Sites CTA
- Copy: “If this digital experience matches the service you want on the scale deck, let’s launch yours next.”
- Buttons: “Book a Demo” → `/#contact`, “Visit ScrapyardSites.com” → `/`

### Page SEO
- `<meta name="description">`: “See what scrap metals Demo Yard accepts for recycling.”
- OG: `og:title` “Accepted Materials | Demo Yard”

---

## About Us — `about.html`

### Mission banner (`#mission`)
- H1: “Built on Metal, Powered by Integrity”
- Subcopy: “Two decades, one promise—fair pay, full respect, zero shortcuts.”
- CTA: “Our Story ↓” → `#timeline`

### What Sets Us Apart
- 4 feature cards:
  - “24-Hour Turnarounds” — “Digital tickets + payment before you hit the gate.”
  - “Certified Accuracy” — “State scales, ISO SOPs, transparent weight sheets.”
  - “Environmental Stewardship” — “Zero-landfill flow & storm-water filtration.”
  - “Relationship-Driven” — “Long-term partners, not one-time vendors.”

### Our Story timeline (`#timeline`)
- 2003 — “Bootstrap Beginnings” — “Two brothers, one torch, and a half-acre dirt lot on the edge of town. Their goal was simple: pay honest prices for scrap and treat every customer—whether a weekend hauler or a mill buyer—with the same handshake-firm respect.”
- 2008 — “Growing With Our Customers” — “Word spread. Contractors asked for on-site boxes, so we bought our first roll-off fleet and expanded to five acres. The yard paved over the mud, added Saturday hours, and cut average turn-times to under 10 minutes.”
- 2015 — “Tech That Pays You More” — “To squeeze every ounce of value out of every load—and keep metal out of landfills—we installed a high-horsepower shredder, an XRT line, and calibrated drive-on scales tied to live LME pricing. Throughput tripled; transparency became instant.”
- 2025 — “24 Acres, Zero-Landfill Goal” — “Today the yard runs 24/6 on a fully paved, storm-controlled campus that recovers 97 % of every ton. But the core promise hasn’t budged: fair weights, straight talk, and cash (or ACH) before you hit the gate.”

### People First spotlight (`#people`)
- Quote: “Whether it’s a bucket of cans or a 40-yard box, the respect stays the same.”
- Badges: “97% repeat industrial clients” · “4.8 ★ Google rating”
- Media: 5 `assets/avatar.svg` images in a collage

### Facility in Numbers
- “0 acres — Fully paved campus”
- “0 T/day — Processing capacity”
- “0 sec — Avg scale dwell time”
- “0% — Landfill target”
  - Note: values animate from 0 to targets (24, 600, 3, 0) via `.stat-number`

### Visit Us Today
- Same copy block as Home → Hours, Address, Phone, Email + map

### Scrapyard Sites CTA
- Copy: “If this digital experience matches the service you want on the scale deck, let’s launch yours next.”
- Buttons: “Book a Demo”, “Visit ScrapyardSites.com”

### Page SEO
- `<meta name="description">`: “Learn about Demo Yard's commitment to fair pricing, quick turnarounds, and exceptional service.”
- OG: `og:title` “About | Demo Yard”

---

## Our Team — `our-team.html`

### Team Hero (`#team-hero`)
- H1: “The People Behind the Pay‑Window.”
- Subcopy: “Four specialists, one mission—honest weights, instant pay.”
- CTAs: “Request a Quote” → `contact.html`, “Join the Team” → `careers.html`

### Team grid (`#team`)
- Cards (front/back copy):
  - Alex Martinez — Operations Manager
    - Front: “15‑yr vet, OSHA‑30, keeps the yard humming.”
    - Back: “Fifteen-year recycling veteran and our resident efficiency guru. Alex coordinates trucks, trains new hires, and verifies every weight ticket. Reach him at 555‑123‑4567 or alex@example.com.”
  - Jamie Patel — Logistics Coordinator
    - Front: “GPS-tracked roll-off ninja.”
    - Back: “Jamie is your point of contact for drop boxes and pickups. She schedules each container and sends real-time ETAs. Call 555‑987‑6543 or jamie@example.com.”
  - Riley Thompson — Customer Success Lead
    - Front: “Friendly face at the pay-window.”
    - Back: “Riley verifies grades, issues payments, and makes sure first-time sellers feel welcome. Contact riley@example.com.”
  - Victoria Chen — Environmental & Compliance
    - Front: “Paperwork pro and training lead.”
    - Back: “Victoria ensures every pound is handled under state and EPA guidelines. She files manifests and keeps our staff up to date on R2 best practices. Reach victoria@example.com.”
  - Sam O'Connor — Scale Master
    - Front: “Keeps weights honest and lines moving.”
    - Back: “Sam calibrates the scales daily and prints your ticket on the spot. Reach at sam@example.com.”
  - Morgan Lee — Yard Supervisor
    - Front: “Forklift wizard and safety stickler.”
    - Back: “Morgan oversees scrap flow and ensures each load is processed safely. Contact morgan@example.com.”

### How We Keep the Yard Running Smoothly
- Bullets: “Zero-shortcut safety” · “24-h scale calibration” · “Customer-first culture”
- Values carousel cards:
  - “Fast Turnaround” — “Digital tickets and cash before you hit the gate.”
  - “Stewardship” — “Storm-water controls and zero-landfill goals.”
  - “Partners First” — “Long-term relationships over quick wins.”

### Careers CTA
- H2: “Want to weld your future with us?”
- Subcopy: “Join a crew that values safety, steady pay, and BBQ Fridays.”
- Badges: “Medical + 401k” · “Paid OSHA certs” · “Monthly BBQ”
- CTA: “View Open Roles” → `careers.html`

### Scrapyard Sites CTA
- Copy: “If this digital experience matches the service you want on the scale deck, let’s launch yours next.”
- Buttons: “Book a Demo”, “Visit ScrapyardSites.com”

### Page SEO
- `<meta name="description">`: “Meet the dedicated Demo Yard team behind our trusted service.”
- OG: `og:title` “Our Team | Demo Yard”

---

## Contact — `contact.html`

### Contact section (`#contact`)
- H2: “Contact Us”
- Definition list:
  - “Phone: 555‑123‑4567” (link `tel:5551234567`)
  - “Email: info@demoyard.com” (link `mailto:info@demoyard.com`)
  - “Yard Address: 123 Demo Road, Demo City, NY 12345”
- Contact form (Formspree action placeholder):
  - Fields: Name, Email, Yard / Company, Message
  - Submit text: “Send →”

### Scrapyard Sites CTA
- Copy: “If this digital experience matches the service you want on the scale deck, let’s launch yours next.”
- Buttons: “Book a Demo”, “Visit ScrapyardSites.com”

### Page SEO
- `<meta name="description">`: “Get in touch with Demo Yard for scrap metal recycling services, quotes, or general inquiries.”
- OG: `og:title` “Contact | Demo Yard”

---

## FAQ — `faq.html`

### FAQ index
- H1: “Frequently Asked Questions”
- Questions (each in `<details>`):
  - “Do I need an ID to sell scrap?” — “Yes. A valid, government‑issued photo ID is required for all non‑ferrous transactions.”
  - “How often do prices change?” — “Markets move daily. We update our board every morning at 8 a.m. and push urgent price swings via text alerts.”
  - “What payment methods do you offer?” — “California law requires a three‑day waiting period and payment by mailed check for most non‑ferrous transactions. Industrial clients can arrange ACH or weekly wire transfers.”
  - “Do you pick up cars or appliances?” — “Running and non‑running vehicles welcome; bring a clean title. White goods are accepted if they’re drained of refrigerants and fluids.”
  - “Can I get a container tomorrow?” — “Usually yes—call before 3 p.m. and we’ll drop a box the next business day.”
  - “Do you accept hazardous materials?” — “No. We cannot take fuel, oil, unopened paint, asbestos, radioactive items, or medical waste.”
  - “What’s the minimum amount I can bring?” — “No minimum for walk‑ins, but profits under 10 lb may default to our small‑lot pricing.”
  - “Are my scale weights certified?” — “Absolutely. Our truck scale is calibrated and sealed by the Department of Agriculture and re‑checked quarterly.”
  - “Can I stay in my truck during unloading?” — “For safety, drivers must exit vehicles while the yard crew unloads and grades material.”

### Scrapyard Sites CTA
- Copy: “If this digital experience matches the service you want on the scale deck, let’s launch yours next.”
- Buttons: “Book a Demo”, “Visit ScrapyardSites.com”

### Page SEO
- `<meta name="description">`: “Find answers to common questions about Demo Yard's scrap metal services and policies.”
- OG: `og:title` “FAQ | Demo Yard”

---

## Global SEO/Schema
- JSON‑LD `LocalBusiness` (present on pages):
  - `name`: “Demo Yard”
  - `description`: “Scrap metal recycling services in the Metropolis area.”
  - `url`: “https://www.demoyard.com”
  - `telephone`: “+1-555-0100”
  - `address`:
    - `streetAddress`: “1234 Industrial Dr.”
    - `addressLocality`: “Metropolis”
    - `addressRegion`: “TX”
    - `postalCode`: “77000”
    - `addressCountry`: “US”

## Assets and media map
- Logos: `assets/logo.svg`, `assets/logo.png`
- Hero images: `assets/hero.jpg`
- Service/media images: `assets/steel.jpg`, `assets/rolloff.jpg`, `assets/bin20.jpg`, `assets/bin30.jpg`, `assets/bin60.jpg`, `assets/copper.jpg`, `assets/aluminum.jpg`, `assets/stainless.jpg`, `assets/catalytic.jpg`, `assets/batteries.jpg`, `assets/avatar.svg`

## Notes on behavior & accessibility
- All `<details>` toggles get `aria-expanded` updates and keyboard focus support.
- Animated counters respect `prefers-reduced-motion` and fall back to static values.
- Mobile materials grid becomes a swipeable track with dot indicators.
- Active nav link highlighted based on current path.
- Mobile menu locks body scroll and hides demo banner while open.
