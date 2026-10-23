const { buildPage } = require('./generate-ui');

console.log('Starting full system page generation for CoHeart Workspace...');

// =========================================================================
// 1. DASHBOARD (dashboard.html)
// =========================================================================
buildPage({
  filename: 'dashboard.html',
  title: 'Dashboard Home',
  activeNav: 'dashboard',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Workspace', menu: [{ url: 'formats-hub.html', label: 'Formats Hub' }, { url: 'attendance.html', label: 'Attendance' }] }],
  activeCrumb: 'Dashboard',
  content: `
    <!-- Spoken Welcome Header -->
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #dcfce7; color: #15803d;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house "  aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></div>
        <div>
          <h2 id="welcome-user-text">Welcome, Sunil Patro (Field Worker)</h2>
          <p>HerEcho & CareS &bull; Vizianagaram District &bull; Tap any big button below to start</p>
        </div>
      </div>
      <button class="speak-btn" onclick="speakScreenHelp('dashboard')" title="Listen to instructions"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
    </div>

    <!-- 1-Click Resume Draft Alert -->
    <div class="status-banner status-success" style="background: #eff6ff; border-color: #bfdbfe; color: #1e40af;">
      <div class="status-icon-box" style="background: #dbeafe; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-save "  aria-hidden="true"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg></div>
      <div style="flex: 1;">
        <strong style="font-size: 16px;">Incomplete Draft Saved (Dropout School Follow-up)</strong>
        <p style="font-size: 13px; margin-top: 2px;">Started today at 08:45 AM &bull; 4 of 6 questions completed</p>
      </div>
      <a href="format-record-entry.html?resume=draft-01" class="btn btn-primary" style="background: #2563eb;">
        Resume Draft <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right "  aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
      </a>
    </div>

    <!-- Big 1-Click Action Grid for Non-Tech Users -->
    <div class="big-action-grid">
      <a href="attendance.html" class="big-action-card highlight">
        <div class="action-top">
          <div class="action-icon-circle" style="background: #dcfce7; color: #15803d;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin "  aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
          <span class="badge badge-success">1-Click</span>
        </div>
        <div>
          <div class="action-title">1. Punch In (हाजिरी लगाएं)</div>
          <div class="action-sub">Verified GPS location check-in today</div>
        </div>
      </a>

      <a href="formats-hub.html" class="big-action-card highlight">
        <div class="action-top">
          <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus-2 "  aria-hidden="true"><path d="M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M14 19h6"></path><path d="M17 16v6"></path></svg></div>
          <span class="badge badge-info">1-Click</span>
        </div>
        <div>
          <div class="action-title">2. + New Record (नया रिकॉर्ड)</div>
          <div class="action-sub">Enter beneficiary follow-up or session log</div>
        </div>
      </a>

      <a href="leave-apply.html" class="big-action-card">
        <div class="action-top">
          <div class="action-icon-circle" style="background: #fef3c7; color: #d97706;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palmtree "  aria-hidden="true"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path></svg></div>
          <span class="badge badge-warning">Wizard</span>
        </div>
        <div>
          <div class="action-title">3. Apply Leave (छुट्टी)</div>
          <div class="action-sub">Request casual or sick leave in 2 steps</div>
        </div>
      </a>

      <a href="approvals.html" class="big-action-card">
        <div class="action-top">
          <div class="action-icon-circle" style="background: #fef2f2; color: #dc2626;"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-inbox "  aria-hidden="true"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg></div>
          <span class="badge badge-danger">3 Waiting</span>
        </div>
        <div>
          <div class="action-title">4. Approvals (मंजूरी)</div>
          <div class="action-sub">Review leave, spend & verification requests</div>
        </div>
      </a>
    </div>

    <!-- Assigned Field Formats Quick Launcher -->
    <div class="form-card" style="max-width: 100%; margin-bottom: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 800;">My Assigned Field Formats (मेरे आवंटित फॉर्म)</h3>
          <p style="font-size: 13px; color: var(--text-muted);">Direct 1-click data entry without 8-step hierarchy</p>
        </div>
        <a href="formats-hub.html" class="btn btn-outline">View All Formats <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right "  aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
      </div>

      <div class="big-action-grid" style="margin-bottom: 0;">
        <div class="big-action-card">
          <div class="action-top">
            <span class="badge badge-danger">HerEcho</span>
            <span style="font-size: 12px; color: var(--text-muted);">Daily</span>
          </div>
          <div>
            <div class="action-title">Dropout School Follow-up</div>
            <div class="action-sub">Track re-enrolment & parent counseling</div>
          </div>
          <div style="display: flex; gap: 8px; margin-top: 14px;">
            <a href="format-record-entry.html" class="btn btn-primary btn-sm" style="flex: 1;">+ Record</a>
            <a href="format-records-grid.html" class="btn btn-outline btn-sm">View (18)</a>
          </div>
        </div>

        <div class="big-action-card">
          <div class="action-top">
            <span class="badge badge-purple">Spectrum</span>
            <span style="font-size: 12px; color: var(--text-muted);">Weekly</span>
          </div>
          <div>
            <div class="action-title">Therapy Session Log</div>
            <div class="action-sub">Special needs child therapy milestones</div>
          </div>
          <div style="display: flex; gap: 8px; margin-top: 14px;">
            <a href="format-record-entry.html" class="btn btn-primary btn-sm" style="flex: 1;">+ Record</a>
            <a href="format-records-grid.html" class="btn btn-outline btn-sm">View (34)</a>
          </div>
        </div>

        <div class="big-action-card">
          <div class="action-top">
            <span class="badge badge-success">CareS</span>
            <span style="font-size: 12px; color: var(--text-muted);">Weekly</span>
          </div>
          <div>
            <div class="action-title">CHW Household Health Log</div>
            <div class="action-sub">Elderly blood pressure & nutrition survey</div>
          </div>
          <div style="display: flex; gap: 8px; margin-top: 14px;">
            <a href="format-record-entry.html" class="btn btn-primary btn-sm" style="flex: 1;">+ Record</a>
            <a href="format-records-grid.html" class="btn btn-outline btn-sm">View (120)</a>
          </div>
        </div>
      </div>
    </div>
  `
});

// =========================================================================
// 2. FORMATS HUB (formats-hub.html)
// =========================================================================
buildPage({
  filename: 'formats-hub.html',
  title: 'Universal Formats Hub',
  activeNav: 'formats-hub',
  screenKey: 'format_entry',
  crumbs: [{ label: 'Field Delivery', menu: [{ url: 'interventions.html', label: 'Interventions' }, { url: 'activities.html', label: 'Activities' }] }],
  activeCrumb: 'Formats Hub',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #ecfdf5; color: #047857;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list "  aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg></div>
        <div>
          <h2>Universal Formats Hub (/formats)</h2>
          <p>Access all data collection sheets across all 4 interventions in 1 click</p>
        </div>
      </div>
      <div style="display: flex; gap: 8px;">
        <a href="format-groups.html" class="btn btn-outline"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers "  aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> Manage Groups</a>
        <a href="employee-format-assignments.html" class="btn btn-outline admin-only"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round "  aria-hidden="true"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></svg> Assign Formats</a>
      </div>
    </div>

    <!-- Category Filters -->
    <div style="display: flex; gap: 8px; overflow-x: auto; margin-bottom: 20px; padding-bottom: 4px;">
      <button class="btn btn-primary btn-sm">All Forms (8)</button>
      <button class="btn btn-outline btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle " style="color: #dc2626;" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg> HerEcho (Girls)</button>
      <button class="btn btn-outline btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle " style="color: #7c3aed;" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg> Spectrum (Special Needs)</button>
      <button class="btn btn-outline btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle " style="color: #2563eb;" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg> SkillEd (Digital & Labs)</button>
      <button class="btn btn-outline btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle " style="color: #16a34a;" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg> CareS (Health)</button>
    </div>

    <div class="big-action-grid">
      <!-- Format 1 -->
      <div class="big-action-card highlight">
        <div class="action-top">
          <span class="badge badge-danger">HerEcho</span>
          <button class="speak-btn" onclick="speak('Dropout School Follow-up format. HerEcho School Program. Daily form.')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
        </div>
        <div>
          <div class="action-title">Dropout School Follow-up</div>
          <div class="action-sub">Track attendance, re-enrolment, guardian counseling</div>
        </div>
        <div style="display: flex; gap: 8px; margin-top: 14px;">
          <a href="format-record-entry.html" class="btn btn-primary" style="flex: 1;">+ Record (1-Click)</a>
          <a href="format-records-grid.html" class="btn btn-outline">View Records</a>
        </div>
      </div>

      <!-- Format 2 -->
      <div class="big-action-card">
        <div class="action-top">
          <span class="badge badge-danger">HerEcho</span>
          <button class="speak-btn" onclick="speak('Student Registration format. Register out of school children.')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
        </div>
        <div>
          <div class="action-title">Dropout Student Registration</div>
          <div class="action-sub">New child identification, school history & Aadhaar</div>
        </div>
        <div style="display: flex; gap: 8px; margin-top: 14px;">
          <a href="format-record-entry.html" class="btn btn-primary" style="flex: 1;">+ Record</a>
          <a href="format-records-grid.html" class="btn btn-outline">View Records</a>
        </div>
      </div>

      <!-- Format 3 -->
      <div class="big-action-card">
        <div class="action-top">
          <span class="badge badge-purple">Spectrum</span>
          <button class="speak-btn" onclick="speak('Therapy Session Log. Special needs child screening.')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
        </div>
        <div>
          <div class="action-title">Therapy Session Log</div>
          <div class="action-sub">Sensory therapy, motor milestones, clinical notes</div>
        </div>
        <div style="display: flex; gap: 8px; margin-top: 14px;">
          <a href="format-record-entry.html" class="btn btn-primary" style="flex: 1;">+ Record</a>
          <a href="format-records-grid.html" class="btn btn-outline">View Records</a>
        </div>
      </div>

      <!-- Format 4 -->
      <div class="big-action-card">
        <div class="action-top">
          <span class="badge badge-info">SkillEd</span>
          <button class="speak-btn" onclick="speak('Terminal Inspection Checklist. Hardware lab audit.')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
        </div>
        <div>
          <div class="action-title">Terminal Inspection Checklist</div>
          <div class="action-sub">Computer lab hardware verification, broadband & UPS</div>
        </div>
        <div style="display: flex; gap: 8px; margin-top: 14px;">
          <a href="format-record-entry.html" class="btn btn-primary" style="flex: 1;">+ Record</a>
          <a href="format-records-grid.html" class="btn btn-outline">View Records</a>
        </div>
      </div>
    </div>
  `
});

// =========================================================================
// 3. FORMAT RECORD ENTRY WIZARD (format-record-entry.html)
// =========================================================================
buildPage({
  filename: 'format-record-entry.html',
  title: 'Record Entry Wizard',
  activeNav: 'format-entry',
  screenKey: 'format_entry',
  crumbs: [{ label: 'Formats Hub', menu: [{ url: 'formats-hub.html', label: 'All Formats' }, { url: 'format-records-grid.html', label: 'View Records' }] }],
  activeCrumb: 'New Record',
  content: `
    <div class="wizard-box">
      <div class="wizard-step-indicator">
        <span class="step-num-pill">Question 1 of 4</span>
        <button class="speak-btn" onclick="speak('What is the child or beneficiary name? You can speak into the microphone.')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg> Read Aloud</button>
      </div>

      <div class="wizard-question">
        <span>Beneficiary / Student Name *</span>
      </div>
      <p class="wizard-guidance">बच्चे का नाम बताएं या लिखें &bull; విద్యార్థి పేరు చెప్పండి</p>

      <div class="form-group">
        <div class="input-with-voice">
          <input type="text" id="ben-name-input" class="form-input" placeholder="e.g. Radhika Kumari" value="Radhika Kumari" />
          <button class="voice-input-btn" onclick="startVoiceInput('ben-name-input', this)" title="Speak now"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic "  aria-hidden="true"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect x="9" y="2" width="6" height="13" rx="3"></rect></svg></button>
        </div>
      </div>

      <div class="form-group" style="margin-top: 24px;">
        <div class="wizard-question" style="font-size: 16px;">
          <span>Is child re-enrolled in school? *</span>
          <button class="speak-btn" onclick="speak('Is child re-enrolled in school? Choose Yes or No.')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
        </div>
        <div class="yes-no-wrap" style="margin-top: 12px;">
          <button class="choice-btn-yes selected" onclick="this.classList.toggle('selected'); speak('Yes selected');">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg></span> <span>YES (हाँ / అవును)</span>
          </button>
          <button class="choice-btn-no" onclick="this.classList.toggle('selected'); speak('No selected');">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x "  aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></span> <span>NO (नहीं / కాదు)</span>
          </button>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          <span>Worker Observations / Remarks</span>
          <button class="speak-btn" onclick="speak('Worker remarks. What happened during counseling?')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
        </label>
        <div class="input-with-voice">
          <textarea id="remarks-input" class="form-textarea" rows="3" placeholder="Speak or write observations...">Parent agreed to re-enroll daughter in High School next Monday.</textarea>
          <button class="voice-input-btn" onclick="startVoiceInput('remarks-input', this)"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic "  aria-hidden="true"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect x="9" y="2" width="6" height="13" rx="3"></rect></svg></button>
        </div>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 28px;">
        <a href="formats-hub.html" class="btn btn-outline" style="flex: 1;">Cancel</a>
        <button class="btn btn-primary btn-lg" style="flex: 2;" onclick="showToast('Record saved successfully! 1 click complete.', 'success'); setTimeout(() => location.href='format-records-grid.html', 1200);">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg> Save & Submit Record
        </button>
      </div>
    </div>
  `
});

// =========================================================================
// 4. FORMAT RECORDS DATA GRID (format-records-grid.html)
// =========================================================================
buildPage({
  filename: 'format-records-grid.html',
  title: 'Submitted Records Grid',
  activeNav: 'records-grid',
  screenKey: 'format_entry',
  crumbs: [{ label: 'Formats Hub', menu: [{ url: 'formats-hub.html', label: 'Formats Hub' }, { url: 'format-record-entry.html', label: 'New Record' }] }],
  activeCrumb: 'Submitted Records',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-2 "  aria-hidden="true"><path d="M3 9h18"></path><path d="M9 3v18"></path><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg></div>
        <div>
          <h2>Submitted Records: Dropout School Follow-up</h2>
          <p>HerEcho &bull; School Program &bull; Showing field verification status</p>
        </div>
      </div>
      <div style="display: flex; gap: 8px;">
        <a href="format-record-entry.html" class="btn btn-primary">+ New Record</a>
        <button class="btn btn-outline" onclick="showToast('Exporting records to CSV...', 'success')"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download " style="margin-right: 4px;" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Export CSV</button>
      </div>
    </div>

    <!-- Table Wrap -->
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Beneficiary ID</th>
            <th>Student Name</th>
            <th>School / Village</th>
            <th>Re-enrolled?</th>
            <th>Entry By (दर्जकर्ता)</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23 Oct 2026</td>
            <td><strong>CH-VZM-0412</strong></td>
            <td>Radhika Kumari</td>
            <td>Mandal High School, Kondakarakam</td>
            <td><span class="badge badge-success">Yes</span></td>
            <td><strong style="color: #047857;">Sunil Patro (Field)</strong></td>
            <td><span class="badge badge-warning">Pending Review</span></td>
            <td><button class="btn btn-sm btn-outline" onclick="alert('Viewing full details of record CH-VZM-0412')">View</button></td>
          </tr>
          <tr>
            <td>22 Oct 2026</td>
            <td><strong>CH-VZM-0398</strong></td>
            <td>Suresh Naidu</td>
            <td>Govt High School, Bobbili</td>
            <td><span class="badge badge-danger">In Counseling</span></td>
            <td><strong style="color: #047857;">Sunil Patro (Field)</strong></td>
            <td><span class="badge badge-success">Verified</span></td>
            <td><button class="btn btn-sm btn-outline" onclick="alert('Viewing record')">View</button></td>
          </tr>
          <tr class="admin-only">
            <td>21 Oct 2026</td>
            <td><strong>CH-VZM-0344</strong></td>
            <td>Anjali Rao</td>
            <td>Ramabhadrapuram</td>
            <td><span class="badge badge-success">Yes</span></td>
            <td><strong style="color: #7c3aed;">Vikram Reddy (Admin Entry)</strong></td>
            <td><span class="badge badge-success">Verified</span></td>
            <td><button class="btn btn-sm btn-outline">View</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// =========================================================================
// 5. FORMAT GROUPS MANAGER (format-groups.html)
// =========================================================================
buildPage({
  filename: 'format-groups.html',
  title: 'Format Groups Manager',
  activeNav: 'format-groups',
  screenKey: 'format_entry',
  crumbs: [{ label: 'Sub-Activities', menu: [{ url: 'sub-activities.html', label: 'Sub-Activities' }, { url: 'formats-hub.html', label: 'Formats Hub' }] }],
  activeCrumb: 'Format Groups',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fdf4ff; color: #a855f7;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers "  aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></div>
        <div>
          <h2>Format Grouping Management</h2>
          <p>Bundle multiple formats together under sub-activities for combined reporting and entry</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="openModal('new-group-modal')">+ New Group (नया समूह)</button>
    </div>

    <!-- Existing Groups List -->
    <div class="big-action-grid">
      <div class="big-action-card">
        <div class="action-top">
          <span class="badge badge-purple">Group: School Follow-up</span>
          <span style="font-size: 12px; color: var(--text-muted);">Duration: 6 Months</span>
        </div>
        <div class="action-title">School Re-enrolment Bundle</div>
        <div class="action-sub">Contains: Dropout Registration + Dropout Follow-up</div>
        <div style="margin-top: 14px; display: flex; gap: 8px;">
          <a href="formats-hub.html" class="btn btn-primary btn-sm" style="flex: 1;">Open Group</a>
          <button class="btn btn-outline btn-sm" onclick="alert('Editing group duration')">Edit Duration</button>
        </div>
      </div>

      <div class="big-action-card">
        <div class="action-top">
          <span class="badge badge-purple">Group: Counseling Track</span>
          <span style="font-size: 12px; color: var(--text-muted);">Duration: 3 Months</span>
        </div>
        <div class="action-title">Student & Parent Counseling</div>
        <div class="action-sub">Contains: Dropout Follow-up + Parent Counseling Log</div>
        <div style="margin-top: 14px; display: flex; gap: 8px;">
          <a href="formats-hub.html" class="btn btn-primary btn-sm" style="flex: 1;">Open Group</a>
          <button class="btn btn-outline btn-sm">Edit Duration</button>
        </div>
      </div>
    </div>

    <!-- New Group Modal -->
    <div class="modal-overlay" id="new-group-modal">
      <div class="modal-card">
        <div class="modal-header">
          <h3 style="font-weight: 800;">+ Create New Format Group</h3>
          <button onclick="closeModal('new-group-modal')" style="background: none; border: none; font-size: 20px; cursor: pointer;">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Group Name *</label>
            <input type="text" class="form-input" placeholder="e.g. Village School Outreach" value="Village School Outreach" />
          </div>
          <div class="form-group">
            <label class="form-label">Duration Tracking *</label>
            <select class="form-select">
              <option>1 Month (Quick Pulse)</option>
              <option selected>3 Months (Quarterly Cohort)</option>
              <option>6 Months (Semester Cycle)</option>
              <option>1 Year (Annual)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Select Formats to Include in this Group *</label>
            <div style="border: 1px solid var(--border); border-radius: 8px; padding: 12px;">
              <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; cursor: pointer;">
                <input type="checkbox" checked /> <span>Dropout Student Registration (HerEcho)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; cursor: pointer;">
                <input type="checkbox" checked /> <span>Dropout Follow-up (HerEcho)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; cursor: pointer;">
                <input type="checkbox" /> <span>Student & Parent Counseling (HerEcho)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                <input type="checkbox" /> <span>Participant Progress (LSE)</span>
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline" onclick="closeModal('new-group-modal')">Cancel</button>
          <button class="btn btn-primary" onclick="showToast('Format Group created successfully!', 'success'); closeModal('new-group-modal');">
            Create Group
          </button>
        </div>
      </div>
    </div>
  `
});

// =========================================================================
// 6. EMPLOYEE FORMAT ASSIGNMENTS (employee-format-assignments.html)
// =========================================================================
buildPage({
  filename: 'employee-format-assignments.html',
  title: 'Format Assignments Matrix',
  activeNav: 'format-assign',
  screenKey: 'format_entry',
  crumbs: [{ label: 'Administration', menu: [{ url: 'users-roles.html', label: 'Roles Matrix' }, { url: 'staff-directory.html', label: 'Staff Directory' }] }],
  activeCrumb: 'Format Assignments',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fef3c7; color: #d97706;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round "  aria-hidden="true"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></svg></div>
        <div>
          <h2>Employee Format Access Control</h2>
          <p>Assign specific formats of respective sub-activities to field employees</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="showToast('Access permissions updated for all employees!', 'success')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-save "  aria-hidden="true"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg> Save Assignments</button>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Role</th>
            <th>Dropout Registration</th>
            <th>Dropout Follow-up</th>
            <th>Therapy Session</th>
            <th>Terminal Inspection</th>
            <th>CHW Household Log</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Sunil Patro</strong><br><small style="color: var(--text-muted);">Field Coordinator</small></td>
            <td><span class="badge badge-info">Field Worker</span></td>
            <td style="text-align: center;"><input type="checkbox" checked /></td>
            <td style="text-align: center;"><input type="checkbox" checked /></td>
            <td style="text-align: center;"><input type="checkbox" checked /></td>
            <td style="text-align: center;"><input type="checkbox" /></td>
            <td style="text-align: center;"><input type="checkbox" checked /></td>
          </tr>
          <tr>
            <td><strong>Kavita Devi</strong><br><small style="color: var(--text-muted);">Health Worker</small></td>
            <td><span class="badge badge-info">Field Worker</span></td>
            <td style="text-align: center;"><input type="checkbox" /></td>
            <td style="text-align: center;"><input type="checkbox" /></td>
            <td style="text-align: center;"><input type="checkbox" /></td>
            <td style="text-align: center;"><input type="checkbox" /></td>
            <td style="text-align: center;"><input type="checkbox" checked /></td>
          </tr>
          <tr>
            <td><strong>Rajesh Verma</strong><br><small style="color: var(--text-muted);">Lab Tech</small></td>
            <td><span class="badge badge-info">Lab Coordinator</span></td>
            <td style="text-align: center;"><input type="checkbox" /></td>
            <td style="text-align: center;"><input type="checkbox" /></td>
            <td style="text-align: center;"><input type="checkbox" /></td>
            <td style="text-align: center;"><input type="checkbox" checked /></td>
            <td style="text-align: center;"><input type="checkbox" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// =========================================================================
// 7. DAILY ATTENDANCE & PUNCH-IN (attendance.html)
// =========================================================================
buildPage({
  filename: 'attendance.html',
  title: 'Daily Attendance & Punch-In',
  activeNav: 'attendance',
  screenKey: 'attendance',
  crumbs: [{ label: 'Attendance', menu: [{ url: 'attendance-monthly.html', label: 'Monthly Register' }, { url: 'field-visits.html', label: 'Field Visits' }] }],
  activeCrumb: 'Punch In',
  content: `
    <div class="wizard-box" style="text-align: center;">
      <div style="font-size: 14px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Today: 23 October 2026</div>
      <h2 style="font-size: 28px; font-weight: 900; margin: 8px 0 20px;">09:30 AM</h2>

      <!-- GPS Location Box -->
      <div class="status-banner status-success" style="justify-content: center; text-align: left; margin-bottom: 24px;">
        <span style="font-size: 32px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin "  aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
        <div>
          <strong style="font-size: 16px;">GPS Verified Location (स्थान सत्यापित)</strong>
          <p style="font-size: 13px;">Mandal High School, Vizianagaram &bull; Accuracy: 4 meters</p>
        </div>
      </div>

      <!-- Giant Touch Target Punch In Button -->
      <button class="btn btn-primary btn-lg" style="width: 100%; min-height: 72px; font-size: 22px; background: #16a34a; box-shadow: 0 4px 14px rgba(22, 163, 74, 0.4);" onclick="showToast('Attendance Punched In at 09:30 AM! GPS Recorded.', 'success')">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle " style="color: #16a34a;" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg> PUNCH IN (हाजिरी लगाएं / పంచ్ ఇన్)
      </button>

      <div style="margin-top: 18px;">
        <button class="btn btn-outline" style="width: 100%; color: #dc2626; border-color: #fca5a5;" onclick="showToast('Punched Out for the day.', 'error')">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle " style="color: #dc2626;" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg> Punch Out (काम समाप्त)
        </button>
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border); font-size: 13px;">
        <a href="attendance-monthly.html" style="color: var(--primary); text-decoration: none; font-weight: 700;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days "  aria-hidden="true"><path d="M8 2v3"></path><path d="M16 2v3"></path><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M8 13h.01"></path><path d="M12 13h.01"></path><path d="M16 13h.01"></path><path d="M8 17h.01"></path><path d="M12 17h.01"></path><path d="M16 17h.01"></path></svg> Monthly Calendar</a>
        <a href="field-visits.html" style="color: var(--primary); text-decoration: none; font-weight: 700;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-school "  aria-hidden="true"><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M18 4.933V21"></path><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"></path><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"></path><path d="M6 4.933V21"></path><circle cx="12" cy="9" r="2"></circle></svg> Field Visits</a>
      </div>
    </div>
  `
});

// =========================================================================
// 8. MONTHLY ATTENDANCE REGISTER (attendance-monthly.html)
// =========================================================================
buildPage({
  filename: 'attendance-monthly.html',
  title: 'Monthly Attendance Register',
  activeNav: 'attendance',
  screenKey: 'attendance',
  crumbs: [{ label: 'Attendance', menu: [{ url: 'attendance.html', label: 'Daily Punch-In' }] }],
  activeCrumb: 'Monthly Register',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #f0fdf4; color: #16a34a;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days "  aria-hidden="true"><path d="M8 2v3"></path><path d="M16 2v3"></path><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M8 13h.01"></path><path d="M12 13h.01"></path><path d="M16 13h.01"></path><path d="M8 17h.01"></path><path d="M12 17h.01"></path><path d="M16 17h.01"></path></svg></div>
        <div>
          <h2>Monthly Attendance Timesheet</h2>
          <p>October 2026 &bull; Sunil Patro &bull; 21 Days Present, 1 Leave, 0 Absent</p>
        </div>
      </div>
      <button class="btn btn-outline" onclick="showToast('Attendance summary downloaded', 'success')"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download " style="margin-right: 4px;" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download Timesheet</button>
    </div>

    <div class="big-action-grid">
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-success">Present</span></div>
        <div class="action-title" style="font-size: 32px; color: #16a34a;">21 Days</div>
        <div class="action-sub">General shift 09:30 - 18:00</div>
      </div>
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-warning">Leave</span></div>
        <div class="action-title" style="font-size: 32px; color: #d97706;">1 Day</div>
        <div class="action-sub">Casual leave on 14 Oct</div>
      </div>
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-danger">Late In</span></div>
        <div class="action-title" style="font-size: 32px; color: #dc2626;">0 Times</div>
        <div class="action-sub">Within 15 min grace period</div>
      </div>
    </div>
  `
});

// =========================================================================
// 9. FIELD VISITS LOG (field-visits.html)
// =========================================================================
buildPage({
  filename: 'field-visits.html',
  title: 'Field Site Visits Log',
  activeNav: 'attendance',
  screenKey: 'attendance',
  crumbs: [{ label: 'Attendance', menu: [{ url: 'attendance.html', label: 'Daily Punch' }] }],
  activeCrumb: 'Field Visits',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-school "  aria-hidden="true"><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M18 4.933V21"></path><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"></path><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"></path><path d="M6 4.933V21"></path><circle cx="12" cy="9" r="2"></circle></svg></div>
        <div>
          <h2>Field Site Visits & Verification</h2>
          <p>School and village center visits with GPS verification and photos</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="alert('Checking in to current school location...')">+ Check-In to Site</button>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Site / School Name</th>
            <th>Village / Mandal</th>
            <th>Purpose</th>
            <th>GPS Status</th>
            <th>Photo Proof</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23 Oct 2026</td>
            <td><strong>Mandal High School</strong></td>
            <td>Kondakarakam, Gajapathinagaram</td>
            <td>Parent counseling session</td>
            <td><span class="badge badge-success">Verified (4m)</span></td>
            <td><span class="badge badge-info"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera "  aria-hidden="true"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg> 1 Photo</span></td>
          </tr>
          <tr>
            <td>21 Oct 2026</td>
            <td><strong>Govt ZP High School</strong></td>
            <td>Therlam, Bobbili</td>
            <td>Dropout verification visit</td>
            <td><span class="badge badge-success">Verified (6m)</span></td>
            <td><span class="badge badge-info"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera "  aria-hidden="true"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg> 2 Photos</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// =========================================================================
// 10. APPLY FOR LEAVE WIZARD (leave-apply.html)
// =========================================================================
buildPage({
  filename: 'leave-apply.html',
  title: 'Apply for Leave',
  activeNav: 'leave',
  screenKey: 'leave',
  crumbs: [{ label: 'HR & People', menu: [{ url: 'leave-balances.html', label: 'Balances' }, { url: 'staff-directory.html', label: 'Staff' }] }],
  activeCrumb: 'Apply Leave',
  content: `
    <div class="wizard-box">
      <div class="wizard-step-indicator">
        <span class="step-num-pill">Step 1 of 3</span>
        <button class="speak-btn" onclick="speak('Select which type of leave you want. Casual leave, sick leave or earned leave.')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
      </div>

      <div class="wizard-question">1. Choose Leave Type (छुट्टी का प्रकार)</div>
      <div class="picture-choice-grid">
        <div class="picture-choice selected" onclick="document.querySelectorAll('.picture-choice').forEach(c=>c.classList.remove('selected')); this.classList.add('selected'); speak('Casual Leave selected. 12 days remaining.');">
          <div class="picture-choice-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palmtree "  aria-hidden="true"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path></svg></div>
          <div class="picture-choice-label">Casual (आकस्मिक)</div>
          <small style="color: var(--text-muted);">12 Days Left</small>
        </div>
        <div class="picture-choice" onclick="document.querySelectorAll('.picture-choice').forEach(c=>c.classList.remove('selected')); this.classList.add('selected'); speak('Sick Leave selected. 8 days remaining.');">
          <div class="picture-choice-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg></div>
          <div class="picture-choice-label">Sick (बीमारी)</div>
          <small style="color: var(--text-muted);">8 Days Left</small>
        </div>
        <div class="picture-choice" onclick="document.querySelectorAll('.picture-choice').forEach(c=>c.classList.remove('selected')); this.classList.add('selected'); speak('Earned Leave selected. 15 days remaining.');">
          <div class="picture-choice-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane "  aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg></div>
          <div class="picture-choice-label">Earned (अर्जित)</div>
          <small style="color: var(--text-muted);">15 Days Left</small>
        </div>
      </div>

      <div class="wizard-question" style="font-size: 16px; margin-top: 20px;">2. Select Dates</div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label">Start Date *</label>
          <input type="date" class="form-input" value="2026-10-26" />
        </div>
        <div class="form-group">
          <label class="form-label">End Date *</label>
          <input type="date" class="form-input" value="2026-10-27" />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          <span>Reason (कारण)</span>
          <button class="speak-btn" onclick="speak('Speak or type your reason for taking leave.')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
        </label>
        <div class="input-with-voice">
          <input type="text" id="leave-reason" class="form-input" value="Family ceremony in hometown" placeholder="Speak your reason..." />
          <button class="voice-input-btn" onclick="startVoiceInput('leave-reason', this)"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic "  aria-hidden="true"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect x="9" y="2" width="6" height="13" rx="3"></rect></svg></button>
        </div>
      </div>

      <button class="btn btn-primary btn-lg" style="width: 100%; margin-top: 14px;" onclick="showToast('Leave request submitted to supervisor!', 'success'); setTimeout(() => location.href='leave-balances.html', 1200);">
        Submit Leave Application <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right "  aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
      </button>
    </div>
  `
});

// =========================================================================
// 11. LEAVE BALANCES & HOLIDAYS (leave-balances.html)
// =========================================================================
buildPage({
  filename: 'leave-balances.html',
  title: 'Leave Balances & Holidays',
  activeNav: 'leave',
  screenKey: 'leave',
  crumbs: [{ label: 'Leave', menu: [{ url: 'leave-apply.html', label: 'Apply Leave' }] }],
  activeCrumb: 'Balances',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fef3c7; color: #d97706;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palmtree "  aria-hidden="true"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path></svg></div>
        <div>
          <h2>My Leave Balances & Holidays</h2>
          <p>Annual entitlement & Andhra Pradesh official holidays list</p>
        </div>
      </div>
      <a href="leave-apply.html" class="btn btn-primary">+ Apply Leave</a>
    </div>

    <div class="big-action-grid">
      <div class="big-action-card">
        <div class="action-title"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palmtree "  aria-hidden="true"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path></svg> Casual Leave</div>
        <div class="action-title" style="font-size: 32px; color: #16a34a; margin: 8px 0;">12 Left</div>
        <div class="action-sub">Total 14 allotted per year</div>
      </div>
      <div class="big-action-card">
        <div class="action-title"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg> Sick Leave</div>
        <div class="action-title" style="font-size: 32px; color: #2563eb; margin: 8px 0;">8 Left</div>
        <div class="action-sub">Requires medical note if > 2 days</div>
      </div>
      <div class="big-action-card">
        <div class="action-title"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane "  aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg> Earned Leave</div>
        <div class="action-title" style="font-size: 32px; color: #7c3aed; margin: 8px 0;">15 Left</div>
        <div class="action-sub">Carry forward up to 30 days</div>
      </div>
    </div>
  `
});

console.log('Core Workspace, Formats & Attendance pages generated successfully.');

// =========================================================================
// 12. FINANCE OVERVIEW (finance-overview.html)
// =========================================================================
buildPage({
  filename: 'finance-overview.html',
  title: 'Finance & Accounts',
  activeNav: 'finance',
  screenKey: 'finance',
  crumbs: [{ label: 'Finance', menu: [{ url: 'finance-budgets.html', label: 'Budgets' }, { url: 'finance-expenses.html', label: 'Record Expense' }] }],
  activeCrumb: 'Overview',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fdf4ff; color: #a855f7;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee "  aria-hidden="true"><path d="M6 3h12"></path><path d="M6 8h12"></path><path d="m6 13 8.5 8"></path><path d="M6 13h3"></path><path d="M9 13c6.667 0 6.667-10 0-10"></path></svg></div>
        <div>
          <h2>Finance & Accounts Overview</h2>
          <p>Financial Year 2026-27 &bull; Real-time budget tracking & expense rollups</p>
        </div>
      </div>
      <div style="display: flex; gap: 8px;">
        <a href="finance-expenses.html" class="btn btn-primary">+ Record Expense</a>
        <a href="finance-budgets.html" class="btn btn-outline"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-3 "  aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg> Manage Budgets</a>
      </div>
    </div>

    <!-- Financial KPI Summary Cards -->
    <div class="big-action-grid">
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-purple">Total Budget</span></div>
        <div class="action-title" style="font-size: 32px; color: #7c3aed;">₹42,50,000</div>
        <div class="action-sub">Across all 4 programmes</div>
      </div>
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-danger">Total Spent</span></div>
        <div class="action-title" style="font-size: 32px; color: #dc2626;">₹28,40,000</div>
        <div class="action-sub">66.8% utilization</div>
      </div>
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-success">Remaining</span></div>
        <div class="action-title" style="font-size: 32px; color: #16a34a;">₹14,10,000</div>
        <div class="action-sub">Available for Q4 activities</div>
      </div>
    </div>

    <!-- Sub-module Quick Launchers -->
    <div class="big-action-grid">
      <a href="finance-budgets.html" class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #eff6ff;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-3 "  aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></span></div>
        <div class="action-title">Budgets & Allocations</div>
        <div class="action-sub">Programme lines, donor grant caps</div>
      </a>
      <a href="finance-expenses.html" class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #fef2f2;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt "  aria-hidden="true"><path d="M12 17V7"></path><path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"></path><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path></svg></span></div>
        <div class="action-title">Record Expense</div>
        <div class="action-sub">Snap receipt photo & log field cost</div>
      </a>
      <a href="finance-claims.html" class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #fef3c7;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card "  aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line><path d="M6 14h2"></path></svg></span></div>
        <div class="action-title">Staff Claims & Per Diem</div>
        <div class="action-sub">Field travel reimbursement queue</div>
      </a>
      <a href="finance-payments.html" class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #f0fdf4;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark "  aria-hidden="true"><path d="M10 18v-7"></path><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg></span></div>
        <div class="action-title">Payments & Transfers</div>
        <div class="action-sub">Vendor disbursements & UTR verify</div>
      </a>
      <a href="finance-payroll.html" class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #ecfdf5;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet "  aria-hidden="true"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg></span></div>
        <div class="action-title">Payroll & Salary Slips</div>
        <div class="action-sub">Monthly staff salary registers</div>
      </a>
      <a href="finance-grants.html" class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #f5f3ff;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins "  aria-hidden="true"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg></span></div>
        <div class="action-title">Grants & Donors</div>
        <div class="action-sub">Donor reporting & fund utilization</div>
      </a>
    </div>
  `
});

// =========================================================================
// 13. FINANCE BUDGETS (finance-budgets.html)
// =========================================================================
buildPage({
  filename: 'finance-budgets.html',
  title: 'Budgets & Allocations',
  activeNav: 'budgets',
  screenKey: 'finance',
  crumbs: [{ label: 'Finance', menu: [{ url: 'finance-overview.html', label: 'Overview' }] }],
  activeCrumb: 'Budgets',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-3 "  aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></div>
        <div>
          <h2>Budgets & Project Allocations</h2>
          <p>Programme budget lines, donor grant funds and expense caps</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="alert('Opening budget allocation modal...')">+ Allocate Budget</button>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Programme / Project</th>
            <th>Donor / Grant</th>
            <th>Total Budget</th>
            <th>Spent to Date</th>
            <th>Remaining Balance</th>
            <th>Utilization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>HerEcho: Girls Learning Circles</strong><br><small style="color: var(--text-muted);">Gajapathinagaram</small></td>
            <td>Tata Trusts / AP Outreach</td>
            <td>₹12,00,000</td>
            <td style="color: #dc2626; font-weight: 700;">₹8,45,000</td>
            <td style="color: #16a34a; font-weight: 700;">₹3,55,000</td>
            <td><span class="badge badge-success">70.4%</span></td>
          </tr>
          <tr>
            <td><strong>Spectrum: Early Screening & Therapy</strong><br><small style="color: var(--text-muted);">Vizianagaram & Srikakulam</small></td>
            <td>APPI Foundation</td>
            <td>₹14,50,000</td>
            <td style="color: #dc2626; font-weight: 700;">₹9,80,000</td>
            <td style="color: #16a34a; font-weight: 700;">₹4,70,000</td>
            <td><span class="badge badge-success">67.5%</span></td>
          </tr>
          <tr>
            <td><strong>SkillEd: Digital Literacy Labs</strong><br><small style="color: var(--text-muted);">Visakhapatnam</small></td>
            <td>Rural Tech Initiative</td>
            <td>₹8,00,000</td>
            <td style="color: #dc2626; font-weight: 700;">₹5,20,000</td>
            <td style="color: #16a34a; font-weight: 700;">₹2,80,000</td>
            <td><span class="badge badge-success">65.0%</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// =========================================================================
// 14. FINANCE RECORD EXPENSE WIZARD (finance-expenses.html)
// =========================================================================
buildPage({
  filename: 'finance-expenses.html',
  title: 'Record Field Expense',
  activeNav: 'expenses',
  screenKey: 'finance',
  crumbs: [{ label: 'Finance', menu: [{ url: 'finance-overview.html', label: 'Overview' }] }],
  activeCrumb: 'Record Expense',
  content: `
    <div class="wizard-box">
      <div class="wizard-step-indicator">
        <span class="step-num-pill">Expense Step 1 of 3</span>
        <button class="speak-btn" onclick="speak('Select category for your expense. Travel, food, training material or medical.')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
      </div>

      <div class="wizard-question">1. Select Expense Category (खर्चे का प्रकार)</div>
      <div class="picture-choice-grid">
        <div class="picture-choice selected" onclick="document.querySelectorAll('.picture-choice').forEach(c=>c.classList.remove('selected')); this.classList.add('selected'); speak('Travel and Auto fare selected');">
          <div class="picture-choice-icon"><i class="fa-solid fa-motorcycle "  aria-hidden="true"></i></div>
          <div class="picture-choice-label">Travel / Auto (यात्रा)</div>
        </div>
        <div class="picture-choice" onclick="document.querySelectorAll('.picture-choice').forEach(c=>c.classList.remove('selected')); this.classList.add('selected'); speak('Refreshments and Food selected');">
          <div class="picture-choice-icon"><i class="fa-solid fa-bowl-rice "  aria-hidden="true"></i></div>
          <div class="picture-choice-label">Food / Tea (भोजन)</div>
        </div>
        <div class="picture-choice" onclick="document.querySelectorAll('.picture-choice').forEach(c=>c.classList.remove('selected')); this.classList.add('selected'); speak('Training material selected');">
          <div class="picture-choice-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text "  aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
          <div class="picture-choice-label">Material (सामग्री)</div>
        </div>
        <div class="picture-choice" onclick="document.querySelectorAll('.picture-choice').forEach(c=>c.classList.remove('selected')); this.classList.add('selected'); speak('Medical checkup kits selected');">
          <div class="picture-choice-icon"><i class="fa-solid fa-pills "  aria-hidden="true"></i></div>
          <div class="picture-choice-label">Medical (दवा)</div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          <span>2. Amount Spent in Rupees (रकम ₹) *</span>
          <button class="speak-btn" onclick="speak('Enter the amount spent in rupees.')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
        </label>
        <div class="input-with-voice">
          <input type="number" id="expense-amt" class="form-input" style="font-size: 20px; font-weight: 800; color: #166534;" value="450" />
          <button class="voice-input-btn" onclick="startVoiceInput('expense-amt', this)"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic "  aria-hidden="true"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect x="9" y="2" width="6" height="13" rx="3"></rect></svg></button>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          <span>3. Receipt / Bill Photo (रसीद का फोटो)</span>
          <button class="speak-btn" onclick="speak('Take a photo of the bill or receipt.')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
        </label>
        <div style="border: 2px dashed var(--border); border-radius: 12px; padding: 20px; text-align: center; background: var(--bg); cursor: pointer;" onclick="document.getElementById('receipt-file').click()">
          <span style="font-size: 32px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera "  aria-hidden="true"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg></span>
          <strong style="display: block; margin-top: 4px;">Tap here to take photo with phone camera</strong>
          <small style="color: var(--text-muted);">Bills & cash slips up to 10MB</small>
          <input type="file" id="receipt-file" style="display: none;" onchange="showToast('Bill photo captured: ' + this.files[0].name)" />
        </div>
      </div>

      <button class="btn btn-primary btn-lg" style="width: 100%; margin-top: 20px;" onclick="showToast('Expense of ₹450 submitted for approval!', 'success'); setTimeout(() => location.href='finance-claims.html', 1200);">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg> Submit Expense Claim (जमा करें)
      </button>
    </div>
  `
});

// =========================================================================
// 15. FINANCE CLAIMS & PER DIEM (finance-claims.html)
// =========================================================================
buildPage({
  filename: 'finance-claims.html',
  title: 'Staff Claims & Per Diem',
  activeNav: 'claims',
  screenKey: 'finance',
  crumbs: [{ label: 'Finance', menu: [{ url: 'finance-overview.html', label: 'Overview' }] }],
  activeCrumb: 'Claims',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fef3c7; color: #d97706;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card "  aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line><path d="M6 14h2"></path></svg></div>
        <div>
          <h2>Staff Claims & Per Diem Reimbursements</h2>
          <p>Track field travel claims, food allowance and payment status</p>
        </div>
      </div>
      <a href="finance-expenses.html" class="btn btn-primary">+ New Claim</a>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Staff Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Receipt</th>
            <th>Approval Status</th>
            <th>Reimbursement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23 Oct 2026</td>
            <td><strong>Sunil Patro</strong></td>
            <td>Travel / Auto Fare</td>
            <td><strong style="color: #166534;">₹450</strong></td>
            <td><span class="badge badge-info"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera "  aria-hidden="true"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg> Verified</span></td>
            <td><span class="badge badge-warning">Pending Manager</span></td>
            <td>—</td>
          </tr>
          <tr>
            <td>20 Oct 2026</td>
            <td><strong>Kavita Devi</strong></td>
            <td>Nutrition Kits Transport</td>
            <td><strong style="color: #166534;">₹1,450</strong></td>
            <td><span class="badge badge-info"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera "  aria-hidden="true"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg> Verified</span></td>
            <td><span class="badge badge-success">Approved</span></td>
            <td><span class="badge badge-purple">Reimbursed</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// =========================================================================
// 16. FINANCE PAYMENTS & DISBURSEMENTS (finance-payments.html)
// =========================================================================
buildPage({
  filename: 'finance-payments.html',
  title: 'Payments & Disbursements',
  activeNav: 'payments',
  screenKey: 'finance',
  crumbs: [{ label: 'Finance', menu: [{ url: 'finance-overview.html', label: 'Overview' }] }],
  activeCrumb: 'Payments',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #f0fdf4; color: #16a34a;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark "  aria-hidden="true"><path d="M10 18v-7"></path><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg></div>
        <div>
          <h2>Payments & Disbursements</h2>
          <p>Bank NEFT/RTGS transfers, vendor checks & UTR reference log</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="showToast('Processed 4 pending payments successfully!', 'success')">Bulk Pay Approved (4)</button>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Beneficiary / Vendor</th>
            <th>Purpose</th>
            <th>Amount</th>
            <th>Payment Mode</th>
            <th>Bank Ref / UTR</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22 Oct 2026</td>
            <td><strong>Sri Sai Stationery, Bobbili</strong></td>
            <td>School student kits purchase</td>
            <td><strong>₹18,500</strong></td>
            <td>NEFT</td>
            <td><code>SBIN004128914</code></td>
            <td><span class="badge badge-success">Completed</span></td>
          </tr>
          <tr>
            <td>20 Oct 2026</td>
            <td><strong>Kavita Devi (Staff)</strong></td>
            <td>Travel Claim Reimbursement</td>
            <td><strong>₹1,450</strong></td>
            <td>UPI</td>
            <td><code>UPI/261020/7812</code></td>
            <td><span class="badge badge-success">Completed</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// =========================================================================
// 17. FINANCE INVOICES (finance-invoices.html)
// =========================================================================
buildPage({
  filename: 'finance-invoices.html',
  title: 'Invoices & Billing',
  activeNav: 'finance',
  screenKey: 'finance',
  crumbs: [{ label: 'Finance', menu: [{ url: 'finance-overview.html', label: 'Overview' }] }],
  activeCrumb: 'Invoices',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text "  aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
        <div>
          <h2>Invoices & Billing Documents</h2>
          <p>Donor grant tranches, partner billings and receipts</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="alert('Creating donor billing tranche...')">+ New Invoice</button>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Invoice #</th>
            <th>Client / Donor</th>
            <th>Project</th>
            <th>Amount</th>
            <th>Date Issued</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>INV-2026-081</strong></td>
            <td>Tata Trusts</td>
            <td>HerEcho Adolescent Girls</td>
            <td><strong>₹4,00,000</strong></td>
            <td>15 Oct 2026</td>
            <td><span class="badge badge-success">Paid</span></td>
            <td><button class="btn btn-sm btn-outline"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download " style="margin-right: 4px;" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download PDF</button></td>
          </tr>
          <tr>
            <td><strong>INV-2026-092</strong></td>
            <td>APPI Foundation</td>
            <td>Spectrum Early Screening</td>
            <td><strong>₹5,50,000</strong></td>
            <td>18 Oct 2026</td>
            <td><span class="badge badge-warning">Awaiting Tranche</span></td>
            <td><button class="btn btn-sm btn-outline"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download " style="margin-right: 4px;" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download PDF</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// =========================================================================
// 18. FINANCE GRANTS & DONORS (finance-grants.html)
// =========================================================================
buildPage({
  filename: 'finance-grants.html',
  title: 'Grants & Donor Funds',
  activeNav: 'grants',
  screenKey: 'finance',
  crumbs: [{ label: 'Finance', menu: [{ url: 'finance-overview.html', label: 'Overview' }] }],
  activeCrumb: 'Grants',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fdf4ff; color: #7c3aed;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins "  aria-hidden="true"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg></div>
        <div>
          <h2>Grants & Donor Fund Utilization</h2>
          <p>Track foundation commitments, milestone disbursements and audits</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="alert('Adding donor fund commitment...')">+ Register Grant</button>
    </div>

    <div class="big-action-grid">
      <div class="big-action-card">
        <div class="action-top">
          <span class="badge badge-purple">Tata Trusts</span>
          <span style="font-weight: 700; color: #16a34a;">Active</span>
        </div>
        <div class="action-title">HerEcho Girls Education Grant</div>
        <div class="action-sub">Grant Total: ₹25,00,000 &bull; Tranche 2 of 3</div>
        <div style="margin-top: 12px; background: #e2e8f0; border-radius: 999px; height: 8px; overflow: hidden;">
          <div style="background: #7c3aed; width: 68%; height: 100%;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 12px; margin-top: 6px;">
          <span>Spent: ₹17,00,000</span>
          <span>68% Utilized</span>
        </div>
      </div>

      <div class="big-action-card">
        <div class="action-top">
          <span class="badge badge-purple">APPI Philanthropies</span>
          <span style="font-weight: 700; color: #16a34a;">Active</span>
        </div>
        <div class="action-title">Spectrum Special Needs Project</div>
        <div class="action-sub">Grant Total: ₹30,00,000 &bull; Tranche 1 of 4</div>
        <div style="margin-top: 12px; background: #e2e8f0; border-radius: 999px; height: 8px; overflow: hidden;">
          <div style="background: #047857; width: 45%; height: 100%;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 12px; margin-top: 6px;">
          <span>Spent: ₹13,50,000</span>
          <span>45% Utilized</span>
        </div>
      </div>
    </div>
  `
});

// =========================================================================
// 19. FINANCE PAYROLL & PAYSLIPS (finance-payroll.html)
// =========================================================================
buildPage({
  filename: 'finance-payroll.html',
  title: 'Payroll & Salary Slips',
  activeNav: 'payroll',
  screenKey: 'finance',
  crumbs: [{ label: 'Finance', menu: [{ url: 'finance-overview.html', label: 'Overview' }] }],
  activeCrumb: 'Payroll',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #f0fdf4; color: #16a34a;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet "  aria-hidden="true"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg></div>
        <div>
          <h2>Payroll & Staff Salary Slips</h2>
          <p>Monthly salary breakdown, deductions, and direct bank transfers</p>
        </div>
      </div>
      <button class="btn btn-outline" onclick="showToast('Payslip PDF downloaded to your device', 'success')"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download " style="margin-right: 4px;" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download October Payslip</button>
    </div>

    <!-- Payslip Preview Card -->
    <div class="form-card" style="margin: 0 auto 24px; max-width: 680px; border: 2px solid var(--border);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--border); padding-bottom: 14px; margin-bottom: 16px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 900;">CoHeart Foundation</h3>
          <p style="font-size: 13px; color: var(--text-muted);">Salary Slip for October 2026</p>
        </div>
        <span class="badge badge-success">Bank Disbursed</span>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 14px; margin-bottom: 20px;">
        <div><strong>Employee:</strong> Sunil Patro</div>
        <div><strong>Employee Code:</strong> CH-EMP-0042</div>
        <div><strong>Designation:</strong> Field Coordinator</div>
        <div><strong>Days Worked:</strong> 21 Days</div>
      </div>

      <table class="data-table" style="margin-bottom: 18px;">
        <thead>
          <tr>
            <th>Earnings</th>
            <th>Amount (₹)</th>
            <th>Deductions</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic Salary</td>
            <td>₹18,000</td>
            <td>Provident Fund (PF)</td>
            <td>₹1,800</td>
          </tr>
          <tr>
            <td>Field Allowance</td>
            <td>₹6,500</td>
            <td>Professional Tax</td>
            <td>₹200</td>
          </tr>
          <tr>
            <td>Communication Stipend</td>
            <td>₹1,500</td>
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>

      <div style="display: flex; justify-content: space-between; align-items: center; background: #ecfdf5; padding: 16px; border-radius: 12px; border: 1.5px solid #a7f3d0;">
        <span style="font-size: 16px; font-weight: 800; color: #065f46;">Net Salary Take-Home:</span>
        <span style="font-size: 26px; font-weight: 900; color: #047857;">₹24,000</span>
      </div>
    </div>
  `
});

// =========================================================================
// 20. FINANCE REPORTS & LEDGER (finance-reports.html)
// =========================================================================
buildPage({
  filename: 'finance-reports.html',
  title: 'Financial Ledger & Reports',
  activeNav: 'finance',
  screenKey: 'finance',
  crumbs: [{ label: 'Finance', menu: [{ url: 'finance-overview.html', label: 'Overview' }] }],
  activeCrumb: 'Financial Reports',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-3 "  aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></div>
        <div>
          <h2>Financial Ledger & Audit Trail</h2>
          <p>Consolidated accounting entries, exports and donor compliance</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="showToast('Exporting complete ledger to Excel...', 'success')"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download " style="margin-right: 4px;" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Export Full Ledger</button>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Txn ID</th>
            <th>Date</th>
            <th>Head / Category</th>
            <th>Description</th>
            <th>Debit (Spent ₹)</th>
            <th>Credit (Grant ₹)</th>
            <th>Running Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>TXN-1049</code></td>
            <td>23 Oct 2026</td>
            <td>Field Travel</td>
            <td>Sunil Patro auto fare Bobbili</td>
            <td style="color: #dc2626; font-weight: 700;">₹450</td>
            <td>—</td>
            <td>₹14,10,000</td>
          </tr>
          <tr>
            <td><code>TXN-1048</code></td>
            <td>22 Oct 2026</td>
            <td>Training Kits</td>
            <td>Student learning material purchase</td>
            <td style="color: #dc2626; font-weight: 700;">₹18,500</td>
            <td>—</td>
            <td>₹14,10,450</td>
          </tr>
          <tr>
            <td><code>TXN-1047</code></td>
            <td>15 Oct 2026</td>
            <td>Donor Grant</td>
            <td>Tata Trusts Tranche 2 Credit</td>
            <td>—</td>
            <td style="color: #16a34a; font-weight: 700;">₹4,00,000</td>
            <td>₹14,28,950</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

console.log('Finance module generated successfully.');

// =========================================================================
// 21. PEOPLE OVERVIEW (people-overview.html)
// =========================================================================
buildPage({
  filename: 'people-overview.html',
  title: 'People & Workforce Overview',
  activeNav: 'people',
  screenKey: 'dashboard',
  crumbs: [{ label: 'People', menu: [{ url: 'staff-directory.html', label: 'Staff Roster' }, { url: 'employee-add.html', label: '+ Add Employee' }] }],
  activeCrumb: 'People Overview',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fdf4ff; color: #a855f7;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users "  aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
        <div>
          <h2>Workforce & People Overview</h2>
          <p>Total Staff: 48 &bull; Field Coordinators: 32 &bull; Active Interventions: 4</p>
        </div>
      </div>
      <div style="display: flex; gap: 8px;">
        <a href="employee-add.html" class="btn btn-primary">+ Add New Employee</a>
        <a href="staff-directory.html" class="btn btn-outline">Staff Directory</a>
      </div>
    </div>

    <div class="big-action-grid">
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-purple">HerEcho</span></div>
        <div class="action-title" style="font-size: 32px; color: #7c3aed;">18 Staff</div>
        <div class="action-sub">14 Field, 2 Leads, 2 PMs</div>
      </div>
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-info">Spectrum</span></div>
        <div class="action-title" style="font-size: 32px; color: #2563eb;">12 Staff</div>
        <div class="action-sub">8 Therapists, 4 Field</div>
      </div>
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-success">SkillEd</span></div>
        <div class="action-title" style="font-size: 32px; color: #16a34a;">10 Staff</div>
        <div class="action-sub">6 Trainers, 4 Coordinators</div>
      </div>
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-danger">CareS</span></div>
        <div class="action-title" style="font-size: 32px; color: #dc2626;">8 Staff</div>
        <div class="action-sub">6 Health Workers, 2 Leads</div>
      </div>
    </div>

    <div class="big-action-grid">
      <a href="staff-directory.html" class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #eff6ff;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open "  aria-hidden="true"><path d="M12 5v16"></path><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"></path></svg></span></div>
        <div class="action-title">Staff Directory</div>
        <div class="action-sub">Phone numbers, supervisors & assigned forms</div>
      </a>
      <a href="employee-add.html" class="big-action-card highlight">
        <div class="action-top"><span class="action-icon-circle" style="background: #dcfce7;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus "  aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg></span></div>
        <div class="action-title">+ Add Employee Wizard</div>
        <div class="action-sub">Step-by-step onboarding & role assign</div>
      </a>
      <a href="users-roles.html" class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #fef3c7;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check "  aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></span></div>
        <div class="action-title">Roles & Access Matrix</div>
        <div class="action-sub">9 System roles & permission tiers</div>
      </a>
      <a href="employee-format-assignments.html" class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #fdf4ff;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round "  aria-hidden="true"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></svg></span></div>
        <div class="action-title">Format Assignments</div>
        <div class="action-sub">Configure which staff can see which forms</div>
      </a>
    </div>
  `
});

// =========================================================================
// 22. STAFF DIRECTORY (staff-directory.html)
// =========================================================================
buildPage({
  filename: 'staff-directory.html',
  title: 'Staff Directory',
  activeNav: 'staff',
  screenKey: 'dashboard',
  crumbs: [{ label: 'People', menu: [{ url: 'people-overview.html', label: 'People Overview' }, { url: 'employee-add.html', label: '+ Add Employee' }] }],
  activeCrumb: 'Staff Directory',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open "  aria-hidden="true"><path d="M12 5v16"></path><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"></path></svg></div>
        <div>
          <h2>Staff Directory & Contacts</h2>
          <p>Tap call or message buttons for instant field communication</p>
        </div>
      </div>
      <a href="employee-add.html" class="btn btn-primary">+ Add Employee</a>
    </div>

    <!-- Staff Cards Grid with Big Touch Targets -->
    <div class="big-action-grid">
      <!-- Staff 1 -->
      <div class="big-action-card">
        <div class="action-top">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="action-icon-circle" style="background: #dcfce7; color: #166534; font-size: 20px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user "  aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
            <div>
              <strong style="font-size: 16px;">Sunil Patro</strong>
              <div style="font-size: 12px; color: var(--text-muted);">Field Coordinator &bull; HerEcho</div>
            </div>
          </div>
          <span class="badge badge-success">Active</span>
        </div>
        <div style="font-size: 13px; color: var(--text-muted); margin-top: 8px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone "  aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> <strong>+91 98480 23112</strong> &bull; Reports to: Ananya Sharma
        </div>
        <div style="display: flex; gap: 8px; margin-top: 14px;">
          <a href="tel:+919848023112" class="btn btn-primary btn-sm" style="flex: 1;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone "  aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> Call</a>
          <a href="employee-details.html?id=sunil" class="btn btn-outline btn-sm">Profile</a>
          <a href="employee-edit.html?id=sunil" class="btn btn-outline btn-sm">Edit</a>
        </div>
      </div>

      <!-- Staff 2 -->
      <div class="big-action-card">
        <div class="action-top">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="action-icon-circle" style="background: #fdf4ff; color: #7c3aed; font-size: 20px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap "  aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg><i class="fa-solid fa-briefcase "  aria-hidden="true"></i></div>
            <div>
              <strong style="font-size: 16px;">Ananya Sharma</strong>
              <div style="font-size: 12px; color: var(--text-muted);">Program Manager &bull; Spectrum</div>
            </div>
          </div>
          <span class="badge badge-success">Active</span>
        </div>
        <div style="font-size: 13px; color: var(--text-muted); margin-top: 8px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone "  aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> <strong>+91 98480 54981</strong> &bull; Reports to: Vikram Reddy
        </div>
        <div style="display: flex; gap: 8px; margin-top: 14px;">
          <a href="tel:+919848054981" class="btn btn-primary btn-sm" style="flex: 1;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone "  aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> Call</a>
          <a href="employee-details.html?id=ananya" class="btn btn-outline btn-sm">Profile</a>
          <a href="employee-edit.html?id=ananya" class="btn btn-outline btn-sm">Edit</a>
        </div>
      </div>

      <!-- Staff 3 -->
      <div class="big-action-card">
        <div class="action-top">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="action-icon-circle" style="background: #fef3c7; color: #d97706; font-size: 20px;"><i class="fa-solid fa-user-tie "  aria-hidden="true"></i></div>
            <div>
              <strong style="font-size: 16px;">Vikram Reddy</strong>
              <div style="font-size: 12px; color: var(--text-muted);">Master Administrator &bull; Org Head</div>
            </div>
          </div>
          <span class="badge badge-purple">Admin</span>
        </div>
        <div style="font-size: 13px; color: var(--text-muted); margin-top: 8px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone "  aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> <strong>+91 98480 11001</strong> &bull; Executive Governance
        </div>
        <div style="display: flex; gap: 8px; margin-top: 14px;">
          <a href="tel:+919848011001" class="btn btn-primary btn-sm" style="flex: 1;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone "  aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> Call</a>
          <a href="employee-details.html?id=vikram" class="btn btn-outline btn-sm">Profile</a>
          <a href="employee-edit.html?id=vikram" class="btn btn-outline btn-sm">Edit</a>
        </div>
      </div>
    </div>
  `
});

// =========================================================================
// 23. ADD EMPLOYEE WIZARD (employee-add.html)
// =========================================================================
buildPage({
  filename: 'employee-add.html',
  title: 'Add New Employee Wizard',
  activeNav: 'add-emp',
  screenKey: 'dashboard',
  crumbs: [{ label: 'People', menu: [{ url: 'staff-directory.html', label: 'Staff Directory' }, { url: 'people-overview.html', label: 'People Overview' }] }],
  activeCrumb: 'Add Employee',
  content: `
    <div class="wizard-box">
      <div class="wizard-step-indicator">
        <span class="step-num-pill">Employee Creation Wizard (कर्मचारी जोड़ें)</span>
        <button class="speak-btn" onclick="speak('Add new employee step by step. Enter name, role, department, reporting manager and documents.')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
      </div>

      <!-- Step 1: Personal Info -->
      <h3 style="font-size: 17px; font-weight: 800; margin-bottom: 14px;">1. Personal Information</h3>
      <div class="form-group">
        <label class="form-label">
          <span>Full Name *</span>
          <button class="speak-btn" onclick="speak('Enter employee full name')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
        </label>
        <div class="input-with-voice">
          <input type="text" id="emp-name" class="form-input" placeholder="e.g. Ramesh Naidu" value="Ramesh Naidu" />
          <button class="voice-input-btn" onclick="startVoiceInput('emp-name', this)"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic "  aria-hidden="true"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect x="9" y="2" width="6" height="13" rx="3"></rect></svg></button>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label">Mobile Number *</label>
          <input type="tel" class="form-input" value="+91 98480 87123" />
        </div>
        <div class="form-group">
          <label class="form-label">Official Work Email *</label>
          <input type="email" class="form-input" value="ramesh.naidu@coheart.org" />
        </div>
      </div>

      <!-- Step 2: Work Area Assignment -->
      <h3 style="font-size: 17px; font-weight: 800; margin: 20px 0 14px;">2. Programme & Work Area Assignment</h3>
      <div class="form-group">
        <label class="form-label">Primary Intervention *</label>
        <select class="form-select">
          <option selected>HerEcho (Adolescent Girls Education & Health)</option>
          <option>Spectrum (Special Needs & Therapy)</option>
          <option>SkillEd (Vocational & Digital Labs)</option>
          <option>CareS (Community Health Worker Network)</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Location / Mandal *</label>
        <select class="form-select">
          <option selected>Gajapathinagaram (Vizianagaram)</option>
          <option>Bobbili (Vizianagaram)</option>
          <option>Palakonda (Srikakulam)</option>
          <option>Visakhapatnam Central</option>
        </select>
      </div>

      <!-- Step 3: Role & Reporting Line -->
      <h3 style="font-size: 17px; font-weight: 800; margin: 20px 0 14px;">3. Role & Reporting Manager</h3>
      <div class="form-group">
        <label class="form-label">System Role *</label>
        <select class="form-select">
          <option selected>Field Worker / Coordinator (Data capture & submissions)</option>
          <option>Team Lead (First-level leave & task approvals)</option>
          <option>Programme Head (Full programme budget & verifications)</option>
          <option>Master Admin (Organization-wide management)</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Reporting Manager (रिपोर्टिंग अधिकारी) *</label>
        <select class="form-select">
          <option selected>Ananya Sharma (Program Manager)</option>
          <option>Vikram Reddy (Master Administrator)</option>
          <option>Sunil Patro (Senior Field Coordinator)</option>
        </select>
        <small style="color: var(--text-muted); margin-top: 4px; display: block;">Populated dynamically from active staff roster</small>
      </div>

      <!-- Step 4: Documents & Onboarding -->
      <h3 style="font-size: 17px; font-weight: 800; margin: 20px 0 14px;">4. Documents & Access Check</h3>
      <div style="border: 1px solid var(--border); border-radius: 10px; padding: 14px; background: var(--bg); margin-bottom: 20px;">
        <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; cursor: pointer;">
          <input type="checkbox" checked /> <span>National ID / Aadhaar verified</span>
        </label>
        <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; cursor: pointer;">
          <input type="checkbox" checked /> <span>Assign Formats Hub (Dropout follow-up & counseling)</span>
        </label>
        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
          <input type="checkbox" checked /> <span>Enable Mobile GPS Punch-in</span>
        </label>
      </div>

      <button class="btn btn-primary btn-lg" style="width: 100%;" onclick="showToast('Employee Ramesh Naidu added successfully! Invite sent.', 'success'); setTimeout(() => location.href='staff-directory.html', 1200);">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg> Create & Onboard Employee
      </button>
    </div>
  `
});

// =========================================================================
// 24. EDIT EMPLOYEE PROFILE (employee-edit.html)
// =========================================================================
buildPage({
  filename: 'employee-edit.html',
  title: 'Edit Employee Profile',
  activeNav: 'staff',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Staff', menu: [{ url: 'staff-directory.html', label: 'Staff Directory' }] }],
  activeCrumb: 'Edit Employee',
  content: `
    <div class="form-card" style="margin: 0 auto;">
      <h2 style="font-size: 22px; font-weight: 800; margin-bottom: 18px;">Edit Employee: Sunil Patro (CH-EMP-0042)</h2>

      <div class="form-group">
        <label class="form-label">Designation *</label>
        <input type="text" class="form-input" value="Senior Field Coordinator" />
      </div>

      <div class="form-group">
        <label class="form-label">Programme Assignment</label>
        <select class="form-select">
          <option selected>HerEcho (Adolescent Girls)</option>
          <option>Spectrum (Special Needs)</option>
          <option>CareS (Health Worker Network)</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Reporting Manager</label>
        <select class="form-select">
          <option selected>Ananya Sharma (Program Manager)</option>
          <option>Vikram Reddy (Master Admin)</option>
        </select>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <a href="staff-directory.html" class="btn btn-outline">Cancel</a>
        <button class="btn btn-primary" onclick="showToast('Employee profile updated!', 'success'); setTimeout(() => location.href='staff-directory.html', 1000);">
          Save Changes
        </button>
        <a href="employee-deactivate.html" class="btn btn-outline" style="color: #dc2626; border-color: #fca5a5; margin-left: auto;">
          Deactivate Employee
        </a>
      </div>
    </div>
  `
});

// =========================================================================
// 25. EMPLOYEE DETAILS VIEW (employee-details.html)
// =========================================================================
buildPage({
  filename: 'employee-details.html',
  title: 'Employee File & Profile',
  activeNav: 'staff',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Staff', menu: [{ url: 'staff-directory.html', label: 'Staff Directory' }] }],
  activeCrumb: 'Sunil Patro',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #dcfce7; color: #166534; font-size: 24px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user "  aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
        <div>
          <h2>Sunil Patro &bull; CH-EMP-0042</h2>
          <p>Field Coordinator &bull; Department of Programme Delivery &bull; Joined 12 Jan 2024</p>
        </div>
      </div>
      <div style="display: flex; gap: 8px;">
        <a href="employee-edit.html" class="btn btn-primary">Edit Profile</a>
        <a href="employee-deactivate.html" class="btn btn-outline" style="color: #dc2626; border-color: #fca5a5;">Deactivate</a>
      </div>
    </div>

    <div class="big-action-grid">
      <div class="big-action-card">
        <div class="action-title">Assigned Formats (3)</div>
        <div class="action-sub">Dropout Registration, Follow-up, Therapy</div>
        <div style="margin-top: 10px;"><a href="employee-format-assignments.html" class="btn btn-sm btn-outline">Modify Formats</a></div>
      </div>
      <div class="big-action-card">
        <div class="action-title">Leave Balance</div>
        <div class="action-sub">12 Casual &bull; 8 Sick &bull; 15 Earned</div>
        <div style="margin-top: 10px;"><a href="leave-balances.html" class="btn btn-sm btn-outline">Leave Ledger</a></div>
      </div>
      <div class="big-action-card">
        <div class="action-title">Assigned Assets</div>
        <div class="action-sub">Samsung Galaxy Tab A7 (TAG-081)</div>
        <div style="margin-top: 10px;"><a href="assets-inventory.html" class="btn btn-sm btn-outline">Asset Record</a></div>
      </div>
    </div>
  `
});

// =========================================================================
// 26. EMPLOYEE ONBOARDING & DOCS (employee-onboarding.html)
// =========================================================================
buildPage({
  filename: 'employee-onboarding.html',
  title: 'Employee Onboarding & Docs',
  activeNav: 'staff',
  screenKey: 'dashboard',
  crumbs: [{ label: 'People', menu: [{ url: 'staff-directory.html', label: 'Staff Directory' }] }],
  activeCrumb: 'Onboarding',
  content: `
    <div class="form-card" style="margin: 0 auto;">
      <h2 style="font-size: 22px; font-weight: 800; margin-bottom: 6px;">New Employee Onboarding Verification</h2>
      <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 20px;">Verify identity documents, policy acknowledgements and equipment allocation</p>

      <div style="border: 1px solid var(--border); border-radius: 12px; padding: 18px; margin-bottom: 20px;">
        <h4 style="font-size: 15px; font-weight: 800; margin-bottom: 12px;">Mandatory Documents Checklist</h4>
        <label style="display: flex; align-items: center; justify-content: space-between; padding: 10px; border-bottom: 1px solid var(--border);">
          <span>1. National ID Proof (Aadhaar Card)</span>
          <span class="badge badge-success">Verified <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg></span>
        </label>
        <label style="display: flex; align-items: center; justify-content: space-between; padding: 10px; border-bottom: 1px solid var(--border);">
          <span>2. Bank Passbook / Cancelled Cheque</span>
          <span class="badge badge-success">Verified <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg></span>
        </label>
        <label style="display: flex; align-items: center; justify-content: space-between; padding: 10px;">
          <span>3. NGO Safeguarding Policy Signed</span>
          <span class="badge badge-warning">Pending Sign</span>
        </label>
      </div>

      <button class="btn btn-primary" onclick="showToast('Onboarding completed! Welcome kit released.', 'success')">
        Complete Onboarding & Issue ID Card
      </button>
    </div>
  `
});

// =========================================================================
// 27. EMPLOYEE DEACTIVATION (employee-deactivate.html)
// =========================================================================
buildPage({
  filename: 'employee-deactivate.html',
  title: 'Employee Deactivation',
  activeNav: 'staff',
  screenKey: 'dashboard',
  crumbs: [{ label: 'People', menu: [{ url: 'staff-directory.html', label: 'Staff Directory' }] }],
  activeCrumb: 'Deactivate',
  content: `
    <div class="wizard-box" style="border-color: #fca5a5;">
      <div class="status-banner status-error">
        <span style="font-size: 32px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg></span>
        <div>
          <strong style="font-size: 16px;">Employee Deactivation / Offboarding</strong>
          <p style="font-size: 13px;">FR-ACC-04: At deactivation, platform access is withdrawn automatically. Records created by the user are preserved permanently.</p>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Employee to Deactivate</label>
        <input type="text" class="form-input" value="Sunil Patro (CH-EMP-0042)" readonly />
      </div>

      <div class="form-group">
        <label class="form-label">Reason for Deactivation</label>
        <select class="form-select">
          <option>Resignation / Voluntary Exit</option>
          <option>Contract Term Completion</option>
          <option>Project-specific tenure ended</option>
          <option>Disciplinary suspension</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Handover Beneficiaries & Tasks to:</label>
        <select class="form-select">
          <option selected>Kavita Devi (Field Coordinator)</option>
          <option>Ananya Sharma (Program Lead)</option>
        </select>
      </div>

      <button class="btn btn-danger btn-lg" style="width: 100%; margin-top: 14px;" onclick="showToast('Employee deactivated. Platform login revoked. Records preserved.', 'error'); setTimeout(() => location.href='staff-directory.html', 1400);">
        Confirm Deactivation & Revoke Login
      </button>
    </div>
  `
});

// =========================================================================
// 28. USERS & ROLES MATRIX (users-roles.html)
// =========================================================================
buildPage({
  filename: 'users-roles.html',
  title: 'Roles & Permissions Matrix',
  activeNav: 'roles',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Administration', menu: [{ url: 'people-overview.html', label: 'People' }] }],
  activeCrumb: 'Roles Matrix',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fef3c7; color: #d97706;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check "  aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
        <div>
          <h2>Roles & Access Permissions (9 System Roles)</h2>
          <p>SRS 3.1: Granular module access scopes across organization, programme and own work</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="showToast('Permissions synchronized with database', 'success')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-save "  aria-hidden="true"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg> Save Role Matrix</button>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Role Key</th>
            <th>Role Name</th>
            <th>Description</th>
            <th>Finance</th>
            <th>Formats / Data Entry</th>
            <th>Approvals</th>
            <th>People Mgmt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>master-admin</code></td>
            <td><strong>Master Admin</strong></td>
            <td>Full organization governance & audit</td>
            <td><span class="badge badge-success">Full</span></td>
            <td><span class="badge badge-success">Full</span></td>
            <td><span class="badge badge-success">Full</span></td>
            <td><span class="badge badge-success">Full</span></td>
          </tr>
          <tr>
            <td><code>programme-head</code></td>
            <td><strong>Programme Head</strong></td>
            <td>Owns programme KPIs, plans & budgets</td>
            <td><span class="badge badge-info">Approve</span></td>
            <td><span class="badge badge-success">Verify</span></td>
            <td><span class="badge badge-info">Approve</span></td>
            <td><span class="badge badge-warning">View</span></td>
          </tr>
          <tr>
            <td><code>employee</code></td>
            <td><strong>Field Worker</strong></td>
            <td>Own profile, daily field data & attendance</td>
            <td><span class="badge badge-warning">Claim</span></td>
            <td><span class="badge badge-success">Create</span></td>
            <td><span class="badge badge-danger">None</span></td>
            <td><span class="badge badge-danger">None</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// =========================================================================
// 29. ASSETS & INVENTORY (assets-inventory.html)
// =========================================================================
buildPage({
  filename: 'assets-inventory.html',
  title: 'Assets & Equipment Inventory',
  activeNav: 'assets',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Administration', menu: [{ url: 'procurement.html', label: 'Procurement' }] }],
  activeCrumb: 'Assets & Inventory',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop "  aria-hidden="true"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946"></path></svg></div>
        <div>
          <h2>Assets, Computer Labs & Equipment</h2>
          <p>Hardware terminals, field tablets, health diagnostic kits & student packs</p>
        </div>
      </div>
      <a href="procurement.html" class="btn btn-primary">+ Procurement Request</a>
    </div>

    <div class="big-action-grid">
      <div class="big-action-card">
        <div class="action-top">
          <span class="badge badge-info">SkillEd Lab</span>
          <span class="badge badge-success">15/15 Active</span>
        </div>
        <div class="action-title">Computer Lab Terminals</div>
        <div class="action-sub">Desktop terminals, UPS & broadband in Vizianagaram Lab 1</div>
        <div style="margin-top: 12px;"><a href="format-record-entry.html" class="btn btn-sm btn-outline">Checklist Audit</a></div>
      </div>

      <div class="big-action-card">
        <div class="action-top">
          <span class="badge badge-purple">HerEcho / Field</span>
          <span class="badge badge-success">32 Allocated</span>
        </div>
        <div class="action-title">Field Coordinator Tablets</div>
        <div class="action-sub">Samsung Galaxy Tab A7 tablets with offline Dexie sync</div>
        <div style="margin-top: 12px;"><button class="btn btn-sm btn-outline">Track Devices</button></div>
      </div>

      <div class="big-action-card">
        <div class="action-top">
          <span class="badge badge-success">CareS</span>
          <span class="badge badge-warning">4 Needs Refill</span>
        </div>
        <div class="action-title">CHW Health Diagnostic Kits</div>
        <div class="action-sub">BP monitors, glucometers, digital weighing scales</div>
        <div style="margin-top: 12px;"><button class="btn btn-sm btn-outline">Order Refills</button></div>
      </div>
    </div>
  `
});

// =========================================================================
// 30. PROCUREMENT & PURCHASES (procurement.html)
// =========================================================================
buildPage({
  filename: 'procurement.html',
  title: 'Procurement & Purchase Orders',
  activeNav: 'procurement',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Administration', menu: [{ url: 'assets-inventory.html', label: 'Assets' }] }],
  activeCrumb: 'Procurement',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fdf4ff; color: #a855f7;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart "  aria-hidden="true"><path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18"></path><path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25"></path><circle cx="18" cy="20" r="2"></circle><circle cx="8" cy="20" r="2"></circle></svg></div>
        <div>
          <h2>Procurement & Purchase Orders</h2>
          <p>Quotes comparison, purchase approvals and delivery receipt verification</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="alert('Creating purchase requisition...')">+ New Purchase Requisition</button>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>PO Number</th>
            <th>Item / Description</th>
            <th>Vendor</th>
            <th>Total Amount</th>
            <th>Approval</th>
            <th>Goods Receipt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>PO-2026-041</strong></td>
            <td>100 Adolescent Health Kits (Bobbili)</td>
            <td>Sri Balaji Medicals</td>
            <td><strong>₹45,000</strong></td>
            <td><span class="badge badge-success">Approved</span></td>
            <td><span class="badge badge-success">Delivered <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg></span></td>
          </tr>
          <tr>
            <td><strong>PO-2026-042</strong></td>
            <td>5 Replacement Tablet Screens</td>
            <td>Vizag Tech Solutions</td>
            <td><strong>₹12,500</strong></td>
            <td><span class="badge badge-warning">Pending Finance</span></td>
            <td><span class="badge badge-warning">Awaiting</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

console.log('HR, Assets & Procurement pages generated successfully.');

// =========================================================================
// 31. BENEFICIARIES DIRECTORY (beneficiaries-directory.html)
// =========================================================================
buildPage({
  filename: 'beneficiaries-directory.html',
  title: 'Beneficiaries Roster',
  activeNav: 'beneficiaries',
  screenKey: 'format_entry',
  crumbs: [{ label: 'Field Delivery', menu: [{ url: 'beneficiary-add.html', label: '+ Add Beneficiary' }, { url: 'formats-hub.html', label: 'Formats Hub' }] }],
  activeCrumb: 'Beneficiaries',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fdf2f8; color: #db2777;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-baby "  aria-hidden="true"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M15 12h.01"></path><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path><path d="M9 12h.01"></path></svg></div>
        <div>
          <h2>Beneficiaries & Student Directory</h2>
          <p>Search by child registration code, Aadhaar, village or phone</p>
        </div>
      </div>
      <a href="beneficiary-add.html" class="btn btn-primary">+ Register Beneficiary</a>
    </div>

    <!-- Deduplication Warning Banner -->
    <div class="status-banner status-success" style="background: #f0fdf4; border-color: #86efac; color: #166534;">
      <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check "  aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></span>
      <div>
        <strong>Deduplication Guard Active (FR-PRG-04)</strong>
        <p style="font-size: 13px;">Automatic Aadhaar and guardian contact matching prevents duplicate records across programmes.</p>
      </div>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Reg Code</th>
            <th>Name</th>
            <th>Age / Gender</th>
            <th>Village / Mandal</th>
            <th>Intervention</th>
            <th>Guardian Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>CH-VZM-0412</strong></td>
            <td>Radhika Kumari</td>
            <td>14 Y &bull; Female</td>
            <td>Kondakarakam, Gajapathinagaram</td>
            <td><span class="badge badge-danger">HerEcho</span></td>
            <td>Ramana Rao (+91 98480 91012)</td>
            <td><a href="format-record-entry.html?ben=0412" class="btn btn-sm btn-primary">+ Record</a></td>
          </tr>
          <tr>
            <td><strong>CH-VZM-0398</strong></td>
            <td>Suresh Naidu</td>
            <td>12 Y &bull; Male</td>
            <td>Bobbili ZP</td>
            <td><span class="badge badge-purple">Spectrum</span></td>
            <td>Appala Naidu (+91 98480 33419)</td>
            <td><a href="format-record-entry.html?ben=0398" class="btn btn-sm btn-primary">+ Record</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// =========================================================================
// 32. BENEFICIARY REGISTRATION WIZARD (beneficiary-add.html)
// =========================================================================
buildPage({
  filename: 'beneficiary-add.html',
  title: 'Register Beneficiary Wizard',
  activeNav: 'beneficiaries',
  screenKey: 'format_entry',
  crumbs: [{ label: 'Beneficiaries', menu: [{ url: 'beneficiaries-directory.html', label: 'Directory' }] }],
  activeCrumb: 'Add Beneficiary',
  content: `
    <div class="wizard-box">
      <div class="wizard-step-indicator">
        <span class="step-num-pill">Beneficiary Registration (नया लाभार्थी जोड़ें)</span>
        <button class="speak-btn" onclick="speak('Register a new child or student. Enter name, age, village, school and guardian details.')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
      </div>

      <div class="form-group">
        <label class="form-label">
          <span>Child / Beneficiary Full Name *</span>
          <button class="speak-btn" onclick="speak('Enter child full name')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
        </label>
        <div class="input-with-voice">
          <input type="text" id="child-name" class="form-input" placeholder="e.g. Lakshmi Devi" value="Lakshmi Devi" />
          <button class="voice-input-btn" onclick="startVoiceInput('child-name', this)"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic "  aria-hidden="true"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect x="9" y="2" width="6" height="13" rx="3"></rect></svg></button>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label">Age in Years *</label>
          <input type="number" class="form-input" value="13" />
        </div>
        <div class="form-group">
          <label class="form-label">Gender *</label>
          <select class="form-select">
            <option selected>Female (लड़की)</option>
            <option>Male (लड़का)</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Village / Location *</label>
        <select class="form-select">
          <option selected>Kondakarakam (Gajapathinagaram)</option>
          <option>Therlam (Bobbili)</option>
          <option>Ramabhadrapuram</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Guardian Name & Phone *</label>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          <input type="text" class="form-input" placeholder="Parent name" value="Venkata Rao" />
          <input type="tel" class="form-input" placeholder="Mobile" value="+91 98480 77123" />
        </div>
      </div>

      <button class="btn btn-primary btn-lg" style="width: 100%; margin-top: 14px;" onclick="showToast('Beneficiary registered! ID CH-VZM-0413 generated.', 'success'); setTimeout(() => location.href='beneficiaries-directory.html', 1200);">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg> Save & Enroll Beneficiary
      </button>
    </div>
  `
});

// =========================================================================
// 33. BATCHES & FACILITIES (batches-facilities.html)
// =========================================================================
buildPage({
  filename: 'batches-facilities.html',
  title: 'Batches & Facilities',
  activeNav: 'facilities',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Field Delivery', menu: [{ url: 'programmes.html', label: 'Programmes' }] }],
  activeCrumb: 'Batches & Facilities',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building "  aria-hidden="true"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect x="4" y="2" width="16" height="20" rx="2"></rect></svg></div>
        <div>
          <h2>Training Batches, Digital Centers & Hubs</h2>
          <p>Vocational training cohorts, school labs and health centers</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="alert('Creating new training cohort batch...')">+ New Training Batch</button>
    </div>

    <div class="big-action-grid">
      <div class="big-action-card">
        <div class="action-top">
          <span class="badge badge-info">SkillEd</span>
          <span class="badge badge-success">30/30 Enrolled</span>
        </div>
        <div class="action-title">Tailoring & Garment Cohort 4</div>
        <div class="action-sub">Bobbili Skill Center &bull; Trainer: M. Shanti &bull; Ends Nov 2026</div>
        <div style="margin-top: 12px;"><a href="format-records-grid.html" class="btn btn-sm btn-outline">Trainee Roster</a></div>
      </div>

      <div class="big-action-card">
        <div class="action-top">
          <span class="badge badge-info">SkillEd</span>
          <span class="badge badge-success">15 Terminals</span>
        </div>
        <div class="action-title">Digital Literacy Lab 1</div>
        <div class="action-sub">Vizianagaram Hub &bull; Trainer: Rajesh Verma</div>
        <div style="margin-top: 12px;"><a href="assets-inventory.html" class="btn btn-sm btn-outline">Terminal Health</a></div>
      </div>
    </div>
  `
});

// =========================================================================
// 34. TASKS (tasks.html)
// =========================================================================
buildPage({
  filename: 'tasks.html',
  title: 'Assigned Work Tasks',
  activeNav: 'tasks',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Workspace', menu: [{ url: 'goals.html', label: 'Goals' }] }],
  activeCrumb: 'Tasks',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #f0fdf4; color: #16a34a;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg></div>
        <div>
          <h2>My Assigned Tasks</h2>
          <p>Tap checkmarks to mark tasks complete &bull; High priority first</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="alert('Adding new work task...')">+ Add Task</button>
    </div>

    <div class="form-card" style="max-width: 100%;">
      <div style="border-bottom: 1.5px solid var(--border); padding: 14px 0; display: flex; align-items: center; justify-content: space-between;">
        <label style="display: flex; align-items: center; gap: 14px; font-size: 16px; font-weight: 700; cursor: pointer;">
          <input type="checkbox" style="width: 22px; height: 22px;" onchange="showToast('Task marked complete!', 'success')" />
          <span>Conduct parent counseling for Radhika Kumari at Kondakarakam</span>
        </label>
        <span class="badge badge-danger">Due Today</span>
      </div>

      <div style="border-bottom: 1.5px solid var(--border); padding: 14px 0; display: flex; align-items: center; justify-content: space-between;">
        <label style="display: flex; align-items: center; gap: 14px; font-size: 16px; font-weight: 700; cursor: pointer;">
          <input type="checkbox" style="width: 22px; height: 22px;" onchange="showToast('Task marked complete!', 'success')" />
          <span>Submit Weekly Dropout Follow-up Form records for verification</span>
        </label>
        <span class="badge badge-warning">Due Tomorrow</span>
      </div>

      <div style="padding: 14px 0; display: flex; align-items: center; justify-content: space-between;">
        <label style="display: flex; align-items: center; gap: 14px; font-size: 16px; font-weight: 700; cursor: pointer;">
          <input type="checkbox" style="width: 22px; height: 22px;" checked onchange="showToast('Task updated', 'success')" />
          <span style="text-decoration: line-through; color: var(--text-muted);">Inspect Bobbili school digital tablet batch</span>
        </label>
        <span class="badge badge-success">Completed <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg></span>
      </div>
    </div>
  `
});

// =========================================================================
// 35. WEEKLY GOALS (goals.html)
// =========================================================================
buildPage({
  filename: 'goals.html',
  title: 'Weekly Goals Tracker',
  activeNav: 'tasks',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Workspace', menu: [{ url: 'tasks.html', label: 'Tasks' }] }],
  activeCrumb: 'Weekly Goals',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fdf4ff; color: #a855f7;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
        <div>
          <h2>Weekly Goals & Performance</h2>
          <p>Week 43 &bull; 3 Planned Goals &bull; Manager Sign-off: Ananya Sharma</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="alert('Adding goal for next week...')">+ Plan Goal</button>
    </div>

    <div class="big-action-grid">
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-success">80% Done</span></div>
        <div class="action-title">Re-enroll 5 Dropout Girls</div>
        <div class="action-sub">4 enrolled in formal high school, 1 in counseling</div>
        <div style="margin-top: 14px; background: #e2e8f0; height: 8px; border-radius: 999px; overflow: hidden;">
          <div style="background: #16a34a; width: 80%; height: 100%;"></div>
        </div>
      </div>

      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-success">100% Done</span></div>
        <div class="action-title">Complete 10 Household Health Logs</div>
        <div class="action-sub">CareS elderly vitals recorded in Kondakarakam</div>
        <div style="margin-top: 14px; background: #e2e8f0; height: 8px; border-radius: 999px; overflow: hidden;">
          <div style="background: #16a34a; width: 100%; height: 100%;"></div>
        </div>
      </div>
    </div>
  `
});

// =========================================================================
// 36. ORGANISATION MODULES & PILLARS (organisation.html)
// =========================================================================
buildPage({
  filename: 'organisation.html',
  title: 'Organisation Modules & Pillars',
  activeNav: 'organisation',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Governance', menu: [{ url: 'organisation-settings.html', label: 'Settings' }] }],
  activeCrumb: 'Organisation',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #f0fdf4; color: #16a34a;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark "  aria-hidden="true"><path d="M10 18v-7"></path><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg></div>
        <div>
          <h2>CoHeart Foundation &bull; Organisation Modules</h2>
          <p>NGO Delivery Management Platform &bull; Replaces separate programmes tab</p>
        </div>
      </div>
      <a href="organisation-settings.html" class="btn btn-outline">Foundation Profile <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right "  aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
    </div>

    <div class="big-action-grid">
      <a href="interventions.html" class="big-action-card highlight">
        <div class="action-top"><span class="action-icon-circle" style="background: #fee2e2; color: #dc2626;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></span></div>
        <div class="action-title">1. Interventions & Delivery</div>
        <div class="action-sub">HerEcho, Spectrum, SkillEd, CareS</div>
      </a>
      <a href="finance-overview.html" class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #fdf4ff; color: #a855f7;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee "  aria-hidden="true"><path d="M6 3h12"></path><path d="M6 8h12"></path><path d="m6 13 8.5 8"></path><path d="M6 13h3"></path><path d="M9 13c6.667 0 6.667-10 0-10"></path></svg></span></div>
        <div class="action-title">2. Finance & Budgets</div>
        <div class="action-sub">Accounts, expenses, grants and payroll</div>
      </a>
      <a href="people-overview.html" class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users "  aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></span></div>
        <div class="action-title">3. People & Workforce</div>
        <div class="action-sub">Staff, attendance, leave & roles</div>
      </a>
      <a href="reports.html" class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #fef3c7; color: #d97706;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-3 "  aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></span></div>
        <div class="action-title">4. MIS & Analytics</div>
        <div class="action-sub">Consolidated indicator reports & data</div>
      </a>
    </div>
  `
});

// =========================================================================
// 37. ORGANISATION SETTINGS (organisation-settings.html)
// =========================================================================
buildPage({
  filename: 'organisation-settings.html',
  title: 'Organisation Profile & Settings',
  activeNav: 'organisation',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Organisation', menu: [{ url: 'organisation.html', label: 'Modules' }] }],
  activeCrumb: 'Settings',
  content: `
    <div class="form-card" style="margin: 0 auto;">
      <h2 style="font-size: 22px; font-weight: 800; margin-bottom: 6px;">CoHeart Foundation Profile</h2>
      <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 20px;">Legal identity, registered office & donor partners</p>

      <div class="form-group">
        <label class="form-label">Foundation Legal Name</label>
        <input type="text" class="form-input" value="CoHeart Foundation" readonly />
      </div>

      <div class="form-group">
        <label class="form-label">NGO Registration / 12A / 80G Reference</label>
        <input type="text" class="form-input" value="COHEART/AP/2019/08124" />
      </div>

      <div class="form-group">
        <label class="form-label">Head Office Address</label>
        <textarea class="form-textarea" rows="2">Door 4-12, Collectorate Road, Vizianagaram, Andhra Pradesh - 535002</textarea>
      </div>

      <button class="btn btn-primary" onclick="showToast('Organisation settings saved', 'success')">Save Profile Changes</button>
    </div>
  `
});

// =========================================================================
// 38. INTERVENTIONS HUB (interventions.html)
// =========================================================================
buildPage({
  filename: 'interventions.html',
  title: 'Interventions Overview',
  activeNav: 'interventions',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Field Delivery', menu: [{ url: 'programmes.html', label: 'Programmes' }, { url: 'activities.html', label: 'Activities' }] }],
  activeCrumb: 'Interventions',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fee2e2; color: #dc2626;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
        <div>
          <h2>4 Core Interventions</h2>
          <p>Tap any pillar to open its activities, formats and projects</p>
        </div>
      </div>
      <a href="formats-hub.html" class="btn btn-primary">Open Formats Hub <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right "  aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
    </div>

    <div class="big-action-grid">
      <!-- HerEcho -->
      <a href="programmes.html?filter=her" class="big-action-card highlight" style="border-color: #e11d51;">
        <div class="action-top">
          <span class="badge" style="background: #ffe4e6; color: #be123c;">Pillar 1</span>
          <span style="font-size: 13px; font-weight: 800; color: #be123c;">1,240 Enrolled</span>
        </div>
        <div class="action-title" style="color: #be123c;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle " style="color: #dc2626;" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg> HerEcho</div>
        <div class="action-sub">Adolescent girls education, health & leadership. Dropout tracking & life skills.</div>
      </a>

      <!-- Spectrum -->
      <a href="programmes.html?filter=spc" class="big-action-card highlight" style="border-color: #7c3aed;">
        <div class="action-top">
          <span class="badge" style="background: #f3e8ff; color: #6b21a8;">Pillar 2</span>
          <span style="font-size: 13px; font-weight: 800; color: #6b21a8;">340 Children</span>
        </div>
        <div class="action-title" style="color: #6b21a8;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle " style="color: #7c3aed;" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg> Spectrum</div>
        <div class="action-sub">Inclusion & therapy support for children with autism & disabilities.</div>
      </a>

      <!-- SkillEd -->
      <a href="programmes.html?filter=skl" class="big-action-card highlight" style="border-color: #0891b2;">
        <div class="action-top">
          <span class="badge" style="background: #cffafe; color: #0e7490;">Pillar 3</span>
          <span style="font-size: 13px; font-weight: 800; color: #0e7490;">520 Trainees</span>
        </div>
        <div class="action-title" style="color: #0e7490;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle " style="color: #2563eb;" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg> SkillEd</div>
        <div class="action-sub">Vocational skilling, digital literacy labs & job placement for rural youth.</div>
      </a>

      <!-- CareS -->
      <a href="programmes.html?filter=crs" class="big-action-card highlight" style="border-color: #16a34a;">
        <div class="action-top">
          <span class="badge" style="background: #dcfce7; color: #15803d;">Pillar 4</span>
          <span style="font-size: 13px; font-weight: 800; color: #15803d;">2,100 Elders</span>
        </div>
        <div class="action-title" style="color: #15803d;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle " style="color: #16a34a;" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg> CareS</div>
        <div class="action-sub">Community health outreach, senior citizen hubs & caregiver respite.</div>
      </a>
    </div>
  `
});

// =========================================================================
// 39. PROGRAMMES DIRECTORY (programmes.html)
// =========================================================================
buildPage({
  filename: 'programmes.html',
  title: 'Field Programmes Directory',
  activeNav: 'programmes',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Interventions', menu: [{ url: 'interventions.html', label: 'All Interventions' }] }],
  activeCrumb: 'Programmes',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #ecfdf5; color: #047857;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sprout "  aria-hidden="true"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg></div>
        <div>
          <h2>Operational Field Programmes & Projects</h2>
          <p>Delivered across Vizianagaram, Srikakulam & Visakhapatnam districts</p>
        </div>
      </div>
      <a href="activities.html" class="btn btn-primary">Activities List <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right "  aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Programme / Project Name</th>
            <th>Pillar</th>
            <th>Locations</th>
            <th>Beneficiaries</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>HER-01</code></td>
            <td><strong>Girls' Learning Circles</strong></td>
            <td><span class="badge badge-danger">HerEcho</span></td>
            <td>Gajapathinagaram &bull; Bobbili</td>
            <td><strong>640</strong></td>
            <td><a href="activities.html?prg=her" class="btn btn-sm btn-primary">Open Activities</a></td>
          </tr>
          <tr>
            <td><code>SPC-01</code></td>
            <td><strong>Early Screening & Therapy Access</strong></td>
            <td><span class="badge badge-purple">Spectrum</span></td>
            <td>Vizianagaram &bull; Srikakulam</td>
            <td><strong>210</strong></td>
            <td><a href="activities.html?prg=spc" class="btn btn-sm btn-primary">Open Activities</a></td>
          </tr>
          <tr>
            <td><code>SKL-01</code></td>
            <td><strong>Tailoring & Garment Cohort 4</strong></td>
            <td><span class="badge badge-info">SkillEd</span></td>
            <td>Bobbili Center</td>
            <td><strong>180</strong></td>
            <td><a href="activities.html?prg=skl" class="btn btn-sm btn-primary">Open Activities</a></td>
          </tr>
          <tr>
            <td><code>CRS-01</code></td>
            <td><strong>Community Health Worker Network</strong></td>
            <td><span class="badge badge-success">CareS</span></td>
            <td>Kondakarakam &bull; Therlam</td>
            <td><strong>1,450</strong></td>
            <td><a href="activities.html?prg=crs" class="btn btn-sm btn-primary">Open Activities</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// =========================================================================
// 40. ACTIVITIES DIRECTORY (activities.html)
// =========================================================================
buildPage({
  filename: 'activities.html',
  title: 'Activities (Thematic Areas)',
  activeNav: 'activities',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Programmes', menu: [{ url: 'programmes.html', label: 'Programmes' }] }],
  activeCrumb: 'Activities',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fdf4ff; color: #a855f7;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pin "  aria-hidden="true"><path d="M12 17v5"></path><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path></svg></div>
        <div>
          <h2>Thematic Activities Directory</h2>
          <p>Core delivery areas under each programme</p>
        </div>
      </div>
      <a href="sub-activities.html" class="btn btn-primary">Sub-Activities List <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right "  aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
    </div>

    <div class="big-action-grid">
      <a href="sub-activities.html" class="big-action-card">
        <div class="action-top"><span class="badge badge-danger">HerEcho</span></div>
        <div class="action-title">School Program</div>
        <div class="action-sub">Dropout enrollment, life skill education, after-school study</div>
      </a>
      <a href="sub-activities.html" class="big-action-card">
        <div class="action-top"><span class="badge badge-danger">HerEcho</span></div>
        <div class="action-title">Women Hubs</div>
        <div class="action-sub">Community sensitization & awareness follow-up actions</div>
      </a>
      <a href="sub-activities.html" class="big-action-card">
        <div class="action-top"><span class="badge badge-info">SkillEd</span></div>
        <div class="action-title">Skilling & Livelihood</div>
        <div class="action-sub">Vocational training batches & livelihood opportunity linkage</div>
      </a>
      <a href="sub-activities.html" class="big-action-card">
        <div class="action-top"><span class="badge badge-success">CareS</span></div>
        <div class="action-title">Senior Citizen Hub</div>
        <div class="action-sub">Intergenerational meetups & basic health checkups</div>
      </a>
    </div>
  `
});

// =========================================================================
// 41. SUB-ACTIVITIES (sub-activities.html)
// =========================================================================
buildPage({
  filename: 'sub-activities.html',
  title: 'Sub-Activities & Formats',
  activeNav: 'sub-activities',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Activities', menu: [{ url: 'activities.html', label: 'Activities' }] }],
  activeCrumb: 'Sub-Activities',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark "  aria-hidden="true"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"></path></svg></div>
        <div>
          <h2>Sub-Activities List (HerEcho &bull; School Program)</h2>
          <p>Displays all sub-activity items with direct access to Formats and Groups</p>
        </div>
      </div>
      <div style="display: flex; gap: 8px;">
        <a href="format-groups.html" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus "  aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg> New Group (नया समूह)</a>
        <a href="formats-hub.html" class="btn btn-outline">Formats Hub</a>
      </div>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Sub-Activity Code</th>
            <th>Name</th>
            <th>Description</th>
            <th>Associated Formats</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>DROPOUT</code></td>
            <td><strong>Dropout Enrolment & Follow-up</strong></td>
            <td>Identify out of school children & track re-enrolment</td>
            <td>2 Formats (Registration, Follow-up)</td>
            <td><a href="formats-hub.html" class="btn btn-sm btn-primary">Open Formats</a></td>
          </tr>
          <tr>
            <td><code>LSE</code></td>
            <td><strong>Life Skill Education (LSE)</strong></td>
            <td>Adolescent girls modules & progress logs</td>
            <td>3 Formats (Registration, Sessions, Progress)</td>
            <td><a href="formats-hub.html" class="btn btn-sm btn-primary">Open Formats</a></td>
          </tr>
          <tr>
            <td><code>AFTER_SCHOOL</code></td>
            <td><strong>After-School Learning Support</strong></td>
            <td>Remedial education & attendance tracking</td>
            <td>3 Formats (Enrolment, Attendance, Assess)</td>
            <td><a href="formats-hub.html" class="btn btn-sm btn-primary">Open Formats</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

console.log('Programmes, Activities & Beneficiaries generated.');

// =========================================================================
// 42. DRIVE (drive.html)
// =========================================================================
buildPage({
  filename: 'drive.html',
  title: 'Cloud Drive & Files',
  activeNav: 'drive',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Files', menu: [{ url: 'documents.html', label: 'Documents' }] }],
  activeCrumb: 'Drive',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder "  aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg></div>
        <div>
          <h2>Cloud Drive & Document Storage</h2>
          <p>Contextual file storage organized by programme and activity</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="alert('Drag & drop files or browse to upload')">+ Upload File</button>
    </div>

    <!-- Drive Folders Grid -->
    <div class="big-action-grid">
      <div class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #fee2e2;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder "  aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg></span></div>
        <div class="action-title">HerEcho Documents</div>
        <div class="action-sub">School letters, counseling case sheets, photos (42 Files)</div>
      </div>
      <div class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #fdf4ff;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder "  aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg></span></div>
        <div class="action-title">Spectrum Therapy Records</div>
        <div class="action-sub">Clinical checklists & therapist progress notes (28 Files)</div>
      </div>
      <div class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #cffafe;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder "  aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg></span></div>
        <div class="action-title">SkillEd Training Kits</div>
        <div class="action-sub">Curriculum PDFs, hardware manual, lab logs (19 Files)</div>
      </div>
      <div class="big-action-card">
        <div class="action-top"><span class="action-icon-circle" style="background: #dcfce7;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder "  aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg></span></div>
        <div class="action-title">CareS Health Surveys</div>
        <div class="action-sub">CHW household survey scans & government letters (64 Files)</div>
      </div>
    </div>
  `
});

// =========================================================================
// 43. DOCUMENTS REPOSITORY (documents.html)
// =========================================================================
buildPage({
  filename: 'documents.html',
  title: 'Central Documents Repository',
  activeNav: 'drive',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Files', menu: [{ url: 'drive.html', label: 'Drive' }] }],
  activeCrumb: 'Documents',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fdf4ff; color: #7c3aed;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text "  aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
        <div>
          <h2>Central NGO Documents & Templates</h2>
          <p>Official policies, blank field templates and government consent forms</p>
        </div>
      </div>
      <button class="btn btn-outline" onclick="showToast('Downloading document pack...', 'success')"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download " style="margin-right: 4px;" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download All Templates</button>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Document Name</th>
            <th>Category</th>
            <th>Version</th>
            <th>Uploaded By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Child Protection & Safeguarding Policy</strong></td>
            <td>Governance</td>
            <td><span class="badge badge-purple">v2.1</span></td>
            <td>Vikram Reddy (Admin)</td>
            <td><button class="btn btn-sm btn-outline"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download " style="margin-right: 4px;" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download</button></td>
          </tr>
          <tr>
            <td><strong>Blank Parent Counseling Consent Form (Telugu)</strong></td>
            <td>Field Template</td>
            <td><span class="badge badge-purple">v1.4</span></td>
            <td>Ananya Sharma (PM)</td>
            <td><button class="btn btn-sm btn-outline"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download " style="margin-right: 4px;" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// =========================================================================
// 44. MIS TRACKERS & TARGETS (mis.html)
// =========================================================================
buildPage({
  filename: 'mis.html',
  title: 'MIS Trackers & Targets',
  activeNav: 'reports',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Analytics', menu: [{ url: 'reports.html', label: 'Reports' }] }],
  activeCrumb: 'MIS Trackers',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
        <div>
          <h2>MIS Trackers & Indicator Targets</h2>
          <p>Quarterly indicator tracking & submission compliance</p>
        </div>
      </div>
      <a href="reports.html" class="btn btn-primary">Reports & Analytics <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right "  aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Indicator Code</th>
            <th>Indicator Name</th>
            <th>Target</th>
            <th>Achieved</th>
            <th>Progress %</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>IND-HER-01</code></td>
            <td>Out-of-school girls re-enrolled into formal school</td>
            <td>500 Girls</td>
            <td><strong>420 Girls</strong></td>
            <td><span class="badge badge-success">84%</span></td>
            <td><span class="badge badge-success">On Track</span></td>
          </tr>
          <tr>
            <td><code>IND-SPC-02</code></td>
            <td>Children screened for early developmental delays</td>
            <td>300 Children</td>
            <td><strong>260 Children</strong></td>
            <td><span class="badge badge-success">86.6%</span></td>
            <td><span class="badge badge-success">On Track</span></td>
          </tr>
          <tr>
            <td><code>IND-SKL-03</code></td>
            <td>Youth placed in formal wage or self employment</td>
            <td>200 Youth</td>
            <td><strong>110 Youth</strong></td>
            <td><span class="badge badge-warning">55%</span></td>
            <td><span class="badge badge-warning">In Progress</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// =========================================================================
// 45. REPORTS & ANALYTICS (reports.html)
// =========================================================================
buildPage({
  filename: 'reports.html',
  title: 'Reports & Analytics',
  activeNav: 'reports',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Analytics', menu: [{ url: 'mis.html', label: 'MIS Trackers' }, { url: 'reports-shared.html', label: 'Shared Report' }] }],
  activeCrumb: 'Reports',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fdf4ff; color: #a855f7;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-3 "  aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></div>
        <div>
          <h2>Consolidated Outreach & Impact Reports</h2>
          <p>Real-time analytics across all 4 interventions & districts</p>
        </div>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn btn-outline" onclick="showToast('Report generated as PDF', 'success')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text "  aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Export PDF</button>
        <a href="reports-shared.html" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share-2 "  aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg> Share with Donors</a>
      </div>
    </div>

    <!-- Outreach Metrics Cards -->
    <div class="big-action-grid">
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-success">Outreach</span></div>
        <div class="action-title" style="font-size: 32px; color: #16a34a;">4,200</div>
        <div class="action-sub">Total unique beneficiaries served</div>
      </div>
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-purple">Villages</span></div>
        <div class="action-title" style="font-size: 32px; color: #7c3aed;">64</div>
        <div class="action-sub">Gram Panchayats active in AP</div>
      </div>
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-info">Submissions</span></div>
        <div class="action-title" style="font-size: 32px; color: #2563eb;">18,410</div>
        <div class="action-sub">Format records logged offline/online</div>
      </div>
    </div>
  `
});

// =========================================================================
// 46. PUBLIC SHARED REPORT (reports-shared.html)
// =========================================================================
buildPage({
  filename: 'reports-shared.html',
  title: 'Donor Shared Progress Report',
  activeNav: 'reports',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Reports', menu: [{ url: 'reports.html', label: 'All Reports' }] }],
  activeCrumb: 'Shared Report',
  content: `
    <div class="form-card" style="margin: 0 auto; max-width: 900px; box-shadow: var(--shadow-lg);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--border); padding-bottom: 16px; margin-bottom: 20px;">
        <div>
          <span class="badge badge-purple" style="margin-bottom: 6px;">Secure Token View</span>
          <h2 style="font-size: 22px; font-weight: 900;">CoHeart Foundation Quarterly Donor Report</h2>
          <p style="font-size: 13px; color: var(--text-muted);">Q2 2026-27 Progress &bull; Prepared for Donor Partners & Evaluation Teams</p>
        </div>
        <button class="btn btn-outline" onclick="window.print()"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-printer "  aria-hidden="true"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect x="6" y="14" width="12" height="8" rx="1"></rect></svg> Print / Save PDF</button>
      </div>

      <div class="big-action-grid" style="margin-bottom: 20px;">
        <div class="big-action-card">
          <div class="action-title">Girls Re-Enrolled</div>
          <div class="action-title" style="font-size: 28px; color: #16a34a; margin: 4px 0;">420</div>
          <div class="action-sub">84% of annual target achieved</div>
        </div>
        <div class="big-action-card">
          <div class="action-title">Screened Children</div>
          <div class="action-title" style="font-size: 28px; color: #7c3aed; margin: 4px 0;">260</div>
          <div class="action-sub">Sensory therapy provided</div>
        </div>
        <div class="big-action-card">
          <div class="action-title">Fund Utilization</div>
          <div class="action-title" style="font-size: 28px; color: #047857; margin: 4px 0;">66.8%</div>
          <div class="action-sub">₹28.4L spent out of ₹42.5L grant</div>
        </div>
      </div>

      <p style="font-size: 14px; line-height: 1.6; color: var(--text-main);">
        During Q2, the CoHeart field team expanded into 12 new villages in Bobbili and Gajapathinagaram mandals.
        Special emphasis was placed on door-to-door counseling for adolescent girls identified during the pre-monsoon survey.
      </p>
    </div>
  `
});

// =========================================================================
// 47. APPROVALS INBOX (approvals.html)
// =========================================================================
buildPage({
  filename: 'approvals.html',
  title: 'Unified Approvals Inbox',
  activeNav: 'approvals',
  screenKey: 'approvals',
  crumbs: [{ label: 'Governance', menu: [{ url: 'workflow-builder.html', label: 'Workflow Builder' }] }],
  activeCrumb: 'Approvals',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fef2f2; color: #dc2626;"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-inbox "  aria-hidden="true"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg></div>
        <div>
          <h2>Approvals & Request Triage</h2>
          <p>1-Click review and approve/reject for leaves, expense claims and field MIS verifications</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="showToast('All 3 pending requests approved in bulk!', 'success'); document.querySelectorAll('#approval-row').forEach(r => r.remove());">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg> Bulk Approve All (3)
      </button>
    </div>

    <!-- Approvals Table with 1-Click Action Buttons -->
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Requester</th>
            <th>Request Details</th>
            <th>Amount / Dates</th>
            <th>Submission Date</th>
            <th>1-Click Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr id="approval-row">
            <td><span class="badge badge-warning">Leave</span></td>
            <td><strong>Sunil Patro</strong><br><small style="color: var(--text-muted);">Field Coordinator</small></td>
            <td>Casual Leave &bull; Family ceremony in hometown</td>
            <td><strong>26 Oct - 27 Oct</strong> (2 Days)</td>
            <td>Today, 08:30 AM</td>
            <td>
              <div style="display: flex; gap: 6px;">
                <button class="btn btn-sm btn-primary" onclick="showToast('Leave request approved in 1 click!', 'success'); this.closest('tr').remove();">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg> Approve
                </button>
                <button class="btn btn-sm btn-outline" style="color: #dc2626; border-color: #fca5a5;" onclick="showToast('Request rejected with remarks.', 'error'); this.closest('tr').remove();">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x "  aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Reject
                </button>
              </div>
            </td>
          </tr>
          <tr id="approval-row">
            <td><span class="badge badge-purple">Expense</span></td>
            <td><strong>Kavita Devi</strong><br><small style="color: var(--text-muted);">Health Worker</small></td>
            <td>Travel / Nutrition kit transport</td>
            <td><strong style="color: #166534;">₹1,450</strong></td>
            <td>22 Oct 2026</td>
            <td>
              <div style="display: flex; gap: 6px;">
                <button class="btn btn-sm btn-primary" onclick="showToast('Expense ₹1,450 approved!', 'success'); this.closest('tr').remove();">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg> Approve
                </button>
                <button class="btn btn-sm btn-outline" style="color: #dc2626; border-color: #fca5a5;" onclick="showToast('Expense rejected', 'error'); this.closest('tr').remove();">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x "  aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Reject
                </button>
              </div>
            </td>
          </tr>
          <tr id="approval-row">
            <td><span class="badge badge-info">MIS Data</span></td>
            <td><strong>Sunil Patro</strong><br><small style="color: var(--text-muted);">Field Coordinator</small></td>
            <td>Dropout Follow-up Batch (5 Records)</td>
            <td>Batch #041</td>
            <td>21 Oct 2026</td>
            <td>
              <div style="display: flex; gap: 6px;">
                <button class="btn btn-sm btn-primary" onclick="showToast('MIS Batch verified!', 'success'); this.closest('tr').remove();">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg> Verify
                </button>
                <button class="btn btn-sm btn-outline" onclick="alert('Sending back to Sunil for correction')">
                  Clarify
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// =========================================================================
// 48. WORKFLOW BUILDER (workflow-builder.html)
// =========================================================================
buildPage({
  filename: 'workflow-builder.html',
  title: 'Approval Workflow Builder',
  activeNav: 'approvals',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Governance', menu: [{ url: 'approvals.html', label: 'Approvals' }] }],
  activeCrumb: 'Workflow Builder',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fdf4ff; color: #a855f7;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-branch "  aria-hidden="true"><path d="M15 6a9 9 0 0 0-9 9V3"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle></svg></div>
        <div>
          <h2>Approval Workflow Chains & Escalations</h2>
          <p>Configure multi-step signoff rules for leaves, travel, purchase and data verification</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="alert('Adding workflow step...')">+ New Workflow</button>
    </div>

    <div class="big-action-grid">
      <div class="big-action-card">
        <div class="action-title">Leave Approval Flow</div>
        <div class="action-sub">Employee <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right "  aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Team Lead (1-3 Days) <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right "  aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Programme Head (4+ Days)</div>
        <div style="margin-top: 10px;"><button class="btn btn-sm btn-outline">Edit Chain</button></div>
      </div>
      <div class="big-action-card">
        <div class="action-title">Expense Reimbursement Flow</div>
        <div class="action-sub">Employee <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right "  aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Program Manager (Under ₹2,000) <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right "  aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Finance Head (Above ₹2,000)</div>
        <div style="margin-top: 10px;"><button class="btn btn-sm btn-outline">Edit Chain</button></div>
      </div>
    </div>
  `
});

// =========================================================================
// 49. ANNOUNCEMENTS (announcements.html)
// =========================================================================
buildPage({
  filename: 'announcements.html',
  title: 'Team Announcements',
  activeNav: 'comms',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Communications', menu: [{ url: 'notifications.html', label: 'Notifications' }] }],
  activeCrumb: 'Announcements',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fef2f2; color: #dc2626;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-megaphone "  aria-hidden="true"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg></div>
        <div>
          <h2>Team Announcements & Field Bulletins</h2>
          <p>Official broadcasts with audio playback for non-tech field workers</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="alert('Opening announcement editor...')">+ Post Announcement</button>
    </div>

    <!-- Announcement Card -->
    <div class="form-card" style="margin-bottom: 20px; max-width: 100%;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
        <div>
          <span class="badge badge-danger">Important Notice</span>
          <h3 style="font-size: 18px; font-weight: 800; margin-top: 6px;">Quarterly Field Review Meeting on 28th October</h3>
          <p style="font-size: 13px; color: var(--text-muted);">Posted by Vikram Reddy &bull; 23 Oct 2026, 09:00 AM</p>
        </div>
        <button class="speak-btn" onclick="speak('Quarterly Field Review Meeting will be held on 28th October at Vizianagaram Head Office. All field coordinators must attend.')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2 "  aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg> Listen</button>
      </div>

      <p style="font-size: 14px; line-height: 1.6; color: var(--text-main); margin-bottom: 16px;">
        All field coordinators and health workers are requested to complete all pending format records before 27th evening.
        Travel allowance will be reimbursed on the same day.
      </p>

      <button class="btn btn-sm btn-primary" onclick="showToast('Notice acknowledged! Thank you.', 'success')">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg> Mark as Acknowledged (स्वीकार किया)
      </button>
    </div>
  `
});

// =========================================================================
// 50. NOTIFICATIONS CENTRE (notifications.html)
// =========================================================================
buildPage({
  filename: 'notifications.html',
  title: 'Notifications Centre',
  activeNav: 'comms',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Communications', menu: [{ url: 'announcements.html', label: 'Announcements' }] }],
  activeCrumb: 'Notifications',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell "  aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg></div>
        <div>
          <h2>Notifications & System Alerts</h2>
          <p>Recent updates, task reminders and approval notices</p>
        </div>
      </div>
      <button class="btn btn-outline" onclick="showToast('All notifications marked as read', 'success')">Mark All as Read</button>
    </div>

    <div class="form-card" style="max-width: 100%;">
      <div style="padding: 12px 0; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #166534;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check "  aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg> Expense Claim Reimbursed</strong>
          <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">Your travel claim ₹450 has been deposited to your account via UPI.</p>
        </div>
        <span style="font-size: 12px; color: var(--text-muted);">10 mins ago</span>
      </div>

      <div style="padding: 12px 0; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list "  aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg> New Task Assigned</strong>
          <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">Ananya Sharma assigned: "Parent counseling for Radhika Kumari".</p>
        </div>
        <span style="font-size: 12px; color: var(--text-muted);">1 hour ago</span>
      </div>
    </div>
  `
});

// =========================================================================
// 51. MEETINGS CALENDAR (meetings.html)
// =========================================================================
buildPage({
  filename: 'meetings.html',
  title: 'Review Meetings Calendar',
  activeNav: 'meetings',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Communications', menu: [{ url: 'meeting-room.html', label: 'Active Meeting' }] }],
  activeCrumb: 'Meetings',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #fdf4ff; color: #a855f7;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days "  aria-hidden="true"><path d="M8 2v3"></path><path d="M16 2v3"></path><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M8 13h.01"></path><path d="M12 13h.01"></path><path d="M16 13h.01"></path><path d="M8 17h.01"></path><path d="M12 17h.01"></path><path d="M16 17h.01"></path></svg></div>
        <div>
          <h2>Review Meetings & Calendar Schedules</h2>
          <p>Weekly field syncs, quarterly reviews and action item tracking</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="alert('Scheduling new review meeting...')">+ Schedule Meeting</button>
    </div>

    <div class="big-action-grid">
      <div class="big-action-card highlight">
        <div class="action-top">
          <span class="badge badge-success">Starts in 30 Mins</span>
          <span style="font-weight: 700; color: #16a34a;">10:00 AM</span>
        </div>
        <div class="action-title">Weekly HerEcho Field Sync</div>
        <div class="action-sub">Agenda: Bobbili school re-enrolment review &bull; 6 Participants</div>
        <div style="margin-top: 14px;">
          <a href="meeting-room.html" class="btn btn-primary btn-sm" style="width: 100%;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video "  aria-hidden="true"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg> Join Meeting Room</a>
        </div>
      </div>

      <div class="big-action-card">
        <div class="action-top">
          <span class="badge badge-purple">Next Week</span>
          <span style="font-weight: 700; color: #7c3aed;">28 Oct, 09:30 AM</span>
        </div>
        <div class="action-title">Quarterly Operations Review</div>
        <div class="action-sub">Vizianagaram Head Office &bull; All field leads attending</div>
        <div style="margin-top: 14px;">
          <button class="btn btn-outline btn-sm" style="width: 100%;">View Agenda</button>
        </div>
      </div>
    </div>
  `
});

// =========================================================================
// 52. MEETING ROOM WINDOW (meeting-room.html)
// =========================================================================
buildPage({
  filename: 'meeting-room.html',
  title: 'Dedicated Meeting Room',
  activeNav: 'meetings',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Meetings', menu: [{ url: 'meetings.html', label: 'Calendar' }] }],
  activeCrumb: 'Active Room',
  content: `
    <div class="form-card" style="margin: 0 auto; max-width: 900px; text-align: center;">
      <div style="background: #0f172a; border-radius: 16px; padding: 60px 20px; color: white; margin-bottom: 20px;">
        <span style="font-size: 48px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video "  aria-hidden="true"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg></span>
        <h3 style="font-size: 22px; font-weight: 800; margin-top: 12px;">Weekly HerEcho Field Sync Room</h3>
        <p style="font-size: 13px; color: #94a3b8; margin-top: 4px;">Live Audio Call &bull; Ananya Sharma, Sunil Patro, Kavita Devi Connected</p>
      </div>

      <div style="display: flex; justify-content: center; gap: 12px;">
        <button class="btn btn-primary" onclick="showToast('Microphone toggled')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic "  aria-hidden="true"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect x="9" y="2" width="6" height="13" rx="3"></rect></svg> Mic On</button>
        <button class="btn btn-outline" onclick="showToast('Camera toggled')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera "  aria-hidden="true"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg> Video</button>
        <a href="meetings.html" class="btn btn-danger">Leave Meeting</a>
      </div>
    </div>
  `
});

// =========================================================================
// 53. VOLUNTEERS ROSTER (volunteers.html)
// =========================================================================
buildPage({
  filename: 'volunteers.html',
  title: 'Community Volunteers Roster',
  activeNav: 'people',
  screenKey: 'dashboard',
  crumbs: [{ label: 'People', menu: [{ url: 'staff-directory.html', label: 'Staff' }] }],
  activeCrumb: 'Volunteers',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #ecfdf5; color: #047857;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins "  aria-hidden="true"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg></div>
        <div>
          <h2>Community Volunteers Roster</h2>
          <p>Village youth & community champions supporting field drives</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="alert('Registering volunteer...')">+ Register Volunteer</button>
    </div>

    <div class="big-action-grid">
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-success">42 Hours</span></div>
        <div class="action-title">P. Appala Naidu</div>
        <div class="action-sub">Bobbili Youth Volunteer &bull; Assisted in 6 dropout drives</div>
      </div>
      <div class="big-action-card">
        <div class="action-top"><span class="badge badge-success">38 Hours</span></div>
        <div class="action-title">K. Sai Lakshmi</div>
        <div class="action-sub">Kondakarakam Champion &bull; Senior Citizen Hub assistance</div>
      </div>
    </div>
  `
});

// =========================================================================
// 54. AUDIT TRAIL LOG (audit-log.html)
// =========================================================================
buildPage({
  filename: 'audit-log.html',
  title: 'System Security & Audit Trail',
  activeNav: 'audit',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Administration', menu: [{ url: 'users-roles.html', label: 'Roles' }] }],
  activeCrumb: 'Audit Log',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-history "  aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg></div>
        <div>
          <h2>Admin Audit Trail & Security Events</h2>
          <p>Timestamped immutable log of record creations, approvals and exports</p>
        </div>
      </div>
      <button class="btn btn-outline" onclick="showToast('Exporting security audit log to CSV...', 'success')"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download " style="margin-right: 4px;" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Export Audit CSV</button>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Actor</th>
            <th>Role</th>
            <th>Module</th>
            <th>Action</th>
            <th>Target Record</th>
            <th>IP / Device</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23 Oct 2026, 09:30:14</td>
            <td><strong>Sunil Patro</strong></td>
            <td>Field Coordinator</td>
            <td>Attendance</td>
            <td><code>create</code></td>
            <td>AttendanceRecord:att-10492</td>
            <td>192.168.1.42 (Mobile)</td>
          </tr>
          <tr>
            <td>23 Oct 2026, 09:15:02</td>
            <td><strong>Vikram Reddy</strong></td>
            <td>Master Admin</td>
            <td>Employees</td>
            <td><code>create</code></td>
            <td>User:usr-ramesh</td>
            <td>14.139.21.10 (Office)</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// =========================================================================
// 55. OFFLINE SYNC CENTRE (sync-centre.html)
// =========================================================================
buildPage({
  filename: 'sync-centre.html',
  title: 'Offline Sync Centre',
  activeNav: 'sync',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Administration', menu: [{ url: 'settings.html', label: 'Settings' }] }],
  activeCrumb: 'Sync Centre',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #f0fdf4; color: #16a34a;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw "  aria-hidden="true"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg></div>
        <div>
          <h2>Local-First Offline Engine & Sync Status</h2>
          <p>FR-SYN-05: Local IndexedDB database &bull; Automatic background queue push</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="showToast('Synced 0 pending mutations with server!', 'success')"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw "  aria-hidden="true"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg> Sync Now</button>
    </div>

    <div class="status-banner status-success">
      <span style="font-size: 32px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle " style="color: #16a34a;" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle></svg></span>
      <div>
        <strong style="font-size: 16px;">All Local Records Synchronized (0 Pending in Outbox)</strong>
        <p style="font-size: 13px;">Last sync completed: Today, 09:30 AM &bull; Storage used: 14.2 MB / 500 MB</p>
      </div>
    </div>
  `
});

// =========================================================================
// 56. SETTINGS (settings.html)
// =========================================================================
buildPage({
  filename: 'settings.html',
  title: 'Workspace Settings',
  activeNav: 'settings',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Administration', menu: [{ url: 'sync-centre.html', label: 'Sync' }] }],
  activeCrumb: 'Settings',
  content: `
    <div class="form-card" style="margin: 0 auto;">
      <h2 style="font-size: 22px; font-weight: 800; margin-bottom: 20px;">Workspace & Accessibility Preferences</h2>

      <div class="form-group">
        <label class="form-label">Display Appearance (OLED Dark Mode)</label>
        <button class="btn btn-outline" style="width: 100%; justify-content: flex-start;" onclick="toggleDarkMode()">
          <span id="dark-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon "  aria-hidden="true"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg></span> Toggle OLED True-Black Theme
        </button>
        <small style="color: var(--text-muted); display: block; margin-top: 4px;">Saves up to 38% battery on mobile phones in the field.</small>
      </div>

      <div class="form-group">
        <label class="form-label">Default Local Language (भाषा / భాష)</label>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px;">
          <button class="btn btn-outline" onclick="setLanguage('en'); showToast('Language changed to English');">English</button>
          <button class="btn btn-outline" onclick="setLanguage('hi'); showToast('भाषा बदलकर हिंदी कर दी गई');">हिंदी (Hindi)</button>
          <button class="btn btn-outline" onclick="setLanguage('te'); showToast('భాష తెలుగుగా మార్చబడింది');">తెలుగు (Telugu)</button>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Speech Read-Aloud Speed</label>
        <select class="form-select">
          <option selected>Standard (0.95x - Easy for listening)</option>
          <option>Slow (0.8x - Clear articulation)</option>
          <option>Fast (1.2x)</option>
        </select>
      </div>
    </div>
  `
});

// =========================================================================
// 57. USER PROFILE (profile.html)
// =========================================================================
buildPage({
  filename: 'profile.html',
  title: 'My Profile & Account',
  activeNav: 'dashboard',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Workspace', menu: [{ url: 'dashboard.html', label: 'Home' }] }],
  activeCrumb: 'My Profile',
  content: `
    <div class="form-card" style="margin: 0 auto; text-align: center;">
      <div class="action-icon-circle" style="width: 72px; height: 72px; font-size: 36px; margin: 0 auto 14px; background: #dcfce7; color: #166534;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user "  aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
      <h2 style="font-size: 24px; font-weight: 800;">Sunil Patro</h2>
      <p style="font-size: 14px; color: var(--text-muted);">Field Coordinator &bull; Employee ID: CH-EMP-0042</p>

      <div style="text-align: left; margin: 24px 0; border-top: 1.5px solid var(--border); padding-top: 18px;">
        <p style="margin-bottom: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone "  aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> <strong>Phone:</strong> +91 98480 23112</p>
        <p style="margin-bottom: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail "  aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg> <strong>Email:</strong> sunil.patro@coheart.org</p>
        <p style="margin-bottom: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin "  aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> <strong>Base:</strong> Vizianagaram District Office</p>
        <p><i class="fa-solid fa-user-tie "  aria-hidden="true"></i> <strong>Supervisor:</strong> Ananya Sharma</p>
      </div>

      <div style="display: flex; gap: 10px;">
        <button class="btn btn-outline" style="flex: 1;" onclick="alert('Change password modal')">Change Password</button>
        <a href="login.html" class="btn btn-danger" style="flex: 1;">Sign Out (लॉग आउट)</a>
      </div>
    </div>
  `
});

// =========================================================================
// 58. SEARCH RESULTS (search-results.html)
// =========================================================================
buildPage({
  filename: 'search-results.html',
  title: 'Global Omnisearch Results',
  activeNav: 'dashboard',
  screenKey: 'dashboard',
  crumbs: [{ label: 'Workspace', menu: [{ url: 'dashboard.html', label: 'Home' }] }],
  activeCrumb: 'Search Results',
  content: `
    <div class="page-header">
      <div class="page-header-title">
        <div class="action-icon-circle" style="background: #eff6ff; color: #2563eb;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search "  aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg></div>
        <div>
          <h2>Search Results for "Dropout"</h2>
          <p>Found 4 matching records, pages and actions across the system</p>
        </div>
      </div>
    </div>

    <div class="big-action-grid">
      <a href="format-record-entry.html" class="big-action-card highlight">
        <div class="action-top"><span class="badge badge-success">Action</span></div>
        <div class="action-title">+ New Record: Dropout School Follow-up</div>
        <div class="action-sub">Direct 1-click form entry &bull; HerEcho</div>
      </a>
      <a href="format-records-grid.html" class="big-action-card">
        <div class="action-top"><span class="badge badge-warning">Record</span></div>
        <div class="action-title">Radhika Kumari (CH-VZM-0412)</div>
        <div class="action-sub">Dropout registration record in Kondakarakam</div>
      </a>
    </div>
  `
});

console.log('All remaining 58 pages generated successfully!');
