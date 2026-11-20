# Greenshift Bio Digester - Official Corporate Web Platform

An executive industrial and environmental engineering website engineered for **Greenshift Bio Digester Limited**, specializing in decentralized anaerobic biological sewage treatment systems, septic tank conversion engineering, and waste-to-energy biogas recovery.

🌐 **Live Website**: [https://realmichaelakinyele-gif.github.io/greenshift/](https://realmichaelakinyele-gif.github.io/greenshift/)

---

## 1. Architectural Principles

- **Strictly Professional Aesthetic**: Industrial environmental engineering visual identity utilizing a deep forest jade (`#07261B`), vibrant emerald (`#059669`), and slate charcoal (`#0F172A`) palette with Google Fonts (*Plus Jakarta Sans* for headers and *Inter* for body typography).
- **Zero Emojis Enforced**: Strictly 100% vector SVG icons with scalable viewBox coordinates, stroke geometry, and semantic accessibility. Zero Unicode emojis are used across any file or component.
- **Lightweight High-Efficiency WebP Media**: 100% of photographic assets, illustrations, brand marks, and favicons are converted to optimized WebP format for fast loads and minimal data consumption.
- **Scroll Effects & Ambient Animations**: Features a real-time gradient scroll progress indicator, frosted glass sticky header, staggered `IntersectionObserver` scroll reveals, animated stat counters, and subtle floating hero visual.
- **Zero Heavy Framework Overheads**: Developed with clean semantic HTML5, CSS3 Custom Properties, and modular ES6 JavaScript. Instant load times, zero build-step requirement, and 100% offline-compatible.
- **Geotechnical & Standards Compliance**: Aligned with British Standards (BS 6297 wastewater discharge, BS 8007 water-retaining concrete structures) and environmental authority (NEMA/EPA) discharge criteria.

---

## 2. Directory Structure

```
Greenshift/
├── assets/
│   ├── greenshift-logo.svg           # Official brand emblem (vector SVG)
│   ├── greenshift-logo.webp          # Official brand emblem (high-performance WebP)
│   ├── favicon.webp                  # Multi-resolution WebP favicon
│   ├── favicon.png                   # PNG fallback favicon
│   ├── greenshift-three-chamber-tank.webp # Floating hero visual cutaway
│   ├── residential-estate.webp       # GL-15 / residential community photography
│   ├── commercial-campus.webp        # GL-75 / institutional facility showcase
│   ├── geotechnical-excavation.webp  # Soil survey and ground excavation
│   ├── soil-black-cotton.webp        # Expansive clay strata photography
│   ├── soil-water-table.webp         # High water table & wetland photography
│   ├── soil-rocky-terrain.webp       # Rocky strata & shallow bedrock photography
│   ├── clean-water-effluent.webp     # Treated effluent & eco-dispersal
│   ├── precast-structural-concrete.webp # Reinforced precast concrete engineering
│   ├── biogas-clean-energy.webp      # Renewable biogas clean methane flame
│   ├── pristine-lawn-irrigation.webp # Manicured estate grounds & lawn
│   ├── cta-architecture-bg.webp      # Consultation card architectural backdrop
│   ├── scientific-lab-testing.webp   # Laboratory water metrics testing
│   ├── house.webp                    # Residential application card photography
│   ├── office.webp                   # Commercial application card photography
│   ├── hotel.webp                    # Hospitality application card photography
│   └── reference/
│       └── biodigester-process.webp  # Reference 3-chamber process diagram
├── css/
│   └── style.css             # Unified design system, CSS variables, scroll effects & responsive rules
├── js/
│   ├── calculator.js         # Hydraulic sizing engine, soil coefficients & ROI mathematical model
│   └── main.js               # Scroll progress, intersection observer, counters, navigation & modals
├── index.html                # Flagship portal: Cutaway schematic, comparison, sizing tool, case studies
├── solutions.html            # Residential, Commercial, Institutional, Biogas & Specification Matrix
├── technology.html           # 4-stage anaerobic cascade, lab metrics & French drain hydrology
├── calculator.html           # Dedicated full-scale sizing & 10-year financial feasibility estimator
├── contact.html              # Technical dispatch, emergency hotline, service branches & site booking
└── README.md                 # Complete system documentation
```

---

## 3. Platform Pages & Capabilities

### `index.html` (Corporate Portal)
- **Interactive 3-Chamber Cutaway Diagram**: Real-time vector schematic depicting solid separation, anaerobic enzymatic digestion, and multi-tier bio-filtration discharging into subsurface French drains.
- **Design Considerations**: Occupancy, ground conditions, local approval requirements, and service access.
- **Technical Septic Comparison Matrix**: Side-by-side analysis against conventional septic tanks across 8 engineering parameters.
- **Embedded Sizing Tool**: Instant calculation of required dimensions, blackwater volume, initial bacterial culture, and turnkey installation budget.
- **Geotechnical Adaptation Guide**: Custom engineering for black cotton/expansive clay, high water tables, and rocky substrata.
- **System Applications**: Illustrative use cases for homes, shared facilities, and rural sites. These are not named client installations.

### `solutions.html` (Systems & Product Line)
- **Residential Systems (GL-15 & GL-35)**: 1 to 35 occupants; 10-ton axle weight rated for under-driveway placement.
- **Commercial & Institutional Plants (GL-75, GL-150, GL-300)**: Multi-tank arrays engineered with peak hydraulic damping for schools and multi-unit residential developments.
- **Waste-to-Energy Biogas Plants**: Methane capture and desulfurization scrubbers supplying pressurized cooking fuel.
- **Comprehensive Specification Matrix**: Comparative table detailing model IDs, user ratings, flow rates, dimensions, excavation volumes, and installation time.

### `technology.html` (Treatment & Site Design)
- **4-Stage Anaerobic Cascade**: Detailed analysis of Hydrolysis, Acidogenesis, Acetogenesis, and Methanogenesis.
- **Effluent & Site Conditions**: Explains the factors that influence treatment and why site assessment and testing may be needed.
- **Structural Concrete & Polymer Engineering**: Class 30 sulfate-resistant concrete, crystalline waterproofing, and high-density polymer carrier media.
- **French Drain Hydrology Schematic**: Washed granite aggregate layering wrapped in non-woven geotextile armor.

### `calculator.html` (Sizing Estimator)
- **Interactive Dynamic Sizing**: Adjust occupant count (5 to 350+), property type, soil profile, and optional add-ons.
- **Illustrative Cost Inputs**: USD figures are sample estimates, not quotations; local costs and project requirements vary.
- **One-Click Specification Print**: Clean `@media print` layout that produces a formal specification summary for project architects.
- **Preview Form Behavior**: Inquiry forms show that they are not connected to a submission service; no form data is transmitted.

### `contact.html` (Engineering Dispatch & Booking)
- Direct telephone lines, technical CAD/tender email channel, operating hours, and comprehensive site survey booking form.

---

## 4. Sizing Engine Logic & Formulas

The dynamic calculation engine (`js/calculator.js`) utilizes hydraulic coefficients based on occupancy and facility category:

- **Daily Blackwater Inflow ($Q_d$)**:
  $$Q_d = N \times q \times f_{property}$$
  Where:
  - $N$ = Number of occupants
  - $q$ = Base domestic blackwater allowance (45L – 60L/person/day)
  - $f_{property}$ = Facility multiplier (Single-family: 1.0, Apartments: 1.15, Offices: 0.70, Schools: 1.25, Hotels: 1.40)
- **Soil Geotechnical Multiplier**:
  - Normal Loam / Red Soil: $1.0\times$ baseline
  - Black Cotton / Expansive Clay: $1.18\times$ (additional ballast stabilization and gravel envelope)
  - High Water Table: $1.25\times$ (anti-buoyancy ballast and double crystalline waterproofing)
  - Rocky Ground: $1.22\times$ (pneumatic breaking and shallow-depth horizontal dispersion)
- **Exhauster Avoidance ROI**:
  Calculates cumulative avoided expense of 3 to 24 exhauster trips annually ($160/trip) over 5 to 10-year timelines.

---

## 5. Deployment Guide

Because the platform relies on pure HTML5/CSS/JS without compilation steps, it can be deployed directly to any web server:

### Option A: Static Web Host (Netlify / Vercel / GitHub Pages)
- Push the repository or drag-and-drop the `Greenshift` folder into the Netlify or Vercel dashboard.
- Set publish directory to `.` (root).

### Option B: Apache / Nginx / cPanel
- Upload all files directly to `public_html/` or your webroot directory.

### Option C: Local Preview
- Double click `index.html` in any browser, or run:
  ```bash
  npx serve -p 3000
  ```
  and visit `http://localhost:3000`.

---

## 6. License & Quality Certification
The reference chamber illustration in `assets/reference/biodigester-process.jpg` is from [BioTank Africa](https://biotankbiodigester.com/). It is credited on the technology page and is presented as a general illustration, not a Greenshift product specification. Confirm permission and usage terms before publishing the site commercially.

© 2026 Greenshift Bio Digester Limited. Technical claims, local approvals, warranties, contact details, and calculator assumptions should be confirmed with the business before publication.
