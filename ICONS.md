# CoHeart Workspace — Universal Icon System & Accessibility Specification
**Document Version:** 2.0.0  
**Target Codebase Alignment:** Direct 1:1 mapping with React SPA (`lucide-react` v0.468+)  
**Primary Icon Set:** **Lucide Icons** (SVG, Stroke 2px, 24x24 viewBox)  
**Secondary Icon Set:** **Font Awesome Free 6** (Specialized everyday real-world physical objects & brand credentials)  
**Location:** `W:\qyverix\Clients\NGO\Coheart\UI\ICONS.md`

---

## 1. Architectural Strategy & Design Rationale

The CoHeart Workspace operates in rural, low-bandwidth field environments where facilitators, cluster leads, and non-literate community workers require **concrete, unambiguous visual cues**. 

### Two-Tier Icon Architecture
1. **Primary Set — Lucide Icons (90%+ of System)**:
   - Matches the real React application's existing dependency (`lucide-react` in `package.json`).
   - Every icon name approved in this prototype maps directly to the corresponding React component (`<House />`, `<MapPin />`, `<Volume2 />`, etc.).
   - Bundled 100% locally in `UI/vendor/lucide/` with both `lucide.min.js` and a lightweight, compiled `sprite.svg` containing only the used symbols.
   - Consistent stroke width (`2px`), round caps, and responsive scaling.
2. **Secondary Set — Font Awesome Free 6 (Targeted Physical Objects)**:
   - Used selectively where Lucide lacks a distinct concrete physical object that is immediately recognized by non-literate rural Indian field staff (e.g., state transport buses, 2-wheeler motorcycle fuel, midday rice meals, government laminated ID cards, and WhatsApp alerts).
   - Bundled as a lean local subset in `UI/vendor/fontawesome/` with zero runtime CDN calls.

---

## 2. Complete Emoji to Icon Mapping Directory

| Category | UI Concept | Old Emoji | Icon Set | Component / Class | Visual Rationale for Non-Literate Users |
| :--- | :--- | :---: | :--- | :--- | :--- |
| **Navigation** | Home / Base | `&#x1F3E0;` | **Lucide** | `house` | Classic gabled house roof with entryway |
| **Accessibility** | Spoken Help / Read Aloud | `&#x1F50A;` | **Lucide** | `volume-2` | Loudspeaker horn broadcasting audio waves |
| **Voice Input** | Voice-to-Text Dictation | `&#x1F3A4;` | **Lucide** | `mic` | Studio vocal microphone |
| **Attendance** | Punch In / GPS Arrival | `&#x1F4CD;` | **Lucide** | `map-pin` | Physical teardrop pin placed onto site location |
| **Finance** | Rupee Currency / Budgets | `&#x1F4B0;` | **Lucide** | `indian-rupee` | Official Indian Rupee glyph (`₹`) |
| **Finance** | Field Expense Receipts | `&#x1F9FE;` | **Lucide** | `receipt` | Serrated paper slip with itemized lines |
| **Finance** | Claims & Reimbursements | `&#x1F4B3;` | **Lucide** | `credit-card` | Bank payment card with magnetic strip |
| **Finance** | Bank / Disbursements | `&#x1F3E6;` | **Lucide** | `landmark` | Classical stone bank columns |
| **Finance** | Payroll & Staff Salaries | `&#x1F4B5;` | **Lucide** | `wallet` | Folding billfold wallet |
| **Finance** | Grants & Donor Funds | `&#x1F91D;` | **Lucide** | `hand-coins` | Open palm receiving monetary funding |
| **People** | Staff / Field Roster | `&#x1F465;` | **Lucide** | `users` | Dual human team silhouettes |
| **People** | User Profile | `&#x1F464;` | **Lucide** | `user` | Single facilitator portrait |
| **People** | Add Employee Wizard | `&#x2795;` | **Lucide** | `user-plus` | Facilitator figure with corner addition badge |
| **People** | Edit Employee Profile | `&#x270F;&#xFE0F;` | **Lucide** | `user-pen` | Facilitator figure with editing pencil |
| **People** | Employee Deactivation | `&#x1F6AB;` | **Lucide** | `user-x` | Facilitator figure with dismissal cross |
| **People** | Document Verification | `&#x1F4CE;` | **Lucide** | `file-check-2` | Document page with approved checkmark |
| **People** | Roles & Access Matrix | `&#x1F6E1;&#xFE0F;` | **Lucide** | `shield-check` | Protective shield with verification tick |
| **Delivery** | Formats Hub (/formats) | `&#x1F4CB;` | **Lucide** | `clipboard-list` | Clipboard backing with bulleted checklists |
| **Delivery** | New Record Entry Wizard | `&#x270D;&#xFE0F;` | **Lucide** | `file-plus-2` | Form page with corner creation plus badge |
| **Delivery** | Records Grid & Verification | `&#x1F4D1;` | **Lucide** | `table-2` | Multi-column structured data table |
| **Delivery** | Multi-Format Groups Bundle | `&#x1F5C2;&#xFE0F;` | **Lucide** | `layers` | Stacked modular sheets |
| **Delivery** | Interventions (4 Pillars) | `&#x1F3AF;` | **Lucide** | `target` | Concentric circular focus target |
| **Delivery** | Field Programmes | `&#x1F331;` | **Lucide** | `sprout` | Fresh green shoot indicating community growth |
| **Delivery** | Thematic Activities | `&#x1F4CC;` | **Lucide** | `pin` | Push pin anchoring activity areas |
| **Delivery** | Sub-Activities | `&#x1F516;` | **Lucide** | `bookmark` | Hanging ribbon bookmark |
| **Operations** | Assets & Computer Labs | `&#x1F4BB;` | **Lucide** | `laptop` | Open clamshell notebook workstation |
| **Operations** | Requisition / Procurement | `&#x1F4E6;` | **Lucide** | `shopping-cart` | Wheeled purchase requisition cart |
| **Operations** | Beneficiaries & Children | `&#x1F467;` | **Lucide** | `baby` | Young infant/child profile silhouette |
| **Operations** | Education & Scholarship | `&#x1F469;` | **Lucide** | `graduation-cap` | Academic mortarboard with dangling tassel |
| **Operations** | Training Batches & Hubs | `&#x1F3E2;` | **Lucide** | `building` | Multi-window community hub center |
| **Operations** | Daily Tasks & Checklists | `&#x2705;` | **Lucide** | `check-square-2` | Checkbox with verified completion tick |
| **Operations** | Goals & Target Milestones | `&#x1F4CA;` | **Lucide** | `flag` | Raised pennant flag marking goalpost |
| **Documents** | Cloud Drive | `&#x1F4C1;` | **Lucide** | `folder` | Manila folder with top label tab |
| **Documents** | Policy Documents & KYC | `&#x1F4C4;` | **Lucide** | `file-text` | Document sheet with readable text lines |
| **Analytics** | MIS Outreach Trackers | `&#x1F3AF;` | **Lucide** | `crosshair` | Precision alignment reticle |
| **Analytics** | Reports & Visual Analytics | `&#x1F4C8;` | **Lucide** | `bar-chart-3` | Comparative 3-bar histogram |
| **Analytics** | Shared Donor Reports | `&#x1F517;` | **Lucide** | `share-2` | Branching network share nodes |
| **Governance** | Approvals Unified Inbox | `&#x1F4E5;` | **Lucide** | `inbox` | Downward document drop inbox tray |
| **Governance** | Visual Workflow Builder | `&#x1F500;` | **Lucide** | `git-branch` | Multi-branch decision flow tree |
| **Comms** | Team Announcements | `&#x1F4E2;` | **Lucide** | `megaphone` | Loud acoustic speaking trumpet |
| **Comms** | Alerts & Notifications | `&#x1F514;` | **Lucide** | `bell` | Acoustic alarm chime |
| **Comms** | Review Meetings Calendar | `&#x1F4C5;` | **Lucide** | `calendar` | Grid calendar sheet |
| **Comms** | Meeting Room (Video) | `&#x1F4F9;` | **Lucide** | `video` | Broadcast video camera |
| **Comms** | Community Volunteers | `&#x1F91D;` | **Lucide** | `heart-handshake` | Clasping hands forming a caring heart |
| **System** | Security Audit Trail | `&#x1F4DC;` | **Lucide** | `history` | Clockwise audit timeline counter |
| **System** | Offline Sync Centre | `&#x1F504;` | **Lucide** | `refresh-cw` | Dual circular syncing arrows |
| **System** | Preferences & Settings | `&#x2699;&#xFE0F;` | **Lucide** | `settings` | Precision interlocking mechanical cog |
| **System** | Omnisearch | `&#x1F50D;` | **Lucide** | `search` | Convex optical glass lens |
| **System** | OLED Dark Theme | `&#x1F319;` | **Lucide** | `moon` | Crescent night lunar shape |
| **System** | Daytime Light Theme | `&#x2600;&#xFE0F;` | **Lucide** | `sun` | Radiating celestial sun |
| **Feedback** | Action Success Confirmation | `&#x2705;` | **Lucide** | `circle-check` | Green solid circular badge with tick |
| **Feedback** | Action Warning / Alert | `&#x26A0;&#xFE0F;` | **Lucide** | `circle-alert` | Amber/Red warning circle with exclamation |
| **Feedback** | Instant Undo | `↺` | **Lucide** | `undo-2` | Counter-clockwise reversal arrow |
| **Everyday** | **Field Facilitator Worker** | `&#x1F477;` | **Font Awesome** | `fa-solid fa-helmet-safety` | Protective hard hat recognized by ground staff |
| **Everyday** | **Executive Administrator** | `&#x1F468;&#x200D;&#x1F4BC;` | **Font Awesome** | `fa-solid fa-user-tie` | Business figure with formal necktie |
| **Everyday** | **Sitemap Architecture Tree**| `&#x1F5FA;&#xFE0F;` | **Font Awesome** | `fa-solid fa-sitemap` | Hierarchical branching organizational chart |
| **Everyday** | **Bus Fare Travel Expense** | `&#x1F68C;` | **Font Awesome** | `fa-solid fa-bus` | Regional APSRTC/state passenger bus profile |
| **Everyday** | **Facilitator Two-Wheeler** | `&#x1F697;` | **Font Awesome** | `fa-solid fa-motorcycle` | Commuter motorcycle for rural mandal travel |
| **Everyday** | **Midday Meal / Per Diem** | `&#x1F371;` | **Font Awesome** | `fa-solid fa-bowl-rice` | Steaming rice bowl representing meal expense |
| **Everyday** | **CareS Medicine & Health** | `&#x1F48A;` | **Font Awesome** | `fa-solid fa-pills` | Medical capsules for community health camps |
| **Everyday** | **Govt Identity / Aadhaar** | `&#x1F4CE;` | **Font Awesome** | `fa-solid fa-id-card` | Laminated national identity card |

---

## 3. High-Contrast Low-Literacy Sizing & Touch Targets

- **Action Circle Icons:** `width: 28px; height: 28px; stroke-width: 2.2px;` inside a `52px x 52px` high-contrast rounded container.
- **Sidebar Navigation Icons:** `width: 18px; height: 18px; stroke-width: 2px;` aligned with text labels.
- **Top Bar Tools:** `width: 16px; height: 16px;` alongside plain-language regional labels.
- **Accessibility:** All decorative icons include `aria-hidden="true"` so screen readers and Web Speech synthesizers vocalize clean, un-mangled labels without repeating cryptic icon names.
