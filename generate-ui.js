const fs = require('fs');
const path = require('path');
const { renderLucide, renderFA } = require('./icon-engine');

const UI_DIR = __dirname;

// Shared Navigation Header
function renderTopBanner(pageTitle, screenKey) {
  return `
  <header class="top-banner">
    <div class="banner-left">
      <button class="tool-btn mobile-menu-btn" onclick="toggleMobileSidebar()" aria-label="Toggle navigation menu" title="Open navigation">
        ${renderLucide('menu', { size: 18 })}
      </button>
      <a href="dashboard.html" class="home-btn" title="Go to Dashboard Home">
        ${renderLucide('house', { size: 16 })} <span>Home</span>
      </a>
      <div class="banner-brand-pill">
        <img src="assets/brand/coheart-logo.png" alt="CoHeart Foundation Logo" class="banner-logo-img">
        <span class="banner-brand-title">CoHeart</span>
      </div>
      <span class="badge badge-purple" style="font-size: 11px; padding: 2px 7px;">${pageTitle}</span>
    </div>

    <div class="banner-tools">
      <!-- 1-Click Spoken Help for Non-Tech Users -->
      <button class="tool-btn" onclick="speakScreenHelp('${screenKey}')" title="Listen to spoken audio guide">
        ${renderLucide('volume-2', { size: 16 })} <span data-i18n="help">Help (मदद / సహాయం)</span>
      </button>

      <!-- Language Selector -->
      <div style="display: flex; gap: 3px; background: rgba(0,0,0,0.25); padding: 3px; border-radius: 8px;">
        <button class="tool-btn lang-btn active" data-lang="en" onclick="setLanguage('en')" style="padding: 3px 8px; font-size: 11.5px; min-height: 28px;">EN</button>
        <button class="tool-btn lang-btn" data-lang="hi" onclick="setLanguage('hi')" style="padding: 3px 8px; font-size: 11.5px; min-height: 28px;">हिंदी</button>
        <button class="tool-btn lang-btn" data-lang="te" onclick="setLanguage('te')" style="padding: 3px 8px; font-size: 11.5px; min-height: 28px;">తెలుగు</button>
      </div>

      <!-- Dark Mode Toggle -->
      <button class="tool-btn" onclick="toggleDarkMode()" title="Toggle OLED Dark Theme">
        <span id="dark-icon">${renderLucide('moon', { size: 15 })}</span> <span id="dark-text">Dark</span>
      </button>

      <!-- Role Switcher -->
      <div style="display: flex; gap: 3px; background: rgba(0,0,0,0.25); padding: 3px; border-radius: 8px;">
        <button class="tool-btn active" id="btn-employee" onclick="switchRole('employee')" style="padding: 3px 8px; font-size: 11.5px; min-height: 28px;">
          ${renderFA('fa-solid fa-helmet-safety', { style: 'margin-right: 4px;' })} Worker
        </button>
        <button class="tool-btn" id="btn-admin" onclick="switchRole('admin')" style="padding: 3px 8px; font-size: 11.5px; min-height: 28px;">
          ${renderFA('fa-solid fa-user-tie', { style: 'margin-right: 4px;' })} Admin
        </button>
      </div>

      <a href="index.html" class="tool-btn" style="background: rgba(255,255,255,0.25); font-weight: 700;">
        ${renderFA('fa-solid fa-sitemap', { style: 'margin-right: 4px;' })} Sitemap
      </a>
    </div>
  </header>
  `;
}

// Shared Sidebar
function renderSidebar(activeKey) {
  const sections = [
    {
      label: 'Workspace',
      items: [
        { key: 'dashboard', label: 'Dashboard', icon: renderLucide('house', { size: 18 }), url: 'dashboard.html' },
        { key: 'formats-hub', label: 'Formats Hub', icon: renderLucide('clipboard-list', { size: 18 }), url: 'formats-hub.html' },
        { key: 'format-entry', label: 'New Record', icon: renderLucide('file-plus-2', { size: 18 }), url: 'format-record-entry.html' },
        { key: 'attendance', label: 'Attendance', icon: renderLucide('map-pin', { size: 18 }), url: 'attendance.html' }
      ]
    },
    {
      label: 'Field Delivery',
      items: [
        { key: 'interventions', label: 'Interventions', icon: renderLucide('target', { size: 18 }), url: 'interventions.html' },
        { key: 'programmes', label: 'Programmes', icon: renderLucide('sprout', { size: 18 }), url: 'programmes.html' },
        { key: 'activities', label: 'Activities', icon: renderLucide('pin', { size: 18 }), url: 'activities.html' },
        { key: 'sub-activities', label: 'Sub-Activities', icon: renderLucide('bookmark', { size: 18 }), url: 'sub-activities.html' },
        { key: 'format-groups', label: 'Format Groups', icon: renderLucide('layers', { size: 18 }), url: 'format-groups.html' },
        { key: 'records-grid', label: 'Records Grid', icon: renderLucide('table-2', { size: 18 }), url: 'format-records-grid.html' },
        { key: 'beneficiaries', label: 'Beneficiaries', icon: renderLucide('baby', { size: 18 }), url: 'beneficiaries-directory.html' },
        { key: 'facilities', label: 'Batches & Hubs', icon: renderLucide('building', { size: 18 }), url: 'batches-facilities.html' },
        { key: 'tasks', label: 'Tasks & Goals', icon: renderLucide('check-square-2', { size: 18 }), url: 'tasks.html' }
      ]
    },
    {
      label: 'Finance & Accounts',
      items: [
        { key: 'finance', label: 'Finance Overview', icon: renderLucide('indian-rupee', { size: 18 }), url: 'finance-overview.html' },
        { key: 'budgets', label: 'Budgets', icon: renderLucide('bar-chart-3', { size: 18 }), url: 'finance-budgets.html' },
        { key: 'expenses', label: 'Record Expense', icon: renderLucide('receipt', { size: 18 }), url: 'finance-expenses.html' },
        { key: 'claims', label: 'Claims & Per Diem', icon: renderLucide('credit-card', { size: 18 }), url: 'finance-claims.html' },
        { key: 'payments', label: 'Payments', icon: renderLucide('landmark', { size: 18 }), url: 'finance-payments.html' },
        { key: 'payroll', label: 'Payroll & Payslips', icon: renderLucide('wallet', { size: 18 }), url: 'finance-payroll.html' },
        { key: 'grants', label: 'Grants & Donors', icon: renderLucide('hand-coins', { size: 18 }), url: 'finance-grants.html' }
      ]
    },
    {
      label: 'People & Admin',
      items: [
        { key: 'people', label: 'People Overview', icon: renderLucide('users', { size: 18 }), url: 'people-overview.html' },
        { key: 'staff', label: 'Staff Directory', icon: renderLucide('book-open', { size: 18 }), url: 'staff-directory.html' },
        { key: 'add-emp', label: '+ Add Employee', icon: renderLucide('user-plus', { size: 18 }), url: 'employee-add.html' },
        { key: 'roles', label: 'Roles & Access', icon: renderLucide('shield-check', { size: 18 }), url: 'users-roles.html' },
        { key: 'format-assign', label: 'Format Assign', icon: renderLucide('key-round', { size: 18 }), url: 'employee-format-assignments.html' },
        { key: 'leave', label: 'Leave & Balances', icon: renderLucide('palmtree', { size: 18 }), url: 'leave-apply.html' },
        { key: 'approvals', label: 'Approvals Inbox', icon: renderLucide('inbox', { size: 18 }), url: 'approvals.html' },
        { key: 'assets', label: 'Assets & Inventory', icon: renderLucide('package', { size: 18 }), url: 'assets-inventory.html' },
        { key: 'procurement', label: 'Procurement', icon: renderLucide('shopping-cart', { size: 18 }), url: 'procurement.html' },
        { key: 'drive', label: 'Drive & Files', icon: renderLucide('folder', { size: 18 }), url: 'drive.html' },
        { key: 'reports', label: 'MIS & Reports', icon: renderLucide('bar-chart-3', { size: 18 }), url: 'reports.html' },
        { key: 'comms', label: 'Announcements', icon: renderLucide('megaphone', { size: 18 }), url: 'announcements.html' },
        { key: 'meetings', label: 'Review Meetings', icon: renderLucide('calendar', { size: 18 }), url: 'meetings.html' },
        { key: 'sync', label: 'Sync Centre', icon: renderLucide('refresh-cw', { size: 18 }), url: 'sync-centre.html' },
        { key: 'audit', label: 'Audit Trail', icon: renderLucide('history', { size: 18 }), url: 'audit-log.html' },
        { key: 'settings', label: 'Settings', icon: renderLucide('settings', { size: 18 }), url: 'settings.html' }
      ]
    }
  ];

  return `
  <aside class="sidebar" id="app-sidebar">
    <div class="sidebar-header">
      <a href="dashboard.html" class="sidebar-brand-plate" title="CoHeart Foundation Workspace">
        <img
          src="assets/brand/coheart-logo.png"
          alt="CoHeart Foundation Workspace"
          width="871"
          height="559"
          class="sidebar-logo-img"
        />
      </a>
      <button class="sidebar-close-btn" onclick="toggleMobileSidebar(false)" aria-label="Close navigation menu">
        ${renderLucide('x', { size: 20 })}
      </button>
    </div>

    ${sections.map(sec => `
      <div class="sidebar-section">
        <p class="sidebar-label">${sec.label}</p>
        ${sec.items.map(it => `
          <a class="sidebar-link ${it.key === activeKey ? 'active' : ''}" href="${it.url}">
            <span class="sidebar-icon">${it.icon}</span>
            <span>${it.label}</span>
          </a>
        `).join('')}
      </div>
    `).join('')}
  </aside>
  `;
}

// Shared Top Navbar with Jump Breadcrumbs and Omnisearch
function renderNavbar(crumbs, activeCrumb) {
  return `
  <nav class="navbar">
    <div class="breadcrumbs">
      <a class="crumb-item" href="dashboard.html">${renderLucide('house', { size: 14, style: 'margin-right: 4px;' })} Home</a>
      <span class="crumb-separator">/</span>
      ${crumbs.map(c => `
        <div class="crumb-dropdown">
          <button class="crumb-btn">
            ${c.label} ${renderLucide('chevron-down', { size: 12, style: 'margin-left: 2px;' })}
          </button>
          <div class="crumb-menu">
            ${c.menu.map(m => `<a class="crumb-menu-item" href="${m.url}">${m.icon || renderLucide('file-text', { size: 14, style: 'margin-right: 4px;' })} ${m.label}</a>`).join('')}
          </div>
        </div>
        <span class="crumb-separator">/</span>
      `).join('')}
      <span class="crumb-item active">${activeCrumb}</span>
    </div>

    <!-- Global Omnisearch Box -->
    <div class="omnisearch-box" onclick="openCommandPalette()">
      <span class="omnisearch-icon">${renderLucide('search', { size: 16 })}</span>
      <input
        type="text"
        class="omnisearch-input"
        placeholder="Type Ctrl+K to search pages, records, actions..."
        readonly
      />
      <span class="omnisearch-shortcut">Ctrl+K</span>
    </div>

    <a href="profile.html" class="crumb-btn" style="text-decoration: none; padding: 4px 10px;" title="User Profile">
      ${renderLucide('user', { size: 15, style: 'margin-right: 4px;' })} <span id="nav-user-label" style="font-weight: 700;">Sunil Patro</span>
    </a>
  </nav>
  `;
}

// Full HTML Template Builder
function buildPage({ filename, title, activeNav, screenKey, crumbs, activeCrumb, content }) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>CoHeart Workspace — ${title}</title>
  <link rel="icon" type="image/svg+xml" href="assets/brand/favicon.svg">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/brand/apple-touch-icon-180.png">
  <link rel="manifest" href="assets/brand/manifest.webmanifest">
  <meta name="theme-color" content="#2d6338">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-title" content="CoHeart">
  <link rel="stylesheet" href="vendor/fontawesome/css/all.min.css">
  <link rel="stylesheet" href="app.css">
  <script src="vendor/lucide/lucide.min.js"></script>
  <script src="app.js" defer></script>
</head>
<body>

  ${renderTopBanner(title, screenKey)}

  <div class="app-container">
    ${renderSidebar(activeNav)}

    <main class="main-content">
      ${renderNavbar(crumbs, activeCrumb)}

      <div class="page-body">
        ${content}
      </div>
    </main>
  </div>

</body>
</html>
`;

  fs.writeFileSync(path.join(UI_DIR, filename), html, 'utf8');
  console.log(`Generated: ${filename}`);
}

module.exports = { buildPage, UI_DIR, renderLucide, renderFA };
