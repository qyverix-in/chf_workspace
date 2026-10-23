# CoHeart Workspace — Complete System Module & Screen Registry
**Document Version:** 2.0.0  
**Scope:** Complete Codebase Scan (Routes, Pages, Features, Prisma Schema, Seed Data, Dexie Offline Models)  
**Location:** `W:\qyverix\Clients\NGO\Coheart\UI\MODULES.md`  
**Accessibility Focus:** Designed for Non-Tech & Low-Literacy Field Workers + Master Admin Governance

---

## 1. Complete System Inventory & Coverage Matrix

Every module, topic, intervention, programme, activity, sub-activity, format and screen present in the codebase is indexed below, mapped directly to its prototype HTML screen file in `W:\qyverix\Clients\NGO\Coheart\UI\`.

| # | System Module | Topic / Activity / Entity | Codebase Sources (Routes, Models, Services) | Prototype HTML Page | Low-Literacy / Accessible Features |
| :-: | :--- | :--- | :--- | :--- | :--- |
| **1** | **Authentication** | Staff Sign-in, PIN / 1-Click Role Login | `LoginPage.tsx`, `auth.service.ts`, `User` | [`login.html`](login.html) | 1-click worker picture login, big buttons, read-aloud prompt |
| **2** | **Dashboard** | Home, Draft Alert, Quick Actions, Stats | `HomePage.tsx`, `DashboardPage.tsx`, `DashboardWidget` | [`dashboard.html`](dashboard.html) | Big picture action tiles (Punch in, Add record, Apply leave), voice help |
| **3** | **Finance** | Overview, Budget vs Actuals, Spending Rollup | `FinancePage.tsx`, `FinanceOverview.tsx`, `Budget` | [`finance-overview.html`](finance-overview.html) | Big rupee numbers (₹), color-coded bar meters, spoken summaries |
| **4** | **Finance** | Budgets & Project Allocations | `FinanceModals.tsx`, `finance-engine.ts`, `BudgetLine` | [`finance-budgets.html`](finance-budgets.html) | Visual progress bars, programme cards, 1-click allocate |
| **5** | **Finance** | Expense Recording & Receipt Photo Capture | `RecordExpenseModal.tsx`, `finance.service.ts` | [`finance-expenses.html`](finance-expenses.html) | Step-by-step wizard, camera photo snap, voice amount entry |
| **6** | **Finance** | Staff Claims & Per Diem Reimbursements | `submitExpenseClaim`, `ExpenseClaim`, `PerDiemRate` | [`finance-claims.html`](finance-claims.html) | 1-click claim submission, travel categories, reimbursement tracker |
| **7** | **Finance** | Payments & Vendor Disbursements | `finance.controller.ts` (`reimburse`), `paymentReference`| [`finance-payments.html`](finance-payments.html) | Verified green tick status, payment reference verification, bulk pay |
| **8** | **Finance** | Invoices & Donor Billing Documents | `finance.service.ts`, `attachments`, `Document` | [`finance-invoices.html`](finance-invoices.html) | PDF/Bill download icons, visual invoice status tags |
| **9** | **Finance** | Grants & Donor Funds Tracking | `FinanceBudgetRecord`, `Organisation`, `Project` | [`finance-grants.html`](finance-grants.html) | Donor logos, fund utilization meters, milestone tracker |
| **10** | **Finance** | Payroll & Monthly Staff Payslips | `Payslip`, `shiftId`, `employmentTypes` | [`finance-payroll.html`](finance-payroll.html) | Monthly salary slip card, net pay in bold ₹, download print button |
| **11** | **Finance** | Financial Ledger & Transaction Reports | `FinanceTransactionsTable.tsx`, `FinanceTransactionRecord` | [`finance-reports.html`](finance-reports.html) | 1-click Excel export, category filters, date preset pills |
| **12** | **HR & People** | People & Workforce Overview | `PeoplePage.tsx`, `PeopleManagementPage.tsx`, `Department` | [`people-overview.html`](people-overview.html) | Team photo avatars, headcounts by programme, quick action bar |
| **13** | **HR & People** | Staff Directory & Contact Roster | `EmployeeDetailsPage.tsx`, `User`, `Role` | [`staff-directory.html`](staff-directory.html) | Call/Message phone buttons, photo badges, supervisor lookup |
| **14** | **HR & People** | **Add Employee Wizard (Creation)** | `AddEmployeePage.tsx`, `createUserRemote` | [`employee-add.html`](employee-add.html) | Step-by-step wizard: Personal, Work Area, Role, Manager, Docs |
| **15** | **HR & People** | **Edit Employee & Work Assignment** | `ProgrammeEditEmployeePage.tsx`, `updateUser` | [`employee-edit.html`](employee-edit.html) | Simple toggle switches, role dropdown, reporting line editor |
| **16** | **HR & People** | **Employee Profile & Verification View** | `EmployeeDetailsPage.tsx`, `userActivities` | [`employee-details.html`](employee-details.html) | Badges, assigned formats list, attendance calendar summary |
| **17** | **HR & People** | **Employee Onboarding & Document Upload** | `COMMON_ATTRIBUTE_SUGGESTIONS`, `Aadhaar`, `Document`| [`employee-onboarding.html`](employee-onboarding.html)| Photo capture of ID proof, onboarding checklist with check-boxes |
| **18** | **HR & People** | **Employee Deactivation / Offboarding** | `AccountStatus` (`suspended`, `expired`), `deleteUser` | [`employee-deactivate.html`](employee-deactivate.html) | Confirmation modal, handover checklist, data preservation note |
| **19** | **HR & People** | Roles & Access Matrix (9 Roles) | `ROLES`, `RolePermission`, `RequirePermission` | [`users-roles.html`](users-roles.html) | Role cards (Master Admin, Field Worker, etc.), permission checks |
| **20** | **HR & People** | Employee Format Assignments Matrix | `UserSubActivity`, `EmployeeFormConfig` | [`employee-format-assignments.html`](employee-format-assignments.html) | Visual matrix checkboxes: assign forms to staff in 1 click |
| **21** | **Attendance** | Daily Punch-In / Punch-Out & GPS | `AttendancePage.tsx`, `AttendanceRecord`, `Shift` | [`attendance.html`](attendance.html) | Giant green [map-pin] PUNCH IN button, verified GPS location badge |
| **22** | **Attendance** | Monthly Timesheet & Attendance Register | `ProgrammeAttendancePage.tsx`, `AttendanceRecord` | [`attendance-monthly.html`](attendance-monthly.html) | Calendar grid with green dots (present), red (absent), yellow (leave) |
| **23** | **Attendance** | Field Visits & Site Verification Check-in | `FieldVisitsPage.tsx`, `SiteVisit`, `SiteAssignment` | [`field-visits.html`](field-visits.html) | School/mandal check-in, photo verification, geo-tagged notes |
| **24** | **Leave** | Apply for Leave (Casual / Sick / Earned) | `LeavePage.tsx`, `LeaveApplication`, `LeaveType` | [`leave-apply.html`](leave-apply.html) | Step-by-step wizard: Choose leave type (pictures), pick dates, speak reason |
| **25** | **Leave** | Leave Balances & Public Holiday Calendar | `LeaveBalance`, `Holiday`, `ProgrammeAttendanceLeavePage`| [`leave-balances.html`](leave-balances.html) | Visual balance circles (e.g. 12 Casual left), holiday list |
| **26** | **Assets & Inventory**| Equipment, Digital Tablets & School Kits | `Facility`, `seedOperations.ts`, `Terminal Inspection` | [`assets-inventory.html`](assets-inventory.html) | Picture inventory tiles, stock quantity badges, status flags |
| **27** | **Procurement** | Purchase Requests, POs & Delivery Verification | `WorkflowInstance`, `attachments`, `Budget` | [`procurement.html`](procurement.html) | 3-step purchase request wizard, quote upload, delivery tick |
| **28** | **Beneficiaries** | Beneficiary Roster, Search & Deduplication | `Beneficiary`, `Location`, `dedupeKey` | [`beneficiaries-directory.html`](beneficiaries-directory.html) | Search by photo/ID/voice, deduplication warning, village filter |
| **29** | **Beneficiaries** | Register New Child / Beneficiary Profile | `Beneficiary`, `HER-DROPOUT-REG`, `customFields` | [`beneficiary-add.html`](beneficiary-add.html) | Step-by-step wizard: Photo, Name, Age, Village, School, Guardian |
| **30** | **Facilities & Batches**| Training Batches & Community Centres | `Batch`, `Facility`, `HER-SL-BATCH`, `Digital Literacy` | [`batches-facilities.html`](batches-facilities.html) | Center cards, cohort capacity meters, start/end dates |
| **31** | **Tasks & Goals** | Assigned Work Tasks & Checklists | `TasksPage.tsx`, `Task`, `TaskChecklistItem` | [`tasks.html`](tasks.html) | Big checkbox list, priority colors (High, Medium), 1-click done |
| **32** | **Tasks & Goals** | Weekly Goal Planner & Review | `GoalsPage.tsx`, `WeeklyGoal` | [`goals.html`](goals.html) | Weekly goals cards, percentage achievement slider, manager feedback |
| **33** | **Organisation** | Organisation Modules, Pillars & Structure | `OrganisationsPage.tsx`, `Organisation`, `DashboardModules` | [`organisation.html`](organisation.html) | Visual cards for CoHeart pillars, departments, legal units |
| **34** | **Organisation** | Organisation Profile & Settings | `ORGANISATION_SETTINGS_PATH`, `Setting` | [`organisation-settings.html`](organisation-settings.html) | Foundation address, registration number, logo, partner NGOs |
| **35** | **Interventions** | Interventions Overview (4 Pillars) | `HER`, `SPC`, `SKL`, `CRS`, `ProgrammeOverviewPage` | [`interventions.html`](interventions.html) | 4 big colored tiles: HerEcho (Red), Spectrum (Purple), SkillEd (Cyan), CareS (Green) |
| **36** | **Programmes** | Operational Field Programmes Directory | `ProgrammesPage.tsx`, `Project`, `Location` | [`programmes.html`](programmes.html) | Active projects list, location badges (Vizianagaram, Bobbili, etc.) |
| **37** | **Activities** | Activities Directory (Thematic Areas) | `SubActivitiesPage.tsx`, `ThematicAreaSpec` | [`activities.html`](activities.html) | School Program, Women Hubs, Vocational Skilling, Senior Hub |
| **38** | **Sub-Activities** | Sub-Activities List & Form Groups | `SubActivityPage.tsx`, `SubActivitySpec` | [`sub-activities.html`](sub-activities.html) | Dropout Follow-up, LSE, Check-ups + **[+ New Group]** button |
| **39** | **Format Groups** | Create & Manage Multi-Format Bundles | User Prompt Requirement 4 (`+ New Group`, Duration) | [`format-groups.html`](format-groups.html) | Checkboxes to bundle formats (e.g. Dropout + Counseling), duration filter |
| **40** | **Formats Hub** | Universal Cross-Intervention Forms Directory | Route `/formats`, `FormDefinition`, `FormSpec` | [`formats-hub.html`](formats-hub.html) | Role-aware tabs: My Forms (3), All Forms (8), 1-click [+ Record] |
| **41** | **Format Entry** | Step-by-Step Low-Literacy Record Entry | `WorkEntryPage.tsx`, `HER-DROPOUT-FU`, `FormValue` | [`format-record-entry.html`](format-record-entry.html) | Single-question wizard, voice input [mic], read aloud [volume-2], picture choices |
| **42** | **Format Data Grid**| Submitted Records Table & CSV Export | `ProgrammeRecordsPage.tsx`, `FormSubmission` | [`format-records-grid.html`](format-records-grid.html) | Admin view with entry_by employee name, search, status pills |
| **43** | **Drive & Files** | Central Cloud Drive & Folder Tree | `DrivePage.tsx`, `DriveOverviewPage.tsx`, `Document` | [`drive.html`](drive.html) | Big folder icons (HerEcho, CareS), drag-and-drop file upload |
| **44** | **Documents** | Policy Documents, Identity Proofs & Templates| `DocumentsPage.tsx`, `DocumentVersion` | [`documents.html`](documents.html) | Downloadable files list, version chips, file type badges |
| **45** | **MIS & Trackers** | Indicators, Reporting Periods & Targets | `MisPage.tsx`, `Tracker`, `Indicator`, `Target` | [`mis.html`](mis.html) | Indicator progress meters, reporting period selector, data status |
| **46** | **Reports** | Analytics Dashboards & Indicator Summaries | `ReportsPage.tsx`, `DirectReportsPage.tsx`, `ReportDefinition`| [`reports.html`](reports.html) | Outreach charts, gender breakdown, 1-click PDF/CSV export |
| **47** | **Reports Shared**| Donor & Partner Public Shared Reports | `SharedReportPage.tsx`, `sharedReportToken` | [`reports-shared.html`](reports-shared.html) | Clean, credential-free executive progress report with print view |
| **48** | **Approvals** | Unified Approval Inbox & Request Triage | `ApprovalsPage.tsx`, `WorkflowInstance`, `WorkflowAction`| [`approvals.html`](approvals.html) | 1-click Approve/Reject inline, bulk approval, audit flow |
| **49** | **Workflows** | Approval Flow Builder & Delegation | `WorkflowDefinition`, `WorkflowStep`, `Delegation` | [`workflow-builder.html`](workflow-builder.html) | Visual approval chain (Employee [arrow-right] Lead [arrow-right] Head [arrow-right] Admin) |
| **50** | **Announcements** | Team Broadcasts & Acknowledgements | `AnnouncementsPage.tsx`, `Announcement` | [`announcements.html`](announcements.html) | Notice board cards, audio message player, 1-click "+ Post Announcement" |
| **51** | **Notifications** | System Alerts & Message Centre | `NotificationsPage.tsx`, `Notification` | [`notifications.html`](notifications.html) | Unread counter badges, category filters, 1-click mark all as read |
| **52** | **Meetings** | Review Meetings Calendar & Action Items | `MeetingsPage.tsx`, `Meeting`, `ActionItem` | [`meetings.html`](meetings.html) | Calendar review schedule, attendee chips, action items with tick marks |
| **53** | **Meetings** | Dedicated Meeting Room / Active Window | `MeetingWindowPage.tsx`, `/meet/:meetingId/room` | [`meeting-room.html`](meeting-room.html) | Active meeting window, participant roster, live audio transcript |
| **54** | **Volunteers** | Community Volunteer Roster & Drives | `VolunteersPage.tsx`, `VolunteerProfile`, `DriveVolunteers` | [`volunteers.html`](volunteers.html) | Volunteer cards, assigned community drives, hours contributed |
| **55** | **Audit Trail** | System Security & Audit Log | `AuditPage.tsx`, `AuditLog`, `clientOpId` | [`audit-log.html`](audit-log.html) | Timestamped audit records, IP/device tracker, 1-click CSV export |
| **56** | **Sync Centre** | Offline Data Engine & Sync Queue Status | `SyncCentrePage.tsx`, `SyncOperation`, `OutboxItem` | [`sync-centre.html`](sync-centre.html) | Green online / Amber offline status, pending outbox items counter |
| **57** | **Settings** | Workspace Preferences & Appearance | `Setting`, `ThemeProvider`, `lowBandwidthMode` | [`settings.html`](settings.html) | OLED Dark Mode toggle, language switch, sound on/off switch |
| **58** | **Profile** | User Account & Personal Assignments | `useSession`, `CurrentUser`, `passwordChangedAt` | [`profile.html`](profile.html) | Avatar photo, contact update, assigned forms, logout button |
| **59** | **Search** | Global Omnisearch Results View | `SearchInput.tsx`, `usePageSearch` | [`search-results.html`](search-results.html) | Categorized results for Pages, Records, Beneficiaries, Staff |
| **60** | **Audit Report** | Full 18-Journey Click Audit Table & Eco Report | System Audit Benchmark (94 clicks [arrow-right] 23 clicks) | [`audit-table.html`](audit-table.html) | Interactive audit matrix, KPI cards, eco compute efficiency cards |
| **61** | **Simulator** | Interactive Old vs New Click Simulator | Comparative Usability Simulator (8 clicks vs 1 click) | [`click-comparison.html`](click-comparison.html) | Step-by-step interactive comparison runner |
| **62** | **Portal Hub** | Master Prototype Entry Point & Sitemap | Master Navigation Gateway & Visual Low-Literacy Hub | [`index.html`](index.html) | Visual sitemap linking every single page, language/role toggles |

---

## 2. Low-Literacy & Non-Tech Accessibility Standard Implemented

Every page adheres to the Universal Field Accessibility Standard:
1. **Always-Visible Big Home Button ([house])**: Positioned in the top navigation bar of every page, guaranteeing zero users can get lost.
2. **Help Button ([help-circle]) with Web Speech Audio**: Speaks a clear, plain-language audio description of the screen in the selected language.
3. **Audio-Read Aloud Buttons ([volume-2])**: Available next to every form field, table header, and instructions card.
4. **Voice Input ([mic])**: Embedded on data entry fields so users who cannot type can dictate names, notes, and observations.
5. **Trilingual Language Selector**: Instant switching between **English**, **हिंदी (Hindi)**, and **తెలుగు (Telugu)** stored in `localStorage`.
6. **Icon-First Visual Touch Targets**: Minimum 56px touch target height with large pictograms and intuitive color semantics.
7. **Picture Choices Over Dropdowns**: Yes/No tick buttons, photo attachment buttons, and visual cards instead of deep dropdown menus.
8. **Rupee Formatting (₹)**: Large, high-contrast numerals for all currency amounts with category picture icons.
9. **Instant Undo & Clear State**: Green checkmarks ([circle-check]) on success, red alerts with spoken descriptions on error, and 1-click undo.
10. **Role Switcher**: Simple toggle between **[helmet-safety] Field Worker (Simple View)** and **[user-tie] Manager / Admin (Detailed View)**.
